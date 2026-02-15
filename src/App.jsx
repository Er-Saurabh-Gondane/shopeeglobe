import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div>

      <div className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-sm">
        <Header />
      </div>
      <Outlet />
    </div>
  );
}

export default App;
