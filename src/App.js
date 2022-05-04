import "./App.css";
import { fetchRecipe } from "./Components/api";
import { CustomeForm } from "./Components/form/CustomeForm";
import { Header } from "./Components/header/Header";

function App() {
  const getRecipe = async (query) => {
    const { data } = await fetchRecipe(query);
    console.log(data);
  };
  return (
    <div>
      <Header />
      <CustomeForm getRecipe={getRecipe} />
    </div>
  );
}

export default App;
