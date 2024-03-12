'use client';
import Link from "next/link";
import { Button } from "./ui/button";

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectCard from "./ProjectCard";

const projectData = [
    {
        image: '/work/3.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, corrupti.',
        link: '/',
        github: '/'
    },
    {
        image: '/work/4.png',
        category: 'react js',
        name: 'Evolve Website',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, corrupti.',
        link: '/',
        github: '/'
    },
    {
        image: '/work/1.png',
        category: 'react js',
        name: 'Sela Website',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, corrupti.',
        link: '/',
        github: '/'
    },
    {
        image: '/work/2.png',
        category: 'react js',
        name: 'Oping Website',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, corrupti.',
        link: '/',
        github: '/'
    },
]

const Work = () => {
    return (
        <section className="relative mb-12 xl:mb-48">
            <div className="container mx-auto">
                {/* text */}
                <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                    <h2 className="mb-4 section-title">Latest Projects</h2>
                    <p className="mb-8 subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Link href='/projects'>
                        <Button>All Projects</Button>
                    </Link>
                </div>
                {/* slider */}
                <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
                    <Swiper className="h-[480px]" slidesPerGroup={1} breakpoints={{ 
                        640: {
                            slidesPerView: 2
                        }
                    }} spaceBetween={30} modules={[Pagination]} pagination={{ clickable: true }}>
                        {projectData.slice(0.4).map((project, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProjectCard project={project} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Work
