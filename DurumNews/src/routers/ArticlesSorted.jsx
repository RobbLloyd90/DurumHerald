import ArticleList from "../props/ArticleList";
import { useParams } from "react-router-dom";

const ArticlesSorted = () => {
  const { sort, order } = useParams();

  console.log("in the articleSorted");

  return <>Hello</>;
};
export default ArticlesSorted;
