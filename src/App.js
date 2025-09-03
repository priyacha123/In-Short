import { useEffect, useState } from "react";
import "./App.css";
import Navinshorts from "./components/Navinshorts";
import NewsContent from "./components/NewsContent";
import axios from "axios";
import Footer from "./components/Footer/Footer";
 
function App() {

  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadmore, setLoadmore] = useState(20);

  console.log(process.env);
  

  const newsApi = async () => {
    try {
      // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${loadmore}`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  

  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults, category, loadmore]);

  return (
    <div className="App">
      <Navinshorts setCategory={setCategory} />

      <NewsContent
      setLoadmore = {setLoadmore}
      loadmore = {loadmore}
      newsArray = {newsArray} 
      newsResults = {newsResults}/>

      <Footer />
    </div>
  );
}

export default App;
