import { useParams } from "react-router-dom";
import useFetchData from "../customHooks/useFetchData";
import CommentsList from "../props/CommentsList";
import SingleArticle from "../props/SingleArticle";

const Article = () => {
  const { id } = useParams();

  const {
    data: article,
    error: articleError,
    isPending: articleIsPending,
  } = useFetchData("https://durum-herald.onrender.com/api/articles/" + id);

  const {
    data: comments,
    error: commentError,
    isPending: commentsIsPending,
  } = useFetchData(
    "https://durum-herald.onrender.com/api/articles/" + id + "/comments"
  );
  return (
    <section>
      <div className="background-container">
        {articleIsPending && <div>Loading...</div>}
        {articleError && <div>{articleError}</div>}
        <SingleArticle article={article} />
        <CommentsList comments={comments} />
      </div>
    </section>
  );
};

export default Article;
