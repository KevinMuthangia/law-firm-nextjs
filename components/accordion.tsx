"use client"
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

interface AccordionProps  {
    question: string;
    answer: string;
}

const Accordion = ({question, answer}: AccordionProps) => {
	const [isExtended, setIsExtended] = useState(false);

	return (
		<div className="relative faq-shadow rounded-lg overflow-hidden">
			<div onClick={() => setIsExtended(!isExtended)} className={`${isExtended && "bg-slate-200"} p-4  flex justify-between items-center cursor-pointer`}>
				<h4 className="text-slate-800 font-medium">{question}</h4>
				<BiChevronDown className={"text-2xl text-slate-800 duration-300"} style={{transform: `rotate(${isExtended ? 180 : 0}deg)`}} />
			</div>
			{
				isExtended && (
					<p className="py-6 px-4 text-sm text-slate-600">{answer}</p>
				)
			}
		</div>
	);
};

export default Accordion;