import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

interface Exclusive {
  bg_color?: string;
  description?: string;
  name: string;
  order_idx: number;
  type: string;
  values: Values[];
}

interface Values {
  checklist: string[];
  file_type: string;
  file_url: string;
  id: string;
  title: string;
  video_thumbnail?: string;
}

const Exclusive = ({ exclusive }: { exclusive: Exclusive }) => {
  const exclusiveFeatures = exclusive.values;

   return (
    <div className="flex flex-col gap-3 my-10">
      <h2 className="text-xl font-semibold leading-[30px] text-black">
        {exclusive.name}
      </h2>

      <div className="grid grid-cols-1 px-5 border border-gray-300 divide-y rounded-md">
        {exclusiveFeatures.map((item, idx) => (
          <div
            className="flex flex-col items-start justify-between gap-3 py-5 md:flex-row"
            key={idx}
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-[14px] font-[500px] leading-[30px] text-[#111827] md:text-[16px]">
                {item.title}
              </h2>

              {item.checklist.map((item, idx) => (
                <div className="flex flex-row items-center gap-5" key={idx}>
                  <FaCheck className="text-blue-500" />
                  <p className="text-[14px] font-[400px] leading-[24px] text-[#4B5563] md:text-[16px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <div className="mb-4 mx-auto max-w-[350px] transition-opacity duration-300 ease-in-out font-size: 0px; opacity: 1">
                <Image
                  alt="ভিডিও লেকচার"
                  width="250"
                  height="200"
                  src={item.file_url}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exclusive;
