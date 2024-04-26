"use client";

import * as Dialog from "@/components/ui/dialog";
import { IconButton } from "@/components/ui/icon-button";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { Stack } from "styled-system/jsx";

type Props = {
  children: React.ReactNode;
  title: string;
};

export default function Modal({ children, title }: Props) {
  const router = useRouter();

  return (
    <Dialog.Root defaultOpen onExitComplete={() => router.back()}>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Stack gap="8" p="6">
            <Dialog.Title>{title}</Dialog.Title>
            {children}
          </Stack>
          <Dialog.CloseTrigger asChild position="absolute" top="2" right="2">
            <IconButton aria-label="Close Dialog" variant="ghost" size="sm">
              <X />
            </IconButton>
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}
