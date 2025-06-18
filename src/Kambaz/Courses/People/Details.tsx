import { useEffect, useState } from "react";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useParams, useNavigate } from "react-router";
import * as client from "../../Account/client";
import { FormControl } from "react-bootstrap";
import { FaPencil } from "react-icons/fa6";
export default function PeopleDetails() {
  const { uid} = useParams();
  const [user, setUser] = useState<any>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editingEmail, setEditingEmail] = useState(false);
  const [role, setRole] = useState("");
  const [editingRole, setEditingRole] = useState(false);
  const [editing, setEditing] = useState(false);
  const saveUser = async () => {
    const [firstName, lastName] = name.split(" ");
    const updatedUser = { ...user, firstName, lastName };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
    navigate(-1);
  };
  const saveEmail = async () => {
    const updatedUser = { ...user, email };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditingEmail(false);
  };
  
  const saveRole = async () => {
    const updatedUser = { ...user, role };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditingRole(false);
  };
  const navigate = useNavigate();
  const deleteUser = async (uid: string) => {
    await client.deleteUser(uid);
    navigate(-1);
  };
  const fetchUser = async () => {
    if (!uid) return;
    const user = await client.findUserById(uid);
    setUser(user);
  };
  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);
  if (!uid) return null;
  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
      <button onClick={() => navigate(-1)} className="btn position-fixed end-0 top-0 wd-close-details">
        <IoCloseSharp className="fs-1" /> </button>
      <div className="text-center mt-2"> <FaUserCircle className="text-secondary me-2 fs-1" /> </div><hr />
      <div className="text-danger fs-4">
        {!editing && (
          <FaPencil onClick={() => setEditing(true)}
              className="float-end fs-5 mt-2 wd-edit" /> )}
        {editing && (
          <FaCheck onClick={() => saveUser()}
              className="float-end fs-5 mt-2 me-2 wd-save" /> )}
        {!editing && (
          <div className="wd-name"
               onClick={() => setEditing(true)}>
            {user.firstName} {user.lastName}</div>)}
        {user && editing && (
          <FormControl className="w-50 wd-edit-name"
            defaultValue={`${user.firstName} ${user.lastName}`}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") { saveUser(); }}}/>)}
      </div>
      <div className="mb-3">
        <div className="d-flex align-items-center">
          <strong className="me-2">Email:</strong>
          {!editingEmail && (
            <FaPencil 
              onClick={() => setEditingEmail(true)}
              className="ms-auto fs-6 wd-edit-email text-secondary" 
              style={{ cursor: 'pointer' }}
            />
          )}
          {editingEmail && (
            <FaCheck 
              onClick={() => saveEmail()}
              className="ms-auto fs-6 wd-save-email text-success" 
              style={{ cursor: 'pointer' }}
            />
          )}
        </div>
        {!editingEmail && (
          <div 
            className="wd-email text-primary"
            onClick={() => setEditingEmail(true)}
            style={{ cursor: 'pointer' }}
          >
            {user.email}
          </div>
        )}
        {editingEmail && (
          <input
            type="email"
            className="form-control wd-edit-email-input"
            defaultValue={user.email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") { saveEmail(); }
            }}
            placeholder="Enter email address"
          />
        )}
      </div>
      <div className="mb-3">
        <div className="d-flex align-items-center">
          <strong className="me-2">Role:</strong>
          {!editingRole && (
            <FaPencil 
              onClick={() => setEditingRole(true)}
              className="ms-auto fs-6 wd-edit-role text-secondary" 
              style={{ cursor: 'pointer' }}
            />
          )}
          {editingRole && (
            <FaCheck 
              onClick={() => saveRole()}
              className="ms-auto fs-6 wd-save-role text-success" 
              style={{ cursor: 'pointer' }}
            />
          )}
        </div>
        {!editingRole && (
          <div 
            className="wd-role badge bg-secondary"
            onClick={() => setEditingRole(true)}
            style={{ cursor: 'pointer' }}
          >
            {user.role}
          </div>
        )}
        {editingRole && (
          <select
            className="form-select wd-edit-role-select"
            defaultValue={user.role}
            onChange={(e) => setRole(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") { saveRole(); }
            }}
          >
            <option value="">Select Role</option>
            <option value="STUDENT">Student</option>
            <option value="TA">Teaching Assistant</option>
            <option value="FACULTY">Faculty</option>
            <option value="ADMIN">Administrator</option>
          </select>
        )}
      </div>
      <b>Login ID:</b>        <span className="wd-login-id">      {user.loginId}      </span> <br />
      <b>Section:</b>         <span className="wd-section">       {user.section}      </span> <br />
      <b>Total Activity:</b>  <span className="wd-total-activity">{user.totalActivity}</span>
      <hr />
      <button onClick={() => deleteUser(uid)} className="btn btn-danger float-end wd-delete" > Delete </button>
      <button onClick={() => navigate(-1)}
              className="btn btn-secondary float-start float-end me-2 wd-cancel" > Cancel </button> 
      </div> ); }