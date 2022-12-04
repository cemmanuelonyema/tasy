import { createSlice, createSelector, current } from "@reduxjs/toolkit";
import { TaskModel } from "../../model/model";

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
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },

    editTask: (state, action) => {
      state.currentTask = action.payload;
    },

    addTask: (state, action) => {
      const newTask = action.payload;
      const taskArr = [newTask, ...state.tasks];
      state.tasks = taskArr;

      //method 2
      //   state.tasks.push(action.payload);
    },

    deleteTask(state, action) {
      const taskId = action.payload;
      //to avoid mutating state directly, operation assigned to updatedTask const
      const updatedTask = state.tasks.filter((task) => task.id !== taskId);
      //then assigned to state
      state.tasks = updatedTask;
      // clear any currentTask
      state.currentTask = null;

      //method 2
      //   state.tasks.splice(
      //     state.tasks.findIndex((task) => task.id === action.payload)
      //   );
    },

    updateTask: (state, action) => {
      const { id } = action.payload;
      console.log(id);
      const task = state.tasks.find((task) => task.id === id);
      console.log(current(task));
      if (task) {
        const { title, description, tag, completed } = action.payload;
        task.title = title;
        task.description = description;
        task.tag = tag;
        task.completed = completed;
      }
      state.currentTask = null;
    },

    completeTask: (state) => {},
    searchTask: (state, action) => {
      console.log(action.payload);
      const query = action.payload;
      if (query !== "") {
        const updatedTaskArr = state.tasks.filter((task) =>
          task.title.toLowerCase().includes(query)
        );
        state.tasks = updatedTaskArr;
      }
    },
  },
});

export const {
  toggleModal,
  editTask,
  deleteTask,
  addTask,
  updateTask,
  searchTask,
} = taskSlice.actions;
export default taskSlice.reducer;
////////////////////////////////////////////////////////////
//Selectors
////////////////////////////////////////////////////////////
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
