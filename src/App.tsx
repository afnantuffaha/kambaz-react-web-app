import Labs from "./Labs";
import Kambaz from "./Kambaz";
import { HashRouter } from "react-router";
import { Routes } from "react-router";
import { Route } from "react-router";
import { Navigate } from "react-router";
import store from "./Kambaz/store";
import { Provider } from "react-redux"; 
export default function App() {
 return (
  <HashRouter>
    <Provider store={store}>
   <div>
    <Routes>
     <Route path="/" element={<Navigate to="Kambaz"/>}/>
     <Route path="/Labs/*" element={<Labs />} />
     <Route path="/Kambaz/*" element={<Kambaz />} />
    </Routes>
   </div>
   </Provider>
  </HashRouter>
);}

