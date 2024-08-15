"use client"
import { testimonialData } from "@/constants/data";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { TestimonialType } from "@/types";

interface TestimonyProps {
    name: string
    text: string
    date: string
}

const Testimony = ({ name, text, date }: TestimonyProps) => {
	return (
		<div className="relative flex justify-start items-center">
			<div className="absolute z-10 top-0 bottom-0 w-[.125rem] bg-blue-400"></div>
			<div className="ml-4 text-left">
				<h3 className="text-slate-800">"{text}"</h3>
				<p className="mt-4  text-lg text-blue-400 capitalize">{name}</p>
				<p className=" text-sm text-slate-600 uppercase">{date}</p>
			</div>
		</div>
	);
};

const Testimonials = () => {
	return (
		<section className="py-6 lg:py-12 padding-x">
			<span className="text-title">Testimonials</span>
			<div className="py-12">
				<Carousel infiniteLoop={true} autoPlay={true} showThumbs={false} showStatus={false} showIndicators={false} stopOnHover={true} >
					{
						testimonialData.map((testimony: TestimonialType, index: number) => (
							<Testimony
								key={index}
								name={testimony.name}
								text={testimony.text}
								date={testimony.date}
							/>
						))
					}
				</Carousel>
			</div>
		</section>
	);
};

export default Testimonials;