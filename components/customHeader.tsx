import Image from "next/image";
import { StaticImageData } from "next/image";
import { CustomHeaderProps } from "@/types";

const CustomHeader = ({ banner, title, summary}: CustomHeaderProps) => {
	return (
		<section className={`${banner ? "py-12" : "pt-12 pb-4"} padding-x flex flex-col gap-4`}>
			<h3 className="text-slate-800 font-bold uppercase text-center">{title}</h3>
			<h4 className="text-slate-600 font-medium text-center">{summary}</h4>
			{
				banner && (
				<div className="my-4 w-full mx-auto">
					<Image src={banner} priority alt="banner" className="w-full object-cover bg-slate-100" />
				</div>
				)
			}
		</section>
	);
};

export default CustomHeader;