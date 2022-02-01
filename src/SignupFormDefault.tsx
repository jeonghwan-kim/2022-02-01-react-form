import { ChangeEventHandler, FC, FormEventHandler, useState } from "react";

interface SignupFormValue {
  firstName: string;
  lastName: string;
  email: string;
}

const SignupFormDefault: FC = () => {
  const [values, setValues] = useState<SignupFormValue>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    alert(JSON.stringify(values, null, 4));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">First Name:</label>
      <input
        type="text"
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
      />
      <label htmlFor="email">Last Name:</label>
      <input
        type="text"
        name="lastName"
        value={values.lastName}
        onChange={handleChange}
      />
      <label htmlFor="email">Email Address:</label>
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupFormDefault;
