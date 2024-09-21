export default function Chat(props) {
    const { text, index } = props;

    return (
        <div className="w-full flex flex-col gap-3 items-center">
            <div
                className={
                    "p-3 px-5 rounded-lg  rubik text-slate-200 " +
                    (index % 2 === 1
                        ? "self-start bg-zinc-700 outline outline-1 outline-black w-full"
                        : "self-end bg-zinc-600 font-semibold w-[100%] break-words sm:max-w-[80%] lg:max-w-[60%]:")
                }
            >
                {/* {text.split("*").map((value, index) => {
                    return <p key={index}>{value}</p>;
                })} */}
                {text.replaceAll("*", "").replaceAll("#", "")}
            </div>
        </div>
    );
}
