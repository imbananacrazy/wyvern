import Image from "next/image";

export default function MessageBox() {
  return (
    <div className="flex flex-row h-15 fixed bottom-3 left-85 right-3 gap-2">
      <input
        className="bg-[#111111] border-b border-r border-[#555555] rounded-xl p-3 w-full h-full"
        placeholder="Type a message..."
      ></input>
      <button
        className="bg-[#111111] border-b border-r border-[#555555] rounded-xl p-3 w-15 h-full flex items-center justify-center
      hover:bg-[#333333] hover:cursor-pointer transition-all duration-100"
      >
        <svg
          height="25px"
          width="25px"
          viewBox="0 0 473.931 473.931"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle fill="white" cx="236.966" cy="236.966" r="236.966" />

          <g>
            <circle fill="#111111" cx="175.26" cy="110.33" r="41.657" />
            <circle fill="#111111" cx="291.595" cy="110.33" r="41.657" />
            <path
              fill="#111111"
              d="M269.287,341.548c30.473,0,60.946,0,91.415,0c12.063,0,12.063-18.709,0-18.709
          c-30.473,0-60.946,0-91.415,0C257.22,322.839,257.22,341.548,269.287,341.548L269.287,341.548z"
            />
          </g>
        </svg>
      </button>
      <button
        className="bg-[#111111] border-b border-r border-[#555555] rounded-xl p-3 w-15 h-full flex items-center justify-center
      hover:bg-[#333333] hover:cursor-pointer transition-all duration-100"
      >
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 7h6v2H3v6h4v-2H5v-2h4v6H1V7h2zm14 0h6v2h-6v2h4v2h-4v4h-2V7h2zm-4 0h-2v10h2V7z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}
