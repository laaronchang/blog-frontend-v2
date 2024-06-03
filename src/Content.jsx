import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import axios from "axios";


export function Content() {
  // let posts = [];
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  
  //   {
  //     id: 1,
  //     title: "Lessons Learned",
  //     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     image_url: "https://tulipconnor.com/wp-content/uploads/2020/05/lessons-learned-i-passed-my-pmp-certification-exam-.png",
  //   },
  //   {
  //     id: 2,
  //     title: "Aliens?",
  //     body: "I am an alien. Yeah, I keep saying I'm an alien, but nobody believes me. - Elon Musk",
  //     image_url: "https://static.miraheze.org/greatcharacterswiki/2/2d/Et.jpeg",
  //   },
  // ];

  const handlePostsIndex = () => {
    console.log("getting the data")
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data);
      setPosts(response.data);
      })
  }

  const handleShowPost = () => {
    // console.log("showing info...")
    setIsPostsShowVisible(true);
  }

  const handleClose = () => {
    console.log("closing modal...");
    setIsPostsShowVisible(false);
  }

  useEffect(handlePostsIndex, [])

  return (
    <main>
      <PostsNew />
      <button onClick={handlePostsIndex}>Get Data</button>
      <button onClick={handleShowPost}>MODAL</button>
      <PostsIndex posts={posts} onShowPost={handleShowPost}/>
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        TEST FOR MODAL
      </Modal>
    </main>
  );
}
