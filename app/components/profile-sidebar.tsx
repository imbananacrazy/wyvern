"use client";

import { useState } from "react";

export default function ProfileSidebar() {
  //Profile Variables
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");
  const [tagText, setTagText] = useState("");
  const [tagColour, setTagColour] = useState("");

  //Tag Stuff
  const tagColours = {
    //"Dark Gray": "#111111",
    Red: "#B85C5C",
    Blue: "#5C7DB8",
    Green: "#5FA67A",
    Yellow: "#C2B36A",
    Purple: "#8B6AAE",
    Orange: "#C78A5A",
    Pink: "#C07A93",
  };

  return (
    <div className="flex flex-col w-75 fixed right-0 flex-col h-full bg-[#111111] border-l border-[#555555] p-3">
      <div className="flex flex-col h-full w-full pt-3">
        <div className="flex flex-col gap-4">
          {/*Profile Picture */}
          <div className="flex flex-col">
            <label className="text-lg pb-1">Profile Picture</label>
          </div>

          {/*Display Name */}
          <div className="flex flex-col">
            <label className="text-lg pb-1">Display Name</label>
            <input
              className="h-10 border-1 border-[#555555] rounded p-2"
              placeholder="Enter display name..."
              maxLength={30}
            />
          </div>

          {/* Bio*/}
          <div className="flex flex-col">
            <label className="text-lg pb-1">Bio</label>
            <textarea
              className="h-10 border-1 border-[#555555] rounded p-2 h-50"
              placeholder="Enter bio..."
              maxLength={500}
            />
          </div>

          {/* Tag */}
          <div className="flex flex-col">
            <label className="text-lg pb-1">Tag</label>
            <input
              className="h-10 border-1 border-[#555555] rounded p-2"
              placeholder="Enter tag..."
              maxLength={5}
              value={tagText}
              onChange={(e) => setTagText(e.target.value.toUpperCase())}
            />
          </div>

          {/* Tag Colours */}
          <div className="flex flex-col">
            <label className="text-lg pb-1">Tag Colour</label>
            <select
              className="h-10 border-1 border-[#555555] rounded p-2"
              onChange={(e) => setTagColour(e.target.value)}
              value={tagColour}
            >
              {Object.entries(tagColours).map(([name, value]) => (
                <option
                  key={value}
                  value={value}
                  className="bg-[#222222]"
                  style={{ color: value }}
                >
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="h-10 w-full gap-2 flex flex-row mt-auto">
          <button className="border-1 border-[#555555] rounded h-full w-full hover:bg-[#333333] hover:border-1 hover:border-blue-500 hover:cursor-pointer">
            Save Changes
          </button>
          <button className="border-1 border-[#555555] rounded h-full w-15 flex items-center justify-center hover:bg-[#333333] hover:cursor-pointer">
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
