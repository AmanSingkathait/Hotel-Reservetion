import "./List.css"
import Navbar from "../../Components/Navbar/Navbar"
import Header from "../../Components/Header/Header"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { format } from "date-fns"
import { DateRange } from "react-date-range"
import SearchItem from "../../Components/SeatchItem/SearchItem";
import useRequest from "../../Hooks/useRequest"


const List = () => {
    const location = useLocation();
    const [destination, setdestination] = useState(location.state.destination);
    const [dates, setDates] = useState(location.state.dates);
    const [options, setoptions] = useState(location.state.options);
    const [minPrice, setminPrice] = useState(undefined);
    const [maxPrice, setmaxPrice] = useState(undefined);
    const { data, loading ,reFetch} = useRequest(`http://localhost:2000/api/hotels?city=${destination}&min=${minPrice || 0}&max=${maxPrice || 9999}`);
    console.log(data)
    // console.log(location)

    const handleSearchClick = ()=>{
        reFetch();
    }
    return (
        <>
            <div>
                <Navbar />
                <Header type="list" />
                <div className="listContainer">
                    <div className="listWrapper">
                        <div className="listSearch">
                            <h1 className="lsTitle">search</h1>
                            <div className="lsItem">
                                <label>Destination</label>
                                <input type="text" placeholder={destination} />
                            </div>
                            <div className="lsItem">
                                <label>Ckeck-in Date </label>
                                <span>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                                <DateRange onChange={(item) => setDates([item.selection])}
                                    minDate={new Date()}
                                    ranges={dates}
                                />
                            </div>
                            <div className="lsItem">
                                <label>Options</label>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Min Price <small> per night </small>
                                    </span>
                                    <input type="number" min={900} step="100"  className="lsOptionInput" onChange={(e)=>{setminPrice(e.target.value)}}/>
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Max Price <small> per night </small>
                                    </span>
                                    <input type="number" min={1200} step="100"  className="lsOptionInput" onChange={(e)=>{setmaxPrice(e.target.value)}}/>
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Adult
                                    </span>
                                    <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Children
                                    </span>
                                    <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Room
                                    </span>
                                    <input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
                                </div>
                            </div>
                            <button onClick={handleSearchClick}> Search</button>
                        </div>
                        <div className="listResult">
                            {loading ? loading : <>
                                {data.map(item => {
                                    return <SearchItem key={item._id} item={item} />
                                })}
                            </>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default List
