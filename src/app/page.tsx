import CourseTitle from "@/components/CourseTitle/CourseTitle";
import Instructor from "@/components/Instructor/Instructor";
import Features from "@/components/Features/Features";
import CourseOutline from "@/components/CourseOutline/CourseOutline";
import Exclusive from "@/components/Exclusive/Exclusive";
import CourseDetails from "@/components/CourseDetails/CourseDetails";
import Trailer from "@/components/Trailer/Trailer";
import Checklist from "@/components/Checklist/Checklist";

const Product = async () => {
  const res = await fetch(
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course",
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        Accept: "application/json",
      },
      cache: "force-cache",
    }
  );
  const course = await res.json();

  const instructor = course?.data?.sections[2]?.values[0];

  const features = course?.data?.sections[3];

  const outline = course?.data?.sections[5];

  const exclusive = course?.data?.sections[8];

  const courseDetails = course?.data?.sections[7];

  const checklists = course?.data?.checklist;

  

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-[2fr_1fr] justify-between gap-8">
        {/* left side */}
        <div className="">
          <CourseTitle
            title={course?.data?.title}
            description={course?.data?.description}
          />

          <Instructor instructor={instructor} />

          <Features features={features} />

          <CourseOutline outline={outline} />

          <Exclusive exclusive={exclusive} />

          <CourseDetails courseDetails={courseDetails} />
        </div>

        {/* right side */}
        <div className="w-[400px]">
          <Trailer />
          <div>
            <button className="bg-green-600 text-white w-full py-3 border-b-3 border-green-800 rounded-lg">
              {course?.data?.cta_text?.name}
            </button>
          </div>

          <Checklist checklists={checklists} />
        </div>
      </div>
    </div>
  );
};

export default Product;
