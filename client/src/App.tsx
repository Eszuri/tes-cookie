import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const setCookie = () => {
    axios
      .post(
        "https://api-tes-cookie.vercel.app/set",
        { text: "This Is Text" },
        { withCredentials: true }
      )
      .then((res) => {
        alert(JSON.stringify(res));
      })
      .catch((err) => {
        alert("Error is:" + err);
      });
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={setCookie}>set Cookie</button>
      </div>
    </>
  );
}

export default App;
