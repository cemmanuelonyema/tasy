import { createSlice, createSelector, current } from "@reduxjs/toolkit";
import { FiTag } from "react-icons/fi";
import { TaskModel } from "../../model/model";

interface TaskState {
  isModalOpen: boolean;
  tasks: TaskModel[];
  currentTask: TaskModel | null;
  completedTasks: TaskModel[];
  filtered: TaskModel[] | null;
}

const initialState: TaskState = {
  isModalOpen: false,
  tasks: [],
  currentTask: null,
  completedTasks: [],
  filtered: null,
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

    deleteTask: (state, action) => {
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

    completeTask: (state, action) => {
      const taskId = action.payload;
      const completeTasks = state.tasks.filter((task) => task.id === taskId);
      const newCompleteArr = [completeTasks, ...state.completedTasks];
      state.completedTasks = newCompleteArr;
    },
    clearSearch: (state) => {
      state.filtered = null;
    },
    searchTask: (state, action) => {
      console.log(action.payload);
      const query = action.payload;

      if (query === "" || !query) return;

      if (query !== "" && query) {
        const filtered = state.tasks.filter((task: TaskModel) => {
          const regex = new RegExp(`${query}`, "gi");
          const title = task.title.match(regex);
          return title;
        });
        state.filtered = filtered;
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
  clearSearch,
  completeTask,
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
export const selectFiltered = createSelector(
  [selectTask],
  (task) => task.filtered
);
export const selectCurrentTask = createSelector(
  [selectTask],
  (task) => task.currentTask
);

export const selectCompletedTask = createSelector(
  [selectTask],
  (task) => task.completedTasks
);
