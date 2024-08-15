import { practiceAreaData } from "@/constants/data";
import { ServiceType } from "@/types";
import Image from "next/image";
import Link from 'next/link';

interface ServiceProps {
    service: ServiceType
}

const Service = ({ service }: ServiceProps) => {
	return (
		<div className="p-8 border border-slate-300 target-chil">
			<h5 className="mb-4 uppercase font-medium text-slate-800">{service.title}</h5>
			<div className="flex">
				<Image src={service.image} alt={service.title} className="w-full object-cover" />
			</div>
			<p className="my-2 text-sm text-slate-600">{service.summary}</p>
			{/* MAKE SERVIVCE DETAILS PAGE */}
			<Link className="text-sm text-blue-400 hover:underline" href='#'>Know more...</Link>
		</div>
	);
};

const ServicesGrid = () => {
	return (
		<div className="my-6 lg:my-12 grid grid-cols-1 lg:grid-cols-3">
			{
				practiceAreaData.map((service: ServiceType, index: number) => (
					<Service key={index} service={service} />
				))
			}
		</div>
	);
};

export default ServicesGrid;