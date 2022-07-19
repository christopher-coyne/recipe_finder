import { Container } from "./Home.style";
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Intro from "../components/Intro/Intro";
import Search from "../components/Search/Search";
import Filter from "../components/Filter/Filter";
import Recipes from "../components/Recipes/Recipes";

const Home = () => {
  const [filters, setFilters] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <>
      <Navbar />
      <Container>
        <Intro />
        <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        <Filter filters={filters} setFilters={setFilters} />
        <Recipes filters={filters} searchTerm={searchTerm} />
      </Container>
    </>
  );
};

export default Home;
