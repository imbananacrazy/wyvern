import Image from "next/image";

export default function UserButton() {
  return (
    <div
      className="flex flex-row w-full h-12 rounded-lg border hover:cursor-pointer transition-all 
    duration-100 hover:bg-[#333333] border-[#555555] items-center p-2 gap-2"
    >
      <div className="h-8 w-8 rounded-full border border-[#555555] justify-center items-center flex overflow-hidden select-none">
        <Image
          src="/Chunk.png"
          alt="Profile Picture"
          className="w-full h-full object-cover"
          width={32}
          height={32}
          unoptimized
        />
      </div>
      <h1 className="text-lg font-medium select-none">Display name</h1>
      <div className="h-3 w-3 rounded-full bg-green-500 border border-[#555555] ml-auto mr-2" />
    </div>
  );
}
