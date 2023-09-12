import "./SearchItem.css"

const SearchItem = () => {
    return (
        <>
            <div className="searchItem">
                <div className="sImage">
                    <img src="https://cf.bstatic.com/xdata/images/hotel/square200/485695247.webp?k=a049920314971c7279e0c773796e8c03c98eeb8cbfb9f3d5203e34fc679aa182&o=" alt="" className="siImg" />
                </div>
                <div className="siDesc">
                    <h1 className="siTitle"> Tower Street Apartments</h1>
                    <span className="siDistance"> 500m from center</span>
                    <span className="siTaxiOp"> Fee airport taxi </span>
                    <span className="siSubtitle"> Studio Apartment with Air condioning </span>
                    <span className="siFeatures">
                        Entire studio * 1 Bathroom * 21m2 1 full bed
                    </span>
                    <span className="siCancelOp">Free concellation</span>
                    <span className="siCancelOpSubtitle">
                        You can  cancel later , so lock in this great price today!</span>
                </div>
                <div className="siDetails">
                    <div className="siRating">
                        <span>Excellent</span>
                        <button>8.9</button>
                    </div>
                    <div className="siDetailTexts">
                        <span className="siPrice">$112</span>
                        <span className="siTaxOp">Includes taxes and fees</span>
                        <button className="siCheckButton">See availability</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchItem
