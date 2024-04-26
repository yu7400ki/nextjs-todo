import { Modal } from "../../_components";
import { TodoForm } from "@/app/_components";

export default function Page() {
  return (
    <Modal title="Edit Todo">
      <TodoForm />
    </Modal>
  );
}
