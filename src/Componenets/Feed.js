import React, { useState, useEffect } from "react";
import "../Components css/feed.css";
import MessageSender from "./MessageSender";
import StoryReel from "./StoryReel";
import Post from "./Post";
import db from "../firebase";
function Feed() {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setposts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);
  console.log(posts);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post?.id}
          profilePic={post?.data.profilePic}
          username={post?.data.username}
          message={post?.data.message}
          image={post?.data.image}
          timestamp={post?.data.timestamp}
        />
      ))}
    </div>
  );
}

export default Feed;
