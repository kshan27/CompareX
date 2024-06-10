import {useState} from 'react';
import { FaJava } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { TbBrandPython } from "react-icons/tb";
import { SiScala } from "react-icons/si";
import { MdOutlineFeedback } from "react-icons/md";
import { GrLaunch } from "react-icons/gr";
import { TbCircleLetterRFilled } from "react-icons/tb";

export default function SideNav() {
    const [open, setOpen] = useState(false);
    const menu_items = [
        {
            title: 'Home',
            icon: <IoHomeOutline className='text-button-color-red'/>,
        },
        {
            title: 'Python',
            icon: <TbBrandPython />,
        },
        {
            title: 'Java',
            icon: <FaJava />,
        },
        {
            title: 'R',
            icon: <TbCircleLetterRFilled />,
        },
        {
            title: 'Scala',
            icon: <SiScala />,
        }
    ];

    const additional_menu_items = [
        {
            title: 'Releases',
            icon: <GrLaunch />,
        },
        {
            title: 'Feedback',
            icon: <MdOutlineFeedback />,
        }
    ];

    return (
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
    );
}