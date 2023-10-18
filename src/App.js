import { Outlet } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <main className="h-75 overflow-y-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
