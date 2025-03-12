import {SignUp} from "./components/SignUp.tsx";
import {Routes,Route} from "react-router-dom";
import {SignIn} from "./components/SignIn.tsx";

function App() {


  return (
      <div>
        <Routes>
          <Route path="/" element={<SignIn/>} />
          <Route path="/Signup" element={<SignUp/>}/>
        </Routes>

      </div>

  );
}

export default App;