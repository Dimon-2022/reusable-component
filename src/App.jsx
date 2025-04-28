import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Instruction from "./components/Instruction";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions((prev) => !prev);
  };

  return (
    <div className="app">
      <Header
        toggleInstructions={toggleInstructions}
        showInstructions={showInstructions}
      />

      <Instruction showInstructions={showInstructions}/>

      <Main />
      <Footer />
    </div>
  );
}

export default App;
