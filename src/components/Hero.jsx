import Spline from "@splinetool/react-spline"; 
import "boxicons/css/boxicons.min.css";
const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
      <div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
        {/**Tag box with gradient border */}
        <div
          className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)]
        rounded-full flex items-center justify-center gap-1 mb-4"
        >
          <div className="absolute inset-[3px] bg-black rounded-full flex item-center justify-center gap-1">
            <i class="bx bx-diamond">INTRODUCTNG</i>
          </div>
        </div>

        {/**Mian heading */}

        <h1 className="text-3xl sm:4xl md:text 5xl lg:text-6xl font-semibold tracking-wider my-8">
          EMAIL FOR
          <br />
          DEVELOPERS
        </h1>

        {/**DESCRIPTION */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 tracking-wider max-w-[25rem lg:max-w-[30rem]">
          Join our community of developers and take your skills to the next
          level with our comprehensive email courses.
        </p>

        {/**BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            className=" border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full tracking-wider text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 hover:text-white transition-colors duration-300 hover:bg-[#2a2a2a]"
            href="#"
          >
            {" "}
            Documentation <i class="bx bx-link-external"></i>
          </a>

          <a
            className=" border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full tracking-wider text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 hover:text-white transition-colors duration-300 hover:bg-[#2a2a2a]"
            href="#"
          >
            {" "}
            Get Started<i class="bx bx-link-external"></i>
          </a>
        </div>
      </div>

      {/**3d model*/}

      <Spline className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full" scene="https://prod.spline.design/64XxVzLCKLCiD-Se/scene.splinecode" />
    </main>
  );
}

export default Hero