import { VStack } from "styled-system/jsx";
import { TodoForm } from "@/app/_components";
import { Text } from "@/components/ui/text";
import { edit } from "@/app/_action";
import { store } from "@/app/_store";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const id = Number(params.id);
  const todo = await store.get(id);
  if (!todo) {
    notFound();
  }

  return (
    <VStack gap="4" alignItems="start">
      <Text as="h1" size="xl">
        Edit Todo
      </Text>
      <TodoForm todo={todo} action={edit} />
    </VStack>
  );
}
