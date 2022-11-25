import "./App.css";
import { useState } from "react";
import { Header } from "./components/header/Header";
import { Modal } from "./components/layout/modal/Modal";
import { Tab } from "./components/tab/Tab";
import { TaskWrapper } from "./components/taskWrapper/TaskWrapper";

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <main className="App">
      <Header setModalOpen={setModalOpen} modalOpen={modalOpen} />
      <Tab />
      <TaskWrapper />
      <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} />
    </main>
  );
};

export default App;
