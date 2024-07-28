import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useFormData } from "../../customHooks/useFormData";
import { modifyFormData } from "../../helpers/formHelper";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseconfig";
import { addUserStart } from "../../redux/actions/user.actions";
import Breadcrumb from "../../components/Breadcrum";
import Styles from "./LoginForm.module.css";
import InputText from "../../components/ui/InputText";
import InputEmail from "../../components/ui/InputEmail";
import InputPassword from "../../components/ui/InputPassword";
import { initialStatereg } from "./registerValid";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [formStatus, setFormStatus] = useState(true);
  let [formData, , setFormData, inputChange] = useFormData(initialStatereg, "");
  let [errorMessage, setErrorMessage] = useState(
    "please Enter all required Field"
  );
  const submit = async (event) => {
    event.preventDefault();
    let result = modifyFormData(formData);
    console.log(result);
    if (result.isFormValid) {
      console.log(result.isFormValid);
      try {
        let userCredential = await createUserWithEmailAndPassword(
          auth,
          result.modifyObject.email,
          result.modifyObject.password
        );
        dispatch(
          addUserStart({ ...result.modifyObject, uid: userCredential.user.uid })
        );
        setFormStatus(true);
        setFormData([...initialStatereg]);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } catch (error) {
        setFormStatus(false);
        setErrorMessage("Email id already exists");
      }
    } else {
      setFormStatus(true);
      for (const formControl of initialStatereg) {
        formControl.touched = true;
      }
      setFormData((prevValue) => [...prevValue]);
    }
  };
  const setDefaultValue = useCallback(() => {
    for (const formControl of initialStatereg) {
      formControl.value = "";
      formControl.touched = false;
    }
    setFormData((prevValue) => [...prevValue]);
  }, [setFormData]);
  useEffect(() => {
    setDefaultValue();
  }, [setDefaultValue]);
  return (
    <>
      <Breadcrumb />
      <div className="container mt-4">
        <div className={`row ${Styles.mainContent} bg-success`}>
          <div className={`col-md-12 col-xs-12 col-sm-12 ${Styles.loginForm}`}>
            <div className="container-fluid">
              <div className="row mt-4 text-center">
                <h2>Register</h2>
              </div>
              <div className="row">
                <form className="form-group" onSubmit={submit}>
                  {!formStatus && (
                    <h5 className="text-danger text-center">{errorMessage}</h5>
                  )}
                  {initialStatereg.length > 0 &&
                    initialStatereg.map((state, index) => {
                      if (state.name === "name") {
                        return (
                          <InputText
                            formControl={state}
                            inputChange={inputChange}
                            key={index}
                          />
                        );
                      }
                      if (state.name === "email") {
                        return (
                          <InputEmail
                            formControl={state}
                            inputChange={inputChange}
                            key={index}
                          />
                        );
                      }
                      if (state.name === "password") {
                        return (
                          <InputPassword
                            formControl={state}
                            inputChange={inputChange}
                            key={index}
                          />
                        );
                      }
                      return null;
                    })}
                  <div className="d-grid">
                    <button
                      className="primary-btn py-2 text-white"
                      style={{ border: "none" }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
                <div className="row text-center mt-4">
                  <p>
                    Already have an account?{" "}
                    <Link to="/login" className={Styles.link}>
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
