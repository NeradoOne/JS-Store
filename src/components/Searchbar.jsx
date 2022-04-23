const Searchbar = () => {
    return (
        <div className="navbar-center relative">
            <span className="absolute inset-y-0 right-0 flex items-center pl-2">
                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
            </span>
            <input type="text" className="py-2 text-sm rounded-md pl-2 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autocomplete="off" />
        </div>
    )
}

export default Searchbar