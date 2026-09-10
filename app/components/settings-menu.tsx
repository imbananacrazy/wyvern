"use client";

import { useState } from "react";
import ProfileSettings from "./profile-settings";

interface Props {
  onClose: () => void;
}

export default function SettingsMenu({ onClose }: Props) {
  const [selectedTab, setSelectedTab] = useState("profile");
  return (
    <div className="w-screen h-screen bg-black/50 flex items-center justify-center fixed text-white">
      <div className="w-200 h-150 bg-[#111111] rounded-xl border border-[#555555] flex flex-col">
        {/*header */}
        <div className="h-15 border-b border-[#555555] flex flex-row justify-between items-center">
          <h1 className="h-full text-2xl truncate items-center flex pl-4 font-bold pt-1 select-none">
            {selectedTab == "profile" ? "Profile" : "Audio & Video"}
          </h1>
          <div className="pr-2 flex">
            <button
              className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-[#333333] transition-all duration-100 hover:cursor-pointer"
              onClick={onClose}
            >
              <svg
                className="w-6 h-6"
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
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            </button>
          </div>
        </div>
        {/*body*/}
        <div className="flex flex-row w-full h-full">
          {/*tabs sidebar*/}
          <div className="min-w-60 h-full border-r border-[#555555] p-4 flex flex-col gap-2 ">
            <button
              className={`flex flex-row justify-between w-full h-10 rounded-lg hover:bg-[#333333] transition-all duration-100 
          hover:cursor-pointer items-center p-3 border-[#555555] border ${selectedTab == "profile" ? "border-l-5" : null}`}
              onClick={() => setSelectedTab("profile")}
            >
              <h1 className="select-none">Profile</h1>
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
                  d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              className={`flex flex-row justify-between w-full h-10 rounded-lg hover:bg-[#333333] transition-all duration-100 
          hover:cursor-pointer items-center p-3 border-[#555555] border ${selectedTab == "audio" ? "border-l-5" : null}`}
              onClick={() => setSelectedTab("audio")}
            >
              <h1 className="select-none">Audio & Video</h1>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13 6.037c0-1.724-1.978-2.665-3.28-1.562L5.638 7.933H4c-1.105 0-2 .91-2 2.034v4.066c0 1.123.895 2.034 2 2.034h1.638l4.082 3.458c1.302 1.104 3.28.162 3.28-1.562V6.037Z" />
                <path
                  fill-rule="evenodd"
                  d="M14.786 7.658a.988.988 0 0 1 1.414-.014A6.135 6.135 0 0 1 18 12c0 1.662-.655 3.17-1.715 4.27a.989.989 0 0 1-1.414.014 1.029 1.029 0 0 1-.014-1.437A4.085 4.085 0 0 0 16 12a4.085 4.085 0 0 0-1.2-2.904 1.029 1.029 0 0 1-.014-1.438Z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M17.657 4.811a.988.988 0 0 1 1.414 0A10.224 10.224 0 0 1 22 12c0 2.807-1.12 5.35-2.929 7.189a.988.988 0 0 1-1.414 0 1.029 1.029 0 0 1 0-1.438A8.173 8.173 0 0 0 20 12a8.173 8.173 0 0 0-2.343-5.751 1.029 1.029 0 0 1 0-1.438Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div className="flex flex-col mt-auto gap-3">
              <hr className="w-full border-[#333333]"></hr>
              <button
                className="flex flex-row justify-between w-full h-10 rounded-lg hover:bg-[#333333] transition-all duration-100 
          hover:cursor-pointer items-center p-3 border-red-400 border"
              >
                <h1 className="select-none">Log Out</h1>
                <svg
                  className="w-6 h-6"
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
                    d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/*settings section*/}
          {selectedTab == "profile" ? <ProfileSettings /> : null}
        </div>
      </div>
    </div>
  );
}
