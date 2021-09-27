import React from 'react';
import RoadAccidentYear from './../dashboardCharts/RoadAccidentYear';
import { Table } from 'reactstrap';
import './Introduction.scss';

const Introduction = () => {
  const textChart = <p>From the graph below, we can clearly see that there has been a decrease in road accidents from 2005 to 2013. However, there is a small increase from 2014 to 2017. The French government then established a new law in July 2018 which consisted of lowering the speed limit on certain roads. The question one might ask is, <span>has this new law had a positive impact on road accidend ? </span>
  More information here: <a href='https://www.thelocal.com/20190128/france-sees-record-low-figures-for-number-of-road-deaths'>English article</a>, <a href='https://www.securite-routiere.gouv.fr/dangers-de-la-route/la-vitesse-et-la-conduite/abaissement-de-la-vitesse-maximale-autorisee-de-90-80'>French article</a></p>

    return (
        <div className="Introduction">
          <div className="title">
            <h1>The French government has established a new law in July 2018 which consisted of lowering the speed limit on certains road</h1>
            <div className="sub-title">Has this new law had a positive impact on road accident ?</div>
          </div>
          <div className="intro">
            <img src="https://res.cloudinary.com/dsxb2uyct/image/upload/v1587395715/Screen_Shot_2020-04-20_at_17.13.17_jkzwkj.png" alt="accident"/>
            <p>France, with a comparable population, has a more extensive road network than Germany, Italy or the United Kingdom. Even though its road network sees many foreign vehicles pass through because of France's geographical location, traffic is less dense, which according to the ONISR favours higher speeds and more serious accidents.
            </p>
            {window.innerWidth > 480 ? textChart : null }
          </div>
          <div className="table">    
            <Table bordered>
                <thead>
                  <tr>
                    
                    <th>Risk factors</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      - Speed
                    </td>
                  </tr>
                  <tr>
                    <td>
                      - Driving while intoxicated or under the influence of psychoactive substances
                    </td>
                  </tr>
                  <tr>
                    <td>
                      - Distracted driving
                    </td>
                  </tr>
                  <tr>
                    <td>
                      - Hazardous road infrastructure
                    </td>
                  </tr>
                  <tr>
                    <td>
                      - Dangerous vehicles
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            {window.innerWidth <= 480 ? textChart : null }
            <div className="chart">
                <RoadAccidentYear />
            </div>
        </div>
    )
}

export default Introduction;