import { Todo } from "./ToDoComponent";

type ToDoProps = {
  todo: Todo;
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
};

function ToDo({ todo, toggleTask, removeTask }: ToDoProps) {
  return (
    <div key={todo.id} className="item-todo">
      <div
        className={todo.complete ? "item-text strike" : "item-text"}
        onClick={() => toggleTask(todo.id)}
      >
        {todo.task}
      </div>
      <div className="item-delete" onClick={() => removeTask(todo.id)}>
        delete
      </div>
    </div>
  );
}

export default ToDo;
