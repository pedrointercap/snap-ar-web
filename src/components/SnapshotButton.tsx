const SnapshotButton = () => {
  const handleSnapshot = () => {
    const canvas = document.getElementsByTagName("canvas")[0];
    if (canvas) {
      const link = document.createElement("a");
      link.download = `snapshot-${new Date()
        .toISOString()
        .slice(0, 19)
        .replace(/:/g, "-")}.png`;

      link.href = canvas.toDataURL("image/png");

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <button
      onClick={handleSnapshot}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
    >
      Take Snapshot
    </button>
  );
};

export default SnapshotButton;
