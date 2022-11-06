import { useReducer } from "react";
import Reducer from "./Reducer";
import "./styles.css";

const initialState = { name: "Write your name...", like: 0 };

export default function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  function handleButtonClick() {
    dispatch({ type: "incremented_like" });
  }

  function handleInputChange(e) {
    dispatch({
      type: "changed_name",
      nextName: e.target.value
    });
  }

  return (
    <div className="App">
      <h1>Typing Like App</h1>
      <input value={state.name} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Like</button>
      <p>
        Hello, {state.name}. You have {state.like} like.
      </p>
      <meter></meter>
    </div>
  );
}
