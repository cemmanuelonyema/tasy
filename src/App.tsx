//imports
import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Modal } from "./components/modal/Modal";
import { Tab } from "./components/tab/Tab";
import { TaskList } from "./components/tasklist/TaskList";

export const App: React.FC = () => {
  return (
    <main className="App">
      <Header />
      <Tab />
      <TaskList />
      <Modal />
    </main>
  );
};

export default App;
