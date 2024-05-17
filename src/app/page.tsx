
import SparkleBlobs from "./sparkleBlobs";

export default function HomePage() {
  return (
    <>
      <SparkleBlobs />
      <div className="relative z-10 flex flex-col items-center justify-center h-screen w-full overflow-hidden">
        <div className="w-full flex-grow flex flex-col items-center justify-center">
          <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white absolute bottom-80 z-20">
            Aidan Gollan
          </h1>
          <div className="w-full h-80 absolute bottom-0">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
      </div>
    </>
  );
}
