import React from "react";
import useProgressiveImg from "../../hooks/image/useProgressiveImg";

function Hero() {
  // Ensure the correct image path relative to the public folder
  const [src, { blur }] = useProgressiveImg("/images/home-banner/img3.jpg");

  return (
    <>
      <section
        className={`relative overflow-hidden lg:flex h-[30vh] sm:h-[30vh] lg:h-screen lg:items-center`}
      >
        <div className="z-10 absolute mx-auto max-w-screen-xl lg:px-24 px-4 sm:px-6 top-[50%] -translate-y-[50%]">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-bold md:text-5xl">
              Krishi
              <strong className="font-bold text-rose-700">Bazaar</strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            "From Farm to Your Table – Freshness Delivered!"
            </p>
          </div>
        </div>
        <div
          className="relative w-full h-full"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.25)), url(${src})`,
            filter: blur ? "blur(2px)" : "none", // Apply blur only while the image is loading
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transition: "filter 0.3s ease-in-out", // Smooth transition when the blur is removed
          }}
        ></div>
      </section>
    </>
  );
}

export default Hero;
