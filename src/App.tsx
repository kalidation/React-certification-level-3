import { Outlet } from "react-router-dom";
import ExercisePage from "./pages/ExercisePage";

function App() {
  return (
    <main className="p-24">
      <ExercisePage />
      <Outlet />
    </main>
  );
}

export default App;
