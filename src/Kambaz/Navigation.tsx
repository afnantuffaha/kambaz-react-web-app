import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";
import { ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { BsCalendar, BsInbox } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";

export default function KambazNavigation() {
  const location = useLocation();

  return (
    <ListGroup
      id="wd-kambaz-navigation"
      style={{ width: 110 }}
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <ListGroup.Item
        id="wd-neu-link"
        target="_blank"
        action
        href="https://www.northeastern.edu/"
        className="bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px" />
      </ListGroup.Item>
      <ListGroup.Item
        to="/Kambaz/Account"
        as={Link}
        className={`text-center border-0 ${
          location.pathname === "/Kambaz/Account" ? "bg-white text-danger" : "bg-black text-white"
        }`}
      >
        <FaRegCircleUser className="fs-2 text-white" /> 
        <div>Account</div>
      </ListGroup.Item>
      <ListGroup.Item
        to="/Kambaz/Dashboard"
        as={Link}
        className={`text-center border-0 ${
          location.pathname === "/Kambaz/Dashboard" ? "bg-white text-danger" : "bg-black text-white"
        }`}
      >
        <AiOutlineDashboard className="fs-2 text-danger" />
        <div>Dashboard</div>
      </ListGroup.Item>
      <ListGroup.Item
        to="/Kambaz/Courses/1234"
        as={Link}
        className={`text-center border-0 ${
          location.pathname === "/Kambaz/Courses/1234" ? "bg-white text-danger" : "bg-black text-white"
        }`}
      >
        <LiaBookSolid className="fs-2 text-danger" /> 
        <div>Courses</div>
      </ListGroup.Item>
      <ListGroup.Item
        to="/Kambaz/Calendar"
        as={Link}
        className={`text-center border-0 ${
          location.pathname === "/Kambaz/Calendar" ? "bg-white text-danger" : "bg-black text-white"
        }`}
      >
        <BsCalendar className="fs-2 text-danger" />
        <div>Calendar</div>
      </ListGroup.Item>
      <ListGroup.Item
        to="/Kambaz/Inbox"
        as={Link}
        className={`text-center border-0 ${
          location.pathname === "/Kambaz/Inbox" ? "bg-white text-danger" : "bg-black text-white"
        }`}
      >
        <BsInbox className="fs-2 text-danger" /> 
        <div>Inbox</div>
      </ListGroup.Item>
      <ListGroup.Item
        to="/Labs"
        as={Link}
        className={`text-center border-0 ${
          location.pathname === "/Labs" ? "bg-white text-danger" : "bg-black text-white"
        }`}
      >
        <CiSettings className="fs-2 text-danger" />
        <div>Labs</div>
      </ListGroup.Item>
    </ListGroup>
  );
}