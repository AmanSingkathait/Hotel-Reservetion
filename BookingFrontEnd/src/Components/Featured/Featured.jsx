import useRequest from "../../Hooks/useRequest";
import "./Featured.css";

const Featured = () => {
    const { data, loading } = useRequest(
        "http://localhost:2000/api/hotels/CountByCity?cities=Ramnager,peerumadara,kashipur"
    );
    console.log(data);
    return (
        <div className="FeaturedContent">
            {loading ? (
                "page is loading "
            ) : (
                <>
                    <div className="featuredItem">
                        <img
                            src="https://cf.bstatic.com/xdata/images/district/300x240/48076.jpg?k=0ba9fa3a12aeebc7f1347f7284a010d00e587988087352c9978c46fc48a3ba04&o="
                            alt=""
                            className="featuredImg"
                        />
                        <div className="featuredTitle">
                            <h1>Kashipur</h1>
                            <h2>{data[0]} properties</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img
                            src="https://cf.bstatic.com/xdata/images/district/300x240/45567.jpg?k=81b520b1b0479bdd38f9d5839e469ff681a1b814e1102b74d36015dd055d430e&o="
                            alt=""
                            className="featuredImg"
                        />
                        <div className="featuredTitle">
                            <h1>Ramnager</h1>
                            <h2>{data[1]} properties</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img
                            src="https://cf.bstatic.com/xdata/images/district/300x240/49558.jpg?k=30b7c8481010b9751ea7e49dd8051f2b871bed05d97622e8834bfe590a424526&o="
                            alt=""
                            className="featuredImg"
                        />
                        <div className="featuredTitle">
                            <h1>peerumadara</h1>
                            <h2>{data[2]} properties</h2>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Featured;
