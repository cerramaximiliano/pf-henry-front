import axios from "axios";
import {
    setUser,
    setAllUsers,
} from "./userSlice.js"

const URLBASE = import.meta.env.VITE_URL_BASE

export const postUser = (data) => {
    return (dispatch) => {
      axios
        .post(`${URLBASE}/users/create`, data)
        .then((res) => {
          dispatch(setUser(res.data));
        })
        .catch((e) => console.log(e));
    };
  };

export const getAllUsers = () => {
  return (dispatch) => {
    axios
      .get(`${URLBASE}/users/`)
      .then((res) => {
        dispatch(setAllUsers(res.data))
      })
      .catch((e) => console.log(e))
  }
}