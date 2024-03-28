"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "./ui/textarea"
import ChannelSelect from "./form/ChannelSelect"
import { addData } from "@/lib/actions"
import { Guild } from "@prisma/client"

const FormSchema = z.object({
  welcomeChannel: z.string(),
  welcomeMessage: z.string().min(2),
})

export default function WelcomeForm({ guild }: { guild: Guild }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      welcomeChannel: guild.welcomeChannel ?? undefined,
      welcomeMessage: guild.welcomeMessage ?? undefined,
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
    await addData(guild.id, data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="welcomeChannel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Welcome channel</FormLabel>
              <ChannelSelect {...field} />
              <FormDescription>Select a channel</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="welcomeMessage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Welcome message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Message"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                The message that will be sent to the welcome channel
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Save</Button>
      </form>
    </Form>
  )
}
