import TodoItem from "./todo-item";
import type { Todo } from "../_store";
import { VStack } from "styled-system/jsx";

type Props = {
  todos: Todo[];
};

export default function TodoList({ todos }: Props) {
  return (
    <VStack gap="2" w="full">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </VStack>
  );
}
