// import React, { useEffect, useState } from "react";

// import Card from "../UI/Card/Card";
// import classes from "./Login.module.css";
// import Button from "../UI/Button/Button";

// const Login = (props) => {
//   const [enteredEmail, setEnteredEmail] = useState("");
//   const [emailIsValid, setEmailIsValid] = useState();
//   const [enteredPassword, setEnteredPassword] = useState("");
//   const [passwordIsValid, setPasswordIsValid] = useState();
//   const [formIsValid, setFormIsValid] = useState(false);
//   useEffect(() => {
//     setFormIsValid(
//       enteredEmail.includes("@") && enteredPassword.trim().length > 6
//     );
//   }, [enteredEmail, enteredPassword]);

//   const emailChangeHandler = (event) => {
//     setEnteredEmail(event.target.value);
//   };

//   const passwordChangeHandler = (event) => {
//     setEnteredPassword(event.target.value);
//   };

//   const validateEmailHandler = () => {
//     setEmailIsValid(enteredEmail.includes("@"));
//   };

//   const validatePasswordHandler = () => {
//     setPasswordIsValid(enteredPassword.trim().length > 6);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     props.onLogin(enteredEmail, enteredPassword);
//   };

//   return (
//     <Card className={classes.login}>
//       <form onSubmit={submitHandler}>
//         <div
//           className={`${classes.control} ${
//             emailIsValid === false ? classes.invalid : ""
//           }`}
//         >
//           <label htmlFor="email">E-Mail</label>
//           <input
//             type="email"
//             id="email"
//             value={enteredEmail}
//             onChange={emailChangeHandler}
//             onBlur={validateEmailHandler}
//           />
//         </div>
//         <div
//           className={`${classes.control} ${
//             passwordIsValid === false ? classes.invalid : ""
//           }`}
//         >
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={enteredPassword}
//             onChange={passwordChangeHandler}
//             onBlur={validatePasswordHandler}
//           />
//         </div>
//         <div className={classes.actions}>
//           <Button type="submit" className={classes.btn} disabled={!formIsValid}>
//             Login
//           </Button>
//         </div>
//       </form>
//     </Card>
//   );
// };

// export default Login;

import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
const emailState = (state, action) => {
  if (action.type === "INPUT_EMAIL") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "BLUR_INPUT") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};
const passwordState = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "BLUR_INPUT") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};
const collegeState = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 0 };
  }
  if (action.type === "BLUR_INPUT") {
    return { value: state.value, isValid: state.value.trim().length > 0 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  // const [enteredCollege, setEnteredCollege] = useState("");
  // const [collegeIsValid, setCollegeIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  useEffect(() => {
    console.log("EFFECT RUNNING");

    return () => {
      console.log("EFFECT CLEANUP");
    };
  }, []);
  const [emailReducer, setEmailReducer] = useReducer(emailState, {
    value: "",
    isValid: null,
  });
  const [passwordReducer, setPasswordReducer] = useReducer(passwordState, {
    value: "",
    isValid: null,
  });
  const [collegeReducer, setCollegeReducer] = useReducer(collegeState, {
    value: "",
    isValid: null,
  });

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     setFormIsValid(
  //       enteredEmail.includes("@") &&
  //         enteredPassword.trim().length > 6 &&
  //         enteredCollege.trim().length > 0
  //     );
  //   }, 300);
  //   return () => {
  //     clearTimeout(identifier);
  //   };
  // }, [enteredEmail, enteredPassword, enteredCollege]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    setEmailReducer({ type: "INPUT_EMAIL", val: event.target.value });
    setFormIsValid(
      // event.target.value.includes("@") &&
      //   enteredPassword.trim().length > 6 &&
      //   enteredCollege.trim().length > 0
      emailReducer.isValid && passwordReducer.isValid && collegeReducer.isValid
    );
  };
  const passwordChangeHandler = (event) => {
    setPasswordReducer({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(
      // emailReducer.isValid &&
      //   event.target.value.trim().length > 6 &&
      //   enteredCollege.trim().length > 0
      emailReducer.isValid && passwordReducer.isValid && collegeReducer.isValid
    );
  };
  const collegeChangeHandler = (event) => {
    setCollegeReducer({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(
      // emailReducer.isValid &&
      // event.target.value.trim().length > 6 &&
      // enteredCollege.trim().length > 0
      emailReducer.isValid && passwordReducer.isValid && collegeReducer.isValid
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes("@"))
    setEmailReducer({ type: "BLUR_INPUT" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    setPasswordReducer({ type: "BLUR_INPUT" });
  };
  const validateCollegeHandler = () => {
    // setCollegeIsValid(enteredCollege.trim().length > 0);
    setCollegeReducer({ type: "BLUR_INPUT" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(
      emailReducer.value,
      passwordReducer.value,
      collegeReducer.value
    );
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailReducer.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailReducer.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordReducer.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordReducer.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            collegeReducer.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="college">College</label>
          <input
            type="text"
            id="college"
            value={collegeReducer.value}
            onChange={collegeChangeHandler}
            onBlur={validateCollegeHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
