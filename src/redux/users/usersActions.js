import axios from "axios";
import {
    setUser
} from "./userSlice.js"

const URLBASE = import.meta.env.VITE_URL_BASE

export const postUser = (data) => {
    return (dispatch) => {
      axios
        .post(`${URLBASE}/users/create`, data)
        .then((res) => {
          dispatch(setUser(data));
          console.log(res.data);
        })
        .catch((e) => console.log(e));
    };
  };