import { prisma } from "@/lib/prisma";
import { Course } from "@prisma/client";

const VALID_CATEGORIES = ["math", "science", "computer science"];
const VALID_DIFFICULTIES = ["beginner", "intermediate", "advanced"];

export async function getCourses(filters?: { category?: string; difficulty?: string }): Promise<Course[]> {

  const category = filters?.category && VALID_CATEGORIES.includes(filters.category)
    ? filters.category
    : undefined;

  const difficulty = filters?.difficulty && VALID_DIFFICULTIES.includes(filters.difficulty)
    ? filters.difficulty
    : undefined;

  return prisma.course.findMany({
    where: {
      category,
      difficulty,
    },
    orderBy: { title: "asc" },
  });
}
