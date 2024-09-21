import { useState } from "react";

const Tab = (props) => {
    const { link, text, icon } = props;

    return (
        <a
            href={link}
            className="flex justify-start items-center w-full text-white duration-300 hover:bg-white rounded hover:text-zinc-800"
        >
            <i className={icon + " flex justify-center items-center"}></i>
            <p className="flex-1 text-left indent-4 font-medium">{text}</p>
        </a>
    );
};

export default function SideBar(props) {
    const { sidebarStatus, setSidebarStatus } = props;
    const [barTabs] = useState([
        {
            link: "",
            text: "Help",
            icon: "fa-solid fa-question",
        },
        {
            link: "",
            text: "Logout",
            icon: "fa-solid fa-arrow-right-from-bracket",
        },
    ]);

    return (
        <>
            <div
                className={
                    "flex flex-col py-3 gap-2 justify-between items-center h-screen absolute top-0 left-0 SideBar overflow-hidden transition-width duration-500 z-[2] " +
                    (sidebarStatus
                        ? "translate-x-[0] px-5"
                        : "translate-x-[-100%]")
                }
            >
                <div className="flex gap-2 items-center">
                    <i
                        className="fa-solid fa-burger text-lg p-3 cursor-pointer rounded-full h-[40px] w-[40px] outline outline-1 outline-transparent flex justify-center items-center hover:outline-black transition-background-color duration-300"
                        onClick={() => {
                            setSidebarStatus((prev) => !prev);
                        }}
                    ></i>
                    <h1
                        className="font-medium text-xl cursor-pointer select-none sm:text-2xl lg:text-3xl"
                        onClick={() => {
                            setSidebarStatus((prev) => !prev);
                        }}
                    >
                        Google Gemini
                    </h1>
                </div>

                <div className="flex-1 flex w-full rounded"></div>

                <div className="grid grid-cols-1 w-full edit-i">
                    {barTabs.map((object, index) => {
                        return (
                            <Tab
                                key={index}
                                text={object.text}
                                link={object.link}
                                icon={object.icon}
                            />
                        );
                    })}
                </div>
            </div>
            {sidebarStatus && (
                <div
                    className="absolute top-0 left-0 w-screen h-screen sidebar-overlay"
                    onClick={() => {
                        setSidebarStatus(false);
                    }}
                ></div>
            )}
        </>
    );
}
