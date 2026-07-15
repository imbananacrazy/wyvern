import MessageBox from "../components/message-box";
import Sidebar from "../components/sidebar";

export default function Chat() {
  return (
    <div className="flex h-screen w-screen bg-[#222222]">
      <div className="flex flex-row right-3 top-3 h-15 left-85 fixed bg-[#111111] border-r border-b border-[#555555] rounded-t-xl items-center">
        <h1 className="text-lg font-bold select-none w-full p-5">
          Text Channel
        </h1>
        <div className="flex flex-row justify-end w-full p-2">
          <button
            className="hover:cursor-pointer hover:bg-[#333333] w-10 h-10 flex items-center justify-center rounded-xl
          transition-all duration-100"
          >
            <svg
              className="w-7 h-7"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col right-3 top-18 bottom-20 left-85 fixed bg-[#111111] border-b border-r border-[#555555] rounded-b-xl"></div>
      <MessageBox />
      <Sidebar />
    </div>
  );
}
