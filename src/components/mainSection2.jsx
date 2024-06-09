
export default function MainSection() {
    return (
        <div className="flex flex-col justify-center align-top mx-auto max-w-7xl py-6 px-7 sm:px-6 lg:px-8 ">
                        <div> <p className="text-2xl font-medium text-font-color"> What would you like to compare today? </p></div>
                        <div className="flex flex-row justify-start gap-5">
                            <select>
                                <option> Product A </option>
                                <option> Product B </option>
                                <option> Product C </option>
                                <option> Product D </option>
                                <option> Product E </option>
                            </select>
                            <select>
                                <option> Product A </option>
                                <option> Product B </option>
                                <option> Product C </option>
                                <option> Product D </option>
                                <option> Product E </option>
                            </select>
                        </div>
                        <div className="relative rounded-xl overflow-auto p-2 pt-2">
                            <div className="grid gap-4 font-mono font-bold text-xs text-center text-white align-start">
                                <div className="grid bg-stripes-blue w-full rounded-lg">
                                    <div className="px-4 py-2 rounded-lg shadow-lg max-w-md">
                                        <SearchBar />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div> Current month compares </div>
                        <div> Overall all compares</div>
        </div>
    )
}

export function SearchBar() {
    return (
        <form className="items-start place-items-start max-w-md mx-auto">
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-3 ps-10 text-sm text-gray-700 border border-gray-300 rounded-lg bg-white focus:ring-gray-500 focus:border-grey-500" placeholder="What can we help you find ?" required />
                {/* <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required /> */}
                <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-button-color-red rounded-e-lg border border-white-color focus:ring-4 focus:outline-none focus:ring-grey-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800">
                    Search
                </button>
            </div>
        </form>
    )
}