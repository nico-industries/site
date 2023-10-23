import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[450px]">
        <CardHeader className="text-center">
          <CardTitle className="lg:text-7xl text-4xl">404</CardTitle>
          <CardDescription>
            The page you are looking for does not exist
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-center">
          <Button asChild variant="link">
            <Link href="/">Go Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
