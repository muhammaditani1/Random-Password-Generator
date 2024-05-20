import Header from "./components/header/Header";
import Generate from "./components/body/Generate";
import "./App.css";
function App() {
  return (
    <>
      <section id="generator" className="main-container">
        <Header />
        <Generate />
      </section>
    </>
  );
}

export default App;
