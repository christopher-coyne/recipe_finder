import { Container } from "./Home.style";
import { useState } from "react";
import { Navbar } from "components/Navbar";
import { Intro } from "components/Intro";
import { Search } from "components/Search";
import { Filter } from "components/Filter";
import { Recipes } from "components/Recipes";

export const Home = () => {
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
