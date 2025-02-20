import ArticleList from "../props/ArticleList";

const Articles = ({ data }) => {
  return (
    <>
      <section>
        <div className="background-container">
          <ArticleList articles={data} />
        </div>
      </section>
    </>
  );
};

export default Articles;
