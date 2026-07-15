import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [signingUp, setSigningUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="flex h-full w-full justify-center items-center bg-[#222222] gap-30">
      <div>
        <h1 className="font-semibold text-4xl">Welcome to</h1>
        <h1 className="font-extrabold text-5xl">Poopcord</h1>
        <h2 className="text-lg text-[#888888]">
          Sign in or create an account to start chatting.
        </h2>
      </div>
      <div className="flex flex-col gap-3 bg-[#111111] w-120 justify-center items-center rounded-xl p-5 border-1 border-[#555555] shadow-xl">
        <div className="flex flex-row gap-3 pb-1">
          <button
            className={`h-15 w-54 rounded-lg text-2xl hover:bg-[#555555] hover:cursor-pointer transition-all duration-200
               ${!signingUp ? "bg-[#555555]" : null}`}
            onClick={() => {
              setSigningUp(false);
              setErrorMessage("");
              setUsername("");
              setEmail("");
              setPassword("");
            }}
          >
            Sign in
          </button>
          <button
            className={`h-15 w-54 rounded-lg text-2xl hover:bg-[#555555] hover:cursor-pointer transition-all duration-200
               ${!signingUp ? null : "bg-[#555555]"}`}
            onClick={() => {
              setSigningUp(true);
              setErrorMessage("");
              setUsername("");
              setEmail("");
              setPassword("");
            }}
          >
            Sign up
          </button>
        </div>
        {signingUp ? (
          <form
            className="flex flex-col w-full justify-center items-center gap-2"
            onSubmit={() => {}}
          >
            <input
              className="w-full h-15 rounded-lg p-5 border border-[#555555] transition-all duration-200"
              placeholder="Enter username"
              type="text"
              required
              onChange={(e) => setUsername(e.target.value)}
              value={username || ""}
            />
            <input
              className="w-full h-15 rounded-lg p-5 border border-[#555555] transition-all duration-200"
              placeholder="Enter email"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email || ""}
            />
            <input
              className="w-full h-15 rounded-lg p-5 border border-[#555555] transition-all duration-200"
              placeholder="Enter password"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password || ""}
              minLength={6}
            />
            <div className="flex justify-start text-red-400 font-bold">
              {errorMessage.toUpperCase()}
            </div>
            <button
              className="h-15 w-full rounded-lg text-2xl hover:bg-[#666666] hover:cursor-pointer transition-all duration-200 border-1 border-[#555555]"
              type="submit"
            >
              Sign up
            </button>
          </form>
        ) : (
          <form
            className="flex flex-col w-full justify-center items-center gap-2"
            onSubmit={() => {}}
          >
            <input
              className="w-full h-15 rounded-lg p-5 border border-[#555555] transition-all duration-200"
              placeholder="Enter email"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email || ""}
            />
            <input
              className="w-full h-15 rounded-lg p-5 border border-[#555555] transition-all duration-200"
              placeholder="Enter password"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password || ""}
              minLength={6}
            />
            <div className="flex justify-start text-red-400 font-bold">
              {errorMessage.toUpperCase()}
            </div>
            <button
              className="h-15 w-full rounded-lg text-2xl hover:bg-[#666666] hover:cursor-pointer transition-all duration-200 border-1 border-[#555555]"
              type="submit"
            >
              Sign in
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
