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
    clearSearch: (state) => {
      state.filtered = null;
    },
    searchTask: (state, action) => {
      console.log(action.payload);
      const query = action.payload;
      if (query !== "") {
        const updatedTaskArr = state.tasks.filter((task) =>
          task.title.toLowerCase().includes(query)
        );
        state.tasks = updatedTaskArr;
      }
      if (query !== "") {
        const filtered = state.tasks.filter((task) => {
          const regex = new RegExp(`${query}`, "gi");
          console.log("payload:", query);
          const title = task.title.match(regex);
          const description = task.description.match(regex);
          const tag = task.tag.match(regex);
          console.log("title:", title, "des:", description, "tag", tag);
          return title || description || tag;
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
