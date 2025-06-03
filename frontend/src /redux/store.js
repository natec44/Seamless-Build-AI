import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './slices/projectSlice';
import taskReducer from './slices/taskSlice';
import userReducer from './slices/userSlice';
import notificationReducer from './slices/notificationSlice';

const store = configureStore({
  reducer: {
    project: projectReducer,
    task: taskReducer,
    user: userReducer,
    notification: notificationReducer,
  },
});

export default store;
