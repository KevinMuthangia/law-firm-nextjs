import Image from "next/image";
import { TeamCardProps } from "@/types";



const TeamCard = ({ lawyer }: TeamCardProps) => {
	return (
		<div className="my-2">
			<div className="flex mb-2">
				<Image src={lawyer.image} alt={lawyer.name} className="w-full object-cover bg-slate-100" />
			</div>
			<h5 className="text-xl text-slate-800 font-medium">{lawyer.name}</h5>
			<p className="text-sm text-slate-600">{lawyer.position}</p>
			<p className="text-sm text-slate-600">{lawyer.expertise}</p>
		</div>
	);
};

export default TeamCard;