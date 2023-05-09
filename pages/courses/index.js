import CourseItem from "@/components/CourseItem";
import SectionHeader from "@/components/SectionHeader";
import { getAllCourses } from "@/prisma/courses";

const CoursesPage = ({ courses }) => {
  return (
    <div className="wrapper py-10">
      <SectionHeader
        span={"Courses"}
        h2={"Discover limitless learning"}
        p={`With our extensive collection of online courses, you can gain new
          skills and knowledge in various fields, boost your resume, and achieve
          your personal and professional goals from anywhere, anytime`}
      />
      <div className="mt-10 flex flex-wrap gap-10 justify-center">
        {courses.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
export const getServerSideProps = async () => {
  const courses = await getAllCourses();

  const updatedCourses = courses.map((course) => ({
    ...course,
    updatedAt: course.updatedAt.toString(),
    createdAt: course.createdAt.toString(),
  }));

  return {
    props: {
      courses: updatedCourses,
    },
  };
};
