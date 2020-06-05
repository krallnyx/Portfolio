import React from 'react' 
import wordpress from './media/wordpress.png'
import bootstrap from './media/bootstrap.png'
import react from './media/react.png'
import comingsoon from './media/comingsoon.png'
import mysql from './media/sql.png' 
import rails from './media/rails.png'
import api from './media/api.png' 

var cards = [
    {
      "id": 1,
      "title": "Wordpress",
      "text": "A Wordpress project for a real estate agency in Aspen. It involved working on WordPress, HTML and CSS.",
      "img": wordpress
    },
    {
      "id": 2,
      "title": "Bootstrap",
      "text": "A Bootstrap Project for a Film Festival in Boston. It involved working on Bootstrap, HTML and CSS.",
      "img": bootstrap
    },
    {
      "id": 3,
      "title": "React",
      "text": "This Portoflio for myself. It involved React, Javascript, JSX and Bootstrap.",
      "img": react
    },
    {
      "id": 4,
      "title": "MySQL",
      "text": "Maping, designing and building a Database. It involved UML and SQL",
      "img": mysql
    },
    {
      "id": 5,
      "title": "Full-Stack with Ruby",
      "text": "A Full-stack project for a fitness app. It involves a front-end in HTML/CSS/Bootstrap and a back end in Ruby on Rails using Devise.",
      "img": rails
    },
    {
      "id": 6,
      "title": "Full-Stack with APIs",
      "text": "A Full-stack project for a bike race. It involves a front-end in React and a back end in Rails. They communicate via API",
      "img": api
    },
    {
      "id": 7,
      "title": "Full-Stack",
      "text": "An aid platform for the neighborhood.  It involves a front-end in React and a back end in Rails.",
      "img": comingsoon
    }
    ,
    {
      "id": 8,
      "title": "Full-Stack",
      "text": "An aid platform for the neighborhood.  It involves a front-end in React and a back end in Rails.",
      "img": comingsoon
    }
  ];

  const listCards = cards.map((card) =>
        <div key={card.id} className="col-sm-12 col-md-6 col-lg-4 mb-5">
            <div className="card shadow h-100">
                <div className="card-body">
                    <div className="card-title h5 mb-4"><strong>{card.title}</strong></div>
                    <img src={card.img} className="img-fluid mb-5" alt={card.title}/>
                    <p className="card-text">{card.text}</p>
                </div>
            </div>
        </div>
    );


function Examples() {  
    return (
    <div className="container my-5">
        <hr/>
        <div className="h1 my-5">Examples of projects I've worked on :</div>
        <div className="row">
                {listCards}
            </div>
    </div>
    )
}  
export default Examples