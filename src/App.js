import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import LoremIpsum from "react-lorem-ipsum";

function App() {
  return (
    <div className="clear-all">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
