'use client'
import Link from "next/link";
import { routes } from "@/config/routes";
import { usePathname } from "next/navigation";

export default function MenuHome() {

    const pathname = usePathname();

    const textStyle = 'block rounded md:p-0 hover:text-green-500';

    const textSelected = 'md:underline md:underline-offset-8 text-green-500';

    function isActived(href: string) {
        return pathname === href ? textSelected : '';
    }

    return (
        <ul className="font-normal flex flex-col text-sm text-gray-400 lg:text-black p-2 gap-0 lg:p-0 lg:flex-row lg:space-x-6 rtl:space-x-reverse lg:mt-0 lg:border-0">
            {
                routes.map((route, index) => (
                    <li key={index} className="border-b border-gray-500 py-6 lg:border-none lg:py-0 uppercase">
                        <Link href={route.path} className={`transition-all ${textStyle} ${isActived(route.path)}`} aria-current="page">
                            {route.label}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}