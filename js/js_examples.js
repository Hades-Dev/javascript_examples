/**
 * Created by Mr.HADES on 02/02/2018.
 */

//$(document).ready(setInterval(showTime,500));

/* global variables */

/** Disabled right click ony mypage */

document.addEventListener('contextmenu',function (e) {
    'use strict';
    e.preventDefault();
});




// auto hide placeholder on input typying

    function hidePlaceholder(status) {

    var myInput=document.getElementById('input_txt'),status;

    myInput.onclick=function () {
        'use strict';
        this.setAttribute('svae-placeholder', this.getAttribute('placeholder'));
        this.setAttribute('placeholder','');
   };

    myInput.onblur=function () {
        'use strict';
        this.setAttribute('placeholder', this.getAttribute('svae-placeholder'));
        this.setAttribute('svae-placeholder','');
   };

}

function autoType() {
   var name=document.getElementById('input_txt').value;
   document.getElementById('run_code').innerHTML=name;
   // console.log(name);
}

// call functions when page loaded //
window.onload=(function () {
    typeWriter();
})


//console.log(newDate);
//document.getElementById('type3').innerHTML=newDate;
// call functions when page loaded 'another method'//

document.addEventListener("DOMContentLoaded",function () {
  //  typeWriter();
});
/* auto writer fucntion */



function typeWriter2() {
    var txtVal=document.getElementById('txt_w').value;
    i=0;
    if (txtVal==="") {
        document.getElementById('type2').innerHTML='Sorry! you must type sth';
    }else {
        document.getElementById('type2').innerHTML='';
        var typeWriter=setInterval(function () {
            document.getElementById('type2').textContent+=txtVal[i];
            i++;
            if(i>txtVal.length-1 || txtVal==="") {
                clearInterval(typeWriter);
                txtVal = document.getElementById('txt_w').value = "";
            }
        },100)
    }
}


function typeWriter() {
    var  myText="Wecome to my simple website.please feel free to contact me at anytime ^^",typeWriter;
    i=0;
    document.getElementById('type2').innerHTML='';
    typeWriter=setInterval(function () {

        document.getElementById('type2').textContent+=myText[i];
        i++;
        if(i>myText.length-1){
            clearInterval(typeWriter);
        }
    },150)
};



/** --------- Show/ Hide Password */

    var getPsw=document.getElementById('psw'),
    show_btn=document.getElementById('show_psw');

    show_btn.onclick=function () {
        'use strict';
        if(this.textContent==='Show'){
            getPsw.setAttribute('type','text');
            this.textContent='Hide';
           this.setAttribute('class','fa fa-eye-slash fa-1x btn btn-info btn-xs');
         //   this.class="fa fa-eye-slash";
        }else{
            getPsw.setAttribute('type','password');
            this.textContent='Show';
          this.setAttribute('class','fa fa-eye fa-1x btn btn-info btn-xs');
        }
    };


/** ---------End Show/ Hide Password */







/** --------- Go Up button */
var goUpBtn=document.getElementById('goup');
window.onscroll=function () {
    if(window.pageYOffset>=50){
       goUpBtn.style.display='block';
    }else{
        goUpBtn.style.display='none';
    }
};

/** run a code when butto was clicked */
goUpBtn.onclick=function () {
  window.scrollTo(0,0);
};

/*
godown.onclick=function () {
    window.scrollTo(50,600);
};
*/
/** ---------End Go Up button */

/*
function showTime() {
    'use strict';

    var fullTime=new Date().toLocaleString(),
        days=new Date().getDay(),
       // mili=new Date().getMilliseconds(),
        daysList=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    document.getElementById('type3').textContent=daysList[days]+' '+fullTime;
    console.log(days);
};
*/
/*

//  ----------- visitor timer  -------------
var f_now=new Date(),
    f_min=f_now.getMinutes(),f_second=f_now.getSeconds();
function stayTimer() {
    'use strict';
    var now=new Date(),
        min=now.getMinutes(),second=now.getSeconds();
    document.getElementById('timer').textContent='youve stayed here from:'+f_min+':'+f_second+ ' To :' + +min +':'+second /*+' Total Time :'+ min - f_min +':' + second -f_second *;

   document.getElementById('timer').textContent='youve stayed here :' +milisec +min+hour+second;
};


window.onload=function () {
    'use strict';
    setInterval(stayTimer,100);
};

*/

/** Random page style

var styleList=["class-one","class-tow","class-three","class-four","class-five","class-six"],randomkey;

randomkey=Math.floor(Math.random()*styleList.length);
document.body.setAttribute('class',styleList[randomkey]);
console.log(randomkey);


 */


//---------------- charecter counter like twitter ----------------------
    function counterChar() {
    'use strict';
    var  txtCount=document.getElementById('txt_area').value;
        document.getElementById('count').textContent='  '+txtCount.length+' of 150';
        if(txtCount.length>150){
          count.setAttribute('class','fa fa-warning fa-1x text-danger');
            document.getElementById('count').innerHTML="<span class='text text-danger btn-sm'>Used Max limit  of 150 </span>";
        }else{
            document.getElementById('count').textContent='  '+txtCount.length+' of 150';
            count.setAttribute('class','fa fa-comment fa-1x text-info');
        }
}



var secondes=200,
    countDiv=document.getElementById('timer_donwn'),
    secondPass,
    countDown=setInterval(function () {
        'use stricts';
        secondPass();

    },1000);

    function secondPass() {
        'use stricts';
        var mintutes=Math.floor(secondes/60),
            reSeconds=secondes%60;
        if(mintutes<10 ){
            mintutes='0' + mintutes;
        }
        if(reSeconds<10 ){
            reSeconds="0" +reSeconds;
        }
        countDiv.innerHTML=mintutes+' : ' + reSeconds;
        if(secondes>0){
            secondes=secondes-1;
        }else{
            clearInterval(countDown);
            countDiv.innerHTML="<span class='text text-danger btn-lg'> Time's up :) </span>";
        }
    }



/********** Generator number ------------------------------*/

function generateSerial() {
    'use strict';
    var chars='123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
        serialLenght=21,
        i,
        randomSerial='',
        random_len,
        randomNumber;
    for(i=1;i<serialLenght;i=i+1)
    {
        randomNumber=Math.floor(Math.random()*chars.length);
        randomSerial+=chars.substring(randomNumber,randomNumber +1);
      //  console.log(randomNumber);
        random_len=randomSerial.length;
    }

    document.getElementById('gen_num').innerHTML=randomSerial;
    document.getElementById('serial_length').innerHTML=random_len + ' charecters ';
}



/************ Be The Best Version Of Yourself -----------------------------
 Done by Mr.Hades
7/2/2018 | 3:45 AM

 */