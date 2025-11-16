export default function Languages({ data }: any) {
  return (
    <div className="py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8 font-mono tracking-wider">LANGUAGES</h2>

      <div className="space-y-4">
        {data?.languages?.map((lang: any, index: number) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-lg text-black font-medium">{lang.name}</span>
            <span className="text-gray-600">{lang.proficiency}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

