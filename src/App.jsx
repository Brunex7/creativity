import { useEffect, useState } from 'react';
import Landing from './components/Landing';
import Home from './components/Home';

function App() {

  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLanding(false);
    }, 3500)
  }, [])

  return (
    <div>
      {showLanding ? (
        <Landing />
      ):(
        < Home />
      )}
    </div>
  )
}

export default App
