import { Stack, type StackProps } from "styled-system/jsx";
import { Text, type TextProps } from "@/components/ui/text";

function ErrorLabel(props: TextProps) {
  return (
    // @ts-ignore
    <Text color="red.9" size="sm" {...props} />
  );
}

export type Props = {
  errors?: string[];
  children: React.ReactNode;
} & StackProps;

export default function FormField({ errors, children, ...props }: Props) {
  return (
    <Stack gap="1" {...props}>
      {children}
      {errors?.map((error) => (
        <ErrorLabel key={error}>{error}</ErrorLabel>
      ))}
    </Stack>
  );
}
