export default function Logo() {
  return (
    <svg
      fill="none"
      height="20"
      viewBox="0 0 140 20"
      width="140"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Watermelon text */}
      <text
        x="0"
        y="16"
        fontFamily="sans-serif"
        fontSize="18"
        fontWeight="600"
        fill="url(#watermelon-gradient)"
      >
        Watermelon
      </text>

      <defs>
        <linearGradient id="watermelon-gradient" x1="0" y1="0" x2="100%" y2="0">
          <stop offset="0%" stopColor="#ff6b9d" />
          <stop offset="50%" stopColor="#e84855" />
          <stop offset="100%" stopColor="#40916c" />
        </linearGradient>
      </defs>
    </svg>
  );
}
