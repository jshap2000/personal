document.getElementById('about').addEventListener("click", function(event){
            document.getElementById('resume').hidden = (document.getElementById('resume').hidden ? '':'hidden');
            document.getElementById('contact').hidden = (document.getElementById('contact').hidden ? '':'hidden');
            document.getElementById('projects').hidden = (document.getElementById('projects').hidden ? '':'hidden');
            document.getElementById('about').hidden = 'hidden';
            document.getElementById('food_clicked').hidden='hidden';
            document.getElementById('back3').style.visibility = 'visible';
            document.getElementById('loaded_about').hidden = '';
            document.getElementById('loaded_contact').hidden = 'hidden';
            document.getElementById('loaded_resume').hidden = 'hidden';
            document.getElementById('hi').innerHTML = 'Q & A with myself (Josh)';

}, false);


document.getElementById('back3').addEventListener("click", function(event){
            document.getElementById('resume').hidden = '';
            document.getElementById('contact').hidden = '';
            document.getElementById('projects').hidden = '';
            document.getElementById('food_clicked').hidden='';
            document.getElementById('about').hidden = '';
            document.getElementById('back3').style.visibility = 'hidden';
            document.getElementById('loaded_contact').hidden = 'hidden';
            document.getElementById('loaded_about').hidden = 'hidden';
            document.getElementById('loaded_resume').hidden = 'hidden';
            document.getElementById('loaded_projects').hidden = 'hidden';
            document.getElementById('work_info').hidden = 'hidden';
            document.getElementById('skills_info').hidden = 'hidden';
            document.getElementById('education_info').hidden = 'hidden';
            document.getElementById('honors_info').hidden = 'hidden';
            document.getElementById('personal_info').hidden = 'hidden';
            document.getElementById('school_info').hidden = 'hidden';
            document.getElementById('hi').innerHTML = 'Hi!';

}, false);

document.getElementById('resume').addEventListener("click", function(event){
            document.getElementById('about').hidden = 'hidden';
            document.getElementById('food_clicked').hidden='hidden';
            document.getElementById('resume').hidden = 'hidden'
            document.getElementById('contact').hidden = 'hidden';
            document.getElementById('projects').hidden = 'hidden';
            document.getElementById('back3').style.visibility = 'visible';
            document.getElementById('loaded_contact').hidden = 'hidden';
            document.getElementById('loaded_about').hidden = 'hidden';
            document.getElementById('loaded_resume').hidden = '';
            document.getElementById('hi').innerHTML = 'My CV';
}, false);

document.getElementById('contact').addEventListener("click", function(event){
            document.getElementById('about').hidden = 'hidden';
            document.getElementById('resume').hidden = 'hidden';
            document.getElementById('food_clicked').hidden='hidden';
            document.getElementById('projects').hidden = 'hidden';
            document.getElementById('contact').hidden = 'hidden';
            document.getElementById('back3').style.visibility = 'visible';
            document.getElementById('loaded_contact').hidden = '';
            document.getElementById('loaded_about').hidden = 'hidden';
            document.getElementById('loaded_resume').hidden = 'hidden';
            document.getElementById('hi').innerHTML = 'Connect';
}, false);

document.getElementById('projects').addEventListener("click", function(event){
            document.getElementById('about').hidden = 'hidden';
            document.getElementById('resume').hidden = 'hidden';
            document.getElementById('food_clicked').hidden='hidden';
            document.getElementById('projects').hidden = 'hidden';
            document.getElementById('contact').hidden = 'hidden';
            document.getElementById('back3').style.visibility = 'visible';
            document.getElementById('loaded_projects').hidden = '';
            document.getElementById('loaded_about').hidden = 'hidden';
            document.getElementById('loaded_resume').hidden = 'hidden';
            document.getElementById('hi').innerHTML = 'Projects';
}, false);

document.getElementById('education_clicked').addEventListener("click", function(event){
            document.getElementById('education_info').hidden = (document.getElementById('education_info').hidden ? '':'hidden');
            document.getElementById('work_info').hidden = 'hidden';
            document.getElementById('skills_info').hidden = 'hidden';
            document.getElementById('honors_info').hidden = 'hidden';
}, false);

document.getElementById('work_clicked').addEventListener("click", function(event){
            document.getElementById('work_info').hidden = (document.getElementById('work_info').hidden ? '':'hidden');
            document.getElementById('education_info').hidden = 'hidden';
            document.getElementById('skills_info').hidden = 'hidden';
            document.getElementById('honors_info').hidden = 'hidden';
}, false);

document.getElementById('skills_clicked').addEventListener("click", function(event){
            document.getElementById('skills_info').hidden = (document.getElementById('skills_info').hidden ? '':'hidden');
            document.getElementById('work_info').hidden = 'hidden';
            document.getElementById('education_info').hidden = 'hidden';
            document.getElementById('honors_info').hidden = 'hidden';
}, false);


document.getElementById('personal').addEventListener("click", function(event){
            document.getElementById('personal_info').hidden = (document.getElementById('personal_info').hidden ? '':'hidden');
            document.getElementById('school_info').hidden = 'hidden';
}, false);

document.getElementById('school').addEventListener("click", function(event){
            document.getElementById('school_info').hidden = (document.getElementById('school_info').hidden ? '':'hidden');
            document.getElementById('personal_info').hidden = 'hidden';
}, false);

document.getElementById('honors_clicked').addEventListener("click", function(event){
            document.getElementById('honors_info').hidden = (document.getElementById('honors_info').hidden ? '':'hidden');
            document.getElementById('work_info').hidden = 'hidden';
            document.getElementById('skills_info').hidden = 'hidden';
            document.getElementById('education_info').hidden = 'hidden';
}, false);




document.getElementById('food_clicked').addEventListener("click", function(event){
    var review_name = ["Sultan Mediterranean Restaurant", "Chao Baan"];
var review_date = ["January 25th, 2020", "February 21st, 2020"];
var review_content = ["Tucked away on a quiet corner of Manchester Avenue, Sultan Mediterranean Restaurant serves up some of the best Turkish food in St. Louis. Ravenous foodies will find value across the menu, from Sultan’s superb falafel and pita, to its hearty Lamb Pilau. The Pilau - flanked by plenty of tzatziki - is the size of a football, and arrives shrouded in a thin layer of flaky, light phyllo. Still, the star of the show at Sultan is undeniably the Munto. The fluffy pasta - filled with ground beef and drowned in yogurt and spicy tomato sauce – is fusion at its finest. A hybrid of Italian and Turkish cuisines, the Munto boasts a pleasant, chewy texture, and is aided by the copious splashes of cool yogurt. Service is very polished and courteous. And the restaurant, despite its growing popularity locally, feels warm and welcoming. Within St. Louis’s rapidly growing ethnic food scene, Sultan Mediterranean Restaurant stands out as a beacon of excellence.", "Looks can be misleading. Despite its trendy, chic interior, Chao Baan is a masterclass in execution and authenticity. The hipster joint churns out authentic regional Thai cuisine in large portions and at extremely affordable prices. The Mieng Kham - green leaf wraps filled with shrimp, ginger and lime among other ingredients- pack a powerful punch. The Mieng Kham also features notes of coconut - which helps offset the dish of sweet and satisfyingly spicy chilly paste served alongside the wraps. Of the two entrees we ordered, the Green Curry stood out as being especially flavorful - the combination of spices, tender eggplant, and marinated chicken made for mouth-watering bites. Not far behind was the Kua Kling - beef stir fried in spicy curry paste. Both dishes went well with the accompanying Jasmine rice. It was a pleasure to dine at Chao Baan; I can’t wait to return and try more!"];
var review_photos = [[]];

document.getElementById('recent_name').innerHTML = "Recent Review - "+ review_name[review_name.length-1];
document.getElementById('recent_date').innerHTML = "Date: "+review_date[review_name.length-1];
document.getElementById('recent_content').innerHTML = review_content[review_name.length-1];
document.getElementById('reviewertime').hidden='';
document.getElementById('back3').hidden='hidden';
document.getElementById('background').hidden='hidden';
document.getElementById('resume').hidden='hidden';
document.getElementById('about').hidden='hidden';
document.getElementById('contact').hidden='hidden';
document.getElementById('projects').hidden='hidden';
document.getElementById('food_clicked').hidden='hidden';
for(var i = 0; i < review_name.length; i++) {
    var newNode = document.createElement('h5');
    newNode.innerHTML = review_name[i];
    newNode.id = i;
    newNode.addEventListener("click", function(event){
            document.getElementById('recent_name').innerHTML = "Review - "+ review_name[this.id];
			document.getElementById('recent_date').innerHTML = "Date: "+review_date[this.id];
			document.getElementById('recent_content').innerHTML = review_content[this.id];
}, false);
    document.getElementById('all').appendChild(newNode);
}


}, false);   




document.getElementById('body').addEventListener("mousemove", function(event){
    showCoords(event);
}, false);

//document.getElementById('background').style.backgroundColor = "rgb(" + 200 + ",10,100)";

function showCoords(event) {
  
  var x = event.clientX*255/1335;
  var y = event.clientY*255/301;
  //x=0;
  
  
  //document.getElementById('background').style.backgroundColor = "rgb(" + x + ",10,100)";
  var d = 'linear-gradient(to right, rgba('+(x+20)+','+y+',0,0) 0%,rgba('+x+','+y+','+x+',0.01) 1%,rgba('+(x)+','+(y/2)+','+(y)+',1) 100%) 30 stretch';
  document.getElementById('background').style.borderImage = d;
  document.getElementById('background').style.borderStyle = 'solid';
  document.getElementById('background').style.borderLeft = 0;
  document.getElementById('background').style.borderRight = 0;
  
}