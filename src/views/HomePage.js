import { useState, useEffect } from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import useStore from "../store/store";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function HomePage(props) {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  const users = useStore((state) => state.users);
  const setUsers = useStore((state) => state.setUsers);

  useEffect(() => {
    setUsers("http://localhost:3000/users");
  }, []);

  const currentUser = users.findIndex((user) => {});
  console.log(users);

  return (
    <div className="sweet-loading">
      <h1>Welcome {currentUser}</h1>
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input
        value={color}
        onChange={(input) => setColor(input.target.value)}
        placeholder="Color of the loader"
      />
      <ClipLoader color={color} loading={loading} css={override} size={150} />
    </div>
  );
}

export default HomePage;
