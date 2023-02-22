import * as React from "react";
import about from "../../assets/about1.png";

export default function pop() {
  return (
    <>
      <div className="flex my-24 justify-around items-center">
        {/*Card 1*/}
        <div
          className="rounded overflow-hidden relative"
          style={{
            "box-shadow":
              "-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)",
          }}
        >
          <img className="w-5/5" src={about} alt="pic-1" />
        </div>
        <div className="text-center font-medium text-xl w-1/2 space-y-5 flex flex-col">
          <p className="font-bold text-3xl text-blue-500 ">What does AntarDarshnam mean?</p>
          <p>
            AntarDarshnam has its origin in Sanskrit, the language of our great
            sages. It translates to Introspection, (the examination of one's own
            conscious thoughts and feelings. In psychology, the process of
            introspection relies on the observation of one's mental state, while
            in a spiritual context it may refer to the examination of one's
            soul.)
          </p>
          <p >And so our tagline “Live Healthy”!</p>
          <p className="font-bold text-3xl text-blue-500 ">Who are we?</p>
          <p>
            AntarDarshnam is a Psychology based organization. Apart from
            bridging the gap between the schools and councellors, we use latest
            technology to overcome various pschological challenges faced by
            students. Resources Company Newsletter
          </p>
          <p className="font-bold text-3xl text-blue-500 ">Our Mission!</p>
          <p>To enhance the Mental Health of people leveraging technology.</p>
        </div>
      </div>
    </>
  );
}
