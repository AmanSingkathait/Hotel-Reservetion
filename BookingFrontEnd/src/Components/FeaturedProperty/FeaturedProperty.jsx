import useRequest from "../../Hooks/useRequest";
import "./FeaturedProperty.css";

const FeaturedProperty = () => {
    const { data, loading } = useRequest("http://localhost:2000/api/hotels?featured=false");
    console.log(data)
    return (
        <>
            <div className="fp">
                {loading ? "loading" : (
                    <>
                        {data.map((item) => (
                            <div className="fpItem" key={item._id}>
                                <img
                                    // src={item.photos[0]}
                                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/480396833.jpg?k=bec903e8b4704c5a37e490816f9cd1eb0aee1b254f15c678ebcbd6f58977b585&o=&hp=1"
                                    alt=""
                                    className="fpImg"
                                />
                                <span className="fpName">{item.name}</span>
                                <span className="fpCity">{item.city}</span>
                                <span className="fprice">Starting from ${item.leastPrice}</span>
                                {item.rating && <div className="fpRating">
                                    <button>{item.rating}</button>
                                    <span>Excellent</span>
                                </div>}
                            </div>
                        ))}
                    </>
                )}
            </div>
        </>
    )
}

export default FeaturedProperty

