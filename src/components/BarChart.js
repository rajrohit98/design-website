// import plotly from 'plotly.js'

function BarChart () {
    const xArray = ["Italy","France","Spain","USA","Argentina"];
    const yArray = [55, 49, 44, 24, 15];

    const data = [{
    x: xArray,
    y: yArray,
    type: "bar",
    orientation:"v",
    marker: {color:"rgba(0,0,255)"}
    }];

    const layout = {title:"World Wide Wine Production"};

    // Plotly.newPlot("myPlot", data, layout);
}

export default BarChart