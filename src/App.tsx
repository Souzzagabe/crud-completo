// App.tsx
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import AppRoutes from "./routes";

function App() {
  return (
    <Router>
      <div className="bg-zinc-800 flex items-center justify-center min-h-screen">
        <div>
          <Header />
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
