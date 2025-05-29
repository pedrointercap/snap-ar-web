import * as React from "react";

const RecordButton = () => {
  const [isRecording, setIsRecording] = React.useState(false);
  const mediaRecorderRef = React.useRef<MediaRecorder | null>(null);
  const chunksRef = React.useRef<BlobPart[]>([]);
  const [mimeType, setMimeType] = React.useState("video/webm");

  React.useEffect(() => {
    const checkMimeTypeSupport = () => {
      const types = ["video/mp4", "video/webm;codecs=h264", "video/webm"];

      for (const type of types) {
        if (MediaRecorder.isTypeSupported(type)) {
          setMimeType(type);
          console.log(`Using supported mime type: ${type}`);
          break;
        }
      }
    };

    checkMimeTypeSupport();
  }, []);

  const handleButtonClick = () => {
    if (!isRecording) {
      chunksRef.current = [];

      const liveRenderTarget = document.getElementsByTagName("canvas")[0];
      const stream = liveRenderTarget.captureStream(30);

      const recorder = new MediaRecorder(stream, { mimeType });

      recorder.ondataavailable = (event) => {
        console.log("recording... ", event.data.size);
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      recorder.onstop = () => {
        console.log("onstop", chunksRef.current.length);

        const blob = new Blob(chunksRef.current, { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.style.display = "none";
        a.href = url;
        a.download = mimeType.includes("mp4")
          ? "recording.mp4"
          : "recording.webm";
        a.click();
        window.URL.revokeObjectURL(url);
      };

      mediaRecorderRef.current = recorder;

      recorder.start(1000);

      setIsRecording(true);
    } else {
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stop();
      }
      setIsRecording(false);
    }
  };

  return (
    <button
      onClick={handleButtonClick}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      {isRecording ? "Stop Recording" : "Start Recording "}
    </button>
  );
};

export default RecordButton;
