import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";

export const SearchForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const query = searchParams.get("q");

  function onSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    const query = data.q?.toString().trim();

    if (!query) {
      setIsLoading(false);
      return;
    }

    if (!query) {
      return null;
    }

    router.push(`/search?q=${encodeURIComponent(query)}`);
    setIsLoading(false);
  }
  return (
    <form onSubmit={onSearch}>
      <input
        type="search"
        placeholder="Pesquisar"
        className="bg-[#E1E4E7] w-[620px] h-[28px] p-4 rounded"
        name="q"
      />
      <button
        type="submit"
        className="bg-pinkPrimary text-white px-4 py-2 rounded-full ml-[-60px] cursor-pointer"
      >
        {isLoading ? "..." : <FaSearch />}
      </button>
    </form>
  );
};
