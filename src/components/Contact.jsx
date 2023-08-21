import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../components/Contact.css";
import './toast.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_1ft9j15",
        "template_5xe0wqt",
        form.current,
        "QCf74XbcXnn6jgYW0"
      );
      
      toast.success("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.log(error.text);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="connect-us">
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" className="submit" />
      </form>
      <ToastContainer position="bottom-right" /> {/* Position the toasts */}
    </div>
  );
};

export default Contact;
