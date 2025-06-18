// src/Kambaz/Courses/Assignments/AssignmentControlButtons.tsx
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";

interface AssignmentControlButtonsProps {
  assignmentId?: string;
  deleteAssignment: (assignmentId: string) => void; // Add this prop
}

export default function AssignmentControlButtons({ 
  assignmentId, 
  deleteAssignment 
}: AssignmentControlButtonsProps) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  const handleDelete = () => {
    if (assignmentId && window.confirm("Are you sure you want to delete this assignment?")) {
      deleteAssignment(assignmentId);
    }
  };

  return (
    <div className="float-end d-flex align-items-center">
      <div
        className="me-2 bg-white text-black px-3 py-1 rounded-pill"
        style={{ fontSize: "0.8rem", border: "1px solid black" }}
      >
        40% of Total
      </div>
      {isFaculty && assignmentId && (
        <FaTrash 
          className="text-danger me-2 fs-5" 
          style={{ cursor: "pointer" }}
          onClick={handleDelete}
        />
      )}
      <IoEllipsisVertical className="fs-4" />
      <BsPlus />
    </div>
  );
}