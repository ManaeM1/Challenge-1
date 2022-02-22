var myIndex = 0;
carousel();

function carousel() {
	var i;
  	var x = document.getElementsByClassName("responsive_photo");
  	for (i = 0; i < x.length; i++) {
    	x[i].style.display = "none";  
  	}

  	myIndex++;
  	if (myIndex > x.length) {myIndex = 1}    
  	x[myIndex-1].style.display = "block";  
  	setTimeout(carousel, 7000);    
}

window.setInterval(ut, 1000);

function ut() {
  var d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
  document.getElementById("date").innerHTML = d.toLocaleDateString();
}

//Fuel
const labels = [
    'Left engine',
    'Right engine',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Fuel',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };