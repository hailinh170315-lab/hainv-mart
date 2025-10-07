import Header from '../components/Header'
import { TiLocationOutline } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { RiAddLargeFill, RiShoppingBasket2Line } from "react-icons/ri";
import { useState } from 'react';
import { FiChevronDown} from 'react-icons/fi';
import { TiArrowRight } from "react-icons/ti";
import { LuCar } from "react-icons/lu";
import { FiMail } from "react-icons/fi";
import { FaStar } from 'react-icons/fa';
import { FaArrowLeft } from "react-icons/fa6";
import Categories from '../components/Categories';

const HomePage = () => {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = (menu: string) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <header className="hidden md:flex w-full h-14 bg-green-800 text-white flex items-center justify-between px-8">
                <Header />
            </header>

            <div className="w-screen md:w-[1600px] mt-5 md:mt-0 flex flex-row flex-wrap gap-2 items-center md:border-b border-gray-300">
                <img src="src\images\z7088938192613_8f918d6703d5077bc783ace24ed1b5ad.jpg" alt="Logo" width="250px" height="250px" className="hidden md:flex mr-16" />
                <div className='md:hidden ml-3 flex flex-row flex-wrap gap-2 justify-center items-center'>
                    <FaArrowLeft size={25} />
                    <span className="md:hidden text-green-800 font-bold">All Product</span>
                </div>

                <TiLocationOutline size={30} className="hidden md:flex" />

                <div className="hidden md:flex md:flex-col w-[80] md:w-[120px] text-green-600 ml-5 mr-20">
                    <p className="font-medium text-[12px]">Delivery to</p>
                    <p className="font-bold">Abu Dhabi</p>
                </div>
                <div>
                    <div className="hidden md:flex items-center bg-gray-300 rounded-2xl px-4 py-3 w-[800px] bg-white">
                        <CiSearch size={20} className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Search your products, Categories or Brands"
                            className="outline-none w-full bg-gray-300 placeholder-gray-400"
                        />
                    </div>
                </div>
                <div className="flex ml-auto">
                    <div className="w-10 md:w-14 h-10 md:h-14 bg-green-800 text-white flex items-center justify-center rounded-full">
                        <RiShoppingBasket2Line fontSize={2} color="#fff" size={35} />
                    </div>
                    <div className="w-auto h-auto ml-2 flex items-center justify-center rounded-full">
                        <img src="src\images\Gemini_Generated_Image_pevt7cpevt7cpevtt.png" alt="avatar" className="w-10 md:w-14 h-10 md:h-14 rounded-full object-cover" />
                    </div>
                </div>

            </div>
            <div className="w-full md:w-[1600px] font-bold text-green-700 flex flex-row items-center">
                <div className="w-full bg-white">
                    <div className="w-full mx-auto flex justify-between items-center px-0 py-4 text-sm">
                        <div className="hidden md:flex space-x-6 relative">
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
                        {/* <button className="ml-3 flex items-center text-green-800"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                        </button> */}

                        <div className="hidden md:flex items-center space-x-5">
                            <button className="hover:text-green-600">Returns</button>
                            <button className="hover:text-green-600">FAQs</button>
                            <button className="w-[140px] h-9 bg-orange-100 rounded-full hover:bg-orange-600">
                                <div className="flex flex-row justify-center rounded-full">
                                    <div className="w-8 h-8 mr-2 bg-orange-500 text-white flex items-center justify-center rounded-full">
                                        <FiMail color="#fff" size={20} />
                                    </div>
                                    <span className="mt-1.5">Email Support</span>
                                </div>
                            </button>
                        </div>

                        {isMobileMenuOpen && (
                            <div className="md:hidden w-full bg-white border-t border-gray-200 py-3 flex flex-col items-start px-6 space-y-3">
                                <button className="hover:text-green-600 w-full text-left">Products</button>
                                <button className="hover:text-green-600 w-full text-left">What's New</button>
                                <button className="hover:text-green-600 w-full text-left">Delivery</button>
                                <button className="hover:text-green-600 w-full text-left">Deals & Offers</button>
                                <button className="hover:text-green-600 w-full text-left">Help & Support</button>
                                <button className="hover:text-green-600 w-full text-left">Returns</button>
                                <button className="hover:text-green-600 w-full text-left">FAQs</button>
                                <button className="hover:text-green-600 w-full text-left">Email Support</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="w-screen md:w-[1600px] h-40 md:h-[500px] px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 p-4 md:p-0 mt-5 bg-center rounded-2xl text-white flex flex-col"
                style={{ backgroundImage: "url('https://khoinguonsangtao.vn/wp-content/uploads/2021/10/background-nau-dep-nhat.jpg')" }}
            >
                <div className="w-full md:w-[500px] flex flex-col md:ml-20 md:mt-20">
                    <div className="hidden w-[310px] h-9 bg-red-700 md:flex items-center justify-center rounded-full">
                        <div className="flex flex-row justify-center rounded-full">
                            <div className="w-8 h-8 mr-2 bg-white text-red flex flex-row items-center justify-center rounded-full">
                                <LuCar color="red" size={25} />
                            </div>
                            <span className="mt-1 mr-2">Get Free Delivery On Your First Order</span>
                        </div>
                    </div>
                    <span className="font-bold text-[30px] md:text-[48px]">We deliver <span className="text-orange-600">groceries</span> to your doorstep</span>
                    <span className="hidden md:flex mt-5">Get the freshest graceries delivery right to your home. Save time, skip the lines, and enjoy the convenience of quick, efficient delivery.</span>

                    <button className="w-[130px] md:w-[160px] h-8 bg-orange-500 mt-1 md:mt-5 flex flex-row items-center justify-center rounded-xl hover:bg-orange-600">
                        <span>Learn more</span><TiArrowRight color="#fff" size={25} />
                    </button>
                </div>


            </div>

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
                            className={`w-[100px] px-3 py-1 h-10 flex items-center gap-1 border border-gray-300 rounded-lg transition-all duration-200 
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

            <Categories />

            <div className="w-screen md:w-[1600px] mt-10 ml-3 md:ml-0 flex flex-wrap gap-3 md:gap-6">
                <div className="w-[200px] md:w-[380px] h-[300px] md:h-[400px] bg-gray-200 flex flex-col items-center justify-center rounded-2xl">
                    <img src="https://nongsanminhduc.vn/wp-content/uploads/2025/05/rau-huu-co-minh-duc.png" alt=""
                        className="mt-5 w-40 md:w-60 h-40 md:h-60 rounded-2xl object-cover"
                    />
                    <div className="w-[180px] md:w-[340px] h-auto flex flex-col space-y-2" >
                        <p className="text-green-700 font-bold">Vegetables</p>
                        <div className="flex flex-row">
                            <p className="w-full flex text-gray-500">1000gram</p>
                            <FaStar className="text-yellow-300" size={22} />(5/5)
                        </div>

                        <div className="w-[180px] md:w-[340px] h-10 mb-5 flex flex-row items-center justify-center space-y-2">
                            <p className="mt-2 text-green-700 font-bold text-[14px] md:text-[20px]">$24.00</p>
                            <button className="w-8 md:w-12 h-8 md:h-12 ml-auto bg-green-700 text-white flex items-center justify-center rounded-full">
                                <RiAddLargeFill color="#fff" size={25} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-[200px] md:w-[380px] h-[300px] md:h-[400px] bg-gray-200 flex flex-col items-center justify-center rounded-2xl">
                    <img src="https://nongsanminhduc.vn/wp-content/uploads/2025/05/rau-huu-co-minh-duc.png" alt=""
                        className="mt-5 w-40 md:w-60 h-40 md:h-60 rounded-2xl object-cover"
                    />
                    <div className="w-[180px] md:w-[340px] h-auto flex flex-col space-y-2" >
                        <p className="text-green-700 font-bold">Vegetables</p>
                        <div className="flex flex-row">
                            <p className="w-full flex text-gray-500">1000gram</p>
                            <FaStar className="text-yellow-300" size={22} />(5/5)
                        </div>

                        <div className="w-[180px] md:w-[340px] h-10 mb-5 flex flex-row items-center justify-center space-y-2">
                            <p className="mt-2 text-green-700 font-bold text-[14px] md:text-[20px]">$24.00</p>
                            <button className="w-8 md:w-12 h-8 md:h-12 ml-auto bg-green-700 text-white flex items-center justify-center rounded-full">
                                <RiAddLargeFill color="#fff" size={25} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-[200px] md:w-[380px] h-[300px] md:h-[400px] bg-gray-200 flex flex-col items-center justify-center rounded-2xl">
                    <img src="https://nongsanminhduc.vn/wp-content/uploads/2025/05/rau-huu-co-minh-duc.png" alt=""
                        className="mt-5 w-40 md:w-60 h-40 md:h-60 rounded-2xl object-cover"
                    />
                    <div className="w-[180px] md:w-[340px] h-auto flex flex-col space-y-2" >
                        <p className="text-green-700 font-bold">Vegetables</p>
                        <div className="flex flex-row">
                            <p className="w-full flex text-gray-500">1000gram</p>
                            <FaStar className="text-yellow-300" size={22} />(5/5)
                        </div>

                        <div className="w-[180px] md:w-[340px] h-10 mb-5 flex flex-row items-center justify-center space-y-2">
                            <p className="mt-2 text-green-700 font-bold text-[14px] md:text-[20px]">$24.00</p>
                            <button className="w-8 md:w-12 h-8 md:h-12 ml-auto bg-green-700 text-white flex items-center justify-center rounded-full">
                                <RiAddLargeFill color="#fff" size={25} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-[200px] md:w-[380px] h-[300px] md:h-[400px] bg-gray-200 flex flex-col items-center justify-center rounded-2xl">
                    <img src="https://nongsanminhduc.vn/wp-content/uploads/2025/05/rau-huu-co-minh-duc.png" alt=""
                        className="mt-5 w-40 md:w-60 h-40 md:h-60 rounded-2xl object-cover"
                    />
                    <div className="w-[180px] md:w-[340px] h-auto flex flex-col space-y-2" >
                        <p className="text-green-700 font-bold">Vegetables</p>
                        <div className="flex flex-row">
                            <p className="w-full flex text-gray-500">1000gram</p>
                            <FaStar className="text-yellow-300" size={22} />(5/5)
                        </div>

                        <div className="w-[180px] md:w-[340px] h-10 mb-5 flex flex-row items-center justify-center space-y-2">
                            <p className="mt-2 text-green-700 font-bold text-[14px] md:text-[20px]">$24.00</p>
                            <button className="w-8 md:w-12 h-8 md:h-12 ml-auto bg-green-700 text-white flex items-center justify-center rounded-full">
                                <RiAddLargeFill color="#fff" size={25} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-[200px] md:w-[380px] h-[300px] md:h-[400px] bg-gray-200 flex flex-col items-center justify-center rounded-2xl">
                    <img src="https://nongsanminhduc.vn/wp-content/uploads/2025/05/rau-huu-co-minh-duc.png" alt=""
                        className="mt-5 w-40 md:w-60 h-40 md:h-60 rounded-2xl object-cover"
                    />
                    <div className="w-[180px] md:w-[340px] h-auto flex flex-col space-y-2" >
                        <p className="text-green-700 font-bold">Vegetables</p>
                        <div className="flex flex-row">
                            <p className="w-full flex text-gray-500">1000gram</p>
                            <FaStar className="text-yellow-300" size={22} />(5/5)
                        </div>

                        <div className="w-[180px] md:w-[340px] h-10 mb-5 flex flex-row items-center justify-center space-y-2">
                            <p className="mt-2 text-green-700 font-bold text-[14px] md:text-[20px]">$24.00</p>
                            <button className="w-8 md:w-12 h-8 md:h-12 ml-auto bg-green-700 text-white flex items-center justify-center rounded-full">
                                <RiAddLargeFill color="#fff" size={25} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-[200px] md:w-[380px] h-[300px] md:h-[400px] bg-gray-200 flex flex-col items-center justify-center rounded-2xl">
                    <img src="https://nongsanminhduc.vn/wp-content/uploads/2025/05/rau-huu-co-minh-duc.png" alt=""
                        className="mt-5 w-40 md:w-60 h-40 md:h-60 rounded-2xl object-cover"
                    />
                    <div className="w-[180px] md:w-[340px] h-auto flex flex-col space-y-2" >
                        <p className="text-green-700 font-bold">Vegetables</p>
                        <div className="flex flex-row">
                            <p className="w-full flex text-gray-500">1000gram</p>
                            <FaStar className="text-yellow-300" size={22} />(5/5)
                        </div>

                        <div className="w-[180px] md:w-[340px] h-10 mb-5 flex flex-row items-center justify-center space-y-2">
                            <p className="mt-2 text-green-700 font-bold text-[14px] md:text-[20px]">$24.00</p>
                            <button className="w-8 md:w-12 h-8 md:h-12 ml-auto bg-green-700 text-white flex items-center justify-center rounded-full">
                                <RiAddLargeFill color="#fff" size={25} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-[200px] md:w-[380px] h-[300px] md:h-[400px] bg-gray-200 flex flex-col items-center justify-center rounded-2xl">
                    <img src="https://nongsanminhduc.vn/wp-content/uploads/2025/05/rau-huu-co-minh-duc.png" alt=""
                        className="mt-5 w-40 md:w-60 h-40 md:h-60 rounded-2xl object-cover"
                    />
                    <div className="w-[180px] md:w-[340px] h-auto flex flex-col space-y-2" >
                        <p className="text-green-700 font-bold">Vegetables</p>
                        <div className="flex flex-row">
                            <p className="w-full flex text-gray-500">1000gram</p>
                            <FaStar className="text-yellow-300" size={22} />(5/5)
                        </div>

                        <div className="w-[180px] md:w-[340px] h-10 mb-5 flex flex-row items-center justify-center space-y-2">
                            <p className="mt-2 text-green-700 font-bold text-[14px] md:text-[20px]">$24.00</p>
                            <button className="w-8 md:w-12 h-8 md:h-12 ml-auto bg-green-700 text-white flex items-center justify-center rounded-full">
                                <RiAddLargeFill color="#fff" size={25} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-[200px] md:w-[380px] h-[300px] md:h-[400px] bg-gray-200 flex flex-col items-center justify-center rounded-2xl">
                    <img src="https://nongsanminhduc.vn/wp-content/uploads/2025/05/rau-huu-co-minh-duc.png" alt=""
                        className="mt-5 w-40 md:w-60 h-40 md:h-60 rounded-2xl object-cover"
                    />
                    <div className="w-[180px] md:w-[340px] h-auto flex flex-col space-y-2" >
                        <p className="text-green-700 font-bold">Vegetables</p>
                        <div className="flex flex-row">
                            <p className="w-full flex text-gray-500">1000gram</p>
                            <FaStar className="text-yellow-300" size={22} />(5/5)
                        </div>

                        <div className="w-[180px] md:w-[340px] h-10 mb-5 flex flex-row items-center justify-center space-y-2">
                            <p className="mt-2 text-green-700 font-bold text-[14px] md:text-[20px]">$24.00</p>
                            <button className="w-8 md:w-12 h-8 md:h-12 ml-auto bg-green-700 text-white flex items-center justify-center rounded-full">
                                <RiAddLargeFill color="#fff" size={25} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-[200px] md:w-[380px] h-[300px] md:h-[400px] bg-gray-200 flex flex-col items-center justify-center rounded-2xl">
                    <img src="https://nongsanminhduc.vn/wp-content/uploads/2025/05/rau-huu-co-minh-duc.png" alt=""
                        className="mt-5 w-40 md:w-60 h-40 md:h-60 rounded-2xl object-cover"
                    />
                    <div className="w-[180px] md:w-[340px] h-auto flex flex-col space-y-2" >
                        <p className="text-green-700 font-bold">Vegetables</p>
                        <div className="flex flex-row">
                            <p className="w-full flex text-gray-500">1000gram</p>
                            <FaStar className="text-yellow-300" size={22} />(5/5)
                        </div>

                        <div className="w-[180px] md:w-[340px] h-10 mb-5 flex flex-row items-center justify-center space-y-2">
                            <p className="mt-2 text-green-700 font-bold text-[14px] md:text-[20px]">$24.00</p>
                            <button className="w-8 md:w-12 h-8 md:h-12 ml-auto bg-green-700 text-white flex items-center justify-center rounded-full">
                                <RiAddLargeFill color="#fff" size={25} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-[200px] md:w-[380px] h-[300px] md:h-[400px] bg-gray-200 flex flex-col items-center justify-center rounded-2xl">
                    <img src="https://nongsanminhduc.vn/wp-content/uploads/2025/05/rau-huu-co-minh-duc.png" alt=""
                        className="mt-5 w-40 md:w-60 h-40 md:h-60 rounded-2xl object-cover"
                    />
                    <div className="w-[180px] md:w-[340px] h-auto flex flex-col space-y-2" >
                        <p className="text-green-700 font-bold">Vegetables</p>
                        <div className="flex flex-row">
                            <p className="w-full flex text-gray-500">1000gram</p>
                            <FaStar className="text-yellow-300" size={22} />(5/5)
                        </div>

                        <div className="w-[180px] md:w-[340px] h-10 mb-5 flex flex-row items-center justify-center space-y-2">
                            <p className="mt-2 text-green-700 font-bold text-[14px] md:text-[20px]">$24.00</p>
                            <button className="w-8 md:w-12 h-8 md:h-12 ml-auto bg-green-700 text-white flex items-center justify-center rounded-full">
                                <RiAddLargeFill color="#fff" size={25} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-[200px] md:w-[380px] h-[300px] md:h-[400px] bg-gray-200 flex flex-col items-center justify-center rounded-2xl">
                    <img src="https://nongsanminhduc.vn/wp-content/uploads/2025/05/rau-huu-co-minh-duc.png" alt=""
                        className="mt-5 w-40 md:w-60 h-40 md:h-60 rounded-2xl object-cover"
                    />
                    <div className="w-[180px] md:w-[340px] h-auto flex flex-col space-y-2" >
                        <p className="text-green-700 font-bold">Vegetables</p>
                        <div className="flex flex-row">
                            <p className="w-full flex text-gray-500">1000gram</p>
                            <FaStar className="text-yellow-300" size={22} />(5/5)
                        </div>

                        <div className="w-[180px] md:w-[340px] h-10 mb-5 flex flex-row items-center justify-center space-y-2">
                            <p className="mt-2 text-green-700 font-bold text-[14px] md:text-[20px]">$24.00</p>
                            <button className="w-8 md:w-12 h-8 md:h-12 ml-auto bg-green-700 text-white flex items-center justify-center rounded-full">
                                <RiAddLargeFill color="#fff" size={25} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-[200px] md:w-[380px] h-[300px] md:h-[400px] bg-gray-200 flex flex-col items-center justify-center rounded-2xl">
                    <img src="https://nongsanminhduc.vn/wp-content/uploads/2025/05/rau-huu-co-minh-duc.png" alt=""
                        className="mt-5 w-40 md:w-60 h-40 md:h-60 rounded-2xl object-cover"
                    />
                    <div className="w-[180px] md:w-[340px] h-auto flex flex-col space-y-2" >
                        <p className="text-green-700 font-bold">Vegetables</p>
                        <div className="flex flex-row">
                            <p className="w-full flex text-gray-500">1000gram</p>
                            <FaStar className="text-yellow-300" size={22} />(5/5)
                        </div>

                        <div className="w-[180px] md:w-[340px] h-10 mb-5 flex flex-row items-center justify-center space-y-2">
                            <p className="mt-2 text-green-700 font-bold text-[14px] md:text-[20px]">$24.00</p>
                            <button className="w-8 md:w-12 h-8 md:h-12 ml-auto bg-green-700 text-white flex items-center justify-center rounded-full">
                                <RiAddLargeFill color="#fff" size={25} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-[200px] md:w-[380px] h-[300px] md:h-[400px] bg-gray-200 flex flex-col items-center justify-center rounded-2xl">
                    <img src="https://nongsanminhduc.vn/wp-content/uploads/2025/05/rau-huu-co-minh-duc.png" alt=""
                        className="mt-5 w-40 md:w-60 h-40 md:h-60 rounded-2xl object-cover"
                    />
                    <div className="w-[180px] md:w-[340px] h-auto flex flex-col space-y-2" >
                        <p className="text-green-700 font-bold">Vegetables</p>
                        <div className="flex flex-row">
                            <p className="w-full flex text-gray-500">1000gram</p>
                            <FaStar className="text-yellow-300" size={22} />(5/5)
                        </div>

                        <div className="w-[180px] md:w-[340px] h-10 mb-5 flex flex-row items-center justify-center space-y-2">
                            <p className="mt-2 text-green-700 font-bold text-[14px] md:text-[20px]">$24.00</p>
                            <button className="w-8 md:w-12 h-8 md:h-12 ml-auto bg-green-700 text-white flex items-center justify-center rounded-full">
                                <RiAddLargeFill color="#fff" size={25} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-[200px] md:w-[380px] h-[300px] md:h-[400px] bg-gray-200 flex flex-col items-center justify-center rounded-2xl">
                    <img src="https://nongsanminhduc.vn/wp-content/uploads/2025/05/rau-huu-co-minh-duc.png" alt=""
                        className="mt-5 w-40 md:w-60 h-40 md:h-60 rounded-2xl object-cover"
                    />
                    <div className="w-[180px] md:w-[340px] h-auto flex flex-col space-y-2" >
                        <p className="text-green-700 font-bold">Vegetables</p>
                        <div className="flex flex-row">
                            <p className="w-full flex text-gray-500">1000gram</p>
                            <FaStar className="text-yellow-300" size={22} />(5/5)
                        </div>

                        <div className="w-[180px] md:w-[340px] h-10 mb-5 flex flex-row items-center justify-center space-y-2">
                            <p className="mt-2 text-green-700 font-bold text-[14px] md:text-[20px]">$24.00</p>
                            <button className="w-8 md:w-12 h-8 md:h-12 ml-auto bg-green-700 text-white flex items-center justify-center rounded-full">
                                <RiAddLargeFill color="#fff" size={25} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-[200px] md:w-[380px] h-[300px] md:h-[400px] bg-gray-200 flex flex-col items-center justify-center rounded-2xl">
                    <img src="https://nongsanminhduc.vn/wp-content/uploads/2025/05/rau-huu-co-minh-duc.png" alt=""
                        className="mt-5 w-40 md:w-60 h-40 md:h-60 rounded-2xl object-cover"
                    />
                    <div className="w-[180px] md:w-[340px] h-auto flex flex-col space-y-2" >
                        <p className="text-green-700 font-bold">Vegetables</p>
                        <div className="flex flex-row">
                            <p className="w-full flex text-gray-500">1000gram</p>
                            <FaStar className="text-yellow-300" size={22} />(5/5)
                        </div>

                        <div className="w-[180px] md:w-[340px] h-10 mb-5 flex flex-row items-center justify-center space-y-2">
                            <p className="mt-2 text-green-700 font-bold text-[14px] md:text-[20px]">$24.00</p>
                            <button className="w-8 md:w-12 h-8 md:h-12 ml-auto bg-green-700 text-white flex items-center justify-center rounded-full">
                                <RiAddLargeFill color="#fff" size={25} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-[200px] md:w-[380px] h-[300px] md:h-[400px] bg-gray-200 flex flex-col items-center justify-center rounded-2xl">
                    <img src="https://nongsanminhduc.vn/wp-content/uploads/2025/05/rau-huu-co-minh-duc.png" alt=""
                        className="mt-5 w-40 md:w-60 h-40 md:h-60 rounded-2xl object-cover"
                    />
                    <div className="w-[180px] md:w-[340px] h-auto flex flex-col space-y-2" >
                        <p className="text-green-700 font-bold">Vegetables</p>
                        <div className="flex flex-row">
                            <p className="w-full flex text-gray-500">1000gram</p>
                            <FaStar className="text-yellow-300" size={22} />(5/5)
                        </div>

                        <div className="w-[180px] md:w-[340px] h-10 mb-5 flex flex-row items-center justify-center space-y-2">
                            <p className="mt-2 text-green-700 font-bold text-[14px] md:text-[20px]">$24.00</p>
                            <button className="w-8 md:w-12 h-8 md:h-12 ml-auto bg-green-700 text-white flex items-center justify-center rounded-full">
                                <RiAddLargeFill color="#fff" size={25} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-[200px] md:w-[380px] h-[300px] md:h-[400px] bg-gray-200 flex flex-col items-center justify-center rounded-2xl">
                    <img src="https://nongsanminhduc.vn/wp-content/uploads/2025/05/rau-huu-co-minh-duc.png" alt=""
                        className="mt-5 w-40 md:w-60 h-40 md:h-60 rounded-2xl object-cover"
                    />
                    <div className="w-[180px] md:w-[340px] h-auto flex flex-col space-y-2" >
                        <p className="text-green-700 font-bold">Vegetables</p>
                        <div className="flex flex-row">
                            <p className="w-full flex text-gray-500">1000gram</p>
                            <FaStar className="text-yellow-300" size={22} />(5/5)
                        </div>

                        <div className="w-[180px] md:w-[340px] h-10 mb-5 flex flex-row items-center justify-center space-y-2">
                            <p className="mt-2 text-green-700 font-bold text-[14px] md:text-[20px]">$24.00</p>
                            <button className="w-8 md:w-12 h-8 md:h-12 ml-auto bg-green-700 text-white flex items-center justify-center rounded-full">
                                <RiAddLargeFill color="#fff" size={25} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-[200px] md:w-[380px] h-[300px] md:h-[400px] bg-gray-200 flex flex-col items-center justify-center rounded-2xl">
                    <img src="https://nongsanminhduc.vn/wp-content/uploads/2025/05/rau-huu-co-minh-duc.png" alt=""
                        className="mt-5 w-40 md:w-60 h-40 md:h-60 rounded-2xl object-cover"
                    />
                    <div className="w-[180px] md:w-[340px] h-auto flex flex-col space-y-2" >
                        <p className="text-green-700 font-bold">Vegetables</p>
                        <div className="flex flex-row">
                            <p className="w-full flex text-gray-500">1000gram</p>
                            <FaStar className="text-yellow-300" size={22} />(5/5)
                        </div>

                        <div className="w-[180px] md:w-[340px] h-10 mb-5 flex flex-row items-center justify-center space-y-2">
                            <p className="mt-2 text-green-700 font-bold text-[14px] md:text-[20px]">$24.00</p>
                            <button className="w-8 md:w-12 h-8 md:h-12 ml-auto bg-green-700 text-white flex items-center justify-center rounded-full">
                                <RiAddLargeFill color="#fff" size={25} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage