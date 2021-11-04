import i18next from "i18next";
import { useState } from "react";


function App() {

  const [language, setLanguage] = useState("es")

  return (
    <div className="App" id="app">
      <div>
        {i18next.t("key", "default")}
      </div>
      <button onClick={
        () => {
          setLanguage(language === "en" ? "es" : "en")
          i18next.changeLanguage(language === "en" ? "es" : "en")
        }
      } >change</button>
    </div>
  );
}

export default App;
