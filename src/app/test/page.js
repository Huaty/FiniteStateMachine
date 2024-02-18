import { useRouter } from "next/router";

function PostPage() {
  const router = useRouter();
  const { title, content, id } = router.query;
  return (
    <div>
      <h1>{title}</h1> {/* Access the title */}
      <p>{content}</p> {/* Access the content */}
      <div>Post ID: {id}</div> {/* Access the id */}
    </div>
  );
}
