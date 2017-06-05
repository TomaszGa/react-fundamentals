var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');


class App extends React.Component {
	render() {
		return(
      <div>
			<div>
			Hello React and why do you take so damn long!
			</div>
      <div>
      Oh so you do not lol
      <p>How slow would this be</p>
      <p>Preeeety quick lol</p>
      </div>
      </div>
		)
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);