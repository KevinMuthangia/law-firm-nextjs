import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Feature from "@/components/feature";
import ServicesGrid from "@/components/servicesGrid";
import SectionHeading from "@/components/sectionHeading";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/contact";
import hero from '@/public/assets/hero.jpg';
import aboutFeatured1 from "@/public/assets/about-featured.jpg";
import aboutFeatured2 from "@/public/assets/about-featured-2.jpg";


export const metadata: Metadata = {
  title: "Home | Jurispro",
  description: "At Jurispro, our success is driven by the expertise, dedication, and passion of our legal professionals. Each member of our team brings a unique set of skills and experience, ensuring that we provide top-tier legal representation tailored to your needs.",
};


export default function Home() {
  return (
    <main>
      <section className="padding-x py-6 my-6 lg:my-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* -------------HERO------------ */}
        <div className="flex justify-center flex-col gap-4">
          <h1 className="text-slate-800 font-bold lg:w-2/3">Elevating  Legal Standards</h1>
          <p className="text-lg text-slate-600 font-medium lg:w-2/3">Your Trusted Partner in Finance & Business Law for 25+ Years </p>
        <div>
          <Link href='/contact' className="inline-block py-3 px-2 rounded-md text-lg text-[#fcfcfc] bg-slate-800">Book Free Consultation</Link>
          </div>
        </div>
        <div className="flex overflow-hidden rounded">
          <Image className="w-full bg-slate-100" width={500} height={500} priority src={hero} alt="hero" />
        </div>
      </section>
      {/* -------------ABOUT US------------ */}
      <section className="py-12 padding-x bg-slate-200">
        <SectionHeading title="about us" summary="Delivering Professional Legal Services Tailored to You" />
        <div className="my-6 lg:my-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col-reverse lg:flex-col gap-6">
            <p className="text-lg leading-8 text-slate-600 lg:w-[90%]">
              At JurisPro, our focus is crystal clear: delivering exceptional legal services tailored to the dynamic needs of our clients in finance and business. With over 25 years of experience, our team is dedicated to professionalism, providing personalized solutions and unwavering support. We believe in collaborative partnerships, guiding clients through intricate legal landscapes with integrity and diligence.
            </p>
            <div className="flex overflow-hidden rounded aspect-square">
              <Image className="w-full bg-slate-100" src={aboutFeatured1} alt="about-1"/>
            </div>
          </div>
          <div className=" flex flex-col gap-6">
            <div className="flex overflow-hidden rounded aspect-square">
              <Image className="w-full object-cover object-top bg-slate-100" src={aboutFeatured2} alt="about-2"/>
            </div>
            <p className="flex-1 text-lg leading-8 text-slate-600 lg:w-[90%]">
              JurisPro is your trusted ally in the legal arena of finance and business. With a steadfast commitment to professionalism, we offer tailored solutions to complex legal challenges. Backed by over 25 years of experience, our team is dedicated to your success, providing unwavering support and expertise every step of the way
            </p>
          </div>
        </div>
      </section>
      <Feature />
      <section className="py-12 padding-x bg-slate-200">
        <SectionHeading title='practice area' summary='A wide range of legal services to solve ant Legal Issues' />
        <ServicesGrid />
		  </section>
      <Testimonials />
      <Contact />
    </main>
  );
}
