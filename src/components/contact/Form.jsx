import React from "react";
import { useState, useEffect } from "react";
export default function Form() {
  const [errors, setErrors] = useState({});

  const [finalAlert, setFinalAlert] = useState({ message: "", type: "" });

  useEffect(() => {
    captcha();
  }, []);

  const [captchaCode, setCaptcha] = useState({
    captchaQuestion: "",
    captchaAnswer: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    captchaAnswer: "",
  });

  const handleOnchange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    // console.log(name, "-- ", value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Configuration constants - keep these in server environment variables in production
  const API_KEY = "3yphJDfJlWCY75GeKtY0g9GyzywQNFMB";
  const API_ENDPOINT = "https://leads.egnioldigital.com/api/lead";
  const CAPTCHA_ENDPOINT = "https://leads.egnioldigital.com/api/captcha";

  async function submitLead() {
    try {
      const payload = {
        ...formData,
        domain: "frontend-yuti-despo.vercel.app",
      };
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
          Origin: typeof window !== "undefined" ? window.location.origin : "",
        },
        credentials: "include",
        body: JSON.stringify(payload),
      });
      //console.log(response.status);
      if (!response.ok) {
        const errorData = await response.json();
        //console.error("API Error:", errorData);
        return {
          success: false,
          error: errorData.error || "Something went wrong",
        };
      }

      const data = await response.json();
      console.log("Lead submitted successfully:", data);
      return { success: true, message: "Thank you ! We will get back soon !" };
    } catch (error) {
      console.error("Network Error:", error);
      return { success: false, error: error.message || "Network error" };
    }
  }

  async function captcha() {
    try {
      setFormData((prev) => ({ ...prev, captchaAnswer: "" }));
      const response = await fetch(CAPTCHA_ENDPOINT, {
        cache: "no-store",
        credentials: "include",
        headers: {
          "x-api-key": API_KEY,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to load CAPTCHA");
      }

      const data = await response.json();
      setCaptcha({ captchaQuestion: data.question });
      console.log(data.question);
    } catch (error) {
      console.error("Error loading CAPTCHA:", error);
      // setStatus({
      //   loading: false,
      //   message: "Unable to load CAPTCHA. Please refresh the page.",
      //   error: true,
      // });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      console.log("errors state --", errors);
    } else {
      const submitdata = await submitLead();
      if (submitdata.success) {
        setFinalAlert({ message: submitdata.message, type: "success" });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          captchaAnswer: "",
        });
        // console.log("Lead Submitted !", submitdata);
      } else {
        setFinalAlert({ message: submitdata.error, type: "error" });
        captcha();
        //console.log("Lead submission failed !", submitdata);
      }
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else {
      newErrors.name = "";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    } else {
      newErrors.email = "";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else {
      newErrors.phone = "";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    } else {
      newErrors.subject = "";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else {
      newErrors.message = "";
    }

    return newErrors;
  };

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              onChange={handleOnchange}
              value={formData.name}
              className="w-full p-4 border rounded bg-gray-100 focus:outline-none focus:ring-0 focus:ring-dg"
            />
            {errors.name && (
              <p className="text-red text-sm mt-1">*{errors.name}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email address"
              onChange={handleOnchange}
              className="w-full p-4 border rounded bg-gray-100 focus:outline-none focus:ring-0 focus:ring-dg"
            />
            {errors.email && (
              <p className="text-red text-sm mt-1">*{errors.email}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="phone"
              onChange={handleOnchange}
              value={formData.phone}
              placeholder="Phone number"
              className="w-full p-4 border rounded bg-gray-100 focus:outline-none focus:ring-0 focus:ring-dg"
            />
            {errors.phone && (
              <p className="text-red text-sm mt-1">*{errors.phone}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleOnchange}
              className="w-full p-4 border rounded bg-gray-100 focus:outline-none focus:ring-0 focus:ring-dg"
            />
            {errors.subject && (
              <p className="text-red text-sm mt-1">*{errors.subject}</p>
            )}
          </div>
        </div>
        <div>
          <textarea
            placeholder="Write message"
            name="message"
            onChange={handleOnchange}
            value={formData.message}
            rows="5"
            className="w-full p-4 border rounded bg-gray-100 focus:outline-none focus:ring-0 focus:ring-dg"
          ></textarea>
          {errors.message && (
            <p className="text-red text-sm mt-1">*{errors.message}</p>
          )}
        </div>

        {/* Captcha Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
          <div className="md:col-span-2">
            <input
              type="text"
              placeholder={captchaCode.captchaQuestion}
              name="captchaAnswer"
              value={formData.captchaAnswer}
              onChange={handleOnchange}
              className="w-full p-4 border rounded bg-gray-100 focus:outline-none focus:ring-0 focus:ring-dg"
            />
            {errors.captcha && (
              <p className="text-red text-sm mt-1">*{errors.captcha}</p>
            )}
          </div>
          <button
            type="button"
            onClick={captcha}
            className=" py-3 px-4 w-full md:w-auto rounded bg-gray-300 text-black font-semibold hover:bg-gray-400 transition"
          >
            Refresh Captcha
          </button>
        </div>

        <button
          type="submit"
          className="thm-btn py-3 px-6 rounded w-full md:w-auto"
        >
          Send a Message
        </button>

        {finalAlert.message && (
          <div
            className={`flex p-4 rounded text-white flex items-center justify-between ${
              finalAlert.type === "success" ? "bg-dg" : "bg-red"
            }`}
          >
            <div>
              <span>{finalAlert.message}</span>
            </div>
            <button onClick={() => setFinalAlert({ message: "", type: "" })}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
      </form>
    </>
  );
}
