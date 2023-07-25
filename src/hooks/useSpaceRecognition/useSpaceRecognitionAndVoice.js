/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import speech, { useSpeechRecognition } from "react-speech-recognition";
import axiosInstance from "../../utility/axiosInstance";

const synthesis = window.speechSynthesis;

const useSpaceRecognitionAndVoice = ({ options, round }) => {
    const { listening, transcript, browserSupportsSpeechRecognition } =
        useSpeechRecognition();


    useEffect(() => {
        // if not listening and has transcript then 
        if (!listening && transcript) {
            /* send text to server */
            const sendTextToServer = async () => {
                const req = await axiosInstance.post(`/pr`, {
                    message: transcript,
                    option: options
                })

                console.log(req.data)
                
                // text to speech
                const utterance = new SpeechSynthesisUtterance(transcript + ' ' + options + ' ' + round);
                // language
                utterance.lang = "en-IN";
                // voice
                utterance.voice = speechSynthesis.getVoices()[89];

                synthesis.speak(utterance);
            };

            sendTextToServer();

        }
    }, [listening, transcript]);


    return (
        { listening, transcript, speech, browserSupportsSpeechRecognition }
    );
};

export default useSpaceRecognitionAndVoice;