export default function ProfileSettings() {
  const colours = {
    //"Dark Gray": "#111111",
    Red: "#B85C5C",
    Blue: "#5C7DB8",
    Green: "#5FA67A",
    Yellow: "#C2B36A",
    Purple: "#8B6AAE",
    Orange: "#C78A5A",
    Pink: "#C07A93",
  };

  const fontStyles = {
    Normal: "font-normal",
    Bold: "font-bold",
    ExtraBold: "font-extrabold",
  };

  return (
    <div className="w-full h-full p-3 flex flex-col gap-5">
      <div className="flex flex-col gap-1 ">
        <label className="text-lg">Display Name & Style</label>
        <div className="flex flex-row gap-2">
          <input
            className="h-10 w-50 border border-[#555555] rounded p-2"
            placeholder="Enter display name..."
            maxLength={30}
          />
          <select className="h-10 border border-[#555555] rounded p-2">
            {Object.entries(colours).map(([name, value]) => (
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
          <select className="h-10 border border-[#555555] rounded p-2">
            {Object.entries(fontStyles).map(([name, value]) => (
              <option key={value} value={[name]} className="bg-[#222222]">
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-lg">Tag Text & Colour</label>
        <div className="flex flex-row gap-2">
          <input
            className="h-10 w-40 border border-[#555555] rounded p-2"
            placeholder="Enter tag..."
            maxLength={5}
          />
          <select className="h-10 border border-[#555555] rounded p-2">
            {Object.entries(colours).map(([name, value]) => (
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
      <div className="flex flex-col gap-1">
        <label className="text-lg">Bio</label>
        <div className="flex flex-row gap-2">
          <textarea
            className="border border-[#555555] rounded p-2 h-50 w-80"
            placeholder="Enter bio..."
            maxLength={500}
          />
        </div>
      </div>
    </div>
  );
}
