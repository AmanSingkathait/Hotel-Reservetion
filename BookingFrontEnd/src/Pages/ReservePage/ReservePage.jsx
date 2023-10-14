import { useContext, useState } from 'react'
import "./ReservePage.css";
import useRequest from '../../Hooks/useRequest';
import PropTypes from 'prop-types';
import { AiFillCloseSquare } from 'react-icons/ai';
import { SearchContext } from '../../Context/SearchContext';

const ReservePage = ({ setOpen, hotelId }) => {
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
    // TODO --> handle click button 
    const handleClick = async (e) => {
        e.preventDefault();
        await Promise.all(selectedRoom.map(roomId =>{
            const response = fetch("")
        }))
        try {
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

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

    const isAvailable = (roomNumber)=>{
        const isFound = roomNumber.unavailableDates.some(date=>{
            alldates.includes(new Date(date).getTime())
        })
        return !isFound;
    }
    return (
        <div className='reserve'>
            {loading ? "Loading " : (<div className="rContainer">
                <AiFillCloseSquare className='closeButton' onClick={closeBtn} />
                <span> Select Your Room</span>
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
                                <div className="rPrice">{item.price}</div>
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
            </div>)}
        </div>
    )
}
ReservePage.propTypes = {
    setOpen: PropTypes.func,
    hotelId: PropTypes.string,
};


export default ReservePage
