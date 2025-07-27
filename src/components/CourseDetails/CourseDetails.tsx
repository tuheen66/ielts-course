interface CourseDetails {
  type:string;
  name:string;
  description?:string;
  bg_color?:string;
  order_idx:number;
  values:Values[]
}

interface Values{
  icon:number;
  id:string;
  title:string;
  description:string
}

const CourseDetails = ({ courseDetails }: { courseDetails: CourseDetails }) => {
  const details = courseDetails.values;

  return (
    <div>
       <h3 className="text-xl font-bold text-gray-800 mb-4">{courseDetails.name}</h3>
      {details.map((item, idx) => (
        <div
          className="collapse collapse-arrow bg-white  border border-gray-300 "
          key={idx}
        >
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            <div
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: item.title }}
            />
          </div>
          <div className="collapse-content text-sm px-0 pb-2 text-gray-500">
            <div
              className="space-y-4 px-6 "
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;
