import  { useState, useEffect, useRef } from "react";
import { useSpeechRecognition } from "react-speech-recognition";

const AudioFrequencyAnalyzer = () => {
    const { listening, transcript, browserSupportsSpeechRecognition } =
        useSpeechRecognition();
    const [frequencyData, setFrequencyData] = useState([]);
    const audioContextRef = useRef(null);
    const analyserRef = useRef(null);
    const dataArrayRef = useRef(null);
    const microphoneRef = useRef(null);

    useEffect(() => {
        if (!browserSupportsSpeechRecognition) {
            console.warn("Your browser does not support speech recognition.");
            return;
        }

        const initializeAudioContext = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                });

                audioContextRef.current = new (window.AudioContext ||
                    window.webkitAudioContext)();
                analyserRef.current = audioContextRef.current.createAnalyser();
                analyserRef.current.fftSize = 2048;

                microphoneRef.current =
                    audioContextRef.current.createMediaStreamSource(stream);
                microphoneRef.current.connect(analyserRef.current);

                const bufferLength = analyserRef.current.frequencyBinCount;
                dataArrayRef.current = new Uint8Array(bufferLength);

                const analyzeAudio = () => {
                    analyserRef.current.getByteFrequencyData(
                        dataArrayRef.current
                    );
                    setFrequencyData([...dataArrayRef.current]);
                    requestAnimationFrame(analyzeAudio);
                };

                analyzeAudio();
            } catch (error) {
                console.error("Error accessing microphone:", error);
            }
        };

        initializeAudioContext();

        return () => {
            if (audioContextRef.current) {
                audioContextRef.current.close();
            }
        };
    }, [browserSupportsSpeechRecognition]);

    return (
        <div>
            <h3>Speech Recognition</h3>
            <p>Listening: {listening ? "Yes" : "No"}</p>
            <p>Transcript: {transcript}</p>
            <p>Browser Supports Speech Recognition: {browserSupportsSpeechRecognition ? "Yes" : "No"}</p>

            <h3>Frequency Data</h3>
            <ul>
                {frequencyData.map((freq, index) => (
                    <li key={index}>{freq}</li>
                ))}
            </ul>
        </div>
    );
};

export default AudioFrequencyAnalyzer;
