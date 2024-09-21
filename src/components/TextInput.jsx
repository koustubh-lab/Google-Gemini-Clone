export default function TextInput(props) {
    const { prompt, setPrompt, getResponse } = props;

    return (
        <div>
            <div className="flex w-[95%] max-w-[800px] mx-auto p-2 rounded-3xl mb-2 border-2 border-gray-600">
                <input
                    // rows={1}
                    placeholder="Enter message"
                    className="flex-1 outline-none resize-none border-none p-3 bg-transparent text-white text-base md:text-lg"
                    onChange={(e) => {
                        setPrompt(e.target.value);
                        console.log(e.target.value);
                    }}
                    value={prompt}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            getResponse();
                            setPrompt("");
                        }
                    }}
                ></input>
                <button
                    className="bg-zinc-800 rounded-xl outline-gray-900 outline-0 outline duration-300 hover:bg-zinc-500 group"
                    onClick={() => {
                        getResponse();
                        setPrompt("");
                    }}
                >
                    <i className="fa-solid fa-arrow-right text-white h-[50px] w-[50px] p-3 text-lg duration-300"></i>
                </button>
            </div>
        </div>
    );
}
