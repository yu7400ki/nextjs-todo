"use client";

import { HStack } from "styled-system/jsx";
import type { Todo } from "../_store";
import { Text } from "@/components/ui/text";
import { Checkbox } from "@/components/ui/checkbox";
import { css } from "styled-system/css";
import { Pencil, Trash } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";
import Link from "next/link";

type Props = {
  todo: Todo;
};

export default function TodoItem({ todo }: Props) {
  return (
    <HStack w="full" p="2" rounded="sm" bg="bg.subtle" gap="4">
      <Checkbox
        checked={todo.completed}
        className={css({
          gap: 2,
          mr: "auto",
          "&[data-state=checked]": {
            textDecoration: "line-through",
          },
        })}
      >
        {todo.title}
      </Checkbox>
      <HStack gap="0">
        <Text size="sm" color="fg.muted" mr="1">
          {new Date(todo.deadline).toLocaleDateString("ja-JP")}
        </Text>
        <IconButton variant="ghost" size="sm">
          <Trash />
        </IconButton>
        <IconButton variant="ghost" size="sm" asChild>
          <Link href={`/edit/${todo.id}`}>
            <Pencil />
          </Link>
        </IconButton>
      </HStack>
    </HStack>
  );
}
