import { useNavigate, Link } from "react-router-dom";
import { Formik } from "formik";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./FirebaseConfig.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  initializeApp(firebaseConfig);
  const navigate = useNavigate();
  const auth = getAuth();
  console.log(auth);

  return (
    <div className="login">
      <div className="login-container">
        <h1>Sign Up</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            } else if (!values.password) {
              errors.password = "Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, setStatus }) => {
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 400);
            createUserWithEmailAndPassword(auth, values.email, values.password)
              .then((auth) => {
                if (auth) {
                  navigate("/login");
                  alert('Successfully register,Kindly login.')
                }
              })
              .catch((error) => setStatus(error.message));
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            status,
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                minLength={5}
                maxLength={50}
                placeholder="Email or Phone number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                autoComplete="off"
                onCopy={(e) => e.preventDefault()}
                onPaste={(e) => e.preventDefault()}
              ></input>
              <span className="error">
                {errors.email && touched.email && errors.email}
              </span>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Password"
                autoComplete="off"
                onCopy={(e) => e.preventDefault()}
                onPaste={(e) => e.preventDefault()}
              ></input>
              <span className="error">
                {errors.password && touched.password && errors.password}
              </span>
              <span className="error">{status}</span>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-danger"
              >
                {" "}
                Sing Up
              </button>
            </form>
          )}
        </Formik>
        <div className="sign-up">
          Already register?<Link to="/login"> Login now.</Link>
        </div>
      </div>
      <div className="blur"></div>
      <img
        className="concord-img vlv-creative"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt=""
      ></img>
    </div>
  );
};

export default SignUp;
