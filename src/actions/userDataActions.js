// import { FETCH_USERDATA } from "./types";

export const FetchUserData = () => (dispatch) => {
  fetch("http://localhost:4500/quote")
      .then(response => response.json())
      .then(data => {
          console.log(data);
          dispatch ({
              type: 'FETCH_USERDATA',
              payload: data
          });
      });

};

// export const FetchUserData = () => {
//   return async (dispatch, getState) => {
//     const response = await fetch("http://localhost:4500/quote");
//     const data = await response.json();
//     console.log("fetching", data);
//     dispatch({
//       type: FETCH_USERDATA,
//       payload: data,
//     });
//   };
// };
// IF I WAS TO USE REDUX FOR ADDONS RENDER TOO:
// export const FetchAddons = () => dispatch => {

//     const fetchingData = async () => {
//         res = await fetch("http://localhost:4500/addons");
//    const addons = await response.json();
//    dispatch({
//        type: FETCH_ADDONS,
//        payload: addons
//    });
//     }
//     fetchingData();
// };
