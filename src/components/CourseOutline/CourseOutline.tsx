import { FaCheck } from "react-icons/fa6";

interface Outline {
  bg_color?: string;
  description?: string;
  name: string;
  order_idx: number;
  type: string;
  values: Values[];
}

interface Values {
  color: string;
  icon: number;
  id: string;
  text: string;
}

const CourseOutline = ({ outline }: { outline: Outline }) => {
  const outlines = outline.values;

  console.log(outlines);

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold md:text-2xl">{outline.name}</h2>
      <div className="rounded-md md:border ">
        <div className="pt-2 md:p-6">
          <ul className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_1fr] md:gap-4">
            {outlines.map((item) => (
              <li className="flex items-start gap-2 mb-2" key={item.id}>
                <FaCheck className="text-blue-500" />
                <div className="flex-1">
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseOutline;
