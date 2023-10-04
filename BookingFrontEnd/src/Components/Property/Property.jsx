import useRequest from "../../Hooks/useRequest"
import "./Property.css"


const Property = () => {
    const { data, loading } = useRequest("http://localhost:2000/api/hotels/CountByType");
    console.log(data)
    const ImgObj = [
        "https://cf.bstatic.com/xdata/images/hotel/square250/293888001.webp?k=141181817c09b1f8a14538ed33d02007a8e1ee0a9474de2dcc2e89b245855da4&o=",
        "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
        "https://r-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
        "https://r-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=",
        "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=",
        "https://r-xx.bstatic.com/xdata/images/hotel/263x210/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o=",
    ]
    return (
        <>
            <div className="pList">
                {loading ? "loading" : (
                    <>
                        {data.map((item, index) => (
                            <div className="pListItem" key={index}>
                                <img src={ImgObj[index]} alt="" className="pListImg" />
                                <div className="plistTitle">
                                    <h1>{item.type}</h1>
                                    <h2>{item.count} properties</h2>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </>
    )
}

export default Property
