import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";

export function Content() {
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
  );
}
