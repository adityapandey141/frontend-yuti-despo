import React from "react";
import { useState } from "react";
export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleOnchange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    // console.log(name, "-- ", value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      console.log(validationErrors);
    } else {
      console.log(formData);
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    return newErrors;
  };

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            onChange={handleOnchange}
            className="w-full p-4 border rounded bg-gray-100 focus:outline-none focus:ring-0 focus:ring-dg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            onChange={handleOnchange}
            className="w-full p-4 border rounded bg-gray-100 focus:outline-none focus:ring-0 focus:ring-dg"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="phone"
            onChange={handleOnchange}
            placeholder="Phone number"
            className="w-full p-4 border rounded bg-gray-100 focus:outline-none focus:ring-0 focus:ring-dg"
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            onChange={handleOnchange}
            className="w-full p-4 border rounded bg-gray-100 focus:outline-none focus:ring-0 focus:ring-dg"
          />
        </div>
        <textarea
          placeholder="Write message"
          name="message"
          onChange={handleOnchange}
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
    </>
  );
}
