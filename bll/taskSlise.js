import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    taskList: [],
    count: 1,
    theme: false,
  };




  const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setTaskList: (state, action) => {
            state.taskList.push(action.payload);
        },
        setCount: (state,action) => {
            state.count = action.payload;
        },
        setDelTask: (state, action) => {
            const taskId = action.payload;
            const taskList = state.taskList.filter((item) => item.id !== taskId)
            return {
              ...state,
              taskList,
            }
          },
          setTheme: (state,action) => {
            state.theme = action.payload;
        },
    }
})



export const {setTaskList,setCount,setDelTask,setTheme} = taskSlice.actions;

export default taskSlice.reducer;