import { ChangeEventHandler, FormEventHandler, useState } from "react";

function App() {
  const [email, setEmail] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log(email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <button type="submit">제출</button>
      </form>
    </div>
  );
}

export default App;
