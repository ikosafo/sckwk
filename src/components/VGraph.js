import React, { Component } from 'react'
import Chart from "chart.js";
/* import classes from "./LineGraph.module.css"; */

export default class LineGraph extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
    var Data = ['2010', '2015', '2020', '2025'];
		var color = Chart.helpers.color;
		var BarChartData = {
			labels: ['2010', '2015', '2020', '2025'],
			datasets: [{
				label: 'Graph',
				backgroundColor: "#C9C9C9",
				borderColor: "#C9C9C9",
				borderWidth: 1,
				data: [2,12,47,163]
			}]
		};

        const myChartRef = this.chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: "bar",
            data: BarChartData,
            options: {
                //Customize chart options
                elements: {
                  rectangle: {borderWidth: 2, }
                },
                responsive: true,
                legend: {
                  position: 'right',
                },
                title: {
                  display: true,
                  text: '17% of companies state that they have gained a competitive advantage through Data Science.'+
                  'And they gained continuous to increase.'
                }
            }
        });
    }
    render() {
        return (
            <div style={{background:"white"}}>
                <canvas style={{height: "300px !important", display: "block", width: "584px"}} width="584" 
                height="300"
                    id="myChart"
                    ref={this.chartRef}
                />
                <small>
                    The graph shows development of usable data points, annual data volume (zerabytes).<br/>
                    Source: Making ... study/Scalework research
                </small>
            </div>
        )
    }
}