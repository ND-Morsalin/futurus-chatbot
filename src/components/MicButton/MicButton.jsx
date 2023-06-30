/* eslint-disable react/prop-types */
import { BsFillMicFill, BsFillMicMuteFill } from "react-icons/bs";

const MicButton = ({ listening, stopListening, startListening }) => {
  return (
    <>
      <button
        onClick={() => {
          listening ? stopListening() : startListening();
        }}
        title="Start/Stop Listening"
        className=" w-12 h-12 rounded-full bg-gradient-to-tr from-gradient-blue to-gradient-pink flex items-center justify-center text-3xl text-white  "
      >
        {listening ? <BsFillMicMuteFill /> : <BsFillMicFill />}
      </button>
    </>
  );
};

export default MicButton;
