import { Todo } from '@/utils/interface';
import React from 'react'
import { deleteTodo, getAllTodos } from '@/utils/supabaseFunctions';

type TodoListProps = {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = (props: TodoListProps) => {
  const { todos, setTodos } = props;

  const handleDelete = async(id: number) => {
    await deleteTodo(id);
    setTodos(await getAllTodos());
  }

  return (
    <div>
        <ul className='mx-auto'>
            {todos.map((todo: Todo) => (
                <div key={todo.id} className='flex bg-orange-200 rounded-md mt-2 p-2 justify-between'>
                    <li className='font-medium'>✅ {todo.title}</li>
                    <span className='cursor-pointer' onClick={() => handleDelete(todo.id)}>❌</span>
                </div>
            ))}
        </ul>
    </div>
  )
}

export default TodoList;