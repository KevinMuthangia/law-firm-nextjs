import type { Metadata } from 'next';
import { FAQType } from '@/types';
import Link from 'next/link';
import  Accordion from "@/components/accordion";
import CustomHeader from '@/components/customHeader';
import { faqData } from "@/constants/data";

export const metadata: Metadata = {
    title: "FAQs | Jurispro",
    description: "Find answers to your legal questions on our FAQ page at Jurispro. We cover common concerns and provide clarity on our services, processes, and how we can assist you.",
  };

const FAQ = () => {
	return (
		<div>
			<CustomHeader
			title={"Frequently Asked Questions"}
			summary={"Find Answers to Your Most Common Questions"}
			/>
			<section className="pb-12 padding-x grid grid-cols-1 gap-4 lg:gap-6">
				{
					faqData.map((faq: FAQType, index: number) => (
						<Accordion key={index} question={faq.question} answer={faq.answer} />
					))
				}	
			</section>
			<div className="py-12 padding-x bg-slate-200">
				<h3 className="text-slate-800 font-bold">Still have questions?</h3>
				<div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
					<p className="text-lg text-slate-600">Still have question in mind? Please get in touch with our support team or write us an email.</p>
					<Link href={'/contact'} className="p-2 text-lg text-slate-800 rounded-lg capitalize border border-slate-600">contact us</Link>
				</div>
			</div>
		</div>
	);
};

export default FAQ