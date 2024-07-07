import FloatingNav from "~/components/ui/nav";
import { ContactCard } from "../../components/contactCard";
import { contactInfo } from "./data";

export default function Contact() {
    return (
        <div className="bg-black min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 w-full overflow-x-hidden">
            <FloatingNav />
            <div className="container mx-auto py-24 flex flex-col items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                    {contactInfo.map((contact, index) => (
                        <ContactCard key={index} contact={contact} />
                    ))}
                </div>
            </div>
        </div>
    )
}