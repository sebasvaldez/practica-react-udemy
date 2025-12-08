import * as z from "zod";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TasksState {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
}

export type TaskAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

const TodoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
});

const TaskStateSchema = z.object({
  todos: z.array(TodoSchema),
  length: z.number(),
  completed: z.number(),
  pending: z.number(),
});

export const getTasksInitialState = (): TasksState => {
  const localStorageState = localStorage.getItem("tasks-state");

  if (!localStorageState) {
    return {
      todos: [],
      length: 0,
      completed: 0,
      pending: 0,
    };
  } else {
    //validar mediante Zod

    const result = TaskStateSchema.safeParse(JSON.parse(localStorageState));

    if (result.error) {
      console.log(result.error);
      return {
        todos: [],
        length: 0,
        completed: 0,
        pending: 0,
      };
    }

    return result.data;
  }
};

export const tasksReducer = (
  state: TasksState,
  action: TaskAction
): TasksState => {
  switch (action.type) {
    
    case "ADD_TODO": {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };

      return {
        ...state,
        todos: [...state.todos, newTodo],
        length: state.todos.length + 1,
        pending: state.pending + 1,
      };
    }

    case "TOGGLE_TODO": {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

      return {
        ...state,
        todos: updatedTodos,
        completed: updatedTodos.filter((todo) => todo.completed === true)
          .length,
        pending: updatedTodos.filter((todo) => !todo.completed === true).length,
      };
    }

    case "DELETE_TODO": {
      const currentTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );

      return {
        ...state,
        todos: currentTodos,
        length: currentTodos.length,
        completed: currentTodos.filter((todo) => todo.completed === true)
          .length,
        pending: currentTodos.filter((todo) => !todo.completed === true).length,
      };
    }

    default:
      return state;
  }
};
