import "./App.css";
import MenuList from "./components/MenuList";

function App() {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Đây là ứng dụng ReactJs</h1>
      </div>
      <div>
        <MenuList />
      </div>
    </div>
  );
}

export default App;
