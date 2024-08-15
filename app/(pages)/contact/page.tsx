import type { Metadata } from "next";
import Contact from "@/components/contact";
import CustomHeader from "@/components/customHeader";
import banner from "@/public/assets/contact-banner.jpg";


export const metadata: Metadata = {
    title: "Contact us | Jurispro",
    description: "Get in touch with Jurispro through our Contact page. We offer multiple ways to reach us for consultations, inquiries, or support.",
  };
  

const ContactPage = () => {
	return (
		<div>
			<CustomHeader
				title={"Get in Touch with Us"}
				summary={"We're here to help with any legal inquiries or consultations"}
				banner={banner}
			/>
			<Contact />
		</div>
	);
};

export default ContactPage;