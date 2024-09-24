import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

export default function Pagination({ totalPages, currentPage, onPageChange }) {
  const pageNumbers = [...Array(totalPages).keys()].map(i => i + 1);

  return (
    <div className="pagination my-5">
      <button
        className="page-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaCaretLeft />
      </button>
      {pageNumbers.map(page => (
        <button
          key={page}
          className={`page-btn ${page === currentPage ? 'active' : ''}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="page-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaCaretRight />
      </button>
    </div>
  );
}