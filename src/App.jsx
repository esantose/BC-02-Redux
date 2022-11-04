import { useReducer } from "react";
import "./App.css";
import { initialState, userReducer } from "./reducers/userReducer";
import { SET_AGE, SET_EMAIL, SET_LASTNAME, SET_NAME } from "./types/userTypes";

function App() {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const handleClickName = () => {
    dispatch({ type: SET_NAME });
  };

  const handleClickEmail = () => {
    dispatch({ type: SET_EMAIL });
  };

  const handleClickLastName = () => {
    dispatch({
      type: SET_LASTNAME,
      payload: "Velasque",
    });
  };
  const handleClickAge = () => {
    dispatch({
      type: SET_AGE,
      payload: "12",
    });
  };

  const handleClick = () => {
    dispatch({ type: "sdandsdaklas" });
  };

  return (
    <div className="App">
      <h3>Name: {state.name}</h3>
      <h3>Email: {state.email}</h3>
      <h3>Last Name: {state.lastName}</h3>
      <h3>Age: {state.age}</h3>
      <button onClick={handleClickName}>Set name</button>
      <button onClick={handleClickEmail}>Set email</button>
      <button onClick={handleClickLastName}>Set last name</button>
      <button onClick={handleClickAge}>Set age</button>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default App;