import { useEffect, useState } from 'react';
import './App.css';
import Navigator from './Routes/Navigator';
import { Provider } from 'react-redux';
import { Blog } from './Constants/Constants';
function App() {
  const [constBlog, setConstBlog] = useState(null);

  useEffect(() => {
    var finalArr = null;
    if(constBlog){
      constBlog.map((item, i) => {
        const parsedObject = JSON.stringify(item);
        constBlog[i] = parsedObject;
      });

      finalArr = JSON.stringify(constBlog);
    }
    console.log("blog", finalArr);
    localStorage.setItem('blog', finalArr);

  }, [constBlog])
  
  useEffect(() => {
    setConstBlog(Blog);
  }, [])
  return (
    // <h1>fvs</h1>
    // <Provider >
    <div className='flex flex-col min-h-[100vh] justify-between'>
      <Navigator />
    </div>
      
    // </Provider>
  );
}

export default App;
