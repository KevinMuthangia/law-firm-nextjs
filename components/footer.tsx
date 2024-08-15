import logo from '@/public/assets/logo-dark.svg';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="padding-x py-6 lg:py-12 bg-slate-800">
			<div className="pb-8 flex flex-col lg:flex-row justify-center items-center lg:justify-between gap-4  border-b border-blue-400">
				<div className="flex-center">
                    {/* ---------LOGO-------------- */}
					<Link href='/'><Image src={logo} alt="Jurispro" className='w-full object-cover' /></Link>
				</div>
				<ul className='flex flex-col lg:flex-row justify-end items-center gap-4'>
					<li className='text-lg text-[#fcfcfc] hover:text-blue-400'><Link href='/team'>Our Lawyers</Link></li>
					<li className='text-lg text-[#fcfcfc] hover:text-blue-400'><Link href='/services'>Practice Areas</Link></li>
					<li className='text-lg text-[#fcfcfc] hover:text-blue-400'><Link href='/about'>About Us</Link></li>
					<li className='text-lg text-[#fcfcfc] hover:text-blue-400'><Link href='/faq'>FAQ</Link></li>
					<li className='text-lg text-[#fcfcfc] hover:text-blue-400'><Link href='/contact'>Contact</Link></li>
				</ul>
			</div>
			<div className='my-6 lg:my-12 flex flex-col-reverse items-start lg:items-center lg:flex-row gap-6 lg:gap-4'>
				<div className='flex-1 order-1 lg:order-1'>
					<p className='text-lg text-[#eeeeee]'>ADDRESS: 282 N. glenwood street, levittown, NY</p>
					<p className='text-lg text-[#eeeeee]'>Monday - Friday: 10:00 - 6:00 PM</p>
				</div>
				<div className='my-6 lg:my-0 flex-1 flex  flex-col gap-4 order--1 lg:order-1'>
					<div className='flex lg:justify-center items-start gap-4'>
						<FaFacebookF className='text-xl lg:text-3xl text-[#eeeeee] hover:text-blue-400' />
						<FaLinkedinIn className='text-xl lg:text-3xl text-[#eeeeee] hover:text-blue-400' />
						<FaTwitter className='text-xl lg:text-3xl text-[#eeeeee] hover:text-blue-400' />
					</div>
					<p className='text-sm text-center text-[#eeeeee] '>© 2024 - Jurispro All Rights Reserved</p>
				</div>
				<div className='flex-1 flex flex-col-reverse lg:flex-col items-end gap-1 lg:gap-4 order--1 lg:order-1'>
					<p className='text-lg text-[#eeeeee] hover:text-blue-400'><a href='mailto:info@jurispro.com'>info@jurispro.com</a></p>
					<p className='text-lg text-[#eeeeee] hover:text-blue-400'><a href='tel:+1 712- 332- 6543'>+1 712- 332- 6543</a></p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;