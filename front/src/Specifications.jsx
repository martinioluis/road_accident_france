import React from 'react';
import './Specifications.scss';

const Specifications = () => {
    const steps = [
        '- Retrieve files from the source website',
        '- Convert csv files to tsv files',
        '- Processing data (read data, replace data, merge data, rename header, normalize data, convert certain data, create new column, create new data file, view data map on sample)',
        '- Load to Bigquery/MongoDB',
        '- Data automation with Airflow',
        '- Data visualization',

    ]
    return (
        <div className="specifications">
            <h1>Technical specifications</h1>
            <p>The main steps of data processing in Python:</p>
            <p className="steps">
                {steps.map(step => <span>{step}</span>)}
            </p>
            <p>
                Python module used: time, pandas, tqdm, multiprocessing, os, csv, folium, numpy, re, ssl
            </p>
            <p>To see the Python scripts click <a href="https://github.com/TPeubey/road_accident_france">here</a>.</p>
        </div>
    )
}

export default Specifications;