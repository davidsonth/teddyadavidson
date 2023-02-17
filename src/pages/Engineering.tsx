import React from 'react';
import './Pages.css'
import './download.pdf'

const downloadTxtFile = () => {
    fetch('./download.pdf')
			.then(response => {
				response.blob().then(blob => {
					let url = window.URL.createObjectURL(blob);
					let a = document.createElement('a');
					a.href = url;
					a.download = 'download.pdf';
					a.click();
                })
            });
}

const Engineering = () => {
    return (
    <div>
        <h1 className='title'>Engineering Projects</h1>
        <h3 className='body'>I have worked on several electrical and computer engineering projects that were personal, professional, and academic</h3>
        <br />
        <h3 className='body'>
            The first of my engineering projects is form my freshman year Cornerstone of Engineering course in which we were instructed to 
            create an interactive museum exhibit that demonstrated a scientific property. This class included engineeers from every major, but most of our groups
            were involved with either electrical or computer engineering, so we decided that the scientific property we would demonstrate were Ohm's laws. 
            Our idea to demonstrate Ohm's law in an interactive way was to create a large table with moveable components that would reflect circuit laws based on which components
            were in the circuit.

            Our project consisted of two layers: The lower layer of the project contained wiring for the arduino microcontroller, and connected to the conductive plates that served
            as the landing point for the moveable components. This way, when components were placed, it would complete the circuit so that the arduino is able to calculate the 
            expected light values for any LED component or expected speed values for any motor component
            
            The techincal report for this project can be found here.
        </h3>
        <button id="downloadTechReport" onClick={downloadTxtFile} value="download">
            Technical Report
        </button>
    </div>
    );
}
export default Engineering;