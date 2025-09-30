import "./App.css";
import MainSection from "./Components/MainSection";
import { TaskProvider } from "./Contexts/TaskContext";
import { AlertEditProvider } from "./Contexts/AlertEditContext";
import { AlertProvider } from "./Contexts/AlertContext";
import AlertEdit from "./Components/AlertEdit";

function App() {
  return (
    <TaskProvider>
      <AlertEditProvider>
        <div className="App">
          <AlertProvider>
            <MainSection />
            <AlertEdit />
          </AlertProvider>
        </div>
      </AlertEditProvider>
    </TaskProvider>
  );
}

export default App;
