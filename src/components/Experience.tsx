import Doo from "../assets/company/doo.png";
import Dtn from "../assets/company/dtn.png";
import Mandala from "../assets/company/mandala.png";
import Bluebird from "../assets/company/bluebird.png";

export default function Experience({ data }: any) {
  const icons: any = {
    doo: Doo,
    dtn: Dtn,
    mandala: Mandala,
    bluebird: Bluebird,
  };

  return (
    <div className="w-full bg-black md:px-24 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl text-white text-center mb-8 md:mb-12">
          My <span className="font-bold">Experience</span>
        </h2>

        <div className="space-y-4 md:space-y-6 text-left">
          {[...(data?.experience || [])].reverse()?.map((el, index) => (
            <div
              key={index}
              className="rounded-lg p-8 md:p-6 border border-gray hover:bg-zinc-800 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 rounded overflow-hidden">
                    <img
                      src={icons[el.icon]}
                      alt={el.company}
                      className="w-20 sm:w-21 lg:w-[40px] h-auto"
                    />
                  </div>
                  <h3 className="text-white text-base md:text-lg font-semibold">
                    {data?.occupation} at {el.company}
                  </h3>
                </div>
                <div className="text-zinc-400 text-sm">
                  {el.period}
                </div>
              </div>
              <p className="text-zinc-300 text-left text-sm md:text-base leading-relaxed">
                {el.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
