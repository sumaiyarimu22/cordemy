import { currencyConverter } from "@/utils/currencyConverter";
import Image from "next/image";
import { BsFillStarFill } from "react-icons/bs";
import Button from "./Button";

const CourseItem = ({ course }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="w-full lg:w-[18rem] hover:shadow-md shadow-sm rounded-md overflow-hidden"
    >
      <div className="w-full h-[20rem] lg:h-[12rem] overflow-hidden">
        <Image
          src={course.cover}
          alt={course.title}
          width={640}
          height={360}
          priority
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-5 space-y-2">
        <h3 className="text-2xl font-bold h-16">{course.title}</h3>
        <p className="flex justify-between text-gray-500">
          <span>
            by
            <span className="text-black font-semibold">
              {course.instructor}
            </span>
          </span>
          <span>
            Duration:
            <span className="text-black font-semibold">{course.duration}</span>
          </span>
        </p>
        <p className="flex justify-between text-gray-500">
          <span>
            {`  Enrolled student's:`}
            <span className="text-black/70 font-semibold">
              {course.students}
            </span>
          </span>
          <span className="flex items-center gap-1">
            <BsFillStarFill className="text-amber-500" />
            <span className="text-black font-semibold">{course.rating}</span>
          </span>
        </p>
        <p className="text-gray-500">
          {course.description.substring(0, 70)}...
        </p>
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">
            {currencyConverter(course.price)}
          </p>
          <Button href={`/courses/${course.id}`} placeholder="View Details" />
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
