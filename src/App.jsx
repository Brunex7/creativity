import { useEffect, useState } from 'react';
import Landing from './components/Landing';
import Home from './components/Home';
import Navbar from './components/Nav';

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
        <div>
          <Navbar />
          < Home />
        </div>

      )}
    </div>
  )
}

export default App
