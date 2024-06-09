import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { FaJava } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { TbBrandPython } from "react-icons/tb";
import { SiScala } from "react-icons/si";
import { MdOutlineFeedback } from "react-icons/md";
import { GrLaunch } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import MainSection from "../components/mainSection";

export default function Home() {
    const [open, setOpen] = useState(false);
    const menu_items = [
        {
            title: 'Home',
            icon: <IoHomeOutline />,
        },
        {
            title: 'Python',
            icon: <TbBrandPython />,
        },
        {
            title: 'Java',
            icon: <FaJava />
        },
        {
            title: 'Scala',
            icon: <SiScala />,
        }
    ]

    const additional_menu_items = [
        {
            title: 'Releases',
            icon: <GrLaunch />,
        },
        {
            title: 'Feedback',
            icon: <MdOutlineFeedback />,
        }
    ]

    return (
        <div className="flex w-screen bg-heading-bg">
            <nav 
                className={`bg-dark-grey h-screen p-5 pt-8 w-1/10 hover:w-1/4 duration-200 relative`}
                onMouseOver={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                onClick={() => setOpen(!open)}
            >
                <div className="inline-flex">
                    <p className="text-white origin-left font-medium text-2xl">
                        Cx
                    </p>
                </div>
                <div className="pt-8">
                    <ul>
                    {
                        menu_items.map((menu_item, index) => {
                            return (
                                <li key={index} className=" text-white-color text-sm flex items-center gap-x-4 cursor-pointer  p-2 hover:bg-light-white rounded-md mt-2 ">
                                    <span className="text-2xl block float-left flex-none"> {menu_item.icon} </span>
                                    <span className={`text-base font-medium inline-flex shrink flex-1 overflow-x-hidden ${open ? "visible" : "hidden"}`}> {menu_item.title} </span>
                                </li>
                            );
                        })
                    }
                    </ul>
                </div>
                <div className="pt-60">
                    <ul>
                        {
                            additional_menu_items.map((menu_item, index) => {
                                return (
                                    <li key={index} className=" text-white-color text-sm flex items-center gap-x-4 cursor-pointer  p-2 hover:bg-light-white rounded-md mt-2 ">
                                        <span className="text-2xl block float-left"> {menu_item.icon} </span>
                                        <span className={`text-base font-medium flex-1 ${open ? "visible" : "invisible"}`}> {menu_item.title} </span>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </nav>
            <div className="container mx-auto h-screen">
                <header className="bg-heading-bg border-b-2 border-black  flex justify-around py-4 px-4 md:px-8 lg:px-16 items-center  w-full">
                    <h1 className="text-xl font-bold text-black">Marketplace Comparision</h1>
                    {/* <div className="flex align-middle justify-between">
                      
                    </div> */}
                    <button className="bg-button-color-red rounded-md text-white m-2 p-2 "> Download report </button>
                    <span className="flex flex-col-reverse align-middle text-right text-black text-lg h-12"> <RxHamburgerMenu className="grow"/>
                    </span>
                </header>
                <main className="bg-heading-bg ">
                    <MainSection />
                </main>
            </div>
        </div>
    );
}