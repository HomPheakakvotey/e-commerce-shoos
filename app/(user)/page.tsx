"use client";
import { BackgroundBoxes } from "@/components/BackgroundBoxes";
import CardProduct from "@/components/card/CardComponent";
import CarouselComponent from "@/components/feature/Carousel";
import Sponsor from "@/components/sponsor/Sponsor";
import WhyChooseUs from "@/components/why/Why";


import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ENDPOINT = "https://store.istad.co/api/products/";

export default function Home() {
	const [products, setProducts] = useState([]);
	const router = useRouter();

	useEffect(() => {
		fetch(ENDPOINT)
			.then((res) => res.json())
			.then((data) => setProducts(data.results));
	}, []);
	return (
		<div>
		<BackgroundBoxes/>
		<Sponsor/>
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[18px] p-[50px] leading-7 mx-auto">
			{products.map((product: any, index) => (
				<CardProduct
					onClick={() => router.push(`/home/${product.id}`)}
					key={index}
					name={product.name}
					image={product.image}
					price={product.price}
				/>
			))}
		</div>
		<p className='p-[20px] md:text-[20px] text-center sm:text-base lg:text-[26px] font-semibold mt-12'>FEATURES</p>
      	<hr className='bg-[#2b2b2b] border-none h-[1px] w-[50%] mx-auto'/>
		<CarouselComponent/>
		<p className='p-[20px] md:text-[20px] text-center sm:text-base lg:text-[26px] font-semibold mt-12'>WHY CHOOSE US?</p>
      	<hr className='bg-[#2b2b2b] border-none h-[1px] w-[50%] mx-auto'/>
		<WhyChooseUs/>
		
		</div>
	);
}
