import { FeatureType } from "@/types";
import { featureData } from "../constants/data";


interface FeatureItemProps {
    title: string;
    text: string
}


const FeatureItem = ({title, text}: FeatureItemProps) => {
	return (
		<div className="flex flex-col gap-4">
			<h4 className="uppercase font-bold text-slate-800">{title}</h4>
			<p className="text-sm leading-7 text-slate-600 lg:w-[90%]">{text}</p>
		</div>
	);
};

const Feature = () => {
	return (
		<div className="padding-x py-6 lg:py-12 border-y border-slate-300 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
			{
				featureData.map((item: FeatureType, index: number) => (
					<FeatureItem
						key={index}
						title={item.title}
						text={item.text}
					/>
				))
			}
		</div>
	);
};

export default Feature;