interface SectionHeadingProps {
    title?: string;
    summary: string
}

const SectionHeading = ({ title, summary }: SectionHeadingProps) => {
	return (
        <>
            { title && <span className="text-title">{title}</span>}
            <div className="relative my-4 flex items-center">
                <div className="absolute z-10 top-0 bottom-0 w-[0.125rem] rounded-sm bg-blue-400 "></div>
                <h2 className="ml-4 text-slate-900 capitalize lg:w-3/4">
                    {summary}
                </h2>
            </div>
        </>
	);
};

export default SectionHeading;