import { BrowserRouter as Router } from "react-router-dom";
import AppProviders from "@/providers/AppProvider";
import AppRoutes from "@/routes/AppRoutes";
import './index.css'

function App() {
  return (
    <AppProviders>
      <Router>
        <AppRoutes />
      </Router>
    </AppProviders>
  );
}

export default App;
