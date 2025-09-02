import { useParams } from "react-router-dom";

function Post() {
  const { postId } = useParams();
  return (
    <div>
      <h2>Post ID: {postId}</h2>
    </div>
  );
}

export default Post;
