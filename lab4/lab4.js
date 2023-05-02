const data = {
	labels: ['Reinhardt', 'D.VA', 'Roadhog', 'Zarya', 'Orisa', 'Sigma', 'Doomfist', 'Winston', 'Wrecking Ball', 'Ramattra', 'Junker Queen'],
	datasets: [{
		label: "Overwatch Tank's KDA - Joseph Slater",
		data: [3.29, 6.51, 3.89, 4.48, 3.90, 5.23, 3.41, 4.08, 5.29, 4.19, 5.04],
		backgroundColor: [
			'#616163', //Reinhardt
			'#F15BB5', //D.VA
			'#A8201A', //Roadhog
			'#DA667B', //Zarya
			'#5FAD56 ', //Orisa
			'#00BBF9', //Sigma
			'#FF7F11', //Doomfist
			'#F7CB15', //Winston
			'#FAFF00', //Wrecking ball
			'#9B5DE5', //Ramattra
			'#52DEE5' //Junker Queen
		],
		borderWidth: 2
	}]
};

const drawDoughnutChart = () => {
	const doughnutChart = new Chart(document.getElementById('doughnutChart'), {
		type: 'doughnut',
		data: data,
        options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: "Overwatch Tank's KDA - Joseph Slater"
              }
            }
          },
	});
}

const drawHorizontalBarChart = () => {
	const horizontalBarChart = new Chart(document.getElementById('horizontalBarChart'), {
		type: 'bar',
		data: data,
	});
};

drawDoughnutChart();
drawHorizontalBarChart();