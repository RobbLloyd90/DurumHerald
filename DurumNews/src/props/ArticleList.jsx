import { Link } from "react-router-dom";

const ArticleList = ({ articles }) => {
  return (
    <div className="rows">
      {articles.map((article, index) => (
        <Link to={`/article/${article.article_id}`}>
          <div className="article-card">
            <img
              key={index}
              className="article-card-img"
              src={article.article_img_url}
              alt={article.title}
            />
            <div className="article-title-card">
              <div className="container-text">{article.title}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArticleList;
