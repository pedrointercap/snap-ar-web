import RecordButton from "./RecordButton";
import SnapshotButton from "./SnapshotButton";

const Toolbar = () => {
  return (
    <div className="pt-4 flex">
      <RecordButton />
      <SnapshotButton />
    </div>
  );
};

export default Toolbar;
