import "./StudentRow.scss";

interface studentRowProps {
  name: string;
  letterGrade: string;
  backgroundColor: string | null;
}

const StudentRow = ({
  name,
  letterGrade,
  backgroundColor,
}: studentRowProps) => {
  return (
    <div style={{ backgroundColor: backgroundColor! }}>
      <h3>{`${name} Obtained: ${letterGrade}`}</h3>
    </div>
  );
};

export default StudentRow;
