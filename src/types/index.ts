export type Course = {
  id: number;
  title: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
};

export type Filters = {
  category?: Course["category"]; 
  difficulty?: Course["difficulty"]; 
};