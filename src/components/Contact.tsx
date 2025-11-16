export default function Contact({ data }: any) {
  return (
    <div className="py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8 font-mono tracking-wider">CONTACT</h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600 font-medium">Email</span>
          <a
            href={`mailto:${data?.email}`}
            className="block text-black hover:underline mt-1"
          >
            {data?.email}
          </a>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600 font-medium">LinkedIn</span>
          <a
            href={data?.url_linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-black hover:underline mt-1"
          >
            {data?.url_linkedin || "in/haryo-novianto-1268bb151/"}
          </a>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600 font-medium">Github</span>
          <a
            href={data?.url_github}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-black hover:underline mt-1"
          >
            {data?.url_github || "https://github.com/haryoooo"}
          </a>
        </div>
      </div>
    </div>
  );
}
