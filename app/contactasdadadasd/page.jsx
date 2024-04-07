import Form from "@/components/Form";
import { MailIcon, HomeIcon, PhoneIcon } from "lucide-react";

const Contact = () => {
    return (
        <section>
            <div className="container mx-auto">
                <div className="grid pt-12 xl:grid-cols-2 xl:h-[480px] mb-6 xl:mb-24">
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center mb-4 text-lg gap-x-4 text-primary">
                            <span className="w-[30px] h-[2px] bg-primary"></span>
                            Say Hello
                        </div>
                        <h1 className="max-w-md mb-8 h1">Let's Work Together.</h1>
                        <p className="subtitle max-w-[400px]">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, eligendi.
                        </p>
                    </div>
                    <div className="hidden w-full bg-top bg-no-repeat bg-contain xl:flex bg-contact_light dark:bg-contact_dark"></div>
                </div>
                <div className="grid mb-24 xl:grid-cols-2 xl:mb-32">
                    <div className="flex flex-col mb-12 text-base gap-y-4 xl:gap-y-14 xl:mb-24 xl:text-lg">
                        <div className="flex items-center gap-x-8">
                            <MailIcon size={18} className="text-primary" />
                            <div>youre@gmail.com</div>
                        </div>
                        <div className="flex items-center gap-x-8">
                            <HomeIcon size={18} className="text-primary" />
                            <div>youre@gmail.com</div>
                        </div>
                        <div className="flex items-center gap-x-8">
                            <PhoneIcon size={18} className="text-primary" />
                            <div>youre@gmail.com</div>
                        </div>
                    </div>
                    <Form />
                </div>
            </div>
        </section>
    )
}

export default Contact
