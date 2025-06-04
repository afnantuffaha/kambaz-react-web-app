import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  assignments: assignments,
  assignment: {
    _id: "",
    title: "",
    description: "",
    points: 100,
    dueDate: "",
    availableFromDate: "",
    availableUntilDate: "",
    course: ""
  }
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        ...assignment,
        _id: uuidv4()
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },
    setAssignment: (state, { payload: assignment }) => {
      state.assignment = assignment;
    },
    clearAssignment: (state) => {
      state.assignment = {
        _id: "",
        title: "",
        description: "",
        points: 100,
        dueDate: "",
        availableFromDate: "",
        availableUntilDate: "",
        course: ""
      };
    }
  },
});

export const { addAssignment, deleteAssignment, updateAssignment, setAssignment, clearAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;