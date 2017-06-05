var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');


class App extends React.Component {
	render() {
    {var friend = this.props.list.filter(function(obj){
            return obj.friend === true})}
    {var notFriend = this.props.list.filter(function(obj){
            return obj.friend !== true})}    
		return(
      <div>
        <h1>Friends</h1>
        <ul>
          {friend.map(function(person){
            return <li key={person.name}> {person.name} </li>})}
        </ul>
        <hr />
        <ul>
          {notFriend.map(function(person){
            return <li key={person.name}> {person.name} </li>})}
        </ul>       
      </div>
		)
	}
}

App.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    friend: PropTypes.bool.isRequired,

  })),
}


ReactDOM.render(
  <App list={[
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ]} />,
  document.getElementById('app')
);


