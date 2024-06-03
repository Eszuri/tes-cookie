import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState("");

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

  useEffect(() => {
    axios
      .get("https://api-tes-cookie.vercel.app/get", { withCredentials: true })
      .then((res) => {
        setData(JSON.stringify(res));
      })
      .catch((err) => {
        setData("This Error:" + err);
      });
  });
  return (
    <>
      <h1>{data}</h1>
      <div className="card">
        <button onClick={setCookie}>set Cookie</button>
      </div>
    </>
  );
}

export default App;
