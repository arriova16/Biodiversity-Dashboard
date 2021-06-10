function buildPanel(element) {
    // select metadata
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;

        var result = metadata.filter(subject => subject.id === element)[0];
        // clear the panel
    var demoPanel = d3.select("#sample-metadata");
    demoPanel.html("");

    
    
    Object.entries(result[0]).forEach(subject => {
        demoPanel.append("h5").text(`${subject[0]}: ${subject[1]}`);

    });

    });



}
    


    // find the metadata number that matches element number
    // take metadata and populate panel with what matches (need to run with a number)


function buildBubbles(element) {
// //     // select the samples
// //     // find the samples that match the element number that is passed in

// //     // create bar chart
//     var trace1 = {
//         x:
//         y:
//         text:
//         name:
//         type: "bar"
//         orientation: "h"
//     };
//     var layout_1

// //     // create bubble chart(same function as bar chart)
//     var trace2 = {
//         x:
//         y:
//         mode:
//         marker:
//         text:
//     }

//     var layout_2 = {

//     }
// // }

function initialization() {
    // find names, populate dropdown, 
    var dropdown = d3.select("#selDataset");


    d3.json("samples.json").then((data) => {

        var sampleNames = data.names;

        sampleNames.forEach(function(name) {
            dropdown.append("option").text(name).property("value");
        });
    
    // pass first sample call. build bubbles and pass first sample
    
        const firstSubject = sampleNames[0];
        buildBubbles(firstSubject);
        buildPanel(firstSubject);
});

}

    // find first sample name






function optionChanged(element) {
    buildPanel(element);
    buildBubbles(element);
}

initialization();

