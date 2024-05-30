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
    <p>Content: <input  type="text" /></p>
    <p>URL: <input type="text" /></p>
    <button>Submit</button>
  </div>
  )
}

function PostsIndex() {
  return (
    <div id="posts-index">
    <h1>All posts</h1>
    <h2>Lesson Learned</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <img src="https://tulipconnor.com/wp-content/uploads/2020/05/lessons-learned-i-passed-my-pmp-certification-exam-.png"></img>
    <br />
    <h2>Aliens?</h2>
    <p>"I am an alien. Yeah, I keep saying I'm an alien, but nobody believes me." - Elon Musk</p>
    <img src="https://static.miraheze.org/greatcharacterswiki/2/2d/Et.jpeg"></img>
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
      <PostsNew />
      <PostsIndex />
      <Footer />
   
    </div>
  );
}

export default App;