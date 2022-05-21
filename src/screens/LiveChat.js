import { useEffect, useRef, useState } from "react";
import "../styles/liveChat.css";
const LiveChat = () => {
  const callerFrameRef = useRef();
  const calleeFrameRef = useRef();
  const servers = {
    iceServers: [
      {
        urls: ["stun1.l.google.com:19302", "stun2.l.google.com:19302"],
      },
    ],
  };
  const initLocalStream = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: false,
      })
      .then((localStream) => {
        callerFrameRef.current.srcObject = localStream;
        createOffer(localStream);
      });
  };

  const createOffer = (localStream) => {
    const peerConnection = new RTCPeerConnection(servers.iceServers);

    localStream?.getTracks().forEach((track) => {
      console.log("what happen", track);
      peerConnection.addTrack(track, localStream);
      console.log(peerConnection);
    });

    peerConnection.ontrack = (event) => {
      event.stream[0].getTracks().forEach((track) => {
        peerConnection.addTrack(track);
      });
    };

    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        console.log("new candidate", event.candidate);
      }
    };
    const remoteStream = new MediaStream();
    calleeFrameRef.current.srcObject = remoteStream;
    let offer = peerConnection.createOffer().then((offer) => {
      peerConnection.setLocalDescription(offer);
    });
  };
  useEffect(() => {
    initLocalStream();
  }, [initLocalStream]);

  return (
    <div className="live__chat">
      <div className="callee__user">
        <video
          ref={calleeFrameRef}
          className="callee__frame"
          playsInline
          autoPlay
        />
      </div>
      <div className="caller">
        <video
          ref={callerFrameRef}
          className="caller__frame"
          playsInline
          autoPlay
        />
      </div>
    </div>
  );
};

export default LiveChat;
