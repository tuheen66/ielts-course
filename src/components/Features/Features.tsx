import Image from "next/image";
export interface Features {
  features: string;
  name: string;
  description?: string;
  bg_color?: string;
  order_idx: number;
  values: Values[];
}

export interface Values {
  icon: string;
  id: string;
  subtitle: string;
  title: string;
}

const Features = ({ features }: { features: Features }) => {
  const featureValues = features.values;
 

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">{features.name}</h3>
      <div className="mb-16 grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
        {featureValues.map((value, idx) => (
          <div className="flex  gap-4" key={idx}>
            <div>
              <Image
                className="rounded-full"
                src={value.icon}
                alt="৫০+ ভিডিও লেকচার"
                width={36}
                height={36}
              />
            </div>
            <div>
              <h2 className="text-[18px] font-[500px] leading-[26px] text-white ">
                {value.title}
              </h2>
              <h2 className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
                {value.subtitle}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
