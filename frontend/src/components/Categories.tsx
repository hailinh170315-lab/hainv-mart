import { useState } from 'react';
import { FiChevronDown} from 'react-icons/fi';

const Categories = () => {
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const toggleMenu = (menu: string) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    return (
        
            <div className="w-full md:w-[1600px] mt-10 md:mt-20 font-bold text-green-700 flex flex-col">
                <p className="mb-5 text-[25px] md:text-[30px] text-green-600 ml-3 md:ml-0">All Product</p>
                <div className="w-full flex flex-row flex-wrap gap-2">
                    <div className="relative">
                        <button
                            onClick={() => toggleMenu("allCategories")}
                            className={`px-3 py-1 h-10 ml-3 md:ml-0 flex items-center gap-1 rounded-lg transition-all duration-200
                                            ${openMenu === "allCategories"
                                    ? "bg-green-800 text-white"
                                    : "bg-gray-200 text-green-700 hover:text-green-600"
                                }`}

                        >
                            All Categories <FiChevronDown size={14} />
                        </button>
                        {openMenu === "allCategories" && (
                            <div className="absolute left-0 top-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg py-2 w-44 z-50">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    Vegetable
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    Bakery
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    Fruits
                                </a>
                            </div>
                        )}
                    </div>

                    <div className="hidden md:flex relative">
                        <button
                            onClick={() => toggleMenu("price")}
                            className={`px-3 py-1 h-10 ml-3 md:ml-0 flex items-center gap-1 rounded-lg transition-all duration-200
                                            ${openMenu === "price"
                                    ? "bg-green-800 text-white"
                                    : "bg-gray-200 text-green-700 hover:text-green-600"
                                }`}
                        >
                            Price <FiChevronDown size={14} />
                        </button>
                        {openMenu === "price" && (
                            <div className="absolute left-0 top-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg py-2 w-44 z-50">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    10.0
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    20.0
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    30.0
                                </a>
                            </div>
                        )}
                    </div>

                    <div className="hidden md:flex relative">
                        <button
                            onClick={() => toggleMenu("review")}
                            className={`px-3 py-1 h-10 ml-3 md:ml-0 flex items-center gap-1 rounded-lg transition-all duration-200
                                            ${openMenu === "review"
                                    ? "bg-green-800 text-white"
                                    : "bg-gray-200 text-green-700 hover:text-green-600"
                                }`}
                        >
                            Review <FiChevronDown size={14} />
                        </button>
                        {openMenu === "review" && (
                            <div className="absolute left-0 top-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg py-2 w-44 z-50">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    5.0
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    4.5
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    4.0
                                </a>
                            </div>
                        )}
                    </div>

                    <div className="hidden md:flex relative">
                        <button
                            onClick={() => toggleMenu("color")}
                            className={`px-3 py-1 h-10 ml-3 md:ml-0 flex items-center gap-1 rounded-lg transition-all duration-200
                                            ${openMenu === "color"
                                    ? "bg-green-800 text-white"
                                    : "bg-gray-200 text-green-700 hover:text-green-600"
                                }`}
                        >
                            Color <FiChevronDown size={14} />
                        </button>
                        {openMenu === "color" && (
                            <div className="absolute left-0 top-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg py-2 w-44 z-50">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    Red
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    Yellow
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    Green
                                </a>
                            </div>
                        )}
                    </div>

                    <div className="hidden md:flex relative">
                        <button
                            onClick={() => toggleMenu("offer")}
                            className={`px-3 py-1 h-10 ml-3 md:ml-0 flex items-center gap-1 rounded-lg transition-all duration-200
                                            ${openMenu === "offer"
                                    ? "bg-green-800 text-white"
                                    : "bg-gray-200 text-green-700 hover:text-green-600"
                                }`}
                        >
                            Offer <FiChevronDown size={14} />
                        </button>
                        {openMenu === "offer" && (
                            <div className="absolute left-0 top-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg py-2 w-44 z-50">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    Vegetable
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    Bakery
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    Fruits
                                </a>
                            </div>
                        )}
                    </div>

                    <div className="hidden md:flex relative">
                        <button
                            onClick={() => toggleMenu("brands")}
                            className={`px-3 py-1 h-10 ml-3 md:ml-0 flex items-center gap-1 rounded-lg transition-all duration-200
                                            ${openMenu === "brands"
                                    ? "bg-green-800 text-white"
                                    : "bg-gray-200 text-green-700 hover:text-green-600"
                                }`}
                        >
                            Brands <FiChevronDown size={14} />
                        </button>
                        {openMenu === "brands" && (
                            <div className="absolute left-0 top-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg py-2 w-44 z-50">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    Vegetable
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    Bakery
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    Fruits
                                </a>
                            </div>
                        )}
                    </div>

                    <div className="relative ml-auto">
                        <button
                            onClick={() => toggleMenu("sortBy")}
                            className={`px-3 py-1 h-10 flex items-center gap-1 border border-gray-300 rounded-lg transition-all duration-200 
                                            ${openMenu === "sortBy"
                                    ? "bg-green-800 text-white"
                                    : "bg-white text-green-700 hover:text-green-600"
                                }`}
                        >
                            Sort by <FiChevronDown size={14} />
                        </button>
                        {openMenu === "sortBy" && (
                            <div className="absolute left-0 top-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg py-2 w-44 z-50">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    Vegetable
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    Bakery
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    Fruits
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
    
    )
}

export default Categories