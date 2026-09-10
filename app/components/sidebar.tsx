"use client";

interface Props {
  settingsButtonClicked: () => void;
}

import { useState } from "react";
import CreateChannelButton from "./create-channel-button";

export default function Sidebar({ settingsButtonClicked }: Props) {
  const [activeTab, setActiveTab] = useState("friends");
  const [textChannelsCollapsed, setTextChannelsCollapsed] = useState(false);
  const [voiceChannelsCollapsed, setVoiceChannelsCollapsed] = useState(false);
  const [muted, setMuted] = useState(false);
  const [deafened, setDeafened] = useState(false);

  return (
    <div className="flex w-75 fixed left-23 top-3 bottom-3 flex-col bg-[#111111] border-r border-b border-[#555555] p-3 rounded-r-xl text-white">
      <div className="flex flex-row gap-2 h-10">
        <button
          className={`w-full h-full flex items-center justify-center hover:cursor-pointer select-none
          hover:border-b-3 transition-all duration-100 hover:font-bold hover:border-white 
          ${activeTab === "friends" ? "border-b-3 border-white font-bold" : "border-b border-[#555555] font-normal"}`}
          onClick={() => setActiveTab("friends")}
        >
          Friends
        </button>
        <button
          className={`w-full h-full flex items-center justify-center hover:cursor-pointer select-none
          hover:border-b-3 transition-all duration-100 hover:font-bold hover:border-white 
          ${activeTab === "channels" ? "border-b-3 border-white font-bold" : "border-b border-[#555555] font-normal"}`}
          onClick={() => setActiveTab("channels")}
        >
          Channels
        </button>
      </div>
      <div className="flex flex-col pt-2">
        <h1 className="font-bold text-lg select-none">Quick Access</h1>
        <h2 className="text-sm text-[#888888] select-none">
          Nothing here yet.
        </h2>
        <hr className="my-2 border-[#555555]" />
      </div>
      {activeTab == "friends" ? (
        <div className="flex flex-col gap-2 h-full overflow-y-auto scrollbar-none mb-2">
          <h2 className="text-sm text-[#888888] select-none">
            No friends to show.
          </h2>
        </div>
      ) : (
        <div className="flex flex-col pt-2 gap-2 h-full mb-2 overflow-y-auto scrollbar-none">
          <CreateChannelButton />
          <hr className="my-2 border-[#555555]" />
          {/* text channel header w/ collapse icon*/}
          <div
            className="flex flex-row w-full group hover:cursor-pointer pt-2"
            onClick={() => setTextChannelsCollapsed(!textChannelsCollapsed)}
          >
            <h1 className="text-lg select-none group-hover:underline">
              Text Channels
            </h1>
            <div className="ml-auto">
              {textChannelsCollapsed ? (
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
                    d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
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
                    d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </div>

          {/* text channels. only show if not collapsed. */}
          {textChannelsCollapsed ? null : (
            <div className="flex flex-col gap-2">
              <h2 className="text-sm text-[#888888] select-none">
                No text channels to show.
              </h2>
            </div>
          )}

          {/* voice channel header w/ collapse icon*/}
          <div
            className="flex flex-row w-full group hover:cursor-pointer pt-2"
            onClick={() => setVoiceChannelsCollapsed(!voiceChannelsCollapsed)}
          >
            <h1 className="text-lg select-none group-hover:underline">
              Voice Channels
            </h1>
            <div className="ml-auto">
              {voiceChannelsCollapsed ? (
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
                    d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
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
                    d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </div>

          {/* voice channels. only show if not collapsed. */}
          {voiceChannelsCollapsed ? null : (
            <div className="flex flex-col gap-2">
              <h2 className="text-sm text-[#888888] select-none">
                No voice channels to show.
              </h2>
            </div>
          )}
        </div>
      )}
      <div className="flex flex-col mt-auto w-full items-center gap-2">
        <hr className="border-[#333333] w-full" />
        <div className="flex flex-row w-full items-center">
          {/* media control buttons */}
          <div className="h-10 w-full flex flex-row gap-1">
            {/* mute */}
            <button
              className={`h-10 w-10 hover:cursor-pointer items-center justify-center flex hover:bg-[#333333] 
            rounded-xl transition-all duration-100 ${muted ? "bg-red-500 hover:bg-red-400" : ""}`}
              onClick={() => setMuted(!muted)}
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
                  d="M5 8a1 1 0 0 1 1 1v3a4.006 4.006 0 0 0 4 4h4a4.006 4.006 0 0 0 4-4V9a1 1 0 1 1 2 0v3.001A6.006 6.006 0 0 1 14.001 18H13v2h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-2H9.999A6.006 6.006 0 0 1 4 12.001V9a1 1 0 0 1 1-1Z"
                  clipRule="evenodd"
                />
                <path d="M7 6a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V6Z" />
              </svg>
            </button>
            {/* deafen */}
            <button
              className={`h-10 w-10 hover:cursor-pointer items-center justify-center flex hover:bg-[#333333] 
            rounded-xl transition-all duration-100 ${deafened ? "bg-red-500 hover:bg-red-400" : ""}`}
              onClick={() => setDeafened(!deafened)}
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
                  d="M12 5a7 7 0 0 0-7 7v1.17c.313-.11.65-.17 1-.17h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3v-6a9 9 0 0 1 18 0v6a3 3 0 0 1-3 3h-2a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h2c.35 0 .687.06 1 .17V12a7 7 0 0 0-7-7Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {/* screen share */}
            <button className="h-10 w-10 hover:cursor-pointer items-center justify-center flex hover:bg-[#333333] rounded-xl transition-all duration-100">
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
                  d="M5 3a2 2 0 0 0-2 2v5h18V5a2 2 0 0 0-2-2H5ZM3 14v-2h18v2a2 2 0 0 1-2 2h-6v3h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-3H5a2 2 0 0 1-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {/* settings */}
          <button
            className="h-10 min-w-10 hover:cursor-pointer items-center justify-center flex hover:bg-[#333333] rounded-xl transition-all duration-100"
            onClick={settingsButtonClicked}
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
                d="M9.586 2.586A2 2 0 0 1 11 2h2a2 2 0 0 1 2 2v.089l.473.196.063-.063a2.002 2.002 0 0 1 2.828 0l1.414 1.414a2 2 0 0 1 0 2.827l-.063.064.196.473H20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.089l-.196.473.063.063a2.002 2.002 0 0 1 0 2.828l-1.414 1.414a2 2 0 0 1-2.828 0l-.063-.063-.473.196V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.089l-.473-.196-.063.063a2.002 2.002 0 0 1-2.828 0l-1.414-1.414a2 2 0 0 1 0-2.827l.063-.064L4.089 15H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.09l.195-.473-.063-.063a2 2 0 0 1 0-2.828l1.414-1.414a2 2 0 0 1 2.827 0l.064.063L9 4.089V4a2 2 0 0 1 .586-1.414ZM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
