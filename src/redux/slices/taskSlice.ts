import { createSlice, createSelector } from "@reduxjs/toolkit";
import { TaskModel } from "../../models/models";

interface TaskState {
  isModalOpen: boolean;
  tasks: TaskModel[];
  completedTasks: TaskModel[];
}

const initialState: TaskState = {
  isModalOpen: false,
  tasks: [],
  completedTasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    toggleModal(state) {
      state.isModalOpen = !state.isModalOpen;
    },
    editTask(state) {
      //   state.isModalOpen = !state.isModalOpen;
    },
    addTask(state, action) {
      //   state.isModalOpen = !state.isModalOpen;
    },
    deleteTask(state, action) {
      state.tasks.filter((task) => task.id !== action.payload);
      console.log(action.payload);
      console.log(state);
    },
    completeTask(state) {
      //   state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const { toggleModal, editTask, deleteTask, addTask } = taskSlice.actions;
export default taskSlice.reducer;

//Selectors
export const selectTask = (state) => state.task;

export const selectIsModalOpen = createSelector(
  [selectTask],
  (task) => task.isModalOpen
);
