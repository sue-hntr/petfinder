//newpet.scores versus pets.js[0].scores
var surveyScores = newpet.scores;
var petSCores = pets.js[0].scores;
//holds the result of the array comparisons
var compareArray = [];
var savArrayCompare = [];
var petfriends = pets.length;
var counter = 0;

//--//DO THIS FOR EACH ITEM IN PETS.JS
while (counter < petfriends -1 ){
    // a SELECT SCORES IN NEWPET
    // b GO TO NEXT ITEM IN PETS.LENGTH, GET THE SCORES
    // c COMPARE ARRAYS()
    // d PUSH RESULT INTO SAVE ARRAY COMPARE
    // e REPEAT FOR ALL PET.JS ITEMS

    // f SELECT THE LOWEST VALUE IN SAVE ARRAY FINAL (displayFinal())
    // g DISPLAY MODAL SHOWING INFO FROM LOWEST VALUE
    

}



//--//DO THIS FOR EACH ITEM IN EACH SCORES ARRAY FOR ALL PETS.LENGTH EXCEPT LAST
function compareArrays(){
    for (var j=0; j <10; j++){
//SUBTRACT EACH VALUE OF SCORE ARRAY B (ITEM [i] in pets.js) FROM SCORE ARRAY A (NEWPET)
        x = Math.abs(surveyScore[j] - petScores[j]);
//PUSH RESULT INTO AN ARRAY (compareArray)
        compareArray.push(x);
    }
    console.log("compareArray: " + compareArray);
    addup(compareArray);
}

//--// DO THIS ONCE FOR EACH ITEM IN PETS.LENGTH
function addup(){    
//ADD up all values in the compareArray
    var sumCompare = compareArray.reduce(add);
    //this function helps the .reduce() method
        function add(accumulator, a) {
            return accumulator + a;
        }
    console.log("sumCompare: " + sumCompare);
    savArrayCompare.push(sumCompare);
    displayFinal(savArrayCompare);
}

//--//DO THIS AS FINAL BIT TO DISPLAY MODAL
function displayFinal(savArrayCompare){
    console.log("savArrayCompare: " + savArrayCompare);
//SEARCH THROUGH SAV ARRAYCOMPARE TO FIND THE LOWEST SCORE BY RUNNING A LOOP searchin for lowest value startin at 0
    for (var k = 0; k < 25; k++){
        var arraySpot = savArrayCompare[k];
        if (arraySpot === k){
            console.log("The closest petfriend is " + k);
        }
    }
/////////FIX THIS


//AND MARK ITS LOCATION IN PETS.LENGTH




//this will give local of lowest in array
    var finalfriend = savArrayCompare.indexOf();    


}


//find the last item in the pets.js array (this will be last added)
//pull the "scores" array from there
//loop through the .length of the pets.js array of objects to do comparison 


//SUBTRACT EACH VALUE OF SCORE ARRAY B (ITEM [i] in pets.js) FROM SCORE ARRAY A (NEWPET)
//PUSH RESULT INTO AN ARRAY (compareArray)
//ADD up all values in the compareArray
//push result into an array (savArrayCompare)

//Do not compare New Pet against the last item in Pets.js