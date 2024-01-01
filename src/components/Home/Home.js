// import React from 'react';

// import Card from '../UI/Card/Card';
// import classes from './Home.module.css';

// const Home = (props) => {
//   return (
//     <Card className={classes.home}>
//       <h1>Welcome back!</h1>
//     </Card>
//   );
// };

// export default Home;

import React, { useContext } from "react";
import Card from "../UI/Card/Card";
import AuthContext from "../../store/AuthContext/auth-context";
import classes from "./Home.module.css";
import Button from "../UI/Button/Button";

const Home = () => {
  const authctx = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authctx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
