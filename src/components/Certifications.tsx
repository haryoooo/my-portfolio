export default function Certifications({ data }: any) {
  return (
    <div className="py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8 font-mono tracking-wider">CERTIFICATIONS</h2>

      <div className="space-y-4">
        {data?.certifications?.map((cert: any, index: number) => (
          <><div key={index} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <h3 className="text-lg md:text-xl font-semibold text-black">
              {cert.title}
            </h3>
          </div>
          <div className="flex items-center gap-2 text-[#7d7d7d] text-sm font-mono">
              <span>{cert.issuer}</span>
              <span>·</span>
              <span>{cert.year}</span>
          </div></>
        ))}
      </div>
    </div>
  );
}

