import "./home.css";
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Featured from '../../Components/Featured/Featured'

const Home = () => {
    return (
        <>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Featured/>
            </div>
        </>
    )
}

export default Home
