export function ReducerHandlerTaskForm(state, action) {
  switch (action.type) {
    case "add": {
      return [
        ...state,
        {
          id: action.deploy.id,
          title: action.deploy.title,
          info: action.deploy.info,
          done: false,
        },
      ];
    }
    case "edit": {
      return state.map((task) => {
        if (task.id === action.deploy.id)
          return {
            ...task,
            title: action.deploy.title,
            info: action.deploy.info,
          };
        return task;
      });
    }
    case "del": {
      return state.filter((task) => {
        return task.id !== action.deploy.id;
      });
    }
    case "done": {
      return state.map((task) => {
        if (task.id === action.deploy.id) {
          task.done = true;
        }
        return task;
      });
    }
    default:
      throw Error("Some Thing is Wrong");
  }
}
