'use client';
import React, {useState} from "react";
import { Tabs, TabsContent, TabsList,TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

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

const uniqueCategories = [
    'all projects', ...new Set(projectData.map((item) => item.category))
]

const Projects = () => {

    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setCategory] = useState('all projects');

    const filteredProjects = projectData.filter((project) => {
        return category === 'all projects' ? project : project.category === category
    });

    return (
        <section className='min-h-screen pt-12'>
            <div className="container mx-auto">
                <h2 className="mx-auto mb-8 text-center section-title xl:mb-16">My Projects</h2>
                <Tabs defaultValue={category} className="mb-24 xl:mb-48">
                    <TabsList className='grid w-full h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
                        {categories.map((category, index) => {
                            return <TabsTrigger onClick={() => setCategory(category)} value={category} key={index} className='capitalize w-[162px] md:w-auto'>{category}</TabsTrigger>
                        })}
                    </TabsList>
                    <div className="grid grid-cols-1 gap-4 text-lg xl:mt-8 lg:grid-cols-3">
                        {filteredProjects.map((project, index) => {
                            return (
                                <TabsContent value={category} key={index}>
                                    <ProjectCard project={project} />
                                </TabsContent>
                            )
                        })}
                    </div>
                </Tabs>
            </div>
        </section>
    )
}

export default Projects
