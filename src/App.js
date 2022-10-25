import { useState } from "react";
import "./App.css";

function App({ name }) {
  const [showButton, setShowButton] = useState(false);
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <header className="speaker-form-header">
        <h1>Speaker Submission</h1>
        <p> Fill out this form.</p>
      </header>
      <div className="speaker-form">
        <div className="form-row">
          <label htmlFor="full-name">Name</label>
          <input id="full-name" name="full-name" type="text" />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="joe@example.com"
          />
        </div>
        <fieldset className="legacy-form-row">
          <legend>Type of Talk</legend>
          <input
            id="talk-type-1"
            name="talk-type"
            type="radio"
            value="main-stage"
          />
          <label htmlFor="talk-type-1" className="radio-label">
            Main Stage
          </label>
          <input
            id="talk-type-2"
            name="talk-type"
            type="radio"
            value="workshop"
            checked
          />
          <label htmlFor="talk-type-2" className="radio-label">
            Workshop
          </label>
        </fieldset>
        <div className="form-row">
          <label htmlFor="t-shirt">T-Shirt Size</label>
          <select id="t-shirt" name="t-shirt">
            <option value="xs">Extra Small</option>
            <option value="s">Small</option>
            <option value="m">Medium</option>
            <option value="l">Large</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="abstract">Abstract</label>
          <textarea id="abstract" name="abstract"></textarea>
          <div className="instructions">
            Describe your talk in 500 words or less
          </div>
        </div>
        <div className="form-row">
          <span>Counter:{counter}</span>
          <label className="checkbox-label" htmlFor="available">
            <input
              id="available"
              name="available"
              type="checkbox"
              value="is-available"
            />
            <span>I'm actually available the date of the talk</span>
          </label>
        </div>
        <div className="form-row">
          <button
            style={{ marginBottom: "10px" }}
            onClick={() => {
              setShowButton(!showButton);
              setCounter(0);
            }}
          >
            Submit
          </button>
          {showButton && (
            <button onClick={() => setCounter(counter + 1)}>Counter</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
