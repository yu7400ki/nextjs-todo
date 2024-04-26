import { TodoList } from "./_components";
import { VStack } from "styled-system/jsx";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <VStack gap="4" alignItems="start">
      <Text as="h1" size="xl">
        Todo
      </Text>
      <TodoList
        todos={[
          {
            id: 1,
            title: "Buy milk",
            deadline: Date.now(),
            completed: false,
          },
          {
            id: 2,
            title: "Buy eggs",
            deadline: Date.now(),
            completed: true,
          },
        ]}
      />
      <Button w="full" asChild>
        <Link href="/add">
          <Plus />
          Add
        </Link>
      </Button>
    </VStack>
  );
}
