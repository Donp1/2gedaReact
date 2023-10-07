import { AiFillDelete } from "react-icons/ai";
import "./style.css";
import { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { useRef } from "react";
const PostFormRecModal = () => {
  const [audioBlob, setAudioBlob] = useState(null);
  const [isRecording, setIsRecording] = useState(false); // Added recording state
  const mediaRecorder = useRef(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      mediaRecorder.current = new MediaRecorder(stream);

      const chunks = [];

      mediaRecorder.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      mediaRecorder.current.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/wav" });
        setAudioBlob(blob);
        setIsRecording(false); // Update recording status when recording stops
      };

      mediaRecorder.current.start();
      setIsRecording(true); // Update recording status when recording starts
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current && mediaRecorder.current.state === "recording") {
      mediaRecorder.current.stop();
    }
  };

  const handleDeleteItem = () => {
    setAudioBlob(null);
  };
  return (
    <>
      <div className="post-audio-cont-box">
        {audioBlob ? (
          <div className="audio-item">
            <audio controls>
              <source src={URL.createObjectURL(audioBlob)} type="audio/wav" />
              Your browser does not support the audio tag.
            </audio>
            <div className="de-aud">
              <div className="delete-audio" onClick={handleDeleteItem}>
                <AiFillDelete />
                <div className="del-tss">Delete</div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {isRecording && (
              <div className="recording-indicator">
                <FaCircle className="pulsating-circle" />
                Recording...
              </div>
            )}
            <button
              onClick={isRecording ? stopRecording : startRecording}
              className={`${isRecording ? "stop-record" : "start-record"} ${
                isRecording ? "recording" : ""
              }`}
            >
              {isRecording ? "Stop Recording" : "Start Recording"}
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default PostFormRecModal;
