import React from 'react';
import { Todo } from '../types/Todo';
import { TodoItem } from './TodoItem';

type Props = {
  todos: Todo[],
  onDelete?: (id: number) => void;
  onUpdate?: (todo: Todo, todosTitle: string) => void;
  loadingTodosIds: number[],
  isLoaderActive: boolean,
};

export const TodoList: React.FC<Props> = React.memo((({
  todos,
  onDelete = () => { },
  onUpdate = () => { },
  loadingTodosIds,
  isLoaderActive,
}) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          onDelete={onDelete}
          onUpdate={(todosTitle) => {
            onUpdate(todo, todosTitle);
          }}
          loadingTodosIds={loadingTodosIds}
          key={todo.id}
          isLoaderActive={isLoaderActive}
        />
      ))}
    </section>
  );
}));
