import { useState } from "react";
import MicButton from "../../components/MicButton/MicButton";
import useSpaceRecognitionAndVoice from "../../hooks/useSpaceRecognition/useSpaceRecognitionAndVoice";

const Finance = () => {
  const [options, setOptions] = useState() 
  const { listening, transcript, browserSupportsSpeechRecognition, speech } =
    useSpaceRecognitionAndVoice({options,round:"finance"});

   

    const handleOptionsChange = (e) => {
        setOptions(e.target.value)
    }

    // console.log(options)
  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="flex items-center justify-center mb-8">
        <div className=" w-12 h-12 rounded-full bg-gradient-to-tr from-gradient-blue to-gradient-pink flex items-center justify-center text-3xl text-white  ">
          🎙 your browser doesn&apos;t support speech recognition
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-end h-full flex-1">
      <div className="mb-8 mx-auto rounded-md border-2 border-transparent relative z-10 p-1 md:w-2/3 w-11/12  overflow-auto h-fit">
        <div className="relative overflow-auto h-full z-10 bg-white dark:bg-slate-900 rounded-md p-4 dark:text-white text-slate-900">
          {listening ? (
            <>
              <div className="text-center font-bold">Listening...</div>
            </>
          ) : (
            <div className="text-center">
              Press the button and start speaking
            </div>
          )}

          {transcript && <div className="text-center">{transcript}</div>}
        </div>
        {/* gradient border */}
        <div className="absolute top-0 left-0 w-full h-full rounded-md bg-gradient-to-tr from-gradient-blue to-gradient-pink -z-0"></div>
      </div>

      <div className="flex items-center justify-center flex-col mb-4">
        <MicButton
          listening={listening}
          startListening={speech.startListening}
          stopListening={speech.stopListening}
        />
        <select onChange={handleOptionsChange} className="select select-info w-fit mt-4">
          <option value={''}>
            Select Options
          </option>
          <option value='grammar'>Grammar</option>
         
        </select>
      </div>
    </div>
  );
};

export default Finance;
