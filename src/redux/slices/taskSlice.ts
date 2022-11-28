import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
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
    deleteTask(state) {
      //   state.isModalOpen = !state.isModalOpen;
    },
    completeTask(state) {
      //   state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const {} = taskSlice.actions;
export default taskSlice.reducer;

//Selectors
export const selectTask = (state) => state.task;

export const selectIsModalOpen = createSelector(
  [selectTask],
  (task) => task.isModalOpen
);
