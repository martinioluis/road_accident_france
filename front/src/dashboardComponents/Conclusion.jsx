import React from 'react';

const Conclusion = () => {
    return (
        <div className='Conclusion'>
            <h2>Conclusion</h2>
            <p>
                We briefly saw what we could do with the data in responding to the problem:
                Did the reduction in the speed limit have a positive impact on road accidents in France?

                The short term answer is yes because there were about 100 fewer fatal road accidents compared to 2017.

                However it would be better to see this in the long term but data in 2019 are not available.

                In addition, the movement of yellow jackets and the covid had a significant impact on road accidents, which considerably reduced them.
            </p>

            <h2>What next ?</h2>
            <p>This is an overview of what we can do with road accident data.<br/>

                We can address many other issues, such as:<br/>



                - Which months have higher frequency of accidents? <br/>

                - What was the age distribution of the people involved?<br/>

                - Did use of safety equipment impact condition of people after the accident?<br/>

                - Establish predictive models to predict potential accidents <br/>

                - Create an interactive map showing the number of accidents per department (choropleth map)<br/>

                - What is the most recurring impact in an accident (front, back, side of the car) ?<br/>



                This type of response can be very useful for insurance companies, car manufacturers or even for the government.</p>
        </div>
    )
}

export default Conclusion;