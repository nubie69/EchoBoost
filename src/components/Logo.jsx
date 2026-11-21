export function Logo({ className = '', markOnly = false }) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        aria-hidden="true"
        className="h-10 w-10 shrink-0"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="echo-leaf" x1="7" y1="32" x2="31" y2="7" gradientUnits="userSpaceOnUse">
            <stop stopColor="#10B981" />
            <stop offset="1" stopColor="#65FF9A" />
          </linearGradient>
        </defs>
        <path
          d="M32.8 6.2C22.2 6.4 13.4 9.2 9.1 15.3C5.5 20.4 6.5 27.2 10.8 30.9C12.2 25.8 15.3 21.6 20.4 18.1C16.8 23.1 15.2 28.1 15.4 34.1C21.4 34.8 27.1 31.8 29.8 26.4C33 19.8 31.9 12.4 32.8 6.2Z"
          fill="url(#echo-leaf)"
        />
        <path
          d="M23.7 10.2L14.8 23.1H21.2L17.9 31.4L28.1 18.1H21.5L23.7 10.2Z"
          fill="#05070A"
          stroke="#F2F7F5"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
      </svg>

      {!markOnly && (
        <span className="font-display text-xl font-bold tracking-[-0.04em] text-eb-text">
          Echo<span className="text-eb-green-400">Boost</span>
        </span>
      )}
    </div>
  )
}
