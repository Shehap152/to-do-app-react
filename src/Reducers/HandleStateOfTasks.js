export function HandleStateOfTasks(state, action) {
  switch (action.type) {
    case "الكل":
      return action.payload;
    case "منجز":
      return action.payload.filter((task) => task.done);
    case "غير منجز":
      return action.payload.filter((task) => !task.done);
    default:
      throw Error("Some Thing is Wrong");
  }
}
