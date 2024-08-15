import type { Metadata } from "next";
import { LawyerType } from "@/types";
import { teamData } from "@/constants/data";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/contact";
import CustomHeader from "@/components/customHeader";
import TeamCard from "@/components/teamCard";
import banner from '@/public/assets/team-banner.jpg';

export const metadata: Metadata = {
    title: "Our Lawyers | Jurispro",
    description: "Meet our experienced team at Jurispro, delivering expert, personalized legal solutions with dedication."
  };

const Team = () => {
	return (
		<main>
			<CustomHeader
			title={"Meet Our Expert Legal Teams"}
			summary={"Dedicated Professionals Committed to Your Success"}
			banner={banner}
			/>
			<section className="padding-x py-4">
				<span className="text-title">Meet our team</span>
				<div className="my-6 grid grid-cols-1 lg:grid-cols-4 gap-4">
					{
						teamData.map((lawyer: LawyerType, index: number) => (
							<TeamCard key={index} lawyer={lawyer} />
						))
					}
				</div>
			</section>
			<Testimonials />
			<Contact />
		</main>
	);
};

export default Team;