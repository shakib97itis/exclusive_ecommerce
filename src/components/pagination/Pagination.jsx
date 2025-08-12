import {
  FaChevronLeft as ChevronLeft,
  FaChevronRight as ChevronRight,
} from "react-icons/fa";

function Pagination({ currentPage, totalPages, onPageChange }) {
  // Helper to create array of page numbers
  const getPageNumbers = () => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <nav
      className="flex items-center justify-center gap-2"
      aria-label="Pagination"
    >
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="title-14-regular text-text-2 flex items-center justify-center rounded-sm border px-3 py-2 disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="ml-1 hidden sm:inline">Prev</span>
      </button>

      {/* Page Numbers */}
      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`rounded-sm border px-3 py-2 title-14-regular text-text-2 transition-colors ${
            currentPage === page
              ? "border-blue-500 bg-blue-500 text-white"
              : "hover:bg-gray-100"
          }`}
          aria-current={currentPage === page ? "page" : undefined}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="title-14-regular text-text-2 flex items-center justify-center rounded-sm border px-3 py-2 disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Next page"
      >
        <span className="mr-1 hidden sm:inline">Next</span>
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}

export default Pagination;
