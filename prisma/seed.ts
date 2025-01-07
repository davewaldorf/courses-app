import { prisma } from "../src/lib/prisma";

async function main() {
  const courses = [
    { title: 'Calculus 101', category: 'math', difficulty: 'beginner' },
    { title: 'Physics Basics', category: 'science', difficulty: 'intermediate' },
    { title: 'Advanced Programming', category: 'computer science', difficulty: 'advanced' },
    { title: 'Organic Chemistry', category: 'science', difficulty: 'advanced' },
    { title: 'Linear Algebra', category: 'math', difficulty: 'intermediate' },
    { title: "Introduction to Machine Learning", category: "computer science", difficulty: "advanced" },
    { title: "Astrophysics for Beginners", category: "science", difficulty: "beginner" },
    { title: "Discrete Mathematics", category: "math", difficulty: "intermediate" },
    { title: "Data Structures and Algorithms", category: "computer science", difficulty: "intermediate" },
    { title: "Genetics and Molecular Biology", category: "science", difficulty: "advanced" },
    { title: "Introduction to Cryptography", category: "computer science", difficulty: "advanced" },
    { title: "Introduction to Statistics", category: "math", difficulty: "beginner" },
    { title: "Quantum Mechanics", category: "science", difficulty: "advanced" },
    { title: "Web Development Basics", category: "computer science", difficulty: "beginner" },
    { title: "Artificial Intelligence Fundamentals", category: "computer science", difficulty: "intermediate" },
    { title: "Thermodynamics", category: "science", difficulty: "intermediate" },
    { title: "Calculus II", category: "math", difficulty: "intermediate" },
    { title: "Biochemistry Essentials", category: "science", difficulty: "intermediate" },
    { title: "Mobile App Development", category: "computer science", difficulty: "advanced" },
    { title: "Probability Theory", category: "math", difficulty: "advanced" },
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
