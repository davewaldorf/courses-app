import { capitaliseWords } from "@/utils/strings";
import { Course } from "@prisma/client";

type CourseCardProps = {
  course: Course;
};

const getBadgeColor = (type: Course["difficulty"]) => {
  switch (type) {
    case "beginner":
      return "badge-primary";
    case "intermediate":
      return "badge-secondary";
    case "advanced":
      return "badge-accent";
    default:
      return "badge-primary";
  }
};

const CourseCard = ({course}: CourseCardProps) => {
  return (
    <div className="card w-full glass shadow-lg">
      <div className="card-body">
        <h2 className="card-title">{course.title}</h2>
        <div className="flex gap-2 mt-2">
          <span className="badge badge-info">{capitaliseWords(course.category)}</span>
          <span className={`badge ${getBadgeColor(course.difficulty)}`}>
            {capitaliseWords(course.difficulty)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
