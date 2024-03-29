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
  'Norway',
  'Netherlands',
  'Iceland',
  'Denmark',
  'Finland',
  'Greese',
];

const data = {
  labels: labels,
  datasets: [{
    label: 'Fuel price in Europe in Euros 14 feb 2022',
    backgroundColor: ['#BB86FC', '#9b6fd1', '#7b58a6', '#5c437c', '#3c2c51', '#1d1526'],
    borderColor: 'white',
    color: 'white',
    data: [2.045, 2.033, 1.931, 1.930, 1.911, 1.865],
  }]
};

const config = {
  type: 'bar',
  data: data,
  options: {}
};

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);


// Food supply circle Chart
    const circleLabels = [
        'Fruit',
        'Water',
        'Bread',
        'Vegetables',
        'Meat',
        'Fish',

      ];

      const circleData = {
        labels: circleLabels,
        datasets: [{
          label: 'Food supply',
          backgroundColor: ['#FEF78E', '#84D4FD', '#F1AE6C', '#93D677', '#FC5D5D', '#3863AF'],
          borderColor: '#3D3D3D',
          data: [80, 98, 70, 65, 55, 50],
        }]
      };

      const circleConfig = {
        type: 'doughnut',
        data: circleData,
        options: {}
      };

      const circleChart = new Chart(
        document.getElementById('circleChart'),
        circleConfig
      );
