import "./App.css";
import MainSection from "./Components/MainSection";
import AlertEdit from "./Components/AlertEdit";
import { TaskProvider } from "./Contexts/TaskContext";
import { AlertEditProvider } from "./Contexts/AlertEditContext";
import { AlertProvider } from "./Contexts/AlertContext";
import { StateProvider } from "./Contexts/StateContext";
import { SnackbarProvider } from "./Contexts/SnackbarContext";

function App() {
  return (
    <TaskProvider>
      <AlertEditProvider>
        <div className="App">
          <StateProvider>
            <AlertProvider>
              <SnackbarProvider>
                <MainSection />
              </SnackbarProvider>
              <AlertEdit />
            </AlertProvider>
          </StateProvider>
        </div>
      </AlertEditProvider>
    </TaskProvider>
  );
}

export default App;
