/**
 * Created by Mr.HADES on 24/01/2018.
 * Be The Best Version Of Yourself >_<
 */


/* global variables */

var notes = 2;
/*________________________*/


/*--------------- Start age calecator function --------------------  */
function testing() {
    "use strict";
    var testAge = document.getElementById("year").value,
     month = document.getElementById("month").value,
     day = document.getElementById("day").value,
    getMonth = 12  - month,
     getDay = 31 - day,
     birthDay = testAge,
        today = 2018,
        age = today - birthDay, //2018-2020=-2
    ageDays = age * 360,
    ageHours = ageDays * 24,
    ageMinutes = ageHours * 60,
    ageSeconds = ageMinutes * 60,
    ageMilliSecondes=ageSeconds*1000;

    if(testAge > 2018 || month > 12 || day > 31 || testAge < 0 || month < 0 || day < 0 || testAge <= 1900){
        document.getElementById("p1").innerHTML = ("no data appears.! <br> <strong>Make Sure</strong> you input correct birthday ^^");
        document.getElementById("p2").innerHTML=("");
    }else if (age >=1 && age <= 100) {
        document.getElementById("p1").innerHTML =
            ("your age is " + age + "<br>" + "You have lived " + ageDays + " days" +
                "<br>You have lived " + ageHours + " Hours" +
                "<br>You have lived " + ageMinutes + " Minutes" +
                "<br>You have lived " + ageSeconds + " Seconds" +
                "<br>You have lived " + ageMilliSecondes + " MilliSecondes <hr>"+
                 "Your birthday after "+getMonth +" months and " +getDay+"  Days"
            );
        document.getElementById("p2").innerHTML = ("Welcome to my simple website <br> Say Alhamdulilah because you still alive ^^");
    }
}

/*--------------- Start age calecator function --------------------  */



/*--------------- Start clear HTML element function --------------------  */
function clearElement() {
    document.getElementById("p1").innerHTML=("");
    document.getElementById("p2").innerHTML=("");
    document.getElementById("year").value=("");
    document.getElementById("month").value=("");
    document.getElementById("day").value=("");
}

function clearElement2() {
    document.getElementById("dis_1").innerHTML=("");
    document.getElementById("dis_val").value=("");
    document.getElementById("dis_2").innerHTML=("");
    document.getElementById("notes").innerHTML = ("");
}

function clearElement3() {
    document.getElementById("sw_3").innerHTML=("");
    document.getElementById("select_val").value=("0");
    document.getElementById("sw_2").innerHTML=("");
    document.getElementById("sw_1").innerHTML = ("");
}
/*--------------- Start clear HTML element function --------------------  */


/* ----------- Start discount System Function ------------------*/

function discount() {
    "use strict";
    var price=850,newPrice,safeMoney;
   // var disValue=prompt("Please type discount value,example : 25");
    var disValue=document.getElementById("dis_val").value;
    safeMoney=price*disValue/100; // safe money
    newPrice=price-safeMoney;  // new price

    if(disValue==""){
        document.getElementById("dis_2").innerHTML = ("Sorry,you must insert a value.!");
        document.getElementById("dis_1").innerHTML = ("");
        document.getElementById("notes").innerHTML = (-- notes);

    }else if(disValue>=80){
        document.getElementById("dis_2").innerHTML = ("Sorry,you're very stingy, need high discount :) ");
        document.getElementById("dis_1").innerHTML = ("");
        document.getElementById("notes").innerHTML = (-- notes);

    } else if (disValue ==0 || disValue <0){
    document.getElementById("dis_2").innerHTML = ("You wanna tell me you have much money.>_<");
    document.getElementById("notes").innerHTML = (-- notes);
    } else if (disValue>=1 || disValue<80){
        document.getElementById("dis_1").innerHTML =
            ("Iphone X = "+price +"$<br> New Price = " + newPrice + " $");
        document.getElementById("dis_2").innerHTML = ("You Got Discount  "+disValue +" % <br>" +"You saved money "
        +safeMoney +" $");
        document.getElementById("notes").innerHTML = (notes);
    } else {
        alert("Sorry,you typed incorrect value , Try again ")
        clearElement2();
    }
}

/* ----------- End discount System Function ------------------*/


function swCase(){
    "use strict";
    var seasonVal=document.getElementById("select_val").value;

    switch (seasonVal){
        case "1":
            document.getElementById("sw_3").innerHTML = ("it's an awesome season to have fun<br><strong>" +
            "Recomendation Places :</strong> France,Mali,Siwss <br>" +
            "we wish you happy vecation ");
            document.getElementById("sw_1").innerHTML = ("you select : Sprint Season.");
            document.getElementById("sw_2").innerHTML = (++notes);
            break;
        case "2":
            document.getElementById("sw_3").innerHTML = ("it's too cool season so you should stay at home ^^<br><strong>" +
            "Recomendation Places :</strong> Your home with hot coffee<br>" +
            "Take care of yourself,man ");
            document.getElementById("sw_1").innerHTML = ("you select : winter Season.");
            document.getElementById("sw_2").innerHTML = (++notes);
            break;
        case "3":
            document.getElementById("sw_3").innerHTML = ("wow,romantic season ^^<br><strong>" +
            "Recomendation Places :</strong> whereever you go ,but you should have BF/GF to feel better *_^ <br>" +
            "Be Romantic all the time ");
            document.getElementById("sw_1").innerHTML = ("you select : Fall Season.");
            document.getElementById("sw_2").innerHTML = (++notes);
            break;
        case "4":
            document.getElementById("sw_3").innerHTML = ("Yaaaaaaa thats kul^^<br><strong>" +
            "Recomendation Places :</strong> black sea to value your shit life ,LOL <br>" +
            "Stay away of the sea ");
            document.getElementById("sw_1").innerHTML = ("you select : Summer Season.");
            document.getElementById("sw_2").innerHTML = (++notes);
            break;
        default:
            document.getElementById("sw_3").innerHTML = ("Are youa an idiot or what !<br><strong>" +
            "At least select one of th fucking season,man</strong>");
            document.getElementById("sw_2").innerHTML = (notes);
            break;
    }
}


/* Money converer  */

function moneyConvert() {
    "use strict";
    var moneyVal=document.getElementById("money").value;
    var currency=document.getElementById("currency").value;
    var result=moneyVal*currency;
   // result.toFixed(2);

    if(moneyVal=="0"){
        document.getElementById("result").innerHTML=" You must be kidding me,Get out of my face Zero Always eqauls Zero.!";
    }else if(moneyVal<0){
        document.getElementById("result").innerHTML="  I think you're idiot, it's incorrect value.!";
    } else if(moneyVal==""){
    document.getElementById("result").innerHTML=" 1 $ equals 460 YR || 1 RS equals 115 YR ";
    }else if(moneyVal>=5000){
        document.getElementById("result").innerHTML="  "+moneyVal+"  equals " + result + " YR. <strong>I'm sure you have no 1 dollar ,LOL</strong>";
    }
    else {
        document.getElementById("result").innerHTML="  "+moneyVal+"  equals " + result + " YR.";
    }

}









/*---------------- Simlpe Task |Arrays by JS */

//var show_date2=new Date();
  //  document.getElementById('show_date').innerHTML=show_date2.toLocaleString();
var allFriends=[
    "hades", "alex","robot","ahmed","agoma","zain","doosar","asmaa","alyat","raleux","malik","test","array"
    ];

 //   document.getElementById("all").innerHTML=allFriends  + "  | All Friends = " + allFriends.length;
        console.log(allFriends);
function advanceTool() {
    "use strict";
    var selectValue=document.getElementById("all2").value;
    switch (selectValue){
        case "1":
            document.getElementById("all").innerHTML="Here are my all friends : <br>"+allFriends.join(" || ");
            break;
        case "2":
            document.getElementById("all").innerHTML="I've just have "+ allFriends.length + " friends :)";
            break;

        case "3":
            document.getElementById("all").innerHTML="Alas..! I've no best friends ...";
            break;

        case "4":
            document.getElementById("all").innerHTML="All friends have disappeared ^^";
            break;

        default:
            document.getElementById("all").innerHTML=(" you have no selecet anyone..! ");
            break;
    }
}

function addFirend() {
    "use strict";
    var newFrnd=document.getElementById("add").value.toLowerCase();
    if(newFrnd==""){
        document.getElementById("all").innerHTML=("<span class='alert alert-danger'>you didn't type anything..! ^_* </span><br> <br>  ");
    }else if(newFrnd.length>=10){
        document.getElementById("all").innerHTML=("<span class='alert alert-warning'>sorry,it's long name,Try again :( </span> <br> <br> ");
    }else{
        allFriends.push(newFrnd);
        document.getElementById("all").innerHTML=("<span class='alert alert-success'>New Friend has been added succesfully </span> <br> <br>");
        newFrnd=document.getElementById("add").value="";
    }
}


function autoSearch() {
    var srchValue=document.getElementById("srch").value.toLowerCase(),
        long=srchValue.length,
        srchValue=allFriends.indexOf(srchValue);

    //srchValue.toLowerCase();

   if(srchValue>=0){
        document.getElementById("all").innerHTML=("<span class='text text-success'>name found </span>  " + "<p class='label label-info'>"+allFriends[srchValue])+"</p>" ;
    }else if(long>=10){
       document.getElementById("all").innerHTML=("<span class='text text-danger'>Sorry,There no long name like that in our DB</span>  ");
    }else if(srchValue==""){
        document.getElementById("all").innerHTML=("");
    }else {
       document.getElementById("all").innerHTML=("<span class='text text-warning'>Keep typing..</span>  ");
   }

}


/* #46 Advanced For Loop */

    function generateDates() {
        var year_val1=document.getElementById("start_val").value,
            year_val2=document.getElementById("end_val").value,
            years;

        for (years=year_val1;years<=year_val2;years++){
          document.getElementById("year_show").innerHTML=years+"<br>";
           // console.log(years);
        }
    }




/*------------------ my complete validation ---------------------*/

function pswChecker() {
    "use strict";
    var pswVal=document.getElementById("psw").value;

    if(pswVal===null || pswVal===""){
        document.getElementById("psw_notes").innerHTML=("<span class='text text-danger'><i class='fa fa-close fa-2x'></i> Not allowed empty value</span>  ")
    }else if(pswVal.length>=8){
        document.getElementById("psw_notes").innerHTML=("<span class='text text-success btn-sm'><i class='fa fa-check-circle fa-2x'></i></span>  ")
    }
    else{
        document.getElementById("psw_notes").innerHTML=("<span class='text text-danger'><i class='fa fa-close fa-2x'></i> Sorry! it's short password </span>  ")
    }
}

function name_check() {
    "use strict";
    var nameVal=document.getElementById("full_name").value;

    if(nameVal===null || nameVal===""){
        document.getElementById("full_name_notes").innerHTML=("<span class='text text-danger'><i class='fa fa-close fa-2x'></i> Not allowed empty value</span>  ")
    }
    else{
        document.getElementById("full_name_notes").innerHTML=("<span class='text text-success btn-sm'><i class='fa fa-check-circle fa-2x'></i></span>  ")
    }
}


/*****************************************End Validation function ------------------------------*/



function numberConv() {
    var myNumber =document.getElementById("numValues").value,
    newNumber=parseInt(myNumber);
if(myNumber.length>20){
    document.getElementById("num_show").innerHTML ="<div class='text-center'><span class='label label-danger  btn-lg'>sorry, it's too long number..! </span></div>";
}else {


     document.getElementById("num_show").innerHTML ="Decimal System : <span class='label label-success'>"+ newNumber.toString(16)+" </span> <br>" +
         "Hexadecimal System : <span class='label label-warning'>"+ newNumber.toString(16)+" </span> <br>" +
         "Octal System : <span class='label label-primary'>"+ newNumber.toString(8)+" </span> <br>" +
         "Binary System : <span class='label label-danger'>"+ newNumber.toString(2)+" </span> <br>" ;
}
}


/**------------------ End of my complete validation ---------------------


End javascript course at 6 days ,4 hours per day :)

Done by Mr.Hades :)
1/2/2018 12:13 AM

*/


