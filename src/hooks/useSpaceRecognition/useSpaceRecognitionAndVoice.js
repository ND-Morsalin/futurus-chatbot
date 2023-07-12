import { useEffect } from "react";
import speech, { useSpeechRecognition } from "react-speech-recognition";

const synthesis = window.speechSynthesis;

const useSpaceRecognitionAndVoice = () => {
    const { listening, transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  useEffect(() => {
    // if not listening and has transcript then 
    if (!listening && transcript) {
      // text to speech
      const utterance = new SpeechSynthesisUtterance(transcript);
      // language
      utterance.lang = "en-IN";
      // voice
      utterance.voice = speechSynthesis.getVoices()[89];

      synthesis.speak(utterance);
    }
  }, [listening, transcript]);


    return (
        { listening, transcript,speech, browserSupportsSpeechRecognition}
    );
};

export default useSpaceRecognitionAndVoice;