import React, { useState, useEffect } from "react";

const BANNER_CONTENT = {
  seller: {
    text: "Unlock Opportunities, Harvest Success with CropConnect",
    image: "/images/auth-banner/img1.png"
  },
  buyer: {
    text: "Farm-Fresh Delights Await – Start Exploring Today!",
    image: "/images/auth-banner/img2.png"
  }
};

const SideImage = ({ type = "buyer" }) => {
  const [imageState, setImageState] = useState({
    isLoading: true,
    hasError: false
  });

  const bannerContent = BANNER_CONTENT[type] || BANNER_CONTENT.buyer;

  useEffect(() => {
    const loadImage = async () => {
      try {
        setImageState({ isLoading: true, hasError: false });
        
        await new Promise((resolve, reject) => {
          const img = new Image();
          img.src = bannerContent.image;
          img.onload = resolve;
          img.onerror = () => reject(new Error(`Failed to load ${bannerContent.image}`));
        });

        setImageState({ isLoading: false, hasError: false });
      } catch (error) {
        console.error("Image loading error:", error);
        setImageState({ isLoading: false, hasError: true });
      }
    };

    loadImage();
  }, [type, bannerContent.image]);

  return (
    <div className="relative w-full h-full flex-1">
      {/* Loading State */}
      {imageState.isLoading && (
        <div className="absolute inset-0 z-20 bg-gray-900/50 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
            <p className="text-white font-medium">Loading banner...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {imageState.hasError && (
        <div className="absolute inset-0 z-20 flex items-center justify-center p-4">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md">
            <p>Unable to load banner image. Please refresh the page or try again later.</p>
          </div>
        </div>
      )}

      {/* Main Banner */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          imageState.isLoading ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url("${bannerContent.image}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '88%',
          height: '100%'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        {/* Text Content Container - Positioned at bottom */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8 lg:p-10">
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-medium leading-snug tracking-wide text-center max-w-2xl mx-auto pb-4">
            {bannerContent.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideImage;