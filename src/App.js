import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
function App() {
  return (
    <div className="Main__Body">
      <Header />
      <Home />
    </div>
  );
}

export default App;
