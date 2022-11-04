import { useReducer } from "react";
import "./App.css";

const initialState = {
  name: "",
  lastname: "",
  age: "",
  email: ""
}

const userReducer = (state, action ) => {
  switch (action.type) {
    case "SET NAME":
      return { ...state,
        name: "Jose Fernando",};
    case "SET LASTNAME":
      return {
        ...state,
        lastName: action.payload,
      };
    case "SET EMAIL":
      return {
        ...state,
        email: "correo@correo.com",
      };
    case "SET AGE":
      return {
        ...state,
        age: action.payload,
      };
    default:
      return initialState;
  }
}

function App() {

  // 'dispatch' is a better word than 'setState'
  const [state, dispatch] = useReducer(userReducer, initialState);

  const handleClickName = () => {
    dispatch({ type: "SET NAME", });
  };

  const handleClickEmail = () => {
    dispatch({ type: "SET EMAIL" });
  };

  const handleClickLastName = () => {
    dispatch({
      type: "SET LASTNAME",
      payload: "Velasquez",
    });
  };

  const handleClickAge = () => {
    dispatch({
      type: "SET AGE",
      payload: "12",
    });
  };

  const handleClick = () => {
    dispatch({ type: "sdandsdaklas" });
  };

  console.log("Render");

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