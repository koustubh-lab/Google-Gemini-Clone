import { useEffect, useRef } from "react";
import Chat from "./Chat";

export default function Main(props) {
    const { questionAndAnswers } = props;
    const mainscroll = useRef(null);

    useEffect(() => {
        console.log(questionAndAnswers);
        mainscroll.current.scrollTo({
            top: mainscroll.current.scrollHeight,
            left: 0,
            behavior: "smooth",
        });
    }, [questionAndAnswers]);

    window.onresize = () => {
        mainscroll.current.scrollTo({
            top: mainscroll.current.scrollHeight,
            left: 0,
            behavior: "smooth",
        });
    }

    return (
        <main className="flex-1 flex overflow-auto">
            <div
                ref={mainscroll}
                className="flex-1 flex flex-col gap-6 justify-start items-center w-full max-w-[800px] mx-auto p-3 overflow-auto scrollbar-none"
            >
                {questionAndAnswers.map((value, index) => {
                    return <Chat key={index} text={value} index={index} />;
                })}
            </div>
        </main>
    );
}
