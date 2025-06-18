import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PeopleTable from "./Table";
import * as client from "../client";

export default function People() {
  const { cid } = useParams();
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsersForCourse = async () => {
    if (!cid) return;
    
    setLoading(true);
    setError("");
    
    try {
      console.log("Fetching users for course:", cid);
      const enrolledUsers = await client.findUsersForCourse(cid);
      console.log("Enrolled users received:", enrolledUsers);
      setUsers(enrolledUsers || []);
    } catch (err) {
      console.error("Error fetching users for course:", err);
      setError(`Error fetching users: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsersForCourse();
  }, [cid]);

  if (loading) return <div>Loading people...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div id="wd-people">
      <h2>People ({users.length})</h2>
      <PeopleTable users={users} />
    </div>
  );
}