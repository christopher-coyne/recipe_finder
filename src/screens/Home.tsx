import { Container } from "./Home.style";
import Navbar from "../components/Navbar/Navbar";
import Intro from "../components/Intro/Intro";
import Search from "../components/Search/Search";
import Filter from "../components/Filter/Filter";
import Recipes from "../components/Recipes/Recipes";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Intro />
        <Search />
        <Filter />
        <Recipes />
      </Container>
    </>
  );
};

export default Home;
