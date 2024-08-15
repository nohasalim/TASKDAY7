import "./NotificationItem.css";
import chessimg from "../../assets/images/image-chess.webp";
function NotificationItem(props) {
  return (
    <>
      <div className="itemDiv">
        <div className="noteDiv">
          <img src={props.image}></img>
          <label id="username">{props.username}</label>
          <p id="description">{props.description}</p>
          <span id="comment">{props.comment}</span>
          {props.status == "unread" ? <span id="unreaddot"></span> : null}
          {props.notificationId == 5 ? <img src={chessimg}></img> : null}
        </div>
        <label id="time">{props.time}</label>

        {props.notificationId == 4 ? (
          <div className="message">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
              adipisci sed rerum ipsum aliquid laborum voluptates porro, soluta,
              consequuntur voluptate ipsa veritatis quo architecto neque
              nesciunt, doloremque eveniet molestias. Exercitationem!
            </p>
          </div>
        ) : null}
      </div>
    </>
  );
}
export default NotificationItem;
