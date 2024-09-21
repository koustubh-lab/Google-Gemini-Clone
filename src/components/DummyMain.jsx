import { useState } from "react";

const DummyButton = (props) => {
    const { text, index, setPrompt, dummyButtonText: textArray } = props;
    return (
        <button
            onClick={() => {
                console.log(setPrompt);
                setPrompt(textArray[index]);
            }}
        >
            {text}
        </button>
    );
};

export default function DummyMain(props) {
    // const { setPrompt, getResponse } = props;
    const [dummyButtonText] = useState([
        "Tell me how to make a cup of tea.",
        "Give me tips for staying productive.",
        "Explain the basics of quantum physics.",
        "Describe how to train a pet.",
    ]);

    return (
        <main className="flex-1 flex overflow-auto">
            <div className="flex-1 flex flex-col gap-3 justify-start items-start w-full max-w-[800px] mx-auto p-3 overflow-auto scrollbar-none">
                <section className="px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold colorful-text select-none">
                        Hello Developers,
                    </h1>
                    <h2 className="text-xl sm:text-2xl md:text-3xl">
                        Welcome to Google Gemini: Model 1.5 flash
                    </h2>
                </section>

                <div className="flex-1 grid grid-cols-2 p-5 items-stretch w-full md:grid-cols-4 md:items-center gap-5 dummy-buttons">
                    {dummyButtonText.map((value, index) => {
                        return (
                            <DummyButton
                                {...props}
                                text={value}
                                key={index}
                                index={index}
                                dummyButtonText={dummyButtonText}
                            />
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
