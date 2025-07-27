import Image from "next/image";

interface Checklists {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

const Checklist = ({ checklists }: { checklists: Checklists[] }) => {
  console.log(checklists);
  return (
    <div className="border border-gray-300 rounded-lg p-4">
      <h3 className="my-4 text-xl font-semibold">এই কোর্সে যা থাকছে</h3>
      {checklists.map((item) => (
        <div className="flex items-center mb-3 leading-5" key={item.id}>
          <div className="inline-block h-[20px] w-[20px] transition-opacity duration-300 ease-in-out">
            <Image alt="icon" width="20" height="20" src={item.icon} />
          </div>
          <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
            {item.text}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default Checklist;
