import CourseTitle from "@/components/CourseTitle/CourseTitle";
import Instructor from "@/components/Instructor/Instructor";
import Features from "@/components/Features/Features";
import CourseOutline from "@/components/CourseOutline/CourseOutline";


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
 
  const instructor = (course?.data?.sections[2]?.values[0])

  const features = course?.data?.sections[3];

  const outline = course?.data?.sections[5];

 console.log(outline)
  

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-[2fr_1fr] items-center justify-between">
        {/* left side */}
        <div className="">
          <CourseTitle
            title={course?.data?.title}
            description={course?.data?.description}
          />

          <Instructor instructor={instructor} />

          <Features features={features}/>

          <CourseOutline outline={outline} />

          
        </div>
        

        {/* right side */}
        <div>
          <h2>trailer</h2>
        </div>
      </div>
    </div>
  );
};

export default Product;
