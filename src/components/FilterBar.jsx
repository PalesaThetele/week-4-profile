function FilterBar({ categories, selectedCategory, onCategoryChange }) {
    return (
        <div className="filter-bar" aria-label="Project filters">
            {categories.map((category) => (
                <button
                    key={category}
                    type="button"
                    className={selectedCategory === category ? "active" : ""}
                    onClick={() => onCategoryChange(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

export default FilterBar;
