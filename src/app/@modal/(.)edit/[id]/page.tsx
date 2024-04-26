import { edit } from "@/app/_action";
import { Modal } from "../../_components";
import { TodoForm } from "@/app/_components";
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
    <Modal title="Edit Todo">
      <TodoForm action={edit} todo={todo} />
    </Modal>
  );
}
