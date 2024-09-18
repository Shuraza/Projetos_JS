

// Espera o DOM estar completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    // Obtém o contexto do canvas
  const ctx = document.getElementById('grafico').getContext('2d');
  const data  = {
    labels: [],
    datasets: [{
      label: [],
      data: [],
      backgroundColor: [], // Array para cores de fundo
      borderColor: [], // Array para cores da borda
      borderWidth: 1
      
    }]
  }
  const configuracao = {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      plugins: {
          legend: {
              position: 'top',
          },
      },
  }
};

const colors = ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 206, 86, 0.2)'];
const borderColors = ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 159, 64, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 206, 86, 1)'];


  const myChart = new Chart(ctx, configuracao);

  document.getElementById('dadosGrafico').addEventListener('submit', function(event) {
    event.preventDefault();

    const label = document.getElementById('grupo').value;
    const value = document.getElementById('dado').value;
    var grupo = label
    if (label && value) {
        data.labels.push(label);
        data.datasets[0].label.push(label)
        data.datasets[0].data.push(Number(value));
        const index = data.labels.length - 1;
        data.datasets[0].backgroundColor.push(colors[index % colors.length]);
        data.datasets[0].borderColor.push(borderColors[index % borderColors.length]);

        myChart.update();
        
        // Limpar os campos do formulário
        document.getElementById('grupo').value = '';
        document.getElementById('dado').value = '';
    }
});

})
    

