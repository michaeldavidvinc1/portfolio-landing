import Link from "next/link"
import { Button } from "./ui/button"

const Cta = () => {
    return (
        <section className="py-24 bg-tertiary dark:bg-secondary/40">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <h2 className="max-w-xl mb-8 text-center h2">Prepared to turn ideas into reality? I'm here to help</h2>
                    <Link href='/contact'>
                        <Button>Contac me</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Cta
