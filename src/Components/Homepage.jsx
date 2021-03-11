import React, { useState, useRef } from "react";
import { Container, Button } from "react-bootstrap";
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";

export const Homepage = () => {
  const commands = [
    {
      command: "open *",
      callback: website => {
        window.open("http://" + website.split(" ").join(""));
      }
    }
  ];

  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <div>Browser is not Support Speech Recognition.</div>;
  }
  const handleListening = () => {
    setIsListening(true);
    SpeechRecognition.startListening({
      continuous: true
    });
  };
  const handleStop = () => {
    setIsListening(false);
    SpeechRecognition.stopListening();
  };
  return (
    <Container>
      <Button onClick={handleListening}>Start Listening</Button>
      <p>{transcript}</p>
      <Button onClick={handleStop}>Stop</Button>
    </Container>
  );
};
