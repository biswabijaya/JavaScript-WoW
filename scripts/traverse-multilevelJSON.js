/**
 * Function to traverse multilevel
 * @author Biswabijaya Samal
 * @module 'json'
 */

/* Sample Implementation
  var json = [ { "admin": [ { "id": "1000", "name": "Ashok Kumar Sahoo" },{ "id": "1010", "name": "Biswa Bijaya Samal" } ] }, { "staff": [ { "id": "3001", "name": "Jitendra Sachdeva" } ] } ];

	// calling
	multilevelJson(json);
	// or
	multilevelJson(json,3);

	// output
	// see console / inspect
*/

/* Parameters
  json - json object or array object variable
  depth (optional) to go to n level to find data
  i is counter variable used for internal purpose and should be always 0
*/

/*

*/

function multilevelJson(json,depth=5,i=0) {
  var varr;
  for (varr in json){
    var dataType = typeof(json[varr]);
    if (dataType!='object') {
      if (isNaN(varr)) {
        // if you want to traverse or manipulate json data use this block to code your project
				//varr stores key name here
				//json[varr] stores value of key here
        console.log(" ".repeat(i)+varr+':'+json[varr]); //remove this
      } else {
        break;
      }
    } else {
      var length = json[varr].length; // count of number of elements in the array, returns count if array else returns undefined
      if (Number.isInteger(length)) {
        // if you want the array names use this block
				// varr stores array group name here
				// length stores the length of array or count of elements in it
        console.log(" ".repeat(i)+varr+'-'+length); //remove this
      }
      else {
        // if you want the array index use this block
				//varr stores array index here
        console.log(" ".repeat(i)+varr); //remove this
      }
    }

    if (i<depth) {
      multilevelJson(json[varr],depth,(i+1));
    }
  }
}
