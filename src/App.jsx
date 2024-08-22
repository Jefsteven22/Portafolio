import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <section className="app">
      <Header />
      <Home />
      <Skills />
      <Projects />
      <UserInfo />
      <Contact />
      <Footer />
    </section>
  );
}

export default App;
