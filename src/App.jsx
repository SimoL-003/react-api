import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [actresses, setActresses] = useState([]);

  function fetchActresses() {
    axios
      .get("https://lanciweb.github.io/demo/api/actresses/")
      .then((res) => console.log(res.data));
  }

  useEffect(() => {
    fetchActresses();
  }, []);

  return <></>;
}

export default App;
