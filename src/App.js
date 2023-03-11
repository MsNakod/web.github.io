
import React, { useState } from 'react';
import './App.css';
import TextEditor from './Components/TextEditor';

const config ={
  buttons: ["bold","italic","underline","link", "unlink", "source"],
}
function App() {
  const [value,setValue] = useState("");
  return (
    <div className="row">
      <div className='col-md-6' style={{margin: "auto" ,marginTop:'50px'}}>
          <div style={{textAlign:"center"}}>
            <h3>Text Editor</h3>
          </div>
          <TextEditor setValue={setValue} config={config} />
          <div>{value}</div>
      </div>
      
    </div>
  );
}

export default App;
