export function PostsShow(props) {
  return (
    <div>
      <p>TESTING OF MODAL in SHOW</p>
      <p>{props.post.title}</p>
      <p>{props.post.body}</p>
      <p>{props.post.image_url}</p>
    </div>
  )
}