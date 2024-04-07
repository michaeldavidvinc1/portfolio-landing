"use client";

import Link from "next/link"
import { Button } from "./ui/button"
import { Download, Send } from "lucide-react"

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine
} from "react-icons/ri";

import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {


    const handleDownload = () => {
        // URL dari file CV yang ingin diunduh
        const cvUrl = 'http://localhost:3000/cv.pdf';

        // Membuat elemen <a> secara dinamis
        const link = document.createElement('a');
        link.href = cvUrl;

        // Menetapkan atribut unduh untuk memberi nama file yang diunduh
        link.setAttribute('download', 'CV.pdf');

        // Menambahkan elemen ke dalam dokumen dan melakukan klik
        document.body.appendChild(link);
        link.click();

        // Menghapus elemen setelah di klik
        document.body.removeChild(link);
    };

    return (
        <section className="py-12 xl:py-24 h-[92vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none ">
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    {/* Text */}
                    <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                        <div className="mb-4 text-sm font-semibold uppercase text-primary tracking-[4px]">Web Developer</div>
                        <h1 className="mb-4 h1">Hello, my name is Michael David Vinc</h1>
                        <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
                            Brief description with insights into myself, my vocational journey, and what i engage in professionally
                        </p>
                        {/* Button */}
                        <div className="flex flex-col mx-auto mb-12 gap-y-3 md:flex-row gap-x-3 xl:mx-0 ">
                            <Link href="/contact">
                                <Button className="gap-x-2">Contact me <Send size={18} /></Button>
                            </Link>
                            <Button variant="secondary" className="gap-x-2" onClick={() => handleDownload()}>Download CV <Download size={18} /></Button>
                        </div>
                        {/* Social */}
                        <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconsStyles='text-foreground text-[22px] hover:text-primary transition-all' />
                    </div>
                    {/* Image */}
                    <div className="relative hidden xl:flex">
                        {/* Badge 1 */}
                        <Badge containerStyles='absolute top-[24%] -left-[5rem]' icon={<RiBriefcase4Fill />} endCountNum={2} badgeText="Years 0f Exprience" />
                        {/* Badge 2 */}
                        <Badge containerStyles='absolute top-[55%] -right-8' icon={<RiTodoFill />} endCountNum={10} endCountText='+' badgeText="Finished Projects" />
                        {/* Badge 3 */}
                        <div className="bg-hero-shape2_light dark:bg-hero-shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
                        <DevImg containerStyles='bg-hero-shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom' imgSrc='/hero1.png' />
                    </div>
                </div>
                {/* icons */}
                <div className="absolute hidden md:flex left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                    <RiArrowDownSLine className="text-3xl text-primary" />
                </div>
            </div>
        </section>
    )
}

export default Hero
