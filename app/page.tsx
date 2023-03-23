import { categories } from '../constant';
import fetchNews from '../lib/fetchNews';

async function Homepage() {
  const news : NewsResponse = await fetchNews(categories.join(","));
  console.log(news);
  return <div></div>;
}

export default Homepage;
