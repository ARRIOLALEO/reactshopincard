import React from 'react'

function Footer(){
  return(
    <div className="footer">
      <div className="widget">
        <h3>Stack</h3>
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>Axios</li>
          <li>useState</li>
          <li>CSS3</li>
        </ul>
      </div>
      <div className="widget">
        <h3>Implemented</h3>
        <ul>
          <li>useEfect</li>
          <li>useContext</li>
          <li>createContext</li>
          <li>Vanilla JS</li>
          <li>JS6</li>
        </ul>
      </div>
      <div className="widget">
        <h3>To be Implemented</h3>
        <ul>
          <li>Cypress</li>
          <li>reducers</li>
          <li>Orders</li>
          <li>Responsive</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
