import { createSlice, createSelector, current } from "@reduxjs/toolkit";
import { TaskModel } from "../../models/models";

interface TaskState {
  isModalOpen: boolean;
  tasks: TaskModel[];
  currentTask: TaskModel | null;
  completedTasks: TaskModel[];
}

const initialState: TaskState = {
  isModalOpen: false,
  tasks: [],
  currentTask: null,
  completedTasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    toggleModal(state) {
      state.isModalOpen = !state.isModalOpen;
    },
    editTask(state, action) {
      //   state.isModalOpen = !state.isModalOpen;
      state.currentTask = action.payload;
    },
    clearEditTask(state) {
      state.currentTask = null;
    },
    addTask(state, action) {
      //   state.isModalOpen = !state.isModalOpen;
      state.tasks = [action.payload, ...state.tasks];
    },
    deleteTask(state, action) {
      //   const taskId = action.payload;
      //   state.tasks = state.tasks.filter((task) => task.id !== taskId);
      state.tasks.splice(
        state.tasks.findIndex((task) => task.id === action.payload)
      );
      console.log(current(state));
      console.log(action.payload);
    },
    updateTask(state, action) {
      state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
    completeTask(state) {
      //   state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const {
  toggleModal,
  editTask,
  clearEditTask,
  deleteTask,
  addTask,
  updateTask,
} = taskSlice.actions;
export default taskSlice.reducer;

//Selectors
export const selectTask = (state) => state.task;

export const selectIsModalOpen = createSelector(
  [selectTask],
  (task) => task.isModalOpen
);
export const selectTasks = createSelector([selectTask], (task) => task.tasks);
export const selectCurrentTask = createSelector(
  [selectTask],
  (task) => task.currentTask
);
