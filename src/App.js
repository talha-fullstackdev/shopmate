import { AllRoutes } from "./routes/AllRoutes";
import { Header } from "./components";
import { CartAnimate } from "./components/CartAnimate";
import './App.css';
function App() {
  return (
    <div className="App">
      <Header />
      <CartAnimate/>
      <AllRoutes />

    </div>
  );
}

export default App;
