import Header from '../components/Header'
import { TiLocationOutline } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { RiShoppingBasket2Line } from "react-icons/ri";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        <Header />
        <div className="w-[1600px] flex flex-row items-center border-b border-gray-300 ">
            <img src="src\images\z7088938192613_8f918d6703d5077bc783ace24ed1b5ad.jpg" alt="Logo" width="250px" height="250px" className="mr-16" />
            <TiLocationOutline size={30}/>
            <div className="w-[120px] text-green-600 ml-5 mr-20">
                <p className="font-medium text-[15px]">Delivery to</p>
                <p className="font-bold">Abu Dhabi</p>
            </div>
            <div>
                <div className="flex items-center bg-gray-100 rounded-2xl px-4 py-3 w-[800px] bg-white">
                    <CiSearch size={20} className="text-gray-400 mr-2" />
                    <input
                        type="text"
                        placeholder="CNTT01"
                        className="outline-none w-full bg-gray-100 placeholder-gray-400"
                    />
                </div>
            </div>
            <div className="w-14 h-14 ml-[110px] bg-green-800 text-white flex items-center justify-center rounded-full">
                <RiShoppingBasket2Line fontSize={2} color="#fff" size={35}/>
            </div>
            <div className="w-auto h-auto ml-auto flex items-center justify-center rounded-full">
                <img src="src\images\Gemini_Generated_Image_pevt7cpevt7cpevtt.png" alt="avatar" className="w-14 h-14 rounded-full object-cover" />
            </div>

        </div>
        <div>

        </div>
    </div>
  )
}

export default HomePage