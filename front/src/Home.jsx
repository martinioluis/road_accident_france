import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './Home.scss';

library.add(fab);

const Home = () => {
    return (
        <div className="Home">
            <section>
                <h1>Why this project</h1>
                <p>This project was carried out in order to improve the technical skills of the contributors. Thomas peubey had already done work on road accidents in england. It was an interesting and complex project and it was natural that we decided to do the same on accidents in France. For this we used data science tools for data processing. Martin Peubey to realize this web application on a frontend and backend side.</p>
            </section>

            <section className="contributors">
                <h1>Contributors</h1>
                <div className="mp">
                    <p>Martin Peubey <a href='https://github.com/martinioluis'><FontAwesomeIcon icon={["fab", "github"]}/></a><a href='https://www.linkedin.com/in/martin-peubey-327a0613a/'><FontAwesomeIcon icon={["fab", "linkedin"]}/></a></p>
                    <p>Born in the era of computer science, it's natural that I turned to this field. I'm passionate about new technologies, I followed the development of web applications. I also compose electronic music in my spare time.</p>
                </div>
                <div className="tp">
                    <p>Thomas Peubey <a href='https://github.com/tpeubey'><FontAwesomeIcon icon={["fab", "github"]}/></a><a href='https://www.linkedin.com/in/thomas-peubey-541bb113a/'><FontAwesomeIcon icon={["fab", "linkedin"]}/></a></p>
                    <p>Passionate about data science, I enjoy enriching data and telling its story. I am also very interested in the world of fitness.</p>
                </div>
            </section>
        </div>
    )
}

export default Home;