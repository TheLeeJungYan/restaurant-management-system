import "./App.css";
import Sidebar from "./components/Sidebar";
const App: React.FC = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gray-100 flex">
      <Sidebar />
    </div>
  );
};

export default App;
