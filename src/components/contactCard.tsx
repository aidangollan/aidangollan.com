import { ExternalLink } from "lucide-react";

type ContactInfo = {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
};

export const ContactCard = ({ 
    contact,
  } : {
    contact: ContactInfo;
  }) => (
    <div className="group relative p-[3px] rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-500 rounded-lg opacity-50 group-hover:opacity-70 blur-md transition-all duration-300 group-hover:duration-200 animate-gradient-xy"></div>
      <div className="relative bg-zinc-200 rounded-lg">
        <a href={contact.link} target="_blank" rel="noopener noreferrer" className="block h-full">
          <article className="flex flex-col justify-between w-full h-full p-8 md:p-10 min-h-[400px]">
            <div className="flex flex-col flex-grow">
              <div className="flex items-center justify-between gap-2">
                <div className="text-zinc-800 text-3xl">
                  {contact.icon}
                </div>
              </div>

              <h2 className="mt-8 text-2xl font-bold text-zinc-900 font-display">
                {contact.title}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-700">
                {contact.description}
              </p>
            </div>
            <div className="mt-10">
              <p className="text-base text-zinc-600 group-hover:text-zinc-900 flex items-center transition-colors duration-300">
                Connect <ExternalLink className="ml-2 w-5 h-5" />
              </p>
            </div>
          </article>
        </a>
      </div>
    </div>
  );