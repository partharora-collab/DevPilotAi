import { useState, useEffect } from "react";


function App() {
  const [data, setData] = useState('Parth');

  useEffect(() => {
    fetch('/api/test')
      .then(res => res.json())
      .then(data => setData(data.message))
      .catch((error) => console.error(error.message));
  }, []);

  return <div>{ data }</div>;
}

export default App;
