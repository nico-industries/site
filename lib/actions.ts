"use server"

import prisma from "./db"

export async function addData(id: string, data: any) {
  console.log(data)
  await prisma.guild.update({
    where: {
      id: id,
    },
    data,
  })
}
