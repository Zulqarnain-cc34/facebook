import React, { useState, useEffect } from "react";
import "../Components css/Messagesender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { UseStateValue } from "../StateProvider";
import db from "../firebase";
import firebase from "firebase";
function MessageSender() {
  const [{ user }, dispatch] = UseStateValue();
  const [input, setinput] = useState("");
  const [imageURL, setimageURL] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: user.displayName,
      image: imageURL,
      profilePic: user.photoURL,
    });

    setinput("");
    setimageURL("");
  };
  return (
    <div className="messagesender">
      <div className="messagesender__top">
        <Avatar src={user?.photoURL} />
        <form action="">
          <input
            onChange={(e) => setinput(e.target.value)}
            value={input}
            className="messagesender__input"
            placeholder={`what's on your mind? ${user?.displayName}?`}
          />
          <input
            onChange={(e) => setimageURL(e.target.value)}
            value={imageURL}
            placeholder="image URL(Optional)"
          />
          <button onClick={handlesubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messagesender__bottom">
        <div className="messagesender__options">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messagesender__options">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messagesender__options">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
