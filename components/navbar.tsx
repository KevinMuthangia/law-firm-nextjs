"use client"
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { RxHamburgerMenu } from 'react-icons/rx';
import { usePathname } from 'next/navigation';
import logo from '@/public/assets/logo.svg';
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";


interface NavLinksProps {
    closeMenu?: () => void;
    title: string;
    link: string;
    selected: boolean;
}

const NavbarLinks = ({closeMenu, title, link, selected}: NavLinksProps) => {
	return	(
		selected 
		? <li onClick={closeMenu} className="text-blue-400 font-bold text-xl"><Link href={link}>{title}</Link></li>
		:  <li onClick={closeMenu} className="lg:text-[#475569] text-white hover:text-blue-400 text-xl font-medium"><Link href={link}>{title}</Link></li>
	)
};

const Navbar = () => {
	const pathname = usePathname();
  
	
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [links, setLinks] = useState([
		{title: 'Home', link: '/', selected: true},
		{title: 'Our Lawyers', link: '/team', selected: false},
		{title: 'Practice Areas', link: '/services', selected: false},
		{title: 'About us', link: '/about', selected: false},
		{title: 'FAQ', link: '/faq', selected: false},
		{title: 'Contact', link: '/contact', selected: false},
	]);

	useEffect(() => {
		setLinks((prevLinks) => {
			return prevLinks.map((link) => {
				if (link.link === pathname) {
					return { ...link, selected: true };
				} else {
					return { ...link, selected: false };
				}
			});
		});

	}, [pathname]);

	return (
		<nav>
			<div className="flex--between padding-x py-4 lg:py-8 border-b border-slate-200">
				<ul className="hidden lg:flex items-center gap-4">
					<li className="cursor-pointer text-slate-600"><FaFacebookF className="text-xl" /></li>
					<li className="cursor-pointer text-slate-600"><FaLinkedinIn className="text-xl" /></li>
					<li className="cursor-pointer text-slate-600"><FaTwitter className="text-xl" /></li>
				</ul>
                {/* -------------LOGO------ */}
				<Link href='/'><Image className="w-24 lg:w-full" src={logo} alt="jurispro" priority /></Link>
				<Link href='/contact' className="hidden lg:flex text-xl text-slate-600 font-medium">Call us</Link>
				<RxHamburgerMenu onClick={() => setIsMobileMenuOpen(true)} className="text-2xl text-slate-600 lg:hidden cursor-pointer" />
			</div>
			{/* -------------DESKTOP MENU------------------- */}
			<div className="bg-slate-200 padding-x py-4 hidden lg:flex justify-center items-center w-full border-b border-slate-200">
				<ul className="flex gap-6 ">
					{
						links.map((link, index) => (
							<NavbarLinks key={index} selected={link.selected} link={link.link} title={link.title} />
						))
					}
				</ul>
			</div>
			{/* -------------MOBILE MENU------------------- */}
                <div className={`${isMobileMenuOpen ? 'slide-in-right' : 'slide-out-right'}  lg:hidden p-2 fixed z-50 top-0 bg-slate-800 w-[250px] md:w-[300px] h-screen duration-500 ease-in`}>
                    <AiOutlineClose onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-[#fcfcfc] cursor-pointer" />
                    <ul className="mt-6 px-4 flex flex-col gap-6">
                        {
                            links.map((link, index) => (
                                <NavbarLinks closeMenu={() => setIsMobileMenuOpen(false)} key={index} selected={link.selected} link={link.link} title={link.title} />
                            ))
                        }
                    </ul>
                </div>
		</nav>
	);
};

export default Navbar;