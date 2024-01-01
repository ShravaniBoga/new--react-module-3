import React, { useContext } from "react";
import AuthContext from "./store/AuthContext/auth-context";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
// import MainHeader from "./components/MainHeader";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // useEffect(() => {
  //   const storedUserLoggiedInInfo = localStorage.getItem("isLoggedIn");
  //   if (storedUserLoggiedInInfo === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password, college) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  const ctx = useContext(AuthContext);
  // };
  return (
    // <AuthContext.Provider
    //   value={{
    //     isLoggedIn: isLoggedIn,
    //     onLogout: logoutHandler,
    //   }}
    // >
    <React.Fragment>
      <MainHeader />
      <main>
        {/* {!isLoggedIn && <Login onLogin={loginHandler} />} */}
        {!ctx.isLoggedIn && <Login />}
        {/* {isLoggedIn && <Home onLogout={logoutHandler} />} */}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
    // </AuthContext.Provider>
  );
}

export default App;
