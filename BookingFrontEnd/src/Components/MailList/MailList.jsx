import "./MailList.css"

const MailList = () => {
    return (
        <>
            <div className="Mail">
                <h1 className="mailTitle"> Save Time Save Money! </h1>
                <span className="maildes"> 
                    sign up and we will send the best deals to you
                </span>
                <div className="mailInputContent">
                    <input type="text" placeholder="your Email" />
                    <button> Subscribe </button>
                </div>
            </div>
        </>
    )
}

export default MailList
