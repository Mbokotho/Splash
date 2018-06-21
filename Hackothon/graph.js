window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "Top Water usage in Cape town"
        },
        axisY: {
            title: "Water consumption(ml)"
        },
        data: [{
            type: "column",
            showInLegend: true,
            legendMarkerColor: "grey",
            legendText: "  water consumption per day",
            dataPoints: [
                { y: 457000,  label: "Big Bay" },
                { y: 557000,  label: "Lansdowne" },
                { y: 702000,  label: "Crawford" },
                { y: 443000,  label: "La Concorde" },
                { y: 441000,  label: "Colorado Park" },
                { y: 500000,  label: "Bishops Court" },
                { y: 461000,  label: "Constantia" },
                { y: 554000,  label: "Bishops Court" }
    
            ]
        }]
    });
    chart.render();
    
    };