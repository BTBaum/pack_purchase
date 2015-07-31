// showing
document.getElementById('scope-info').style.display = '';
// hiding
document.getElementById('scope-info').style.display = 'none';
// Scope of Work section
document.getElementById("toggle").onclick = function(){
	var s = document.getElementById("scope-info");
	if(s.style.display != 'none') {
		s.style.display = 'none';
	} else {
		s.style.display = '';
	}
}

// showing
document.getElementById('faq-info').style.display = '';
// hiding
document.getElementById('faq-info').style.display = 'none';
// FAQ section
document.getElementById("toggle2").onclick = function(){
	var f = document.getElementById("faq-info");
	if(f.style.display != 'none') {
		f.style.display = 'none';
	} else {
		f.style.display = '';
	}
}


