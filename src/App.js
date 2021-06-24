import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid setSelected={setSelected}/>
      {selected && <Modal selected={selected} setSelected={setSelected}/>}
    </div>
  );
}

export default App;
