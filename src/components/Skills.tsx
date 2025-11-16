export default function Skills({ data }: any) {
  return (
    <div className="py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8 font-mono tracking-wider">SKILLS / STACK</h2>

      <div className="flex flex-wrap gap-3">
        {data?.skills?.map((skill: { name: string }) => (
          <span
            key={skill.name}
            className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md text-sm md:text-base"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
