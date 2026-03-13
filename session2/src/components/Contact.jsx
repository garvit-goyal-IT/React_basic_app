
export default function Contact(props){
    return (
        <>
        <div className="contact-card">
            <img
              src={props.img}
              alt="photo"
            ></img>
            <h3>{props.name}</h3>
            <div className="info">
                <span> 📞 {props.contact} </span>
                <span> {props.email}</span>
            </div>
        </div>
        </>
    )
}