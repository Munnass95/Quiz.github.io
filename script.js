var crct = 0;

if (bool){
for(var i =0; i<qNum;i++){
	var j = 0 ;
	var answer = prompt(arr[ran[i]][j]+"\n" +arr[ran[i]][j+1]+"\n"+arr[ran[i]][j+2]+"\n"+arr[ran[i]][j+3]+"\n" );

if(answer.toLowerCase() == correct[ran[i]].toLowerCase()){
	crct++ ;
	document.getElementById('cor').innerHTML += arr[ran[i]][0]+"<br/>"+"You Guessed: "+answer+"<br/>"+"CORRECT"+"<br/><br/>" ;
}
else{
	document.getElementById('cor').innerHTML += arr[ran[i]][0]+"<br/>"+"You Guessed: "+answer+"<br/>"+"INCORRECT"+"<br/><br/>" ;
}
}
var percntg = (crct * 100 ) / qNum ;
document.getElementById('percentage').innerHTML = "You Got "+crct+" answers corrected from "+qNum+" Questions "+"("+ percntg+")%";
}
else {
for(var i =0; i<5;i++){
	var j = 0 ;
	var answer = prompt(arr[ran[i]][j]+"\n" +arr[ran[i]][j+1]+"\n"+arr[ran[i]][j+2]+"\n"+arr[ran[i]][j+3]+"\n" );

if(answer.toLowerCase() == correct[ran[i]].toLowerCase()){
	crct++ ;
	document.getElementById('cor').innerHTML += arr[ran[i]][0]+"<br/>"+"You Guessed: "+answer+"<br/>"+"CORRECT"+"<br/><br/>" ;
}
else{
	document.getElementById('cor').innerHTML += arr[ran[i]][0]+"<br/>"+"You Guessed: "+answer+"<br/>"+"INCORRECT"+"<br/><br/>" ;
}
}
var percntg = (crct * 100 ) / 5 ;
document.getElementById('percentage').innerHTML = "You answered "+crct+" out of  "+5+" Questions Correctly "+"("+ percntg+")%";

}
