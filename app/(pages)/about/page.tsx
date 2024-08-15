
import type { Metadata } from "next";
import Image from "next/image";
import CustomHeader from "@/components/customHeader";
import SectionHeading from "@/components/sectionHeading";
import TeamCard from "@/components/teamCard";
import Feature from "@/components/feature";
import banner from '@/public/assets/about-banner.jpg';
import missinFeatured from '@/public/assets/mission-featured-1.png';
import missinFeatured2 from '@/public/assets/mission-featured-2.png';
import { teamData } from "@/constants/data";
import { LawyerType } from "@/types";


export const metadata: Metadata = {
    title: "About us | Jurispro",
    description: "At Jurispro, we provide expert legal services with a commitment to personalized, client-focused solutions.",
  };
  

const About = () => {
	return (
		<div>
			<CustomHeader
			banner={banner}
			title={"Dedicated to Providing Exceptional Legal Services"}
			summary={"A professional team photo or an image reflecting the firm's values and mission"}
			/>
			<section className="py-12 padding-x bg-slate-200">
				<SectionHeading title="Our Mission" summary="Statement of the firm's mission and core values" />
				<div className="my-6 lg:my-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
					<div className="flex flex-col-reverse lg:flex-col gap-6">
						<p className="text-lg leading-8 text-slate-600 lg:w-[90%]">
							Our mission is to provide professional, reliable, and personalized legal services that empower our clients to achieve their goals and protect their interests. We strive to uphold the highest standards of integrity, excellence, and client satisfaction in all our endeavors
						</p>
						<div className="flex overflow-hidden rounded aspect-square">
							<Image className="w-full object-cover bg-slate-100" src={missinFeatured} alt="about-1"/>
						</div>
					</div>
					<div className=" flex flex-col gap-6">
						<div className="flex overflow-hidden rounded aspect-square">
							<Image className="w-full object-cover bg-slate-100" src={missinFeatured2} alt="about-2"/>
						</div>
						<SectionHeading summary="Our History" />
						<ul className="list-disc">
							<li className="flex-1 text-lg leading-8 text-slate-600 lg:w-[90%]">
								Founding: Example: "Founded in 1999 by Jane Doe, JurisPro started as a small boutique firm focused on corporate law."
							</li>
							<li className="flex-1 text-lg leading-8 text-slate-600 lg:w-[90%]">
								Growth: Example: "Over the years, we have expanded our practice areas to include real estate, healthcare, tax law, and more, becoming a full-service law firm."
							</li>
							<li className="flex-1 text-lg leading-8 text-slate-600 lg:w-[90%]">
							Milestones: Example: "In 2010, we were recognized as one of the top law firms in the region, and we continue to earn accolades for our dedication to client service
							</li>
						</ul>
					</div>
				</div>
			</section>
            {/* TEAM GRID */}
			<section className="py-12 padding-x">
				<span className="text-title">Meet our team</span>
				<div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
					{
						teamData.map((lawyer: LawyerType, index: number) => (
							<TeamCard key={index} lawyer={lawyer} />
						))
					}
				</div>
			</section>
			<div className="bg-slate-200"><Feature /></div>
		</div>
	);
};

export default About;