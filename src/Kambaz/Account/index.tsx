// src/Kambaz/Account/index.tsx

import AccountNavigation from "./Navigation";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import { Route, Routes, Navigate } from "react-router-dom";
import Users from "./Users";
export default function Account() {
    return (
      <div id="wd-account-screen">
        <table>
          <tr>
            <td valign="top">
              <AccountNavigation />
            </td>
            <td valign="top">
              <Routes>
                <Route path="/"        element={<Navigate to="/Kambaz/Account/Signin" />} />
                <Route path="/Signin"  element={<Signin />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Signup"  element={<Signup />} />
                <Route path="/Users" element={<Users />} />
                <Route path="/Users/:uid" element={<Users />} />
              </Routes>
            </td>
          </tr>
        </table>
      </div>
  );}
  