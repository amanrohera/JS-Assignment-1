var sub1=parseInt(prompt("Enter the Subject 1"));
var sub2=parseInt(prompt("Enter the Subject 2"));
var sub3=parseInt(prompt("Enter the Subject 3"));
var sub4=parseInt(prompt("Enter the Subject 4"));
var sub5=parseInt(prompt("Enter the Subject 5"));
function result(su1,su2,su3,su4,su5){
	marks=su1+su2+su3+su4+su5;
	if(marks>70){
		return document.write("You are pass with distinction");
	}
	else if(marks>60){
		return document.write("You are pass with first class");
	}
	else if(marks>50){
		return document.write("You are pass with second class");
	}
	else if(marks>35){
		return document.write("You are pass with average");
	}
	else{
		return document.write("Fail");
	}
}
var c=result(sub1,sub2,sub3,sub4,sub5);
document.write(c);