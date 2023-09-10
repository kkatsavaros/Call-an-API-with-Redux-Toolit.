import store from "./store/configureStore";
import axios from 'axios';
import { getTasks } from "./store/tasks";


console.log("Making API calls using functions.")

const gettingTasks = async () => {

    try{
        // calling api.
        const response = await axios.get("http://localhost:5000/api/tasks");
        console.log(response);

        // dispatch action
        store.dispatch(getTasks({tasks: response.data}))

    } catch(error){

        store.dispatch( {type:"SHOW_ERROR", payload: {error: error.message  }});

    }   

};

gettingTasks();
