// import { Link } from "react-router-dom";
// export default function AccountNavigation() {
//   return (
//     <div id="wd-account-navigation">
//       <Link to={`/Kambaz/Account/Signin`}  > Signin  </Link> <br/>
//       <Link to={`/Kambaz/Account/Signup`}  > Signup  </Link> <br/>
//       <Link to={`/Kambaz/Account/Profile`} > Profile </Link> <br/>
//     </div>
// );}

import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
  const location = useLocation(); 

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        to="/Kambaz/Account/Signin"
        id="wd-account-signin-link"
        className={`list-group-item border border-0 ${
          location.pathname === "/Kambaz/Account/Signin" ? "active bg-white text-black" : "text-danger"
        }`}
      >
        Signin
      </Link>
      <Link
        to="/Kambaz/Account/Signup"
        id="wd-account-signup-link"
        className={`list-group-item border border-0 ${
          location.pathname === "/Kambaz/Account/Signup" ? "active bg-white text-black" : "text-danger"
        }`}
      >
        Signup
      </Link>
      <Link
        to="/Kambaz/Account/Profile"
        id="wd-account-profile-link"
        className={`list-group-item border border-0 ${
          location.pathname === "/Kambaz/Account/Profile" ? "active bg-white text-black" : "text-danger"
        }`}
      >
        Profile
      </Link>
    </div>
  );
}