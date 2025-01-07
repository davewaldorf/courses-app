import FilterOptions from "@/app/components/FilterOptions";
import CourseCard from "@/app/components/CourseCard";
import { getCourses } from "@/services/courses";

export default async function Courses({ searchParams }: { searchParams: Promise<Record<string, string>> }) {
  const { category, difficulty } = await searchParams;

  const filters = {
    category: category || undefined,
    difficulty: difficulty || undefined,
  };

  const courses = await getCourses(filters);

  return (
    <div className="min-h-screen bg-primary p-6">
      <h1 className="text-4xl font-bold mb-6 text-center cursor-pointer">
        Courses
      </h1>

      <div className="shadow-md rounded-lg p-6 glass">
        <FilterOptions
          currentCategory={category}
          currentDifficulty={difficulty}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
