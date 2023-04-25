import "./style.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import LoremIpsum from "react-lorem-ipsum";
import ComeBackBtn from "./components/ComeBackBtn";

function App() {
  return (
    <div className="clear-all">
      <Header />
      <Main />
      <Footer />
      <ComeBackBtn />
    </div>
  );
}

export default App;
