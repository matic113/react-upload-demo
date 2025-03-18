import './App.css';

import SingleFileUploader from './components/SingleFileUploader';

function App() {
  return (
    <>
      <h1>Demo File Upload</h1>

      <SingleFileUploader />

      <p className="read-the-docs">a demo by Fares.</p>
      <p className="read-the-docs">currently only files that end with these extensions are allowed .csv, .xlsx, .ipnyb</p>
    </>
  );
}

export default App;