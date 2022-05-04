import "./App.css";
import { fetchRecipe } from "./Components/api";
import { CustomeForm } from "./Components/form/CustomeForm";
import { Header } from "./Components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { CustomCard } from "./Components/card/CustomCard";

function App() {
  const getRecipe = async (query) => {
    const { data } = await fetchRecipe(query);
    console.log(data);
  };
  return (
    <div>
      <Header />
      <CustomeForm getRecipe={getRecipe} />
      <CustomCard />
    </div>
  );
}

export default App;
