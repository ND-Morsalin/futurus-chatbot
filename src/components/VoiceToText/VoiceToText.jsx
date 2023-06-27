import useSpaceRecognition from "../../hooks/useSpaceRecognition/useSpaceRecognition";

const VoiceToText = () => {
  const {
    hasRecognition,
    isListening,
    startListening,
    stopListening,
    transcript,
  } = useSpaceRecognition();
  // const [isListening, setIsListening] = useState(false);
  // const [transcript, setTranscript] = useState("");

  // const recognition = new (window.SpeechRecognition ||
  //   window.webkitSpeechRecognition)();

  // recognition.continuous = false;
  // recognition.lang = "en-US";

  // recognition.onresult = (event) => {
  //   const speechResult = event.results[0][0].transcript;
  //   console.log(speechResult)
  //   setTranscript(speechResult);
  // };

  // const startRecognition = () => {
  //   setIsListening(true);
  //   recognition.start();
  //   console.log(recognition.continuous)
  // };

  // const stopRecognition = () => {
  //   setIsListening(false);
  //   recognition.stop();
  // };

  return (
    <div>
      {hasRecognition ? (
        <div className="flex items-center justify-center mb-8">
          <button
            onClick={startListening}
            className=" w-12 h-12 rounded-full bg-gradient-to-tr from-gradient-blue to-gradient-pink flex items-center justify-center text-3xl text-white  "
          >
            🎙
          </button>
          <button
            onClick={stopListening}
            className=" w-12 h-12 rounded-full bg-gradient-to-tr from-gradient-blue to-gradient-pink flex items-center justify-center text-3xl text-white  "
          >
            Stop
          </button>

          {
            isListening && <div className="">
              your voice is listening ...
            </div>
          }
        </div>
      ) : (
        <>
          <div className="flex items-center justify-center mb-8">
            <div className=" w-12 h-12 rounded-full bg-gradient-to-tr from-gradient-blue to-gradient-pink flex items-center justify-center text-3xl text-white  ">
              🎙 your browser doesn't support speech recognition
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VoiceToText;
