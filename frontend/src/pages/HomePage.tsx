import Header from '../components/Header'
import { TiLocationOutline } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const HomePage = () => {
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const toggleMenu = (menu: string) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <Header />
            <div className="w-[1600px] flex flex-row items-center border-b border-gray-300">
                <img src="src\images\z7088938192613_8f918d6703d5077bc783ace24ed1b5ad.jpg" alt="Logo" width="250px" height="250px" className="mr-16" />
                <TiLocationOutline size={30} />
                <div className="w-[120px] text-green-600 ml-5 mr-20">
                    <p className="font-medium text-[12px]">Delivery to</p>
                    <p className="font-bold">Abu Dhabi</p>
                </div>
                <div>
                    <div className="flex items-center bg-gray-200 rounded-2xl px-4 py-3 w-[800px] bg-white">
                        <CiSearch size={20} className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="CNTT01"
                            className="outline-none w-full bg-gray-200 placeholder-gray-400"
                        />
                    </div>
                </div>
                <div className="w-14 h-14 ml-[110px] bg-green-800 text-white flex items-center justify-center rounded-full">
                    <RiShoppingBasket2Line fontSize={2} color="#fff" size={35} />
                </div>
                <div className="w-auto h-auto ml-auto flex items-center justify-center rounded-full">
                    <img src="src\images\Gemini_Generated_Image_pevt7cpevt7cpevtt.png" alt="avatar" className="w-14 h-14 rounded-full object-cover" />
                </div>
            </div>
            <div className="w-[1600px] font-bold text-green-700 flex flex-row items-center">
                <div className="w-full bg-white">
                    <div className="w-full mx-auto flex justify-between items-center px-6 py-2 text-sm">
                        <div className="flex space-x-6 relative">
                            <div className="relative">
                                <button
                                    onClick={() => toggleMenu("products")}
                                    className="flex items-center gap-1 hover:text-green-600"
                                >
                                    Products <FiChevronDown size={14} />
                                </button>
                                {openMenu === "products" && (
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

                            <button className="hover:text-green-600">What's New</button>
                            <button className="hover:text-green-600">Delivery</button>

                            <div className="relative">
                                <button
                                    onClick={() => toggleMenu("deals")}
                                    className="flex items-center gap-1 hover:text-green-600"
                                >
                                    Deals & Offers <FiChevronDown size={14} />
                                </button>
                                {openMenu === "deals" && (
                                    <div className="absolute left-0 top-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg py-2 w-48 z-50">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                            Flash Sale
                                        </a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                            Member Discounts
                                        </a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                            Bundled Deals
                                        </a>
                                    </div>
                                )}
                            </div>

                            <button className="hover:text-green-600">Help & Support</button>
                        </div>

                        <div className="flex items-center space-x-5">
                            <button className="hover:text-green-600">Returns</button>
                            <button className="hover:text-green-600">FAQs</button>
                            <button className="w-[140px] h-9 bg-orange-200 rounded-full hover:bg-orange-600">
                                <div className="flex flex-row justify-center rounded-full">
                                    <div className="w-8 h-8 mr-2 bg-orange-500 text-white flex items-center justify-center rounded-full">
                                        <RiShoppingBasket2Line color="#fff" size={20} />
                                    </div>
                                    <span className="mt-1.5">Email Support</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomePage