"use client"
import { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTop = () => {
	const [hidden, setHidden] = useState(true)
	function handleScrollToTop() {
		window.scrollTo(0, 0)
	};

	function h () {
		if(window.scrollY > 70) {
			setHidden(false)
		} else {
			setHidden(true)
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", h);

		return () => {
			window.removeEventListener("scroll", h)
		}
	}, [])

	return (
		<div>
			<button 
				onClick={handleScrollToTop} 
				className={`${ hidden ? "-right-[200px]" : "right-[1%]"}  fixed z-50 bottom-12 bg-blue-500 text-white w-12 h-12 flex justify-center items-center duration-200`}>
				<FaAngleUp className="text-xl" />
			</button>
		</div>
	);
};

export default ScrollToTop