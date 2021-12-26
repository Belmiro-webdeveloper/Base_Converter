function reset(){
     document.getElementById("screen").innerHTML="0";
}
var base2 = {"0":0,"1":1,"10":2,"11":3,"100":4,"101":5,"110":6,"111":7,"1000":8,"1001":9,"1010":'A',"1011":'B',"1100":'C',"1101":'D',"1110":'E',"1111":'F'};


function convert(){
    let from = document.getElementById("base_from").value;
    let to = document.getElementById("base_to").value;
    let screen =  document.getElementById("screen").textContent;
let arr1=[];
let arr = screen.split('');
    if(from=="Base 2" && to =="Base 8"){
        let check3 = validate(screen,from);
        if(check3==true){
        let check = arr.length;
        while(check>3){
            let temp = "";
            let  n  = arr.length;
            let n1 = arr.length-3;
            for (let i=n1; i<n;i++){

                temp = temp + arr[i];

            }
            temp = parseInt(temp);
            arr1.push(base2[temp]);
            for (let i=n1; i<n;i++){
               arr.pop();
            }
            check =  arr.length;

        }
        
        let temp ="";
       
        for(let i=0; i<arr.length; i++){
            temp = temp + arr[i];
        }
        arr1.push(base2[temp]);
        print(arr1,screen,from,to);

    }
    else{
        alert("Invalid number "+ screen +" in " + from);
    }
    }
    else if(to === from){
        let check3 = validate(screen,from); //check if the submitted number is valid first
        if(check3==true){
            alert(screen + " in "+ from +" is " + screen + " in " + to); // alert the results to user
            document.getElementById("screen").innerHTML = screen; //display the results on screen

        }
        else{
            alert("Invalid number "+ screen +" in " + from); //alert this if submitted number is invalid in specified base
        }

      
    }
    else if(from=="Base 2" && to =="Base 16"){
        hex();
    }

    else{
        alert("Your conversion from "+ from +" to "+ to+" is not supported yet") ;
    }



}
function print(arr1,screen,from,to){
    let result = "";
    let n = arr1.length-1;
   for(let i=n; i>=0;i--){
       result = result + arr1[i];
   }
   alert(screen + " in "+ from +" is " + result + " in " + to);
   document.getElementById("screen").innerHTML = result;
  

}



function number(value1){
    let screen =  document.getElementById("screen").textContent;
if(screen !=0){
    screen = screen+value1;
    document.getElementById("screen").innerHTML = screen;
}
else{
    document.getElementById("screen").innerHTML = value1;
}
}

function validate(value1,base){

    let check1 =0;
    let check =0;

    var letters = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

    for(let i=0; i<value1.length;i++){
        check1 =0;
        let n = parseInt(base[base.length-1]);
        for(let  j=0; j<n;j++){
            if(value1[i] == letters[j]){
                check1 =1;
               
            }
        }
        if(check1==0){
            check =1;
        }
        
       
    }
    if(check==1){
        return false;
    }
    else{
        return true;
    }
    



}


//This is a function to convert from base 2 to base 16 since one number in base 16 is represented by 4 digits in base 2

function hex(){
    let from = document.getElementById("base_from").value;
    let to = document.getElementById("base_to").value;
    let screen =  document.getElementById("screen").textContent;
    let arr1=[];
let arr = screen.split('');
let check3 = validate(screen,from);
//This works the same way with converting Binary to octal(base 2 to base 8)
if(check3==true){
    let check = arr.length;
    while(check>4){
        let temp = "";
        let  n  = arr.length;
        let n1 = arr.length-4;
        for (let i=n1; i<n;i++){

            temp = temp + arr[i];

        }
        temp = parseInt(temp);
        arr1.push(base2[temp]);
        for (let i=n1; i<n;i++){
           arr.pop();
        }
        check =  arr.length;

    }
    let temp ="";
   
    for(let i=0; i<arr.length; i++){
        temp = temp + arr[i];
    }
    arr1.push(base2[temp]);
    print(arr1,screen,from,to);

}
else{
    alert("Invalid number "+ screen +" in " + from); //alert this if submitted number is invalid in specified base
}



}