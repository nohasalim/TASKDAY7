import "./App.css";
import Avatar1 from "../src/assets/images/avatar-angela-gray.webp";
import Avatar2 from "../src/assets/images/avatar-anna-kim.webp";
import Avatar3 from "../src/assets/images/avatar-jacob-thompson.webp";
import Avatar4 from "../src/assets/images/avatar-kimberly-smith.webp";
import Avatar5 from "../src/assets/images/avatar-mark-webber.webp";
import Avatar6 from "../src/assets/images/avatar-nathan-peterson.webp";
import Avatar7 from "../src/assets/images/avatar-rizky-hasanuddin.webp";
import NotificationItem from "../src/components/NotificationItem/NotificationItem.jsx";
function App() {
  const ArrayOfobject = [
    {
      id: 1,
      notificationId: 1,
      image: Avatar1,
      username: "angela gray ",
      description: "reacted to your recent post ",
      comment: "My first tournament today! ",
      time: "1m ago",
      status: "unread",
    },
    {
      id: 2,
      notificationId: 2,
      image: Avatar2,
      username: "anna kim ",
      description: "followed you ",
      comment: "",
      time: "5m ago",
      status: "unread",
    },
    {
      id: 3,
      notificationId: 3,
      image: Avatar3,
      username: "jacob thompson ",
      description: "has joined your group ",
      comment: "Chees Club ",
      time: "1 day ago",
      status: "unread",
    },
    {
      id: 4,
      notificationId: 4,
      image: Avatar4,
      username: "kimberly smith ",
      description: "sent you a private message ",
      comment: "",
      time: "5 day ago",
      status: "read",
    },
    {
      id: 5,
      notificationId: 5,
      image: Avatar5,
      username: "mark webber ",
      description: "commented on your picture ",
      comment: "",
      time: "1 week ago",
      status: "read",
    },
    {
      id: 6,
      notificationId: 6,
      image: Avatar6,
      username: "nathan peterson ",
      description: "reacted to your recent post ",
      comment: "5 end-game strategies to increase your win rate ",
      time: "2 weeks ago",
      status: "read",
    },
    {
      id: 7,
      notificationId: 7,
      image: Avatar7,
      username: "rizky hasanuddin ",
      description: "left the group ",
      comment: "Chees Club ",
      time: "2 weeks ago",
      status: "read",
    },
  ];
  return (
    <div className="mainDiv">
      <h1>Notifications </h1>
      <button id="btn1">3</button>
      <button id="btn2">Make All As Read</button>
      <div className="notificationDiv">
        {ArrayOfobject.map((notification) => {
          return (
            <NotificationItem
              key={notification.id}
              notificationId={notification.notificationId}
              image={notification.image}
              username={notification.username}
              description={notification.description}
              comment={notification.comment}
              time={notification.time}
              status={notification.status}
            ></NotificationItem>
          );
        })}
      </div>
    </div>
  );
}

export default App;
