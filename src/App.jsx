function App() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>

      <div id="posts-new">
        <h1>New post</h1>
        <p>Title: <input type="text" /></p>
        <p>Content: <input  type="text" /></p>
        <p>URL: <input type="text" /></p>
        <button>Submit</button>
      </div>
<br />
      <div id="posts-index">
        <h1>All posts</h1>
        <p>Lesson Learned</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <img src="https://tulipconnor.com/wp-content/uploads/2020/05/lessons-learned-i-passed-my-pmp-certification-exam-.png"></img>
        <br />
        <p>Aliens?</p>
        <p>"I am an alien. Yeah, I keep saying I'm an alien, but nobody believes me." - Elon Musk</p>
        <img src="https://static.miraheze.org/greatcharacterswiki/2/2d/Et.jpeg"></img>
      </div>

      <footer>
        <p>Copyright 2023</p>
      </footer>
    </div>
  );
}

export default App;