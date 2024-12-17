import { Button } from "@/components/ui/button"
import { TiThMenu } from "react-icons/ti";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link  from "next/link"
import NavMenu from "./NavMenu";
const SHEET_SIDES = ["left"] as const 
type Sheet2 = (typeof SHEET_SIDES)[number]
export default function Sheet2() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="block md:hidden text-2xl">
          <TiThMenu className="text-4xl"/>
          </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle> <p className='text-xl sm:text-4xl font-bold justify-center items-center text-center mb-2'
      >SHOP.CO</p></SheetTitle>
        </SheetHeader>
        <ul>
          <li className='grid grid-cols-1 gap-y-4'>
            <Link href={""} className="-ml-4"><NavMenu /></Link>
            <Link href={""}>On Sale</Link>
            <Link href={""}>New Arrivals</Link>
            <Link href={""}>Brands</Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  )
}
