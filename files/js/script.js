/* global $*/

//https://stackoverflow.com/questions/11922383/how-can-i-access-and-process-nested-objects-arrays-or-json
//https://stackoverflow.com/questions/983267/how-to-access-the-first-property-of-a-javascript-object


//these two for doneelist page
//name, type, address, contact
var doneeinfo = [
    ['Royal heart', '-',  'Animal shelter', '09 772 301 863'],
    ['Oasic shelter', '-',  'Animal shelter', '-'],
    ['Ananda Myitta', '-', 'Animal shelter', '-'],
    ['Yangon Animal Shelter',  '-', 'Animal shelter', '09 42531 1790'],
    ['Giving life', '-', 'Animal shelter',  '09 254 112 058'],
    ['Individuals',  '-', 'Charity network', '09 261 825 992'],
    ['Yangon-based individuals',  '-', 'Charity network', '09 771 332 701']
];
//css class names for doneelist page
var doneelistclasses = [
    'doneename', 'doneeaddress', 'doneetype', 'doneemobilenum'
];


/*
these for donee profile page
just a dummy
name, type (money or items), start date, end date, donation location, full description, */
var doneeprojects = [
     ['သဘာဝဘေးအန္တရယ်ကူငွေ', 'ငွေကြေး', '၁၂-၈-၂၀၂၁', '၁၈-၈-၂၀၂၁', 'ကြာအင်းဆိပ်', 'ကြာအင်းဆိပ်ကြီးမြို့နယ်အတွင်းမှာရှိတဲ့ သဘာဝဘေးဒဏ်ကြုံခဲ့ရရာ နေရာများမှ တိုင်းရင်းသားပြည်သူ ညီအစ်ကိုမောင်နှမများအတွက် ကပ်ရောဂါဘေး ကာလ သက်သာချောင်ချိရေး လက်ဆောင်မွန်များကို အလှူရှင်များကိုယ်စား ရန်ကုန်အခြေစိုက်ပရဟိတလူငယ်များကွန်ရက်မှ သွားရောက်လှူဒါန်းလိုပါတယ်။'],
    ['စစ်ဘေးရှောင်ကူငွေ', 'ငွေကြေး', '၁၅-၉-၂၀၂၁', '၂၄-၉-၂၀၂၁', 'အမ်းမြို့', 'ရခိုင်ပြည်နယ်အမ်းမြို့ရှိ စစ်ဘေးရှောင်များ ခိုလှုံနေထိုင်ကြသော တဲအိမ်များ ပြီးခဲ့သည့် မုန်တိုင်းအတွင်း ပြိုပျက်ခဲ့ခြင်းကြောင့် ရန်ကုန်အခြေစိုက်ပရဟိတလူငယ်များကွန်ရက်က ခိုလှုံရာတဲအိမ်အသစ်များ ပြန်လည်တည်ဆောက်နိုင်ရေး ထည့်ဝင်ကူညီလိုပါတယ်။'],
    ['ဝေဘာဂီဆေးရုံလှူငွေ', 'ငွေကြေး', '၂၀-၉-၂၀၂၀', '၂၈-၉-၂၀၂၀', 'အင်းစိန်', 'အင်းစိန်ဆေးရုံကြီး ဝေဘာဂီကူးစက်ရောဂါအထူးကု ဆေးရုံကြီးများသို့ ရောဂါကာကွယ်ရေးခေါင်းစီးများ၊ မျက်နှာကာများ၊ အဖျားတိုင်းကိရိယာများ ဝယ်ယူလိုဒါန်းလိုပါသဖြင့် အလှူငွေကောက်ခံလျှက်ရှိပါသည်။'],
];

//css class names for doneeprofile page
//these classes are used as ID for donation page
var doneeprojectclasses = [
    'projname', 'projtype', 'projstart', 'projend', 'projloc', 'projdesc'
];


//address, description
var doneeprofile = [
    ['အလှူခံ၏ လိပ်စာ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur auctor erat, eu sodales orci sagittis vehicula. Fusce id eros sem. Etiam elementum ultricies diam ut vehicula. Quisque volutpat sapien sapien, a bibendum dui elementum nec. Fusce nec ante lacus. Aenean ultricies, arcu eget rutrum vehicula, orci neque feugiat odio, ut faucibus lectus arcu et libero. Nunc non eros sed eros blandit lacinia non id erat. /n Vivamus mattis lectus nulla, gravida tincidunt augue tincidunt et. Mauris ornare est vel enim molestie, suscipit vestibulum arcu rhoncus. Vivamus mi mauris, tincidunt at massa vitae, ullamcorper dictum nunc. Suspendisse velit lorem, ornare at imperdiet a, fermentum eu ligula. Praesent dignissim purus vitae molestie feugiat. Donec nibh est, ultrices sit amet odio nec, pretium tincidunt neque. Nullam sodales dapibus aliquet.']    
];

//to capture the 
var doneeProj = {
    clickedID: ''
}

$(function (){    
    $('#newacc').hover(function(e){
        $('.loginpnl').addClass('hide');
        $('.registerpnl').removeClass('hide');
    });
    
    $('#oldacc').hover(function(e){
        $('.registerpnl').addClass('hide');
        $('.loginpnl').removeClass('hide');
    });
    
    $('.doneeproject').on('click touchend', function(e){
        e.preventDefault();
        var clickedID = e.currentTarget.id;
        
        //regular expression to split num & string
        var x = /([0-9]+)/;
        clickedID = clickedID.split(x);
        clickedID = clickedID.filter(Boolean);
        
        //capture the num value, 
        //which will serve as index for array on donation page.
        clickedID = parseInt(clickedID[clickedID.length - 1]);
        
        doneeProj.clickedID = clickedID;
        console.log(doneeProj.clickedID);
        
        var url = "donation.html";
        window.open(url, '_self');
    });
});

function doneelistpageload(){
    var listpanel;
    var createPanel;
    
    //create rows as per array length.
    for (var i = 0; i < doneeinfo.length; i++){
        listpanel = document.getElementById('doneelist');       //get main div id
        createPanel = document.createElement('div');            //create div
        createPanel.setAttribute('id', 'listpanel' + (i + 2));  //set id
        createPanel.setAttribute('class', 'row listpanel');     //set classes
        listpanel.appendChild(createPanel);                     //Create row
        var doneeRows = document.getElementById('listpanel' + (i+2));
        
        for (var k = 0; k < doneelistclasses.length;k++){
            var z;
            if(k < 1) {
                z = 3;
            } else if (k < 2) {
                z = 5;
            } else {
                z = 2;
            }
        
            //create col div and add class
            var createCol = document.createElement('div');
            createCol.classList.add('col-md-' + z);
            
            //create text div and add class
            var createDIV = document.createElement('div');
            createDIV.classList.add(doneelistclasses[k]);
                
            var words = document.createTextNode(doneeinfo[i][k]);
            createDIV.appendChild(words);
            createCol.appendChild(createDIV);
            doneeRows.appendChild(createCol);
        }  
    }
}

//add d later
function doneeprofilepageload() {
    
    var doneedescription = document.getElementById('doneedescription');
    var doneelocation = document.getElementById('doneelocation');
    var projects = document.getElementById('doneeprojects');
    
    //pass items from doneeprofile array to variables
    var doloc = document.createTextNode(doneeprofile[0][0]);
    var dodesc = document.createTextNode(doneeprofile[0][1]);
    
    //insert those items into HTML elements
    doneelocation.appendChild(doloc);
    doneedescription.appendChild(dodesc);
    
    for(var i = 0; i < doneeprojects.length; i++){
        var projects = document.getElementById('doneeprojects');
        
        //create BS row and set attribute
        var createROW = document.createElement('div');
        createROW.setAttribute('class', 'row doneeproject hover');
        //project id - projnum# will be called for clickable actions
        createROW.setAttribute('id', 'projnum' + i);            
        
        for(var j = 0; j < doneeprojects[i].length; j++){
            var v;
            if (j < 1) {
                v = 3;   
            } else if (j < 5) {
                v = 1;
            } else {
                v = 5
            }
            
            //create BS col and set attributes
            var createCOL = document.createElement('div');
            createCOL.setAttribute('class', 'col-md-' + v);
            
            //create div for words
            var createDIV = document.createElement('div');
            createDIV.setAttribute('class', doneeprojectclasses[j]);
            
            var words = document.createTextNode(doneeprojects[i][j]);
            createDIV.appendChild(words);
            createCOL.appendChild(createDIV);
            createROW.appendChild(createCOL);
            projects.appendChild(createROW);
        }
    }
}


function donationpageload() {
    alert(doneeProj.clickedID);
    //loop to insert values from Array
    for(var i = 0; i < doneeprojects.length; i++){
        //pass array value to variable
        var words = document.createTextNode(doneeProj.clickedID);
        var htmlElement = document.getElementById(doneelistclasses[i]);
        htmlElement.appendChild(words);
    }
}









































