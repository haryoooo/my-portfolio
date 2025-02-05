import LinkedinImg from "../assets/icon/linkedin.png";
import GithubImg from "../assets/icon/github.png";

export default function Contact({ data }: any) {
  const InputField = ({ type, placeholder }: any) => (
    <input
      type={type}
      disabled
      placeholder={placeholder}
      className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
    />
  );

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
        <div className="w-full md:w-1/2 space-y-4">
          <InputField type="text" placeholder="Your name" />
          <InputField type="email" placeholder="Email" />
          <InputField type="text" placeholder="Your website (If exists)" />
          <textarea
            disabled
            placeholder="How can I help?*"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            rows={4}
          ></textarea>
          <button
            className="w-full p-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800"
            disabled
          >
            Get In Touch
          </button>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 md:text-left space-y-4 mb-5">
          <h2 className="text-3xl font-bold">
            Let’s <span className="underline font-extrabold">talk</span> for
          </h2>
          <h2 className="text-4xl font-bold">Something special</h2>
          <p className="mt-2 text-gray-600">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>
          <p className="mt-4 font-semibold">{data?.email}</p>
          {/* <p className="font-semibold">{data?.phone}</p> */}
          <div className="flex md:justify-start space-x-3 mt-4">
            <div className="hover:animate-bounce">
              <a
                href={data.url_linkedin} // Add your link URL here
                target="_blank" // Opens in new tab
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label="View project details"
              >
                <img
                  src={LinkedinImg}
                  className="w-8 sm:w-8 lg:w-[30px] h-auto"
                  alt="linkedin-img"
                />
              </a>
            </div>
            <div className="hover:animate-bounce">
              <a
                href={data.url_github} // Add your link URL here
                target="_blank" // Opens in new tab
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label="View project details"
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
    </div>
  );
}
