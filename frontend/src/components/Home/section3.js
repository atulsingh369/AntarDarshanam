import * as React from "react";

export default function YT() {
  return (
    <div className="my-36">
      <h1 className="font-bold text-3xl text-center">Connect with Yourself</h1>
      <div className="mt-36 flex justify-center">
        <iframe
          width={580}
          height={315}
          src="https://www.youtube.com/embed/vo4pMVb0R6M?start=1"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen=""
          className="scale-125"
        />
      </div>
    </div>
  );
}
