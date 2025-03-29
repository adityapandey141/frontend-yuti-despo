import React from "react";

export default function ContactFrom() {
  return (
    <>
      <section className=" container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-15">
        {/* <!-- Left Section --> */}
        <div className="">
          <p
            className="text-md text-dg my-3"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            <span className="section-title__tagline">Get to Know About Us</span>
          </p>
          <h1 className="text-4xl md:text-5xl font-bold my-3">
            Have Questions? Feel Free to Write Us
          </h1>
          <p className="text-lblack mb-6">
            Lorem ipsum dolor sit amet, consectetur notted adipis not icing elit
            sed do eiusmod tempor incididunt.
          </p>

          <div className="space-y-6">
            {/* <!-- Call --> */}
            <div className="flex items-center gap-4">
              <div className="bg-dg p-4 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h11M9 21V3m6 18v-9m6 9V3m-6 9h11"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Call Anytime</p>
                <p className="text-lg font-semibold">+1 - (246) 333-0088</p>
              </div>
            </div>

            {/* <!-- Email --> */}
            <div className="flex items-center gap-4">
              <div className="bg-dg p-4 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12H8m0 0V8m0 4h8m-8 0v4"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Write Email</p>
                <p className="text-lg font-semibold">needhelp@wostin.com</p>
              </div>
            </div>

            {/* <!-- Address --> */}
            <div className="flex items-center gap-4">
              <div className="bg-dg p-4 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Visit Us Anytime</p>
                <p className="text-lg font-semibold">
                  880 Brooklyn Street New York, USA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Right Section --> */}
        <div className=" bg-white shadow-sm rounded-lg p-4 md:p-8">
          <form action="#" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-4 border rounded bg-gray-100 focus:outline-none focus:ring-0 focus:ring-dg"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full p-4 border rounded bg-gray-100 focus:outline-none focus:ring-0 focus:ring-dg"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone number"
                className="w-full p-4 border rounded bg-gray-100 focus:outline-none focus:ring-0 focus:ring-dg"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-4 border rounded bg-gray-100 focus:outline-none focus:ring-0 focus:ring-dg"
              />
            </div>
            <textarea
              placeholder="Write message"
              rows="5"
              className="w-full p-4 border rounded bg-gray-100 focus:outline-none focus:ring-0 focus:ring-dg"
            ></textarea>

            <button
              type="submit"
              className="thm-btn py-3 px-6 rounded w-full md:w-auto"
            >
              Send a Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
