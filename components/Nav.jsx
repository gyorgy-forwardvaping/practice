import Image from "next/image";
import Link from "next/link";
import logo from '@/public/31343C.svg'
export default function Nav() {
    /**
     * logo
     * space
     * categories
     * latest
     * (search?)
     */
    return (
        <nav className="flex content-center border-b-4 border-b-gray-100 h-14 bg-slate-600">
            <Image
                src={logo}
                width={200}
                height={56}
                alt="logo"></Image>
            <span className="w-24"></span>
            <Link className="w-24 mr-2 leading-[3.5] bg-gray-100 text-center h-14" href={"/"}>Categories</Link>
            <Link className="w-24 mr-2 leading-[3.5] bg-gray-100 text-center h-14" href={"/"}>Latest</Link>
        </nav >
    )
}