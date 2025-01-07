type Props = {
  currentCategory?: string;
  currentDifficulty?: string;
};

const FilterOptions = ({ currentCategory, currentDifficulty }: Props) => {
  return (
    <form method="get" action="/" className="flex flex-wrap gap-4 items-end justify-center">
      <div className="form-control w-full sm:w-auto">
        <label className="label">
          <span className="label-text text-white">Category</span>
        </label>
        <select
          name="category"
          defaultValue={currentCategory || ""}
          className="select bg-transparent border-white text-white"
        >
          <option value="">All Categories</option>
          <option value="math">Math</option>
          <option value="science">Science</option>
          <option value="computer science">Computer Science</option>
        </select>
      </div>

      <div className="form-control w-full sm:w-auto">
        <label className="label">
          <span className="label-text text-white">Difficulty</span>
        </label>
        <select
          name="difficulty"
          defaultValue={currentDifficulty || ""}
          className="select bg-transparent border-white text-white "
        >
          <option value="">All Difficulties</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <button type="submit" className="btn bg-transparent text-white hover:btn-secondary hover:text-white border-white">
        Apply Filters
      </button>
    </form>
  );
};

export default FilterOptions;
