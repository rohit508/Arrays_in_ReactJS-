function Card(props) {
    return (
      <>
      <div className="Cards">

        
        <div className="Card">
          <img src={props.imgsrc} className="card_img" />
          <div className="card_info">
            <span className="card_category">{props.sname}</span>
            <h3 className="card_litle">{props.title}</h3>
          </div>
          <a href={props.link} target="_blank">
            <button>Watch now</button>
          </a>
  
        </div>
      </div>
    </>
    )
  }
export default Card;  