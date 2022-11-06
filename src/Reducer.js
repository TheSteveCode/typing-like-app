export default function Reducer(state, action) {
  switch (action.type) {
    case "incremented_like": {
      return {
        name: state.name,
        like: state.like + 1
      };
    }
    case "changed_name": {
      return {
        name: action.nextName,
        like: state.like
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}
