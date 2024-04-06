import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { BackgroundBoxes } from "@/components/BackgroundBoxes";
import NavbarComponent from "@/components/navBar/NavBarComponent";
import  FooterComponent  from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Shoos",
	description: "Shoos Web is a web application for selling products.",
	openGraph: {
		title: "Shoos Ecommerce Web",
		description:
			"Shoos Ecommerce Web is a web application for selling products.",
		images: "https://store.istad.co/media/brand_images/sokea_AF6QosU.jpg",
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#F0EFEC]">
        <header>
        <NavbarComponent/>
        </header>
        {children}
        <FooterComponent/>
      </body>
    </html>
  );
}
