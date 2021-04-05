import React, { useState } from 'react';
import './App.css';
import JSONForm from './components/JSONForm';
import { JSONConfigData } from './constant';

function App() {
  const [formData, setFormData] = useState(null);

  const handleOnSubmit = (data) => {
    setFormData(JSON.parse(JSON.stringify(data)));
  };

  const handleOnReset = () => {
    setFormData(null);
  };

  return (
    <div className="App">
      <div style={{ flex: 1 }}>
        <JSONForm
          configData={JSONConfigData}
          handleOnSubmit={handleOnSubmit}
          handleOnReset={handleOnReset}
        />
      </div>
      <div style={{ flex: 1 }}>
        {formData ? <pre>{JSON.stringify(formData, null, '\t')}</pre> : null}
      </div>
    </div>
  );
}

export default App;
