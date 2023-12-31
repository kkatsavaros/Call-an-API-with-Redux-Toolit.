import {createSlice } from "@reduxjs/toolkit"

let id = 0;

const taskSlice = createSlice({

    name: "tasks",

    initialState: [],

    reducers: { // action: function

        getTaks: (state, action) =>{
            return action.payload.tasks
        },


        addTask: (state, action) => {
            state.push(
                {
                    id: ++id,
                    task: action.payload.task,
                    completed :false
                }
            )
        },

        removeTask: (state, action) => {
            const index = state.findIndex(task=> task.id === action.payload.id)
            state.splice(index, 1)
        },

        completedTask: (state, action) =>{
            const index = state.findIndex(task=> task.id === action.payload.id)
            state[index].completed = true
        }

    }

})

//console.log(taskSlice);

export const { getTasks, addTask, removeTask, completedTask} = taskSlice.actions
export default taskSlice.reducer;
