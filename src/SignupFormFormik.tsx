import { useFormik } from "formik";
import { FC } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required").max(15),
  lastName: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
});

type SignupFormValue = Yup.InferType<typeof validationSchema>;

const SignupFormFormik: FC = () => {
  const formik = useFormik<SignupFormValue>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 4));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <p>{formik.errors.firstName}</p>
        )}
      </div>
      <div>
        <label htmlFor="firstName">Last Name:</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <p>{formik.errors.lastName}</p>
        )}
      </div>
      <div>
        <label htmlFor="email">Email Address:</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupFormFormik;
