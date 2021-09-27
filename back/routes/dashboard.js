"use strict";

const express = require('express'),
    router = express.Router();

const {BigQuery} = require('@google-cloud/bigquery');

const bigquery = new BigQuery({
    projectId: 'my-project-34577',
    keyFilename: './../../cle_api_road_france/my_project_34577-074cb2ba3aca.json'
});

// metropolitan only accident by years
const query1 = `SELECT *
FROM road_accident_france.metropolitan_only_accident_nb_by_year
`;

router.get('/', (req, res, next) => {
    bigquery.query(query1, function(err, rows) {
        if (!err) {
            return res.json(rows);
        } else {
            console.log(err)
        }
    });
});

// weather conditions data for pie chart
const query2 = `
SELECT weather_conditions, COUNT(weather_conditions) as weather_conditions_count
FROM road_accident_france.summary_table_2017
WHERE weather_conditions IS NOT NULL
GROUP BY weather_conditions
`
router.get('/weather', (req, res, next) => {
    bigquery.query(query2, function(err, rows) {
        if (!err) {
            return res.json(rows);
        } else {
            console.log(err)
        }
    });
});

// killed data by months
const query3 = `
SELECT month, SUM(casualty_severity_killed) as killed_nb
FROM road_accident_france.summary_table_2017
WHERE road_category = 'Departmental Road' OR road_category = 'National Road'
GROUP BY month
ORDER BY month ASC
`

router.get('/killed', (req, res, next) => {
    bigquery.query(query3, (err, rows) => {
        if(!err) {
            return res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// data recovery for the map
const query4 = `
SELECT Num_Acc, latitude, longitude, vehicles_nb, casuality_female, casuality_male, casualty_severity_killed, weather_conditions, CONCAT(day, '/' , month, '/' , year) as date
FROM road_accident_france.summary_table_2017
WHERE (road_category = 'National Road' OR road_category = 'Departmental Road') AND casualty_severity_killed >= 1 AND (latitude IS NOT NULL OR longitude IS NOT NULL)
`

router.get('/killed-map', (req, res, next) => {
    bigquery.query(query4, (err, rows) => {
        if(!err) {
            return res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// accident number in 2018
const query5= `
SELECT COUNT(Num_Acc) as nb_accident
FROM road_accident_france.summary_table_2018
WHERE road_category = 'National Road' OR road_category = 'Departmental Road'
`

router.get('/accident-2018', (req, res, next) => {
    bigquery.query(query5, (err, rows) => {
        if(!err) {
            return res.json(rows);
        } else {
            console.log(err);
        }
    })
});

// number killed 2018
const query6 = `
SELECT SUM(casualty_severity_killed) as killed
FROM road_accident_france.summary_table_2018
WHERE road_category = 'National Road' OR road_category = 'Departmental Road'
`

router.get('/killed-2018', (req, res, next) => {
    bigquery.query(query6, (err, rows) => {
        if(!err) {
            return res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// accident number in 2017
const query7= `
SELECT COUNT(Num_Acc) as nb_accident
FROM road_accident_france.summary_table_2017
WHERE road_category = 'National Road' OR road_category = 'Departmental Road'
`

router.get('/accident-2017', (req, res, next) => {
    bigquery.query(query7, (err, rows) => {
        if(!err) {
            return res.json(rows);
        } else {
            console.log(err);
        }
    })
});

// number killed 2017
const query8 = `
SELECT SUM(casualty_severity_killed) as killed
FROM road_accident_france.summary_table_2017
WHERE road_category = 'National Road' OR road_category = 'Departmental Road'
`

router.get('/killed-2017', (req, res, next) => {
    bigquery.query(query8, (err, rows) => {
        if(!err) {
            return res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// number killed 2017 by month
const query9 = `
SELECT month, SUM(casualty_severity_killed) as killed
FROM road_accident_france.summary_table_2017
WHERE road_category = 'National Road' OR road_category = 'Departmental Road'
GROUP BY month
ORDER BY month
`
router.get('/killed-2017-month', (req, res, next) => {
    bigquery.query(query9, (err, rows) => {
        if(!err) {
            return res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// number killed 2018 by month
const query10 = `
SELECT month, SUM(casualty_severity_killed) as killed
FROM road_accident_france.summary_table_2018
WHERE road_category = 'National Road' OR road_category = 'Departmental Road'
GROUP BY month
ORDER BY month
`
router.get('/killed-2018-month', (req, res, next) => {
    bigquery.query(query10, (err, rows) => {
        if(!err) {
            return res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// casualty male 2017
const query11 = `
SELECT month, SUM(casuality_male) as vehicles
FROM road_accident_france.summary_table_2017
WHERE road_category = 'National Road' OR road_category = 'Departmental Road'
GROUP BY month
ORDER BY month
`

router.get('/male-2017-month', (req, res, next) => {
    bigquery.query(query11, (err, rows) => {
        if(!err) {
            return res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// casuality male and female by month 2017
const query12 = `
SELECT month, SUM(casuality_male) as casuality_male, SUM(casuality_female) as casuality_female
FROM road_accident_france.summary_table_2017
WHERE road_category = 'National Road' OR road_category = 'Departmental Road'
GROUP BY month
ORDER BY month
`

router.get('/male-female-month-17', (req, res, next) => {
    bigquery.query(query12, (err, rows) => {
        if(!err) {
            return res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// casuality male and female by month 2018
const query13 = `
SELECT month, SUM(casuality_male) as casuality_male, SUM(casuality_female) as casuality_female
FROM road_accident_france.summary_table_2018
WHERE road_category = 'National Road' OR road_category = 'Departmental Road'
GROUP BY month
ORDER BY month
`

router.get('/male-female-month-18', (req, res, next) => {
    bigquery.query(query13, (err, rows) => {
        if(!err) {
            return res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// casuality minor injury 2017
const query14 = `
SELECT month, SUM(casualty_severity_minor_injury) as minor
FROM road_accident_france.summary_table_2017
WHERE road_category = 'National Road' OR road_category = 'Departmental Road'
GROUP BY month
ORDER BY month
`
router.get('/casuality-injury-17', (req, res, next) => {
    bigquery.query(query14, (err, rows) => {
        if(!err) {
            return res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// casuality minor injury 2018
const query15 = `
SELECT month, SUM(casualty_severity_minor_injury) as minor
FROM road_accident_france.summary_table_2018
WHERE road_category = 'National Road' OR road_category = 'Departmental Road'
GROUP BY month
ORDER BY month
`
router.get('/casuality-injury-18', (req, res, next) => {
    bigquery.query(query15, (err, rows) => {
        if(!err) {
            return res.json(rows);
        } else {
            console.log(err);
        }
    });
});

module.exports = router;