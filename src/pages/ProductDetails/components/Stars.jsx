import { Star } from "lucide-react"; // assuming you're using lucide-react

function Stars({
  rating = 0,
  totalStars = 5,
  totalReviews = 0,
  isInStock = true,
  className = "",
}) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {Array.from({ length: totalStars }, (_, i) => {
        const starNumber = i + 1;
        return (
          <Star
            key={i}
            className={`h-4 w-4 ${
              starNumber <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        );
      })}

      <span className="text-sm text-gray-500">({totalReviews} Reviews)</span>
      <span className="ml-2 text-green-600">
        {isInStock ? "In Stock" : "Out of Stock"}
      </span>
    </div>
  );
}

export default Stars;
