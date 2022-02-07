import { FETCH_USERDATA } from "./types";

export const FetchUserData = () => (dispatch) => {
  fetch("http://localhost:4500/quote")
      .then(response => response.json())
      .then(data => {
          dispatch ({
              type: FETCH_USERDATA,
              payload: data
          });
      });

};