export default function CreateChannelButton() {
  return (
    <div
      className="flex flex-row w-full h-12 rounded-lg border hover:cursor-pointer transition-all 
    duration-100 hover:bg-[#333333] border-[#555555] items-center p-2 gap-2"
    >
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
          clipRule="evenodd"
        />
      </svg>

      <h1 className="text-lg font-medium select-none">Create Channel</h1>
    </div>
  );
}
