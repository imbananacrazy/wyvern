export default function ServerList() {
  return (
    <div className="flex w-20 fixed left-3 top-3 bottom-3 flex-col bg-[#111111] border-r border-b border-[#555555] p-3 rounded-l-xl text-white">
      <div className="flex flex-col gap-2 items-center justify-between w-full h-full">
        {/*regular servers */}
        <div className="flex flex-col gap-2"></div>
        <div className="flex flex-col mt-auto items-center gap-2">
          <hr className="border-[#333333] w-full" />
          <button className="w-15 h-15 rounded-xl flex items-center justify-center hover:bg-[#555555] transition-all duration-100 hover:cursor-pointer">
            <svg
              className="w-8 h-8"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14m-7 7V5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
