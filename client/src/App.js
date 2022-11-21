import axios from "axios";
import { useEffect } from "react";

function App() {
  const fetchAPITest = async () => {
    await axios
      .get("/api/v1/test")
      .then((serverRes) => console.log(serverRes.data))
      .catch((err) => console.log(err.response));
  };

  useEffect(() => {
    fetchAPITest();
  }, []);

  return (
    <div className="App">
      <h1>Virtual Kiwi - test change</h1>
    </div>
  );
}

export default App;
