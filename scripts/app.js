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

var myChart = document.getElementById('myChart').getContaxt('2d');
var fuelPriceChart = new Chart(myChart,{
  type:'bar',
  data:{
    labels:['Norway', 'Netherlands', 'Iceland', 'Denmark', 'Finland', 'Greese'],
    datasets:[{
      label:'Fuel price in Europe 14 feb 2022',
      data:[2.045, 2.033, 1.931, 1.930, 1.911, 1.865]
    }]
  },
});