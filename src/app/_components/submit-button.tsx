import { useFormStatus } from "react-dom";
import { Button, type ButtonProps } from "@/components/ui/button";

export default function SubmitButton(props: ButtonProps) {
  const { pending } = useFormStatus();
  return <Button disabled={pending} type="submit" {...props} />;
}
