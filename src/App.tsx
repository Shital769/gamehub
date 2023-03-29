import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import Like from "./components/Like/Like";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {/* {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisible(true)}>
        My Button
      </Button> */}
      <Like onClick={() => console.log("Clicked")} />
    </div>
  );
}
export default App;
