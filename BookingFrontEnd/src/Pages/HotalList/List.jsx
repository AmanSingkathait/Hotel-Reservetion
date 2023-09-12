import "./List.css"


import Navbar from "../../Components/Navbar/Navbar"
import Header from "../../Components/Header/Header"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { format } from "date-fns"
import { DateRange } from "react-date-range"
import SearchItem from "../../Components/SeatchItem/SearchItem"

const List = () => {
    const location = useLocation();
    const [destination, setdestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [options, setoptions] = useState(location.state.options);

    console.log(location)
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
                                <span>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                                <DateRange onChange={(item) => setDate([item.selection])}
                                    minDate={new Date()}
                                    ranges={date}
                                />
                            </div>
                            <div className="lsItem">
                                <label>Options</label>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Min Price <small> per night </small>
                                    </span>
                                    <input type="number" className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Max Price <small> per night </small>
                                    </span>
                                    <input type="number" className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Adult
                                    </span>
                                    <input type="number" min={1} className="lsOptionInput" placeholder={options.adult}/>
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Children
                                    </span>
                                    <input type="number" min={0} className="lsOptionInput" placeholder={options.children}/>
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Room
                                    </span>
                                    <input type="number" min={1} className="lsOptionInput" placeholder={options.room}/>
                                </div>
                            </div>
                            <button> Search</button>
                        </div>
                        <div className="listResult">
                            <SearchItem/>
                            <SearchItem/>
                            <SearchItem/>
                            <SearchItem/>
                            <SearchItem/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default List
