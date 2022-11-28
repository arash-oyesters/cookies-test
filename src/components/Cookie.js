import React, { useRef, useState } from "react";
import { useCookies } from "react-cookie";

const Cookie = () => {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [cookies, setCookie] = useCookies(["user"]);
  const [likeCookies, setLikesCookies] = useCookies(["like"]);

  const handle = () => {
    setCookie("Name", name, { path: "/" });
    setCookie("Password", pwd, { path: "/" });
    setLikesCookies("Product", likeRef.current.value, { path: "/" });
    console.log(likeCookies.Product);
  };

  const likeRef = useRef();

  return (
    <div className="App" >
      <h1>Name of the user:</h1>
      <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>Password of the user:</h1>
      <input
        type="password"
        placeholder="name"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
      />
      <select ref={likeRef}>
        <option value="apple">Apple</option>
        <option value="orange">orange</option>
      </select>
      <div>
        <button onClick={handle}>Set Cookie</button>
      </div>
      {likeCookies.Product}
    </div>
  );
};
export default Cookie;
