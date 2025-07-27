import Image from "next/image";

interface Instructor {
  description: string;
  has_instructor_page: boolean;
  image: string;
  name: string;
}

const Instructor = ({ instructor }: { instructor: Instructor }) => {
  

  return (
    <div className="my-12">
      <h3 className="text-xl font-bold text-gray-800 mb-4">কোর্স ইন্সট্রাক্টর</h3>
      <div className="flex items-center gap-4 border border-gray-200 p-4">
        <div className="rounded-full">
          <Image className = "rounded-full"
            src="https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg"
            alt="Picture of the author"
            width={73}
            height={73}
          />
        </div>
        <div className="text-gray-800 text-md">
          <h3 className="font-bold text-xl">{instructor.name} </h3>
          <div dangerouslySetInnerHTML={{ __html: instructor.description }} />
        </div>
      </div>
    </div>
  );
};

export default Instructor;
