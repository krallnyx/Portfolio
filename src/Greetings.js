import React from 'react'  
function Greetings() {  
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h3>Hello and welcome to my portfolio. I'm Arnaud, a French and English speaking Full-stack developper living near London. Here you'll find some info about my work and please don't hesitate to contact me for more information !</h3>
        </div>
        <div className="col-sm-12 col-md-6">
          <img src={require('./media/Web-Development.jpg')} className="img-responsive" alt="Page not found"/>
          </div>
      </div>
    </div>
  )   
}  
export default Greetings