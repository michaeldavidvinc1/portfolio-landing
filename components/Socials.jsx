'use client';

import {
    RiYoutubeFill, 
    RiLinkedinFill,
    RiGithubFill,
    RiFacebookFill,
    RiInstagramFill
} from "react-icons/ri";
import Link from "next/link";

const icons = [
    {
        path: 'https://www.linkedin.com/in/michael-david-vinc-9b096a210/',
        name: <RiLinkedinFill />
    },
    {
        path: 'https://github.com/michaeldavidvinc1',
        name: <RiGithubFill />
    },
]

const Socials = ({ containerStyles, iconsStyles }) => {
    return (
        <div className={`${containerStyles}`}>
            {icons.map((icon, index) => {
                return (
                    <Link href={icon.path} key={index} target="_blank">
                        <div className={`${iconsStyles}`}>{icon.name}</div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Socials
