var review_name = ["Sultan Mediterranean Restaurant"];
var review_date = ["January 25th, 2020"];
var review_content = ["Tucked away on a quiet corner of Manchester Avenue, Sultan Mediterranean Restaurant serves up some of the best Turkish food in St. Louis. Ravenous foodies will find value across the menu, from Sultan’s superb falafel and pita, to its hearty Lamb Pilau. The Pilau - flanked by plenty of tzatziki - is the size of a football, and arrives shrouded in a thin layer of flaky, light phyllo. Still, the star of the show at Sultan is undeniably the Munto. The fluffy pasta - filled with ground beef and drowned in yogurt and spicy tomato sauce – is fusion at its finest. A hybrid of Italian and Turkish cuisines, the Munto boasts a pleasant, chewy texture, and is aided by the copious splashes of cool yogurt. Service is very polished and courteous. And the restaurant, despite its growing popularity locally, feels warm and welcoming. Within St. Louis’s rapidly growing ethnic food scene, Sultan Mediterranean Restaurant stands out as a beacon of excellence."];
var review_photos = [[]];

document.getElementById('recent_name').innerHTML = "Recent Review - "+ review_name[0];
document.getElementById('recent_date').innerHTML = "Date: "+review_date[0];
document.getElementById('recent_content').innerHTML = review_content[0];

for(var i = 0; i < review_name.length; i++) {
	var newNode = document.createElement('h5');
	newNode.innerHTML = review_name[i];
	document.getElementById('all').appendChild(newNode);
}