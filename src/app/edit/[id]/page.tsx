import { VStack } from "styled-system/jsx";
import { TodoForm } from "@/app/_components";
import { Text } from "@/components/ui/text";

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params: _ }: Props) {
  const todo = {
    id: 1,
    title: "Buy milk",
    deadline: Date.now(),
    completed: false,
  };
  return (
    <VStack gap="4" alignItems="start">
      <Text as="h1" size="xl">
        Edit Todo
      </Text>
      <TodoForm todo={todo} />
    </VStack>
  );
}
