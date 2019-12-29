document.getElementById('about').addEventListener("click", function(event){
            document.getElementById('resume').hidden = (document.getElementById('resume').hidden ? '':'hidden');
            document.getElementById('contact').hidden = (document.getElementById('contact').hidden ? '':'hidden');
            document.getElementById('projects').hidden = (document.getElementById('projects').hidden ? '':'hidden');
            document.getElementById('about').hidden = 'hidden'
            document.getElementById('back3').style.visibility = 'visible';
            document.getElementById('loaded_about').hidden = '';
            document.getElementById('loaded_contact').hidden = 'hidden';
            document.getElementById('loaded_resume').hidden = 'hidden';
            document.getElementById('hi').innerHTML = 'About';

}, false);


document.getElementById('back3').addEventListener("click", function(event){
            document.getElementById('resume').hidden = '';
            document.getElementById('contact').hidden = '';
            document.getElementById('projects').hidden = '';
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




