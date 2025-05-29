import RecordButton from "./RecordButton";
import SnapshotButton from "./SnapshotButton";

const Toolbar = () => {
  return (
    <div className="p-4 flex">
      <RecordButton />
      <SnapshotButton />
    </div>
  );
};

export default Toolbar;
