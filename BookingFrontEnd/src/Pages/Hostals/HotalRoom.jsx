import { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import MailList from "../../Components/MailList/MailList";
import Navbar from "../../Components/Navbar/Navbar";
import "./HotelRoom.css";
import {
    FaLocationDot,
    FaCircleXmark,
    FaCircleArrowLeft,
    FaCircleArrowRight,
} from "react-icons/fa6";
// import { BiCaretLeft,BiCaretRight} from "react-icons/bi";
const HotalRoom = () => {
    const [SliderNuber, setSliderNuber] = useState(0);
    const [ModelOpen, setModelOpen] = useState(false);
    const Photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/485695278.jpg?k=02c90664cc5afb7558a5d2fb3668270cf15de8f1b99b55f722f30372cac7eaf8&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/485695247.jpg?k=9ff9f6b78d1cdcb4c24ad08cdb4ff6f72c5157acd900f597f67a9e629a65ab3a&o=&hp=1",
        },
        // {
        //     src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        // },
        // {
        //     src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/485695247.jpg?k=9ff9f6b78d1cdcb4c24ad08cdb4ff6f72c5157acd900f597f67a9e629a65ab3a&o=&hp=1",
        // },
        // {
        //     src: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        // },
        // {
        //     src: "https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        // },
        // {
        //     src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        // },
        // {
        //     src: "https://images.pexels.com/photos/7027791/pexels-photo-7027791.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        // },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/472494194.jpg?k=244369259dd0d584da6eaa4ca9b56b6d5e2261b457825138c78b433c948e48b8&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/472494169.jpg?k=37237a89f5f5045b863f4eb8bf66d8e7d89cec4618693936aa74bc5b21397082&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/486130072.jpg?k=c6a90048a43d01fdc310b39790e9e2293ea36585c988fbe0c81c509d745d1809&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/483808296.jpg?k=ba8c31f137cb473e3d4a1d9562c80d1f4fe1d8b8fdd2d15138ab5b320c7d2525&o=&hp=1",
        },
    ];
    const handleModel = (i) => {
        setSliderNuber(i);
        setModelOpen(true);
        // console.log(Photos.length - 1)
    };
    const handelmove = (direction) => {
        let newSlideNumber;
        if (direction === "l") {
            newSlideNumber = SliderNuber === 0 ? (Photos.length - 1) : SliderNuber - 1;
        } else {
            newSlideNumber = SliderNuber === (Photos.length - 1) ? 0 : SliderNuber + 1;
        }
        setSliderNuber(newSlideNumber);
    }
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
                {ModelOpen && (
                    <div className="slider">
                        <FaCircleArrowLeft
                            className="arrow"
                            onClick={() => handelmove("l")}
                        />
                        <div className="sliderWrapper">
                            <FaCircleXmark
                                className="close"
                                onClick={() => setModelOpen(false)}
                            />
                            <img src={Photos[SliderNuber].src} alt="" className="sliderImg" />
                        </div>
                        <FaCircleArrowRight
                            className="arrow"
                            onClick={() => handelmove("r")}
                        />
                    </div>
                )}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Tower Street Apartments</h1>
                    <div className="hotelAddress">
                        <FaLocationDot />
                        <span>Elton St 125 New york</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location – 500m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over $114 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {Photos.map((photo, i) => (
                            <div className="hotelImgWrapper" key={i}>
                                <img
                                    onClick={() => handleModel(i)}
                                    src={photo.src}
                                    alt=""
                                    className="hotelImg"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay in the heart of City</h1>
                            <p className="hotelDesc">
                                Located a 5-minute walk from St. Florians Gate in Krakow, Tower
                                Street Apartments has accommodations with air conditioning and
                                free WiFi. The units come with hardwood floors and feature a
                                fully equipped kitchenette with a microwave, a flat-screen TV,
                                and a private bathroom with shower and a hairdryer. A fridge is
                                also offered, as well as an electric tea pot and a coffee
                                machine. Popular points of interest near the apartment include
                                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                                airport is John Paul II International Kraków - Balice, 16.1 km
                                from Tower Street Apartments, and the property offers a paid
                                airport shuttle service.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                                Located in the real heart of Krakow, this property has an
                                excellent location score of 9.8!
                            </span>
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    );
};

export default HotalRoom;
