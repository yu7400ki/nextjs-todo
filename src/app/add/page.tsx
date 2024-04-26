import { VStack } from "styled-system/jsx";
import { TodoForm } from "../_components";
import { Text } from "@/components/ui/text";
import { add } from "../_action";

export default function Page() {
  return (
    <VStack gap="4" alignItems="start">
      <Text as="h1" size="xl">
        Add Todo
      </Text>
      <TodoForm action={add} />
    </VStack>
  );
}
