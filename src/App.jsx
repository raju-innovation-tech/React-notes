import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Hero />

      <Card
        title="Card 1"
        description="This is a simple card component."
      />

      <Card
        title="Card 2"
        description="You can reuse this component easily."
      />

      <Footer />
    </div>
  );
}

export default App;