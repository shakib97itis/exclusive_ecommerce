const Ratings = ({ rating, reviewCount, maxRating = 5 }) => {
  const ratingArray = Array(maxRating)
    .fill(0)
    .map((_, i) => (i < rating ? "filled" : "empty"));

  return (
    <div className="flex items-center">
      <div className="flex text-yellow-400">
        {ratingArray.map((type, i) => (
          <svg
            key={i}
            className={`h-4 w-4 fill-current sm:h-5 sm:w-5 ${type === "filled" ? "fill-yellow-400" : "fill-gray-300"}`}
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
      <span className="ml-1 text-xs text-gray-600 sm:text-sm">
        ({reviewCount} reviews)
      </span>
    </div>
  );
};

export default Ratings;
