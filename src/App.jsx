import { useState } from "react";
import reviews from "./data"

const App = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = reviews[index];

  console.log(name); // Check if data is succesfully imported

  return (
    <div>App</div>
  )
}
export default App