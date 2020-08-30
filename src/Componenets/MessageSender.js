import React, { useState } from "react";
import "../Components css/Messagesender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { auth, provider } from "../firebase";
import { UseStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
function MessageSender() {
  const [input, setinput] = useState("");
  const [imageURL, setimageURL] = useState("");
  const [, dispatch] = UseStateValue("");
  console.log(input, imageURL);
  auth
    .signInWithPopup(provider)
    .then((res) =>
      dispatch({
        type: actionTypes.SET_USER,
        user: res.user,
      })
    )
    .then((result) => console.log(result))
    .catch((err) => {
      console.log(err);
    });
  const handlesubmit = (e) => {
    e.preventDefault();
    setinput("");
    setimageURL("");
  };
  return (
    <div className="messagesender">
      <div className="messagesender__top">
        <Avatar />
        <form action="">
          <input
            onChange={(e) => setinput(e.target.value)}
            value={input}
            className="messagesender__input"
            placeholder="what's on your mind?"
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
