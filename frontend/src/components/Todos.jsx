// export function Todos( {todos} ){
//     return <div> {todos.map(function(todo){
//     return <div>
//         <h3>{todo.title}</h3>
//         <h3>{todo.description}</h3>
//         <button>{todo.completed == true ? "completed" : "mark as completed"}</button>
//     </div>
// })}


// </div>
// }

export function Todos({ todos, onUpdate }) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id}>
          <h3>{todo.title}</h3>
          <h3>{todo.description}</h3>
          
          <button
            onClick={() => {
              fetch("http://localhost:3000/complete", {
                method: "PUT",
                body: JSON.stringify({ id: todo._id }),
                headers: { "Content-Type": "application/json" }
              })
              .then(() => onUpdate())
              .catch(err => console.error("Error marking complete:", err));
            }}
          >
            {todo.completed ? "completed" : "mark as completed"}
          </button>

          <button
            onClick={() => {
              fetch(`http://localhost:3000/todo/${todo._id}`, {
                method: "DELETE"
              })
              .then(() => onUpdate())
              .catch(err => console.error("Error deleting:", err));
            }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
}
