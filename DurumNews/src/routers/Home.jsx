import ArticleList from "../props/ArticleList";

const Home = ({ data }) => {
  return (
    <section className="background-container">
      <div>
        <div>
          <ArticleList articles={data.slice(0, 10)} />
        </div>
      </div>
    </section>
  );
};

export default Home;
