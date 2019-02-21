//newpet.scores versus pets.js[0].scores

var surveyScores = newpet.scores;
var petSCores = pets.js[0].scores;
//holds the result of the array comparisons
var compareArray = []

for (var i=0; i <10; i++){
    var petSCores = pets.js[i].scores;
    for (var j=0; j <10; j++){
        //subtract Object scores from NewPet
        x = Math.abs(surveyScore[j] - petScores[j]);
        compareArray.push(x);
        
    }
}

