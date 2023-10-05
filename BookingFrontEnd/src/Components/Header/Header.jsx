import { useState } from "react";
import PropTypes from "prop-types";
import "./Header.css";
import {
    BiSolidHotel,
    BiSolidTaxi,
    BiSolidCalendarCheck,
} from "react-icons/bi";
import { FaFighterJet } from "react-icons/fa";
import { IoIosCar } from "react-icons/io";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
    const navigate = useNavigate();
    const [Opendate, setOpendate] = useState(false);
    const [destination, setdestination] = useState("");
    const [openOption, setopenOption] = useState(false);
    const [options, setoptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });
    const [date, setdate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    const handleOption = (name, operation) => {
        setoptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };
    const handleSearch = (event) => {
        event.preventDefault();
        navigate("/Hotels", { state: { destination, date, options } });
    };
    return (
        <>
            <div className="header">
                <div
                    className="HeaderContainer"
                    style={{
                        margin:
                            type === "list" ? "20px 0px 10px 0px" : "20px 0px 100px 0px",
                    }}>
                    <div
                        className={type === "list" ? "listMode Headerlist " : "Headerlist"}>
                        <div className="headerlistItem active">
                            <BiSolidHotel />
                            <span className="Stays">Stays</span>
                        </div>
                        <div className="headerlistItem">
                            <FaFighterJet />
                            <span className="Stays">Flights</span>
                        </div>
                        <div className="headerlistItem">
                            <IoIosCar />
                            <span className="Stays">car Renters</span>
                        </div>
                        <div className="headerlistItem">
                            <BiSolidHotel />
                            <span className="Stays">Attraction</span>
                        </div>
                        <div className="headerlistItem">
                            <BiSolidTaxi />
                            <span className="Stays">Airpot taxi</span>
                        </div>
                    </div>
                    {type !== "list" && (
                        <>
                            <h1 className="Headertitel">
                                A lifetime of discounts? Its Genius
                            </h1>
                            <p className="headerdisc">
                                get rewarded for your travels unlock instant saving of 10% or
                                more with a free lamabooking amount
                            </p>
                            <button className="headerbtn"> sign In / Register </button>
                            <div className="Headersearch">
                                <div className="HeaderitemBox">
                                    <div className="headerSearchItem">
                                        <BiSolidHotel className="headerIcon" />
                                        <input
                                            type="text"
                                            placeholder="Where are you going"
                                            className="headerSearchInput"
                                            onChange={(e) => setdestination(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="HeaderitemBox">
                                    <div className="headerSearchItem">
                                        <BiSolidCalendarCheck className="headerIcon" />
                                        <span
                                            className="HeaderSearchText"
                                            onClick={() => {
                                                setOpendate(!Opendate);
                                            }}
                                        >
                                            {`${format(date[0].startDate, "MM/dd/yyyy")} To ${format(
                                                date[0].endDate,
                                                "MM/dd/yyyy"
                                            )}`}
                                        </span>
                                        {Opendate && (
                                            <DateRange
                                                editableDateInputs={true}
                                                onChange={(item) => setdate([item.selection])}
                                                moveRangeOnFirstSelection={false}
                                                ranges={date}
                                                className="date"
                                                minDate={new Date()}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="HeaderitemBox">
                                    <div className="headerSearchItem">
                                        <FaPersonWalkingLuggage className="headerIcon" />
                                        <span
                                            className="HeaderSearchText"
                                            onClick={() => {
                                                setopenOption(!openOption);
                                            }}
                                        >{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                                        {openOption && (
                                            <div className="options">
                                                <div className="optionsItem">
                                                    <span className="optionText"> Adult</span>
                                                    <div className="optionCounter">
                                                        <button
                                                            className="optionConterButton"
                                                            onClick={() => handleOption("adult", "i")}
                                                        >
                                                            +
                                                        </button>
                                                        <span className="optionCounterNumber">
                                                            {options.adult}
                                                        </span>
                                                        <button
                                                            disabled={options.adult <= 1}
                                                            className="optionConterButton"
                                                            onClick={() => handleOption("adult", "d")}
                                                        >
                                                            -
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="optionsItem">
                                                    <span className="optionText"> Children </span>
                                                    <div className="optionCounter">
                                                        <button
                                                            className="optionConterButton"
                                                            onClick={() => handleOption("children", "i")}
                                                        >
                                                            +
                                                        </button>
                                                        <span className="optionCounterNumber">
                                                            {options.children}
                                                        </span>
                                                        <button
                                                            disabled={options.children <= 0}
                                                            className="optionConterButton"
                                                            onClick={() => handleOption("children", "d")}
                                                        >
                                                            -
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="optionsItem">
                                                    <span className="optionText"> Room</span>
                                                    <div className="optionCounter">
                                                        <button
                                                            className="optionConterButton"
                                                            onClick={() => handleOption("room", "i")}
                                                        >
                                                            +
                                                        </button>
                                                        <span className="optionCounterNumber">
                                                            {options.room}
                                                        </span>
                                                        <button
                                                            disabled={options.room <= 1}
                                                            className="optionConterButton"
                                                            onClick={() => handleOption("room", "d")}
                                                        >
                                                            -
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="HeaderitemBox">
                                    <button className="headerbtn" onClick={handleSearch}>
                                        
                                        search
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

Header.propTypes = {
    type: PropTypes.string.isRequired,
};

export default Header;
