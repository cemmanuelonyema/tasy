import "./App.css";
import { useState } from "react";
import { Header } from "./components/header/Header";
import { Modal } from "./components/layout/modal/Modal";
import { Tab } from "./components/tab/Tab";
import { TaskList } from "./components/tasklist/TaskList";
import { Todo } from "./components/model";

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <main className="App">
      <Header setModalOpen={setModalOpen} modalOpen={modalOpen} />
      <Tab />
      <TaskList
        todos={todos}
        setTodos={setTodos}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <Modal todos={todos} setTodos={setTodos} />
    </main>
  );
};

export default App;
