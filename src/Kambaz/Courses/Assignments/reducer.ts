// src/Kambaz/Courses/Assignments/reducer.ts
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: [],
  assignment: {
    _id: "",
    title: "",
    description: "",
    points: 100,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
    course: ""
  }
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, { payload: assignment }) => {
      state.assignments = [...state.assignments, assignment] as any;
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
        availableFrom: "",
        availableUntil: "",
        course: ""
      };
    }
  },
});

export const { setAssignments, addAssignment, deleteAssignment, updateAssignment, setAssignment, clearAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;