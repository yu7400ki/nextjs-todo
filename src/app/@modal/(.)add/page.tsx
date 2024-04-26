import { Modal } from "../_components";
import { TodoForm } from "@/app/_components";

export default function Page() {
  return (
    <Modal title="Add Todo">
      <TodoForm />
    </Modal>
  );
}
