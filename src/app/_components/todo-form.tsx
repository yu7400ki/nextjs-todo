"use client";

import type { Todo } from "../_store";
import { FormLabel } from "@/components/ui/form-label";
import { Input } from "@/components/ui/input";
import * as DatePicker from "@/components/ui/date-picker";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";
import { Button } from "@/components/ui/button";
import { stack } from "styled-system/patterns";
import { useFormState } from "react-dom";
import SubmitButton from "./submit-button";
import { type SubmissionResult, useForm } from "@conform-to/react";
import FormField from "./form-field";

export type Action = (
  prev: SubmissionResult | undefined,
  formData: FormData,
) => Promise<SubmissionResult>;

type Props = {
  todo?: Partial<Todo>;
  action: Action;
};

const toIsoDate = (date: string) => {
  const [year, month, day] = date.split("/").map(Number);
  return `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
};

export default function TodoForm({ todo, action }: Props) {
  const [lastResult, formAction] = useFormState(action, undefined);
  const [_, fields] = useForm({ lastResult });

  return (
    <form className={stack({ gap: "4" })} action={formAction} noValidate>
      <Input type="hidden" name="id" value={todo?.id} />
      <Input display="none" type="checkbox" name="completed" checked={todo?.completed} />
      <FormField errors={fields.title.errors}>
        <FormLabel htmlFor="title">Title</FormLabel>
        <Input id="title" name="title" defaultValue={todo?.title} />
      </FormField>
      <FormField gap="1.5" errors={fields.deadline.errors}>
        <DatePicker.Root
          format={(date) => `${date.year}/${date.month}/${date.day}`}
          gap="1"
          defaultValue={todo?.deadline ? [toIsoDate(todo.deadline)] : undefined}
          name="deadline"
        >
          <DatePicker.Label>Deadline</DatePicker.Label>
          <DatePicker.Control>
            <DatePicker.Input placeholder="yyyy/mm/dd" index={0} asChild>
              <Input />
            </DatePicker.Input>
            <DatePicker.Trigger asChild>
              <IconButton type="button" variant="outline" aria-label="Open date picker">
                <Calendar />
              </IconButton>
            </DatePicker.Trigger>
          </DatePicker.Control>
          <DatePicker.Positioner>
            <DatePicker.Content>
              <DatePicker.View view="day">
                {(api) => (
                  <>
                    <DatePicker.ViewControl>
                      <DatePicker.PrevTrigger asChild>
                        <IconButton type="button" variant="ghost" size="sm">
                          <ChevronLeft />
                        </IconButton>
                      </DatePicker.PrevTrigger>
                      <DatePicker.ViewTrigger asChild>
                        <Button type="button" variant="ghost" size="sm">
                          <div>
                            {`${api.visibleRange.start.year}/${api.visibleRange.start.month}`}
                          </div>
                        </Button>
                      </DatePicker.ViewTrigger>
                      <DatePicker.NextTrigger asChild>
                        <IconButton type="button" variant="ghost" size="sm">
                          <ChevronRight />
                        </IconButton>
                      </DatePicker.NextTrigger>
                    </DatePicker.ViewControl>
                    <DatePicker.Table>
                      <DatePicker.TableHead>
                        <DatePicker.TableRow>
                          {api.weekDays.map((weekDay, id) => (
                            // biome-ignore lint/suspicious/noArrayIndexKey: This is a static array
                            <DatePicker.TableHeader key={id}>
                              {weekDay.narrow}
                            </DatePicker.TableHeader>
                          ))}
                        </DatePicker.TableRow>
                      </DatePicker.TableHead>
                      <DatePicker.TableBody>
                        {api.weeks.map((week, id) => (
                          // biome-ignore lint/suspicious/noArrayIndexKey: This is a static array
                          <DatePicker.TableRow key={id}>
                            {week.map((day, id) => (
                              // biome-ignore lint/suspicious/noArrayIndexKey: This is a static array
                              <DatePicker.TableCell key={id} value={day}>
                                <DatePicker.TableCellTrigger asChild>
                                  <IconButton type="button" variant="ghost">
                                    {day.day}
                                  </IconButton>
                                </DatePicker.TableCellTrigger>
                              </DatePicker.TableCell>
                            ))}
                          </DatePicker.TableRow>
                        ))}
                      </DatePicker.TableBody>
                    </DatePicker.Table>
                  </>
                )}
              </DatePicker.View>
              <DatePicker.View view="month">
                {(api) => (
                  <>
                    <DatePicker.ViewControl>
                      <DatePicker.PrevTrigger asChild>
                        <IconButton type="button" variant="ghost" size="sm">
                          <ChevronLeft />
                        </IconButton>
                      </DatePicker.PrevTrigger>
                      <DatePicker.ViewTrigger asChild>
                        <Button type="button" variant="ghost" size="sm">
                          <DatePicker.RangeText />
                        </Button>
                      </DatePicker.ViewTrigger>
                      <DatePicker.NextTrigger asChild>
                        <IconButton type="button" variant="ghost" size="sm">
                          <ChevronRight />
                        </IconButton>
                      </DatePicker.NextTrigger>
                    </DatePicker.ViewControl>
                    <DatePicker.Table>
                      <DatePicker.TableBody>
                        {api.getMonthsGrid({ columns: 4, format: "short" }).map((months, id) => (
                          // biome-ignore lint/suspicious/noArrayIndexKey: This is a static array
                          <DatePicker.TableRow key={id}>
                            {months.map((month, id) => (
                              // biome-ignore lint/suspicious/noArrayIndexKey: This is a static array
                              <DatePicker.TableCell key={id} value={month.value}>
                                <DatePicker.TableCellTrigger asChild>
                                  <Button type="button" variant="ghost">
                                    {month.label}
                                  </Button>
                                </DatePicker.TableCellTrigger>
                              </DatePicker.TableCell>
                            ))}
                          </DatePicker.TableRow>
                        ))}
                      </DatePicker.TableBody>
                    </DatePicker.Table>
                  </>
                )}
              </DatePicker.View>
              <DatePicker.View view="year">
                {(api) => (
                  <>
                    <DatePicker.ViewControl>
                      <DatePicker.PrevTrigger asChild>
                        <IconButton type="button" variant="ghost" size="sm">
                          <ChevronLeft />
                        </IconButton>
                      </DatePicker.PrevTrigger>
                      <DatePicker.ViewTrigger asChild>
                        <Button type="button" variant="ghost" size="sm">
                          <DatePicker.RangeText />
                        </Button>
                      </DatePicker.ViewTrigger>
                      <DatePicker.NextTrigger asChild>
                        <IconButton type="button" variant="ghost" size="sm">
                          <ChevronRight />
                        </IconButton>
                      </DatePicker.NextTrigger>
                    </DatePicker.ViewControl>
                    <DatePicker.Table>
                      <DatePicker.TableBody>
                        {api.getYearsGrid({ columns: 4 }).map((years, id) => (
                          // biome-ignore lint/suspicious/noArrayIndexKey: This is a static array
                          <DatePicker.TableRow key={id}>
                            {years.map((year, id) => (
                              // biome-ignore lint/suspicious/noArrayIndexKey: This is a static array
                              <DatePicker.TableCell key={id} value={year.value}>
                                <DatePicker.TableCellTrigger asChild>
                                  <Button type="button" variant="ghost">
                                    {year.label}
                                  </Button>
                                </DatePicker.TableCellTrigger>
                              </DatePicker.TableCell>
                            ))}
                          </DatePicker.TableRow>
                        ))}
                      </DatePicker.TableBody>
                    </DatePicker.Table>
                  </>
                )}
              </DatePicker.View>
            </DatePicker.Content>
          </DatePicker.Positioner>
        </DatePicker.Root>
      </FormField>
      <SubmitButton>Save</SubmitButton>
    </form>
  );
}
