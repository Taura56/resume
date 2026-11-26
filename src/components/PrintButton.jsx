export default function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      className="print-btn"
      onClick={handlePrint}
      title="Download / Print Resume as PDF"
      aria-label="Download resume as PDF"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M19 9H5V7H19v2zM5 17h14v2H5v-2zM6 15h12v2H6z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="8" cy="21" r="1" fill="currentColor" />
        <circle cx="16" cy="21" r="1" fill="currentColor" />
      </svg>
      Download PDF
    </button>
  );
}
