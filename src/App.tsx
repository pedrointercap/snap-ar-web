import Toolbar from "./components/Toolbar";
import SnapARCamera from "./components/SnapARCamera";

function App() {
  return (
    <section className="justify-items-center p-6">
      <div
        id="app"
        className="justify-items-center p-10 max-w-3xl rounded-lg"
        style={{ backgroundColor: "#a7c9e1" }}
      >
        <SnapARCamera />
        <Toolbar />
      </div>
    </section>
  );
}

export default App;
