import Router from "../routes";
import GlobalStyle from "../styles/globalStyle";

import { testApiConnection } from "../services/testAPI";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const testConnection = async () => {
      try {
        const data = await testApiConnection();
        console.log("API Connection Successful:", data);
      } catch (error) {
        console.log("API Connection Failed:", error);
      }
    };
    testConnection();
  }, []);
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
