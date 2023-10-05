import { } from "react"
import PropTypes from 'prop-types';
import "./SearchItem.css"

const SearchItem = ({ item }) => {
    return (
        <>
            <div className="searchItem">
                <div className="sImage">
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square200/485695247.webp?k=a049920314971c7279e0c773796e8c03c98eeb8cbfb9f3d5203e34fc679aa182&o=" alt="" className="siImg" />
                </div>
                <div className="siDesc">
                    <h1 className="siTitle">{item.name}</h1>
                    <span className="siDistance"> {item.distance}m from center</span>
                    <span className="siTaxiOp"> Fee airport taxi </span>
                    <span className="siSubtitle"> Studio Apartment with Air condioning </span>
                    <span className="siFeatures">
                        {item.desc}
                    </span>
                    <span className="siCancelOp">Free concellation</span>
                    <span className="siCancelOpSubtitle">
                        You can  cancel later , so lock in this great price today!</span>
                </div>
                <div className="siDetails">
                    {item.rating && <div className="siRating">
                        <span>Excellent</span>
                        <button>8.9</button>
                    </div>}
                    <div className="siDetailTexts">
                        <span className="siPrice">${item.leastPrice}</span>
                        <span className="siTaxOp">Includes taxes and fees</span>
                        <button className="siCheckButton">See availability</button>
                    </div>
                </div>
            </div>
        </>
    )
}
SearchItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string, // Add this line to include 'name' prop
        type: PropTypes.string,
        city: PropTypes.string,
        address: PropTypes.string,
        distance: PropTypes.string,
        title: PropTypes.string,
        desc: PropTypes.string,
        leastPrice: PropTypes.number,
        rating: PropTypes.number,
        featured: PropTypes.bool,
        // Define propTypes for other properties as needed
    }).isRequired,
};

export default SearchItem
