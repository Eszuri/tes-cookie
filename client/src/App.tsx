import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState("");

  const setCookie = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const allData = new FormData(e.target);
    axios
      .post(
        "https://api-tes-cookie.vercel.app/set",
        { text: allData.get("text") },
        { withCredentials: true }
      )
      .then((res) => {
        alert(JSON.stringify(res.data));
      })
      .catch((err) => {
        alert("Error is:" + err);
      });
  };

  useEffect(() => {
    axios
      .get("https://api-tes-cookie.vercel.app/get", { withCredentials: true })
      .then((res) => {
        setData(JSON.stringify(res.data));
      })
      .catch((err) => {
        setData("This Error:" + err);
      });
  });
  return (
    <>
      <h6>{data}</h6>
      <form onSubmit={setCookie}>
        <label htmlFor="request" />
        <input id="request" name="text" />
        <div className="card">
          <button type="submit">set Cookie</button>
        </div>
      </form>
    </>
  );
}

export default App;
