import {} from 'react'
import "./ReservePage.css";
// import { CgCloseO } from 'react-icons/cg';


const ReservePage = ({setopenRoomBook,hotelId}) => {
    return (
        <div className='reserve'>
            <div className="rContainer">
                <button onClick={setopenRoomBook(false)}></button>
            </div>
        </div>
    )
}



export default ReservePage
