import { useEffect, useRef, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Header from "./components/Header";
import Main from "./components/Main";
import TextInput from "./components/TextInput";
import DummyMain from "./components/DummyMain";
import SideBar from "./components/SideBar";

export default function App() {
    const [sidebarStatus, setSidebarStatus] = useState(false);
    const [prompt, setPrompt] = useState("");
    const [questionAndAnswers, setQuestionAndAnswers] = useState([]);
    const api_key = useRef(`${import.meta.env.VITE_GOOGLE_GEMINI_API_KEY}`);

    const getResponse = async () => {
        console.log(`Api key: ${api_key.current}`);
        if (!api_key.current) return;
        if (!prompt.trim()) return;

        setQuestionAndAnswers((prev) => [...prev, prompt]);

        const genAI = new GoogleGenerativeAI(api_key.current);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        try {
            const result = await model.generateContent(prompt);
            const generatedContent = await result.response.text();

            setQuestionAndAnswers((prev) => [...prev, generatedContent]);
            console.log(generatedContent);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        console.log(questionAndAnswers);
    }, [questionAndAnswers]);

    useEffect(() => {
        async function executePersonalQuery() {
            const genAI = new GoogleGenerativeAI(api_key.current);
            const model = genAI.getGenerativeModel({
                model: "gemini-1.5-flash",
            });

            try {
                const result = await model.generateContent(
                    "Keep your responses very very short"
                );

                console.log(result.response.text());
            } catch (error) {
                console.log(error.message);
            }
        }
        executePersonalQuery();
    }, []);

    /* useEffect(() => {
        if (questions.length === answers.length && questions.length !== 0) {
            setMainActive(true);
        }
    }, [questions, answers]); */

    return (
        <div className="flex min-h-screen flex-col max-h-screen bg-zinc-800 selection:bg-white selection:text-black *:text-white">
            <Header setSidebarStatus={setSidebarStatus} />
            {questionAndAnswers.length !== 0 ? (
                <Main questionAndAnswers={questionAndAnswers} />
            ) : (
                <DummyMain setPrompt={setPrompt} getResponse={getResponse} />
            )}
            <SideBar
                sidebarStatus={sidebarStatus}
                setSidebarStatus={setSidebarStatus}
            />
            <TextInput
                prompt={prompt}
                setPrompt={setPrompt}
                getResponse={getResponse}
            />
        </div>
    );
}
