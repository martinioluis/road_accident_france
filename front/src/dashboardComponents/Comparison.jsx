import React from 'react';
import Accident2018 from '../dashboardCharts/Accident2018';
import Killed2018 from '../dashboardCharts/Killed2018';
import Accident2017 from '../dashboardCharts/Accident2017';
import Killed2017 from '../dashboardCharts/Killed2017';
import './Comparison.scss';
import Killed1718Month from '../dashboardCharts/Killed1718Month';
import CasualityMaleFemale1718 from '../dashboardCharts/CasualityMaleFemale1718';
import CasualityInjury from '../dashboardCharts/CasualityInjury';

const Comparison = () => {
    return (
        <div className="Comparison">
            <h2>2017 - 2018 Comparison</h2>
            <p>This slide contains the filtered data on the roads where the law ha been applied.
                You can see from the numbers that there have been fewer accidents and fewer casualty killed in 2018.
            </p>
            <div className="comparison-2018">
                <Accident2018/>
                <Killed2018/>
            </div>
            <div className="comparison-2017">
                <Accident2017/>
                <Killed2017/>
            </div>
            <p>
                However, did the results occur after the change of law in July 2018?

                Let's take a closer look at the graph in the top right corner.

                We can see that there was indeed a small decrease in the number of casualty killed, but at the end of the year, there were more injured than in 2017.
                
                More information here:
                <a href='https://www.bbc.com/news/world-europe-46822472'>English article</a>, <a href='https://www.capital.fr/economie-politique/gilets-jaunes-le-pourcentage-de-radars-vandalises-a-encore-bondi-en-2019-1329771'>French article</a>
            </p>
            <div className="killed-month-17-18">
                <Killed1718Month/>
            </div>
            <p>
                The graph represents the total number of injured men and women for the years 2017 and 2018.

                There is no significant difference between each gender, but it can clearly be seen that there is a higher number of injured males than females.
            </p>
            <div className="male-female-month">
                <CasualityMaleFemale1718/>
            </div>
            <p>
                From the graph below, we can see that there has been a large decrease in the number of slightly injured.
            </p>
            <div className="casuality-injury">
                <CasualityInjury/>
            </div>
        </div>
    )
}

export default Comparison;