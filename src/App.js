import "./App.css";
import { useState } from "react";

function App() {
  const [details, setDetails] = useState({
    username: "",
    name: "",
    email: "",
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-[#fed5db]">
      <div className="border-none w-[40%] h-[40%] px-8 pt-4 rounded-2xl bg-[#fce4ea]">
        <h1 className="text-2xl py-2 items-center mb-3">Your Profile</h1>
        <form>
        <div className="flex flex-col ">
          <div className="relative">
            <input
              type="text"
              id="username"
              placeholder=" "
              value={details.username}
              onChange={(e) => setDetails({...details, username: e.target.value})}
              className="peer block w-full px-4 py-2 pt-6 text-sm text-gray-900 bg-[#ffeef1] border-2 
              border-[#ffe0e7] rounded-lg focus:outline-none focus:ring-0" />
            <label
              htmlFor="username"
              className="absolute left-4 top-2 text-stone-500 text-xs transition-all duration-200 transform 
              origin-left pointer-events-none peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm 
              peer-focus:top-2 peer-focus:text-xs">
              User name
            </label>
          </div>
          <div className="relative mt-2">
            <input
              type="text"
              id="name"
              placeholder=" "
              value={details.name}
              onChange={(e) => setDetails({...details, name: e.target.value})}
              className="peer block w-full px-4 py-2 pt-6 text-sm text-gray-900 bg-[#ffeef1] border-2 
              border-[#ffe0e7] rounded-lg focus:outline-none focus:ring-0" />
            <label
              htmlFor="name"
              className="absolute left-4 top-2 text-stone-500 text-xs transition-all duration-200 transform 
              origin-left pointer-events-none peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm 
              peer-focus:top-2 peer-focus:text-xs">
              Your name
            </label>
          </div>
          <div className="relative mt-2">
            <input
              type="email"
              id="email"
              placeholder=" "
              value={details.email}
              onChange={(e) => setDetails({...details, email: e.target.value})}
              className="peer block w-full px-4 py-2 pt-6 text-sm text-gray-900 bg-[#ffeef1] border-2 
              border-[#ffe0e7] rounded-lg focus:outline-none" />
            <label
              htmlFor="email"
              className="absolute left-4 top-2 text-stone-500 text-xs transition-all duration-200 transform 
              origin-left pointer-events-none peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm 
              peer-focus:top-2 peer-focus:text-xs no-focus-text">
              Email ID
            </label>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
}

export default App;
