"use client"

import { useCurrentGuild } from "@/app/contexts/CurrentGuildContext"
import { FormControl } from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ChannelSelect({
  onChange,
  value,
}: {
  onChange: (value: string) => void
  value: string
}) {
  const { channels } = useCurrentGuild()
  const textChannels = channels.filter((channel) => channel.type === 0)
  return (
    <Select onValueChange={onChange} defaultValue={value}>
      <FormControl>
        <SelectTrigger>
          <SelectValue placeholder="Select a channel" />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {textChannels.map(({ id, name }) => (
          <SelectItem key={id} value={id}>
            #{name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
