"use client";
import Link from "next/link";
import {
	Navbar,
	NavbarBrand,
	NavbarCollapse,
	NavbarLink,
	NavbarToggle,
} from "flowbite-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { menuList } from "./menu";
import '@/app/globals.css'
type MenuItem = {
	name: string;
	path: string;
	active: boolean;
};
export default function NavbarComponent() {
	const pathname = usePathname();
	const [menu, setMenu] = useState<MenuItem[]>(menuList);

	// const updateMenu = (path: string) => {
	// 	const newMenu = menu.map((item) => {
	// 		if(path=== item.path){
	// 			return {
	// 				...item,
	// 				active: true
	// 			}
	// 		}else{
	// 			return {
	// 				...item,
	// 				active: false
	// 			}
	// 		}
	// 	})

	// 	setMenu(newMenu)
	// }
	return (
		<Navbar fluid rounded className="w-full h-16 bg-[#F0EFEC] fixed z-30 top-0 start-0 p-4">
			<NavbarBrand as={Link} href="https://flowbite-react.com">
				<img
					src="./icon.png"
					className="mr-3 h-6 sm:h-9"
					alt="Flowbite React Logo"
				/>
				<span className="self-center text-[#2B2B2B] whitespace-nowrap text-2xl font-semibold dark:text-white">
					Shoos
				</span>
			</NavbarBrand>
			<NavbarToggle/>
			<NavbarCollapse className="text-xl font-semibold mr-3 text-[#2B2B2B]">
				{menu.map((item, index) => (
					<NavbarLink
					key={index}
						as={Link}
						href={item.path}
						active={item.path === pathname}
					>
						{item.name}
					</NavbarLink>
				))}
			</NavbarCollapse>
		</Navbar>
	);
}
