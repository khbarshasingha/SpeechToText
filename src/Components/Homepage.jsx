import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";

export const Homepage = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  return (
    <Container>
      <Button>Start Listening</Button>
      <p>Speech</p>
      <Button>Stop</Button>
    </Container>
  );
};
