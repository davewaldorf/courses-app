import { prisma } from "../src/lib/prisma";

async function main() {
  const courses = [
    { title: 'Calculus 101', category: 'math', difficulty: 'beginner' },
    { title: 'Physics Basics', category: 'science', difficulty: 'intermediate' },
    { title: 'Advanced Programming', category: 'computer science', difficulty: 'advanced' },
    { title: 'Organic Chemistry', category: 'science', difficulty: 'advanced' },
    { title: 'Linear Algebra', category: 'math', difficulty: 'intermediate' },
  ];

  for (const course of courses) {
    await prisma.course.create({
      data: course,
    });
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect(); 
  });
