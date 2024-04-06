
import { Carousel } from "flowbite-react";

export default function CarouselComponent() {
  return (
    <div className=" my-14 sm:h-64 xl:h-80 2xl:h-96 rounded-lg gap-[18px] p-[50px] leading-7 mx-auto">
      <Carousel>
        <img src="https://img.ltwebstatic.com/images3_ccc/2024/03/05/92/17096070209ce01a5af82a53fb9f1cab095d9ceb19_thumbnail_2000x.webp" alt="..."/>
        <img src="https://img.ltwebstatic.com/images3_ccc/2024/03/05/4c/17096070403be04ce6c7e7e43d7e524cb6fa31f68a_thumbnail_2000x.webp" alt="..." />
        <img src="https://img.ltwebstatic.com/images3_ccc/2024/03/05/e1/1709607030b18c1302c07baab532f937bbf82b11ce_thumbnail_2000x.webp" alt="..." />
        <img src="https://img.ltwebstatic.com/images3_ccc/2024/03/05/91/170960700941e5bba5f280708d2e1751997cf8daca_thumbnail_2000x.webp" alt="..." />
      </Carousel>
    </div>
  );
}
