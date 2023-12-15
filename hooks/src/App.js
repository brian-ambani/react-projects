// import { Hook1 } from "./components/hooks/Hook1";
// import { Hook2 } from "./components/hooks/Hook2";
import { Hook3 } from "./components/hooks/Hook3";

// useRef => allows us to access DOM elements and create mutable variables

function App() {
  return (
    <div className="App">
      <>
        <h1>React App</h1>
        {/* <Hook1 /> */}
        {/* <Hook2 /> */}
        <Hook3 />
      </>
    </div>
  );
}

export default App;
