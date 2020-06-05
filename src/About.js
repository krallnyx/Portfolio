import React from 'react'
import './about.css'; 

function About() {    
    return <div className="container-fluid">
        <div className="row text-shrink">
            <section className="col-xs-3 col-lg-2 bg-dark text-white mb-4 shadow-lg">
                <img src={require('./media/me.png')} className="col-12 mt-5" alt="Me" />   
                <div className="bg-light text-dark mt-5 px-3">
                    Contact details :
                </div>
                <div>
                    <section className="pt-3">Adress:</section>
                    <section>Uxbridge, Greater London, United Kingdom</section>
                    <section className="pt-3">Mobile:</section>
                    <section>(+44) 74 84 64 36 55</section>
                    <section className="pt-3">Website :</section>
                    <section>www.jeanroch.fr</section>
                </div>
                <div className="bg-light text-dark mt-5 mb-3 px-3">
                    About me :
                </div>
                <div>
                    I'm a 40 years old born and educated in France. I've been living in the UK since 2016. I have a very technical background as I started my career as a Technical Support Engineer. Over the years I became more and more interested in Development, writing some reports in .Net professionaly but mainly doing stuff at home for fun. Now I want to do it professionaly at 100% !
                </div>
                <div className="bg-light text-dark mt-5 mb-3 px-3">
                    Hobbies :
                </div>
                <img src={require('./media/cinema.png')} className="col-xs-12 col-sm-6" alt="Cinema"/>
                <img src={require('./media/reading.png')} className="col-xs-12 col-sm-6" alt="Reading"/> 
                <img src={require('./media/boardgames.png')} className="col-xs-12 col-sm-6" alt="Boardgames"/> 
                <img src={require('./media/cycling.png')} className="col-xs-12 col-sm-6" alt="Cycling"/>
            </section>
            <section className="col-xs-9 col-lg-10">
                <div className="h1">Arnaud Jeanroch</div>
                <div className="h4">Full-Stack Developer</div>
                <div className="mt-5 bg-dark text-white px-2">Education :</div>
                <div className="h4 "><strong>2020:</strong></div>
                <div><u>OpenClassrooms</u> Studying for a Full-stack developer Bachelor degree (remotely form London)</div>
                <div className="h4 "><strong>2001-2003:</strong></div>
                <div><u>CNAM, Versailles</u> Evening path for A-Level IT software developper (no degree)</div>
                <div className="h4 "><strong>2000-2001:</strong></div>
                <div><u>Université de Versailles</u> studying maths and IT (no degree)</div>
                <div className="h4 "><strong>2000:</strong></div>
                <div><u>Lycée Prieur de la cote d'or</u> Baccalauréat in science (France)</div>
                <div className="mt-5 bg-dark text-white px-2">Experience :</div>
                <div className="h4 "><strong>2018-2020:</strong></div>
                <div><u>ET-Enterprises, London</u> Technical Support Engineer. Mainly doing System and network administration for a factory but also creating/editing report (SQL/.NET) and building small tools.</div>
                <div className="h4 "><strong>2017-2018:</strong></div>
                <div><u>ESEYE, Guildford</u> Technical Support Engineer. Supporting users in French and in English, worldwide, for an IOT company.</div>
                <div className="h4 "><strong>2015-2016:</strong></div>
                <div><u>Weber-Stephen, Paris</u> IT Support Manager. Managing support for users across South EMEA. System administrator and security management EMEA wide.</div>
                <div className="h4 "><strong>2014-2015:</strong></div>
                <div><u>5aSec, Paris</u> IT Manager France. Managing all of IT for the 2 french offices of the company and managing 3rd parties for around a 100 dry cleaning shops in France.</div>
                <div className="h4 "><strong>2008-2014:</strong></div>
                <div><u>UT Hospitality, Paris</u> Technician / IT Administrator. Total management of the Client's infrastructure in a very small team.</div>
                <div className="mt-5 bg-dark text-white px-2">Languages :</div>
                <div className="h4 "><strong>French :</strong></div>
                <div>Fluent (native)</div>
                <div className="h4 "><strong>English :</strong></div>
                <div>Fluent (pre-settled status)</div>
            </section>
        </div>
    </div>  
}  
  
export default About  