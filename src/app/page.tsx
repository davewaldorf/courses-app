import FilterOptions from "./components/FilterOptions";
import CourseCard from "./components/CourseCard";
import { prisma } from "@/lib/prisma";
import { Course } from "@prisma/client";

export default async function Courses({searchParams}: {searchParams: { [key: string]: string }}) {
  const { category, difficulty } = await searchParams;

  const filters: { category?: string; difficulty?: string } = {};

  if (category) filters.category = category;
  if (difficulty) filters.difficulty = difficulty;

  const courses: Course[] = await prisma.course.findMany({
    where: filters,
    orderBy: { title: "asc" },
  });

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
