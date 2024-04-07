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
        image: '/project/airbnb-clone.png',
        category: 'next js',
        name: 'Stay Sync',
        description: 'Next JS, MongoDB, Cloudinary, Typescript',
        link: 'https://staysync-ashen.vercel.app',
        github: 'https://github.com/michaeldavidvinc1/airbnb-clone',
        status: 'Online'
    },
    {
        image: '/project/messanger-clone.png',
        category: 'next js',
        name: 'ChatterBox',
        description: 'Next JS, MongoDB, Cloudinary, Typescript, Pusher',
        link: 'https://chatterbox-sable.vercel.app/',
        github: 'https://github.com/michaeldavidvinc1/messager-clone',
        status: 'Online'
    },
    {
        image: '/project/thread-clone.png',
        category: 'react js',
        name: 'Thread Clone',
        description: 'React JS, Node JS, MongoDb, Express Js',
        link: '',
        github: 'https://github.com/michaeldavidvinc1/thread-clone-frontend',
        status: 'Offline'
    },
    {
        image: '/project/estateease.png',
        category: 'react js',
        name: 'Estate Ease',
        description: 'React JS, Node JS, MongoDb, Express Js',
        link: '',
        github: 'https://github.com/michaeldavidvinc1/estate-app-frontend',
        status: 'Offline'
    },
    {
        image: '/project/librasync.png',
        category: 'laravel',
        name: 'LibraSync',
        description: 'Laravel, Livewire, Mysql',
        link: '',
        github: 'https://github.com/michaeldavidvinc1/library-laravel-livewire',
        status: 'Offline'
    },
]

const Work = () => {
    return (
        <section className="relative mb-12 xl:mb-48">
            <div className="container mx-auto">
                {/* text */}
                <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                    <h2 className="mb-4 section-title">Latest Projects</h2>
                    <p className="mb-8 subtitle">The last project worked on.</p>
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
