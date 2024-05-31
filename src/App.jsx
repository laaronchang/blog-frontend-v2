function Header() {
  return (
    <header>
    <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
  </header>
  )
}

function PostsNew() {
  return (
    <div id="posts-new">
    <h1>New post</h1>
    <p>Title: <input type="text" /></p>
    <p>Body: <input  type="text" /></p>
    <p>URL: <input type="text" /></p>
    <button>Submit</button>
  </div>
  )
}


function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map(post => (
        <div className="posts">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <img src={post.image_url} alt="" />
          <br />
          <button>More info</button>
        </div>
    ))}

    </div>
  )
}

function Content() {
  let posts = [
    {
      id: 1,
      title: "Lessons Learned",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image_url: "https://tulipconnor.com/wp-content/uploads/2020/05/lessons-learned-i-passed-my-pmp-certification-exam-.png",
    },
    {
      id: 2,
      title: "Aliens?",
      body: "I am an alien. Yeah, I keep saying I'm an alien, but nobody believes me. - Elon Musk",
      image_url: "https://static.miraheze.org/greatcharacterswiki/2/2d/Et.jpeg",
    },
  ];
  
  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2023</p>
    </footer>
  )
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;