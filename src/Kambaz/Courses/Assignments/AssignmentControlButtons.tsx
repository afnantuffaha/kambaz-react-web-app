import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";

export default function ModuleControlButtons() {
  return (
    <div className="float-end d-flex align-items-center">
      <div
        className="me-2 bg-white text-black px-3 py-1 rounded-pill"
        style={{ fontSize: "0.8rem", border: "1px solid black" }}
      >
        40% of Total
      </div>
      <IoEllipsisVertical className="fs-4" />
      <BsPlus />
    </div>
  );
}