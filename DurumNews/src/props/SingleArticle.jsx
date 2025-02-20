const SingleArticle = ({ article }) => {
  let voteCount = 0;

  const handleVote = () => {
    console.log("Clicked");
    voteCount++;
  };
  return (
    <div className="article-container">
      <h3>Topic: {article.topic}</h3>
      <h1 className="container-text">{article.title}</h1>
      <div className="article-body-card">
        <img
          className="article-img"
          src={article.article_img_url}
          alt={article.title}
        ></img>
        <article>
          <h2 className="article-body-card">{article.body}</h2>
          <h3>By: {article.author}</h3>
          <h3>Votes {article.votes}</h3>

          <h4>{article.created_at}</h4>

          <button onClick={handleVote}>Increase votes {voteCount}</button>
        </article>
      </div>
    </div>
  );
};

export default SingleArticle;
