function beautifyJSON(data,outputDivID) {
	document.getElementById(outputDivID).innerHTML = JSON.stringify(data, undefined, 2);
}
