export const ScratchEmbed = () => {
    const embedUrl = `https://scratch.mit.edu/projects/99218146/embed`;
  
    return (
      <iframe
      src={embedUrl}
      width="500"
      height="275"
      allowFullScreen
      className="hidden lg:block md:block sm:block xs:block border-none bg-black"
      ></iframe>
    );
};