var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Brooklyn'>Brooklyn, NY</Link>
        </li>
        <li>
          <Link to='/?location=Honolulu'>Honolulu, HI</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
