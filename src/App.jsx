import { useState } from "react";
import NewsLetter from "./assets/component/NewsLetter"
import OkMsg from "./assets/component/OkMsg"

function App() {
  const [showNewsLetter, setShowNewsLetter] = useState(true); // Initially show the NewsLetter
  const [userEmail, setUserEmail] = useState("");

  const handleSubscribe = (email) => {
    setUserEmail(email);
    setShowNewsLetter(false); // Hide NewsLetter and show OkMsg
  };

  const handleDismiss = () => {
    setShowNewsLetter(true); // Show NewsLetter and hide OkMsg
  };
  return (
    <>
       {showNewsLetter ? <NewsLetter onSubscribe={handleSubscribe} /> : <OkMsg onDismiss={handleDismiss} email={userEmail} />}
    </>
  )
}

export default App
