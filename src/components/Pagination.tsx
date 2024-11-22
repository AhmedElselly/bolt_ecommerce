import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, setCurrentPage }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-8 flex justify-center gap-2">
      <button
        onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-md border border-gray-300 disabled:opacity-50"
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-4 py-2 rounded-md ${
            currentPage === page
              ? 'bg-black text-white'
              : 'border border-gray-300'
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-md border border-gray-300 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}