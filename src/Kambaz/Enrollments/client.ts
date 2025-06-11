import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const USERS_API = `${REMOTE_SERVER}/api/users`;

export const enrollInCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/enroll`);
  return response.data;
};

export const unenrollFromCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.delete(`${COURSES_API}/${courseId}/enroll`);
  return response.data;
};

export const findMyEnrollments = async () => {
  const response = await axiosWithCredentials.get(`${USERS_API}/current/enrollments`);
  return response.data;
};

export const findUsersForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/users`);
  return response.data;
};