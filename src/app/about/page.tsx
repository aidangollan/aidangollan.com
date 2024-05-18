import { FloatingNav } from "~/components/ui/nav";

export default function AboutPage() {
    return (
        <div className="bg-black flex flex-col items-center justify-center min-h-screen w-full overflow-x-hidden">
            <FloatingNav />
            <p className="text-white">
                About
            </p>
        </div>
    )
}