import { students } from "../../data/students";
import StudentRow from "./ReportComponents/StudentRow";
import "./Report.scss";

const Report = () => {
  const gradeScale = [
    { min: 90, letter: "A", backgroundColor: "#7CFEF0" },
    { min: 80, letter: "B", backgroundColor: "#6BFFB8" },
    { min: 70, letter: "C", backgroundColor: "#2CEAA3" },
    { min: 60, letter: "D", backgroundColor: "red" },
    { min: 0, letter: "F", backgroundColor: "red" },
  ] as const;

  type GradeResult =
    | (typeof gradeScale)[number]
    | { letter: "Invalid grade"; backgroundColor: null };

  function convertGradeToLetter(grade: number): GradeResult {
    if (grade < 0 || grade > 100) {
      return { letter: "Invalid grade", backgroundColor: null };
    }

    return gradeScale.find((g) => grade >= g.min)!;
  }

  return (
    <div>
      {students.map((student) => {
        const resultingGrade = convertGradeToLetter(student.grade);

        return (
          <StudentRow
            name={student.name}
            letterGrade={resultingGrade.letter}
            backgroundColor={resultingGrade.backgroundColor}
          />
        );
      })}
    </div>
  );
};

export default Report;
