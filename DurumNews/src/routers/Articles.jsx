import ArticleList from "../props/ArticleList";

const Articles = ({ data }) => {
  return (
    <>
      <section>
        <div className="landing-page-container">
          <ArticleList articles={data} />
        </div>
      </section>
    </>
  );
};

export default Articles;
