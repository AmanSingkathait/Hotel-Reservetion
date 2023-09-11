import "./home.css";
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Featured from '../../Components/Featured/Featured'
import Property from "../../Components/Property/Property";
import FeaturedProperty from "../../Components/FeaturedProperty/FeaturedProperty";
import MailList from "../../Components/MailList/MailList";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
    return (
        <>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Featured/>
                <h1 className="HomeTitle"> Browse by property types </h1>
                <Property/>
                <h1 className="HomeTitle"> Homes guests love</h1>
                <FeaturedProperty/>
                <MailList/>
                <Footer/>
            </div>
        </>
    )
}

export default Home
