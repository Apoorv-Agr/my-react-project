const React = require('react');
const ReactCreateClass = require('create-react-class');

var Page1 = ReactCreateClass({
  render: function() {
    console.log(this.props.match);
    return(
      <div>
        <h1>Page 1</h1>
      </div>
    );
  }
});
module.exports = Page1;
