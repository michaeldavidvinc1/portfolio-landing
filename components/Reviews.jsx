'use client';

import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

const reviewsData = [
    {
        avatar: '/reviews/avatar-1.png',
        name: 'Richart Thompson',
        job: 'Chef',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, tempora.'
    },
    {
        avatar: '/reviews/avatar-2.png',
        name: 'Richart Thompson',
        job: 'Chef',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, tempora.'
    },
    {
        avatar: '/reviews/avatar-3.png',
        name: 'Richart Thompson',
        job: 'Chef',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, tempora.'
    },
    {
        avatar: '/reviews/avatar-4.png',
        name: 'Richart Thompson',
        job: 'Chef',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, tempora.'
    },
    {
        avatar: '/reviews/avatar-5.png',
        name: 'Richart Thompson',
        job: 'Chef',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, tempora.'
    },
    {
        avatar: '/reviews/avatar-6.png',
        name: 'Richart Thompson',
        job: 'Chef',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, tempora.'
    },
]

const Reviews = () => {
    return (
        <section className="mb-12 xl:mb-32">
            <div className="container mx-auto">
                <h2 className="mx-auto mb-12 text-center section-title">Reviews</h2>
                    {/* slider */}
                    <Swiper slidesPerView={1} breakpoints={{ 
                        640: {slidesPerView: 2},
                        1400: {slidesPerView: 3},
                    }} spaceBetween={30} modules={[Pagination]} pagination={{ clickable: true }} className="h-[350px]">
                        {reviewsData.map((person, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Card className='p-8 bg-tertiary dark:bg-secondary/40 min-h-[300px]'>
                                        <CardHeader className='p-0 mb-10'>
                                            <div className="flex items-center gap-x-4">
                                                <Image src={person.avatar} width={70} height={70} alt="" priority />
                                                <div className="flex flex-col">
                                                    <CardTitle>{person.name}</CardTitle>
                                                    <p>{person.job}</p>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardDescription className='text-lg text-muted-foreground'>{person.review}</CardDescription>
                                    </Card>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
            </div> 
        </section>
    )
}

export default Reviews
