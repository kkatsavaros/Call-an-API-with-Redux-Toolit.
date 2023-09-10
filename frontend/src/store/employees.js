import {createSlice } from "@reduxjs/toolkit"

let id = 0;

const employeeSlice = createSlice({

    name: "employees",

    initialState: [],

    reducers: { // action: function

        addEmployee: (state, action) => {
            state.push(
                {
                    id: ++id,
                    name: action.payload.name
                }
            )
        },

        // removeTask: (state, action) => {
        //     const index = state.findIndex(task=> task.id === action.payload.id)
        //     state.splice(index, 1)
        // },

        // completedTask: (state, action) =>{
        //     const index = state.findIndex(task=> task.id === action.payload.id)
        //     state[index].completed = true
        // }

    }

})

//console.log(employeeSlice);

export const { addEmployee} = employeeSlice.actions    // --> index.js
export default employeeSlice.reducer;                  // --> configureStore;