import SignupFormDefault from "./SignupFormDefault";
import SignupFormFormik from "./SignupFormFormik";

function App() {
  return (
    <div>
      <h2>Default</h2>
      <SignupFormDefault />
      <hr />
      <h2>Formik</h2>
      <SignupFormFormik />
    </div>
  );
}

export default App;
