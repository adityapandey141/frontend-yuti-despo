import React from "react";
import Form from "./Form";

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
            We're Here to Help Your Business
          </h1>
          <p className="text-lblack mb-6">
            Looking for eco-friendly packaging solutions or want to discuss your
            bulk requirements?
          </p>

          <div className="space-y-6">
            {/* <!-- Call --> */}
            <div className="flex items-center gap-4">
              <div className="bg-dg p-4 rounded">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                  id="a"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      className="b"
                      d="m23.5947,15.0005c.548-1.0177,1.1956-1.996,1.9428-2.9205.7344-.9086.6287-2.236-.1974-3.0621l-3.832-3.832c-.9854-.9854-2.5956-.8934-3.4904.1749-9.0143,10.7619-9.0143,26.515,0,37.2768.8948,1.0683,2.5022,1.163,3.4876.1777l3.4162-3.4162c1.2472-1.2472,1.3503-2.5721.616-3.4807-.7472-.9245-1.3948-1.9027-1.9428-2.9205-.6703-1.2448-1.9774-2.0111-3.3913-2.0111h-3.2796c-1.3552-4.5526-1.3552-9.4226,0-13.9752h3.2796c1.4138,0,2.7209-.7663,3.3913-2.0111Z"
                    ></path>
                    <g>
                      <g>
                        <polyline
                          className="b"
                          points="26.3775 24.6979 23.498 27.5607 26.3775 30.4236"
                        ></polyline>
                        <line
                          className="b"
                          x1="23.498"
                          y1="27.5607"
                          x2="36.7429"
                          y2="27.5607"
                        ></line>
                      </g>
                      <g>
                        <polyline
                          className="b"
                          points="33.8634 22.528 36.7429 19.6652 33.8634 16.8024"
                        ></polyline>
                        <line
                          className="b"
                          x1="36.7429"
                          y1="19.6652"
                          x2="23.498"
                          y2="19.6652"
                        ></line>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Call Anytime</p>
                <p className="text-lg font-semibold">+91 9824253196</p>
              </div>
            </div>

            {/* <!-- Email --> */}
            <div className="flex items-center gap-4">
              <div className="bg-dg p-4 rounded">
                <svg
                  width="30"
                  height="30"
                  fill="#ffffff"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M12,2 C17.4292399,2 21.8479317,6.32667079 21.9961582,11.7200952 L22,12 L22,13 C22,15.1729208 20.477434,17 18.5,17 C17.3269391,17 16.3139529,16.3570244 15.6839382,15.3803024 C14.770593,16.3757823 13.4581934,17 12,17 C9.23857625,17 7,14.7614237 7,12 C7,9.23857625 9.23857625,7 12,7 C14.6887547,7 16.8818181,9.12230671 16.9953805,11.7831104 L17,12 L17,13 C17,14.1407877 17.7160103,15 18.5,15 C19.2447902,15 19.928229,14.2245609 19.9947109,13.1689341 L20,13 L20,12 C20,7.581722 16.418278,4 12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 C13.1630948,20 14.2892822,19.7522618 15.3225159,19.2798331 C15.8247876,19.0501777 16.4181317,19.271177 16.647787,19.7734487 C16.8774423,20.2757205 16.656443,20.8690646 16.1541713,21.0987199 C14.861218,21.689901 13.4515463,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 Z"></path>{" "}
                  </g>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Write Email</p>
                <p className="text-lg font-semibold">yutidispo@gmail.com</p>
              </div>
            </div>

            {/* <!-- Address --> */}
            <div className="flex items-center gap-4">
              <div className="bg-dg p-4 rounded">
                <svg
                  width="30"
                  height="30"
                  fill="#ffffff"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path>{" "}
                  </g>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Visit Us Anytime</p>
                <p className="text-lg font-semibold">
                  138, Ajit Nagar Society, Nr. Urmi Society, Dinesh Mill Road,
                  Vadodara-390020.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Right Section --> */}
        <div className=" bg-white shadow-sm rounded-lg p-4 md:p-8">
          <Form />
        </div>
      </section>
    </>
  );
}
