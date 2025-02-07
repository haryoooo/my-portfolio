import { useState } from "react";
import emailjs from "emailjs-com";
import LinkedinImg from "../assets/icon/linkedin.png";
import GithubImg from "../assets/icon/github.png";
import SandLoader from "../assets/icon/loader.gif";
import TalkImg from "../assets/talk.png";
import Snackbar from "./Snackbar";

const initialState = {
  name: "",
  email: "",
  website: "",
  message: "",
};

export default function Contact({ data }: any) {
  const [formData, setFormData] = useState(initialState);

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    emailjs
      .send(
        import.meta.env.VITE_MAIL_SERVICE_ID, // Replace with your EmailJS service ID
        import.meta.env.VITE_MAIL_TEMPLATE_ID, // Replace with your EmailJS template ID
        formData,
        import.meta.env.VITE_MAIL_PUBLIC_KEY // Replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("Email sent successfully!");
          setFormData(initialState);
        },
        () => {
          setStatus("Failed to send email. Try again.");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      className="text-start"
    >
      <h2 className="text-3xl text-center md:text-4xl px-4 py-8 mb-0 md:mb-5">
        Contact <span className="font-bold">Me</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-between p-1 md:p-8 max-w-5xl mx-auto gap-10">
        {/* Contact Form */}
        <form onSubmit={sendEmail} className="w-full md:w-1/2 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <textarea
            name="message"
            placeholder="How can I help?*"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="w-full p-4 bg-black text-white font-semibold rounded-md text-md hover:bg-gray-800"
            disabled={isSending}
          >
            {isSending ? <div className="flex justify-center"><img width={28} src={SandLoader} alt="loader" /></div> : "Get In Touch"}
          </button>
          {status && <Snackbar title={status} />}
        </form>

        {/* Contact Info */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 md:text-left space-y-4 mb-4 text-black">
          <h2 className="text-4xl font-extrabold">
            Let’s <span><img src={TalkImg} alt="talk-img" width={75} className="inline-flex mb-2" /></span> for
          </h2>
          <h2 className="text-4xl font-extrabold">Something special</h2>
          <p className="mt-2 font-semibold text-gray-500">
            {data?.contact_desc}
          </p>
          <p className="mt-4 font-semibold">{data?.email}</p>

          <div className="flex md:justify-start space-x-3 mt-4">
            <a
              href={data.url_linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:animate-bounce"
            >
              <img
                src={LinkedinImg}
                className="w-8 sm:w-8 lg:w-[30px] h-auto"
                alt="linkedin-img"
              />
            </a>
            <a
              href={data.url_github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:animate-bounce"
            >
              <img
                src={GithubImg}
                className="w-8 sm:w-8 lg:w-[30px] h-auto"
                alt="github-img"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
