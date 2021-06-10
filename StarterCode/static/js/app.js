function buildPanel(element) {

    
    // clear the panel
    // select metadata
    // find the metadata number that matches element number
    // take metadata and populate panel with what matches (need to run with a number)
}

// function buildBubbles(element) {
//     // select the samples
//     // find the samples that match the element number that is passed in

//     // create bar chart
    var trace1 = {
        x:
        y:
        text:
        name:
        type: "bar"
        orientation: "h"
    };
    var layout_1

//     // create bubble chart(same function as bar chart)
    var trace2 = {
        x:
        y:
        mode:
        marker:
        text:
    }

    var layout_2 = {

    }
// }

function initialization() {

    var dropdown = d3.select("#selDataset");

    d3.json("samples.json").then((data) => {

        

}
    // find names, populate dropdown, 
    // find first sample name

    // pass first sample call. build bubbles and pass first sample

}






function optionChanged(element) {
    buildPanel(element);
    buildBubbles(element);
}

initialization();

