import "./App.css";
import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";
import NewsLetter from "./components/newsletter/NewsLetter";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <NewsLetter />
      <Projects />
    </div>
  );
}

export default App;
