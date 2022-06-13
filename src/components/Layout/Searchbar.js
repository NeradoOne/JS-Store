const Searchbar = () => {
    return (
        <div className="relative">
            <span className="absolute inset-y-0 right-0 flex items-center pl-2">
                <button type="submit" className="p-1">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
            </span>
            <input type="text" className="max-w-5xl w-96 py-2 text-sm rounded-md pl-2 focus:outline-none " placeholder="Search your products..." autoComplete="off" />
        </div>
    )
}

export default Searchbar