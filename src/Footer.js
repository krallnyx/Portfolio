import React from 'react';
import github from './media/Github.png'
import linkedin from './media/linkedin.png'
import twitter from './media/twitter.png'

  var links = [
    {
      "id": 1,
      "title": "Linkedin",
      "url": "https://www.linkedin.com/in/arnaud-jeanroch/",
      "icon": linkedin
    },
    {
      "id": 2,
      "title": "Github",
      "url": "https://github.com/krallnyx/",
      "icon": github
    },
    {
      "id": 3,
      "title": "Twitter",
      "url": "http://www.twitter.com",
      "icon": twitter
    }
  ];

class Footer extends React.Component {
  render() {
    const listItems = links.map((link) =>
          <a key={link.id} className="col-xs-3 col-sm-2 col-md-2 col-lg-1 mx-3 my-2 px-5" href={link.url}>
            <img border="0" className="img-fluid" alt={link.url} src={link.icon}/>
          </a>
    );
    return (
      <footer className="page-footer bg-dark shadow-lg">
        <div className="container-fluid">
          <div className="row">
            <div className="pt-5 col-xs-12 col-sm-2 col-md-5 col-lg-8 mt-1 text-white">© Arnaud Jeanroch 2020</div>
            {listItems}
          </div>
        </div>
      </footer>
    );
  }
}


export default Footer