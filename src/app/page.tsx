import { TodoList } from "./_components";
import { VStack } from "styled-system/jsx";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { store } from "./_store";

export default async function Page() {
  const todos = await store.getAll();

  return (
    <VStack gap="4" alignItems="start" w="xs">
      <Text as="h1" size="xl">
        Todo
      </Text>
      <TodoList todos={todos} />
      <Button w="full" asChild>
        <Link href="/add">
          <Plus />
          Add
        </Link>
      </Button>
    </VStack>
  );
}
