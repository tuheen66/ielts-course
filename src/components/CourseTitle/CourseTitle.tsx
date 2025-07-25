

interface CourseTitleProps {
  title: string;
  description: string;
}

const CourseTitle = ({ title, description }: CourseTitleProps) => {
  return (
    <div className="bg-[#060129] text-gray-400 py-12 px-8 leading-relaxed">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div>

      <div  dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};

export default CourseTitle;
