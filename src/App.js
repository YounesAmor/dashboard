import "./App.css";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <div className="App bg-veryDarkBlue lg:h-screen">
      <div className="grid h-full place-content-center">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
