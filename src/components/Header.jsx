export default function Header(props) {
    const { setSidebarStatus } = props;

    return (
        <header className="py-3 px-5 flex justify-between items-center w-full">
            <div className="flex gap-4 items-center">
                <i
                    className="fa-solid fa-burger text-lg p-3 cursor-pointer rounded-full h-[40px] w-[40px] outline outline-1 outline-transparent flex justify-center items-center hover:outline-white transition-background-color duration-300"
                    onClick={() => {
                        setSidebarStatus(true);
                        console.log("clicked");
                    }}
                ></i>
                <h1
                    className="font-semibold text-xl cursor-pointer select-none sm:text-2xl lg:text-3xl"
                    onClick={() => {
                        location.reload();
                    }}
                >
                    Google Gemini
                </h1>
            </div>

            <div>
                <i className="fa-regular fa-user text-lg p-3 cursor-pointer rounded-full h-[40px] w-[40px] outline outline-1 outline-transparent flex justify-center items-center hover:outline-white transition-background-color duration-300"></i>
            </div>
        </header>
    );
}
