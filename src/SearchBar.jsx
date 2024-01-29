const SearchBar = () => {
    return (
      <div>
        <form className="relative">
          <label htmlFor="default-search" className="mb-2 bg-gray-50 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              onClick={filterRes}
              className="text-white absolute right-2.5 bottom-2.5 
              bg-blue-700 hover:bg-blue-800 focus:ring-4 
              focus:outline-none focus:ring-blue-300 font-medium 
              rounded-lg text-sm px-4 py-2 dark:bg-blue-600 
              dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
             Find your Top Restraunt
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default SearchBar;
  