import ArticleList from "../props/ArticleList";

const Home = ({ data }) => {
  return (
    <section>
      <div className="landing-page-container">
        <ArticleList articles={data.slice(0, 10)} />
      </div>
    </section>
  );
};

export default Home;
