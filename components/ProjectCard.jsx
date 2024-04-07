import Link from "next/link"
import Image from "next/image"
import { Card, CardHeader } from "./ui/card"
import { Github, Link2Icon } from "lucide-react"
import { Badge } from "./ui/badge"

const ProjectCard = ({ project }) => {
    return (
        <Card className='relative overflow-hidden group'>
            <CardHeader className='p-0'>
                <div className="relative w-full h-[300px] flex justify-center items-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%] xl:dark:bg-work_project_bg_dark xl:bg-no-repeat overflow-hidden">
                    <Image className="absolute shadow-2xl" src={project.image} width={347} height={350} alt="" priority />
                    <div className="flex gap-x-4">
                        {project.link && (    
                            <Link target="_blank" href={project.link} className="bg-secondary w-[42px] h-[42px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200">
                                <Link2Icon className="text-white" />
                            </Link>
                        )}
                        <Link target="_blank" href={project.github} className="bg-secondary w-[42px] h-[42px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                            <Github className="text-white" />
                        </Link>
                    </div>
                </div>
            </CardHeader>
            <div className="h-full px-8 py-6">
                <Badge className='absolute mb-2 text-sm font-medium uppercase top-4 left-5'>{project.status}</Badge>
                <h4 className="mb-1 h4">{project.name}</h4>
                <p className="text-lg text-muted-foreground">{project.description}</p>
            </div>
        </Card>
    )
}

export default ProjectCard
