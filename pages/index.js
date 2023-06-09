import { getAllCourses } from "@/prisma/courses";
import CoursesPage from "./courses";
import HeroSection from "@/components/HeroSection";

const HomePage = ({ courses }) => {
  return (
    <div>
      <HeroSection />
      <CoursesPage courses={courses} />
    </div>
  );
};

export default HomePage;

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
