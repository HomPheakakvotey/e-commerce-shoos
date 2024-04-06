import About from '@/components/about/About'
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: "About Us",
  description: "About Us of Shoos",
  openGraph: {
    type: "website",
    url: "https://istad.co",
    title: "Shoos",
    description: "About Us of Shoos",
    images: "https://www.istad.co/resources/img/CSTAD_120.png",
  },
};

export default function about() {
  return (
    <div>
      <About/>
    </div>
  )
}
