import React, { useState } from 'react';
import { getDateValue } from '../../utils';

const JSONForm = (props) => {
  const { configData = [], handleOnSubmit, handleOnReset } = props;
  const [jsonFormData, setJSONFormData] = useState({});
  const [errorData, setErrorData] = useState(null);

  const setInputValue = (keyName, value) => {
    setJSONFormData({
      ...jsonFormData,
      [keyName]: value,
    });
  };

  const resetForm = (event) => {
    event.preventDefault();
    setJSONFormData({});
    setErrorData(null);
    handleOnReset();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const requiredFields = configData
      .filter((config) => config.isRequired)
      .map((config) => config.name);
    let error = {};
    requiredFields.forEach((element) => {
      if (!jsonFormData[element]) {
        error[element] = 'This is required field';
      }
    });
    if (Object.keys(error).length) {
      setErrorData(error);
    } else {
      setErrorData(null);
      handleOnSubmit(jsonFormData);
    }
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit} noValidate>
        {configData.map((config) => {
          const {
            name = '',
            type = 'text',
            human_label = '',
            conditional,
            isRequired,
          } = config;
          const value = jsonFormData[name] || '';
          let dateValue;
          if (type === 'date' && value) {
            dateValue = getDateValue(value);
          }
          if (
            !conditional ||
            conditional.show_if(jsonFormData[conditional.name])
          )
            return (
              <div key={name}>
                <label>
                  {human_label} {isRequired ? '* ' : ''}
                </label>
                <br></br>
                {type === 'checkbox' ? (
                  <input
                    checked={value}
                    type={type}
                    name={name}
                    onChange={(event) =>
                      setInputValue(name, event.target.checked)
                    }
                  />
                ) : (
                  <input
                    value={dateValue || value}
                    type={type}
                    name={name}
                    onChange={(event) =>
                      setInputValue(
                        name,
                        type === 'date'
                          ? new Date(event.target.value)
                          : event.target.value,
                      )
                    }
                  />
                )}
                <span className="error">{errorData?.[name]}</span>
              </div>
            );
          return null;
        })}
        <div>
          <button onClick={resetForm}>Reset</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default JSONForm;
