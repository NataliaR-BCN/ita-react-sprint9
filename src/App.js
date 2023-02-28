import Router from "./application/Router";
import { AuthProvider } from "./contexts/AuthContext";
import "./App.css";

function App() {



  return (
   <>
   <AuthProvider>
    <Router />
   </AuthProvider>
   </>
  );
}

export default App;
