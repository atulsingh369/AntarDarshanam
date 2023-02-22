import * as React from "react";

export default function Footer() {
  return (
    <>
      <div className="m-24">
        <div className="flex mt-24 items-center">
          <div
            className="h-72 rounded-2xl w-full my-3 space-y-8 text-white flex items-center justify-center"
            style={{
              "background-image":
                "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
            }}
          >
         
            <span className="ml-2 text-5xl  font-bold -mt-2">AntarDarshanam Blogs</span>
          </div>
        </div>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2 gap-44">
          {/*Card 1*/}
          <div className="rounded-xl overflow-hidden shd">
            <div className="px-6 py-4">
              <div className="font-bold text-center text-lg mb-2">
                PUNCTUALITY
              </div>
              <p className="text-gray-700 text-base text-center">
                Punctuality is the characteristic of being an obligation before
                or at a previously designated time. Punctuality is an etiquette
                that encourages us to complete our work in a timely fashion. It
                also makes us realize the importance of time. A person
                ...........
              </p>
              <a
                href="https://docs.google.com/document/d/1DE2pkoDEIv6QfldJ1zX-i-GfXtuaao_I/edit?usp=sharing&ouid=110340801572739819182&rtpof=true&sd=true"
                className="underline text-indigo-900"
              >
                Get it here..
              </a>
            </div>
          </div>
          {/*Card 2*/}
          <div className="rounded-xl overflow-hidden shd">
            <div className="px-6 py-4">
              <div className="font-bold text-center text-lg mb-2">
                COMFORT ZONE
              </div>
              <p className="text-gray-700 text-base text-center">
                It is a psychological state in which things feel familiar to a
                person and they are at ease to control their environment. It
                ments a zone where you at no fear..........
              </p>
              <a
                href="https://docs.google.com/document/d/1WLEgbQ-2xOURea8jzGKNoJKlaj1r3Mzc/edit?usp=sharing&ouid=110340801572739819182&rtpof=true&sd=true"
                className="underline text-indigo-900"
              >
                Get it here..
              </a>
            </div>
          </div>
          {/*Card 3*/}
          <div className="rounded-xl overflow-hidden shd">
            <div className="px-6 py-4">
              <div className="font-bold text-center text-lg mb-2">
                DISCIPLINE
              </div>
              <p className="text-gray-700 text-base text-center">
                Discipline provides people with rules to live their lives
                efficiently and effectively. It creates habits, habits make
                routines, and routines become who the person is daily.....
              </p>
              <a
                href="https://docs.google.com/document/d/1JabOYLNV2fbDnjYDNSh0TI0cc0JqoD8y/edit?usp=sharing&ouid=110340801572739819182&rtpof=true&sd=true"
                className="underline text-indigo-900"
              >
                Get it here..
              </a>
            </div>
          </div>
          {/*Card 4*/}
          <div className="rounded-xl overflow-hidden shd">
            <div className="px-6 py-4">
              <div className="font-bold text-center text-lg mb-2">
                TIME TABLE
              </div>
              <p className="text-gray-700 text-base text-center">
                A timetable is a kind of schedule that sets out times at which
                specific events are intended to occur. A well-constructed
                timetable establishes a natural rhythm and routine, which can
                becomforting to teachers and students. Having a plan as
              </p>
              <a
                href="https://docs.google.com/document/d/1UjCuvE-HqMV0i8selCEnX9k9ThtiC4pP/edit?usp=sharing&ouid=110340801572739819182&rtpof=true&sd=true"
                className="underline text-indigo-900"
              >
                Get it here..
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
