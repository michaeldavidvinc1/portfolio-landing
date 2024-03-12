import Socials from "./Socials"

function Footer() {
    return (
        <footer className="py-12 bg-secondary">
            <div className="container mx-auto">    
                <div className="flex flex-col items-center justify-between">
                    <Socials containerStyles='flex gap-x-6' iconsStyles='text-primary dark:text-white/70 text-[20px] mx-auto xl:mx-0 mb-4 hover:text-white dark:hover:text-primary transition-all' />
                    <div className="text-muted-foreground">
                        Copyright &copy; Michael David Vinc. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
