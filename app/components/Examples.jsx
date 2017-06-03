var React = require('react');
var {Link} =require('react-router');

var Examples = () => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are some example locations</p>
      <ol>
        <li>
          <Link to="/?location=Lviv">Lviv, UA</Link>
        </li>
        <li>
          <Link to="/?location=Kyiv">Kyiv, UA</Link>
        </li>
        <li>
          <Link to="/?location=Odesa">Odesa, UA</Link>
        </li>
      </ol>
    </div>
  )
}

module.exports = Examples;
