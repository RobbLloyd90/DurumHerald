import ArticleList from "../props/ArticleList";

const Home = ({ data }) => {
  return (
    <section>
      <div className="background-container">
        <ArticleList articles={data.slice(0, 10)} />
      </div>
    </section>
  );
};

export default Home;
