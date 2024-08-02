import React, { useState } from 'react'
import './../styles/App.css'
// import { marked } from 'marked';

function App() {

  const [markdown, setMarkdown] = useState('');

//   useEffect(() => {
//     marked.setOptions({
//       breaks: true,
//     });
//   }, []);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };
  return (
    <>
    <div className='app'>
        <div className='textarea'>

          <textarea id="editor" placeholder="Enter text" onChange={handleChange}/>
           
        </div>
        <div className='preview'>
            <p className='loading'>{markdown}</p>
        </div>
    </div>
    </>

  )
}

export default App

