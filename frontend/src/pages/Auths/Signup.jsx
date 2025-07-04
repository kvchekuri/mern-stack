import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/actions/authActions";

import logo from "../../assets/logo.png"

// Product Hunt Logo Component
const ProductHuntLogo = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#da552f" />
      <text x="50%" y="50%" textAnchor="middle" dy=".35em" fontSize="20" fontWeight="bold" fill="#fff">P</text>
    </svg>
    <span style={{ color: '#da552f', fontWeight: 600, fontSize: 22, fontFamily: 'inherit' }}>Product Hunt</span>
  </div>
);

const Signup = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Fullname is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Minimum 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm your password"),
  });

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="shadow p-4 bg-white rounded" style={{ width: 370 }}>
        <div className="text-center mb-3">
          <ProductHuntLogo />
        </div>
        <h2 className="text-center mb-4" style={{ fontWeight: 600 }}>Sign Up</h2>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            const success = await dispatch(signup(values));
            if (success) {
              resetForm();
              navigate("/products");
            }
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-3">
                <label className="form-label">Fullname</label>
                <Field type="text" name="name" className="form-control" />
                <ErrorMessage name="name" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <Field type="email" name="email" className="form-control" />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <Field type="password" name="password" className="form-control" />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </div>
              <div className="mb-4">
                <label className="form-label">Confirm Password</label>
                <Field type="password" name="confirmPassword" className="form-control" />
                <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                style={{ background: "#2979ff", border: "none", fontWeight: 500, fontSize: 18 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing up..." : "Sign Up"}
              </button>
            </Form>
          )}
        </Formik>
        <div className="text-center mt-3">

        </div>
        <span> Already have an account?</span>
          <Link to="/login">Login</Link>
      </div>
      </div>
  );
};

export default Signup;
