import React, { Component } from 'react'
import Chart from "chart.js";
/* import classes from "./LineGraph.module.css"; */

export default class LineGraph extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
    var Data = ['USERS', 'NON USERS'];
		var color = Chart.helpers.color;
		var horizontalBarChartData = {
			labels: ['Users', 'Non Users'],
			datasets: [{
				label: 'Graph',
				backgroundColor: ["#DF265E", "#C9C9C9"],
				borderColor: ["#DF265E", "#C9C9C9"],
				borderWidth: 1,
				data: [15,-4]
			}]
		};

        const myChartRef = this.chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: "horizontalBar",
            data: horizontalBarChartData,
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
                  text: 'Companies that systematically deploy Data Science solutions for their daily operations'+
                  'tend to be 19 perfect more profitable than their competitors'
                }
            }
        });
    }
    render() {
        return (
            <div style={{background:"white"}}>
                <canvas style={{height: "442px !important", display: "block", width: "884px"}} width="884" 
                height="442"
                    id="myChart"
                    ref={this.chartRef}
                />
                <small> Source: Scalework research </small>
            </div>
        )
    }
}