import React from 'react';
import { useEffect , useState} from 'react';

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);
  return (
    <>
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    </>
  )
}

export default Loader;