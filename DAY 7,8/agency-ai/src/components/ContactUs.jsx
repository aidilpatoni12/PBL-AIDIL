import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const ContactUs = () => {
    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "5f3c9e2f-4250-4777-ae2e-5219ce951299");
    try{
        const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success){
        toast.success("Thank you your submission")
        event.target.reset();
    } else {
        toast.error(error.message)
    }
    }catch{
     toast.error(error.message)
    }
};   
  return (
    <div
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
      <Title
        title="Reach out to us"
        desc="From strategy to execution, we craft digital solutions that move your business forward."/>

      <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full">
        {/* Input Nama */}
        <div>
          <p className="mb-2 text-sm font-medium">Your name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="" />
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="w-full p-3 text-sm outline-none bg-transparent"
              required/>
          </div>
        </div>

        {/* Input Email */}
        <div>
          <p className="mb-2 text-sm font-medium">Email ID</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="" />
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="w-full p-3 text-sm outline-none bg-transparent"
              required/>
          </div>
        </div>

        {/* Textarea Pesan */}
        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            rows={8}
            placeholder="Enter your message"
            name="message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
            required
          ></textarea>
        </div>

        {/* Tombol Submit */}
        <button
          type="submit"
          className="w-max flex items-center gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all sm:col-span-2">
          Submit <img src={assets.arrow_icon} alt="" className="w-4" />
        </button>
      </form>
    </div>
  );
}

export default ContactUs
