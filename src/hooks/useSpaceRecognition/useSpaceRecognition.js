import { useEffect, useState } from "react";

let recognition
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    // Web Speech API is supported
    recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
    recognition.continuous = true;
    recognition.lang = "en-US";
}
const useSpaceRecognition = () => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState("");

    useEffect(() => {

        if (!recognition) {
            console.log("SpeechRecognition is not supported in your browser");
            return;
        }

        recognition.onresult = (event) => {
            console.log('on result', event)
            setTranscript(event.results[0][0].transcript);
            recognition.stop()
            setIsListening(false)
        }


    }, []);

    const startListening = () => {
        setTranscript("");
        setIsListening(true);
        recognition.start();
    };

    const stopListening = () => {
        setIsListening(false);
        recognition.stop();
    };

    return {
        transcript,
        isListening,
        startListening,
        stopListening,
        hasRecognition: !!recognition,
    }
};

export default useSpaceRecognition;