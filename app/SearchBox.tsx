'use client'
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
function SearchBox() {
  const [input, setSearch] =useState("");
  const router = useRouter();
  const handleSearch = (e:FormEvent<HTMLFormElement>) => {
   if(!input) return;
   router.push(`/search?term=${input}`);
  };
  return (
    <form
    onSubmit={handleSearch}
    className="max-w-6xl mx-auto flex justify-between items-center px-5">
      <input
        type="text"
        value={input}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Keywords ..."
        className="w-full h-14 rounded-sm placehoder-gray-500  text-gray-500 outline-none flex-1 bg-transparent dark:text-orange-400"
      />
      <button 
      type="submit"
      disabled={!input}
      className="text-purple-400 disabled:text-gray-400 "
      >Search</button>
    </form>
  );
}

export default SearchBox;
