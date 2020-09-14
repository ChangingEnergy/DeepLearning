import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Dnd.css';
import $ from 'jquery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <form action="upload.php" method="POST">
          <input type="file" multiple></input>
          <p>Drag your files here or click in this area.</p>
          <input type="file" multiple></input> {/* BW added as need for both drag and drop and click button user action */}
          <button type="submit">Upload</button>
      </form>

      <script type="text/babel">
        $(document).ready(function(){
          $('form input').trigger(function () {
            $('form p').text(this.files.length + " file(s) selected");
          })
        })
      </script>
    </div>
);

}

export default App;
