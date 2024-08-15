import { StaticImageData } from "next/image";

export type ServiceType = {
    title: string,
    image: StaticImageData,
    summary: string,
    link: string,
}

export type FeatureType = {
    title: string,
    text: string
}

export type TestimonialType = {
    name: string,
    text: string,
    date: string
}

export type LawyerType = {
    name: string,
    image: StaticImageData,
    position: string,
    expertise: string
}

export type FAQType = {
    question: string,
    answer: string
}