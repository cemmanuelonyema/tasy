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

    clearEditTask(state, action) {
      state.currentTask = null;
      //   state.tasks = state.tasks.filter((task) => task.id === action.payload);
    },
    addTask(state, action) {
      //   state.isModalOpen = !state.isModalOpen;
      //   state.tasks = [action.payload, ...state.tasks];
      state.tasks.push(action.payload);
    },

    deleteTask(state, action) {
      //   const taskId = action.payload;
      //   state.tasks = state.tasks.filter((task) => task.id !== taskId);

      state.tasks.splice(
        state.tasks.findIndex((task) => task.id === action.payload)
      );

      //   state.currentTask = null;

      console.log(current(state));
      console.log(action.payload);
    },
    updateTask: (state, action) => {
      console.log(action.payload);
      const {
        payload: { id },
      } = action;
      console.log(id);
      const task = state.tasks.find((task) => task.id === id);
      console.log(current(task));
      if (task) {
        const {
          payload: { title, description, tag, completed },
        } = action;
        task.title = title;
        task.description = description;
        task.tag = tag;
        task.completed = completed;
      }

      //   state.currentTask = null;
    },
    // updateTask(state, action) {
    //   console.log(action.payload);
    //   //   state.tasks = state.tasks.map((task) =>
    //   //     task.id === action.payload.id ? action.payload : task
    //   //   );
    //   //   state.tasks = [.. .state.tasks, action.payload];
    //   //   Object.assign(state, {
    //   //     id,
    //   //     completed,
    //   //     taskDescription,
    //   //     taskTitle,
    //   //     tag,
    //   //   });
    //   //   const { id, taskTitle, taskDescription, completed, taskTag } =
    //   //     action.payload;
    //   //   const existingTask = state.tasks.find((task) => task.id === id);
    //   //   console.log(existingTask);
    //   //   console.log(id);
    //   //   console.log(current(state.tasks));
    //   //   if (existingTask) {
    //   //     existingTask.completed = completed;
    //   //     existingTask.taskDescription = taskDescription;
    //   //     existingTask.taskTitle = taskTitle;
    //   //     existingTask.taskTag = taskTag;
    //   //     console.log(existingTask);
    //   //   }
    //   //   let arr = state.tasks;
    //   //   const newArr = action.payload;

    //   let arr = state.tasks;
    //   const obj = action.payload;
    //   arr = obj;
    // },

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
