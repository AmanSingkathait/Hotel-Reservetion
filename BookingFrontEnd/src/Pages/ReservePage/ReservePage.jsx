import { useContext, useState } from 'react'
import "./ReservePage.css";
import useRequest from '../../Hooks/useRequest';
import PropTypes from 'prop-types';
import { AiFillCloseSquare } from 'react-icons/ai';
import { SearchContext } from '../../Context/SearchContext';
import { useNavigate } from 'react-router-dom';

const ReservePage = ({ setOpen, hotelId }) => {
    const navigate = useNavigate();
    const { data, loading } = useRequest(`http://localhost:2000/api/hotels//room/${hotelId}`);
    console.log(data)
    const closeBtn = (e) => {
        e.preventDefault();
        setOpen(false);
    }
    const [selectedRoom, setselectedRoom] = useState([]);
    const handleSelect = (e) => {
        const selected = e.target.checked;
        const value = e.target.value;
        setselectedRoom(selected ? [...selectedRoom, value] : selectedRoom.filter((item) => {
            return item !== value
        }))
    }
    var i = 1;
    console.log(selectedRoom);

    const { dates } = useContext(SearchContext);
    console.log(dates);

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const date = new Date(start.getTime());
        const dates = [];
        while (date <= end) {
            dates.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1);
        }
        return dates;
    };
    const alldates = (getDatesInRange(dates[0].startDate, dates[0].endDate));

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some((date) =>
            alldates.includes(new Date(date).getTime())
        );
        return !isFound;
    };

    console.log(alldates);
    console.log(selectedRoom);

    const handleClick = async () => {
        try {
            await Promise.all(
                selectedRoom.map(async (roomId) => {
                    const response = await fetch(`http://localhost:2000/api/rooms/RoomId/${roomId}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({dates:alldates}),
                    });
                    if (response.ok) {
                        const jsondata = await response.json();
                        console.log(jsondata);
                        return jsondata;
                    }
                })
            );
            setOpen(false);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className='reserve' >
            {
                loading ? "Loading " : (
                    <div className="rContainer">
                        <div className="rCantainerFlex">
                            <span> Select Your Room : </span>
                            <AiFillCloseSquare className='closeButton' onClick={closeBtn} />
                        </div>
                        {data.map(item => {
                            return (
                                <div className="rItem" key={item._id}>
                                    {/* <img src={item.img} alt="" /> */}
                                    <div className="rItemInfo">
                                        <div className="rTitle">{item.title}</div>
                                        <div className="rDesc">{item.desc}</div>
                                        <div className="rMax">
                                            Max people: <b>{item.Maxperople}</b>
                                        </div>
                                        <div className="rPrice">₹{item.price}</div>
                                    </div>
                                    <div className="roomFlex">
                                        {item.roomNumbers.map((roomNumber) => (
                                            <div className="room" key={i++}>
                                                <label>{roomNumber.number}</label>
                                                <input
                                                    type="checkbox"
                                                    value={roomNumber._id}
                                                    onChange={handleSelect}
                                                    disabled={!isAvailable(roomNumber)}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        })}
                        <button onClick={handleClick} className="rButton"> Reserve Now!</button>
                    </div>)
            }
        </div>
    )
}
ReservePage.propTypes = {
    setOpen: PropTypes.func,
    hotelId: PropTypes.string,
};


export default ReservePage
