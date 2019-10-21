/**
 * Function to beautifyJSON Ny simply Calling a function
 * @author Biswabijaya Samal
 * @module 'json'
 */


function beautifyJSON(data,outputDivID) {
	document.getElementById(outputDivID).innerHTML = JSON.stringify(data, undefined, 2);
}
