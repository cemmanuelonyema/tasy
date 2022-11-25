import "./App.css";
import { Header } from "./components/header/Header";
import { Modal } from "./components/layout/modal/Modal";
import { Tab } from "./components/tab/Tab";
import { TaskWrapper } from "./components/taskWrapper/TaskWrapper";

export const App: React.FC = () => {
  return (
    <main className="App">
      <Header />
      <Tab />
      <TaskWrapper />
      <Modal />
    </main>
  );
};

export default App;
