import type { Metadata } from "next";
import CustomHeader from "@/components/customHeader";
import ServicesGrid from "@/components/servicesGrid";


export const metadata: Metadata = {
    title: "Practice Areas | Jurispro",
    description: "Explore our diverse practice areas at Jurispro, where we offer expert legal solutions in list of specific practice areas like family law, criminal defense, real estate, business law, etc. Each area is handled by experienced attorneys dedicated to achieving the best outcomes for our clients."
  };

const  PracticeArea = () => {
	return (
		<div>
			<CustomHeader 
			title={"Practice area"} 
			summary={"A professional team photo or an image reflecting the firm's values and mission"} 
			/>
			<div className=" padding-x pb-12"><ServicesGrid /></div>
		</div>
	);
};

export default  PracticeArea;