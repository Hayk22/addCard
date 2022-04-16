import Cards from "./Components/Cards";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NumberProvider from "./Provider";
import Description from "./Components/Description";

function App() {
  return (
    <NumberProvider>
      <div>
        <Header />
        <section style={{ display: "grid", gridTemplateColumns: "auto 200px" }}>
          <Cards />
          <Description />
        </section>
        <Footer />
      </div>
    </NumberProvider>
  );
}

export default App;
