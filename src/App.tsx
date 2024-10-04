import "./App.css";
import Sidebar from "./components/Sidebar";
import products from "./data/product";
const App: React.FC = () => {
  console.log(products);
  return (
    <div className="min-h-screen min-w-screen bg-gray-100 flex">
      <Sidebar />
    </div>
  );
};

export default App;
