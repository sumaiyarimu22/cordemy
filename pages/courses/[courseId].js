import { getCourse } from "@/prisma/courses";

const CourseDetails = ({ course }) => {
  return (
    <div className="wrapper py-10">
      <div
        style={{ backgroundImage: `url(${course.cover})` }}
        className="w-full h-[20rem] bg-no-repeat bg-cover"
      ></div>
    </div>
  );
};

export default CourseDetails;

export const getServerSideProps = async ({ query }) => {
  const course = await getCourse(query.courseId);

  const updatedCourse = {
    ...course,
    updatedAt: course.updatedAt.toString(),
    createdAt: course.createdAt.toString(),
  };

  return {
    props: {
      course: updatedCourse,
    },
  };
};
