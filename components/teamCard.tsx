import { LawyerType } from "@/types";
import Image from "next/image";

interface TeamCardProps {
    lawyer: LawyerType
}


const TeamCard = ({ lawyer }: TeamCardProps) => {
	return (
		<div className="my-2">
			<div className="flex mb-2">
				<Image src={lawyer.image} alt={lawyer.name} className="w-full object-cover" />
			</div>
			<h5 className="text-xl text-slate-800 font-medium">{lawyer.name}</h5>
			<p className="text-sm text-slate-600">{lawyer.position}</p>
			<p className="text-sm text-slate-600">{lawyer.expertise}</p>
		</div>
	);
};

export default TeamCard;