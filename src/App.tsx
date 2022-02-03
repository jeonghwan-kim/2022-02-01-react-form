import SignupFormDefault from "./SignupFormDefault";
import SignupFormFormik from "./SignupFormFormik";
import SignupFormFormikRenderProps from "./SignupFormFormikRenderProps";

function App() {
  return (
    <div>
      <h2>Default</h2>
      <SignupFormDefault />
      <hr />
      <h2>Formik</h2>
      <SignupFormFormik />
      <h2>Formik(Render Props)</h2>
      <SignupFormFormikRenderProps />
    </div>
  );
}

export default App;
