import { Refs } from "./components/Concepts/Refs";
import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Tasks";

import "./styles/global.css";

function App() {
  return (
    <>
      <Header />
      <Tasks />

      <Refs />
    </>
  );
}

export default App;
