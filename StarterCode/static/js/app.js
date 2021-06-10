function buildPanel(element) {
    // select metadata
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;

        var resultArray = metadata.filter(sampleObject => sampleObject.id == element);
        var result = resultArray[0];
        // clear the panel
        var demoPanel = d3.select("#sample-metadata");
        demoPanel.html("");

    
    
        Object.entries(result).forEach(subject => {
            demoPanel.append("p").text(`${subject[0]}: ${subject[1]}`);

    });

    });



}
    


    // find the metadata number that matches element number
    // take metadata and populate panel with what matches (need to run with a number)


function buildBubbles(element) {
    d3.json("samples.json").then((data) => {
        var samples = data.samples;

        var resultArray = samples.filter(sampleObject => sampleObject.id == element);
        var result = resultArray[0]
        var id = result.otu_ids;
        var label = result.otu_labels;
        var value = result.sample_values;
        

        var barData = [
            {
                y: id.slice(0,10).map(otuID => `OTU ${otuID}`).reverse(),
                x: value.slice(0,10).reverse(),
                text: label.slice(0,10).reverse(),
                type:"bar",
                orientation:"h"
            }
        ];


        var layout_1 = {
            mtitle:"Top 10"
            };

        Plotly.newPlot("bar", barData, layout_1);
        


        var bubbleData = [
            {
                x: id,
                y: value,
                text: label,
                mode: "markers",
                marker: {
                    color: id,
                    size: value,
                }

            }
        ];
        var layout_2 = { 
            xaxis: {title: "OTU ID"},
            margin: { t: 0 },
            hovermode: "closest",


        };
        Plotly.plot("bubble", bubbleData, layout_2);

//     // select the samples
//     // find the samples that match the element number that is passed in

//     // create bar chart
    

    // create bubble chart(same function as bar chart)

});
}
function initialization() {
    // find names, populate dropdown, 
    var dropDown = d3.select("#selDataset");


    d3.json("samples.json").then((data) => {

        var sampleNames = data.names;

        sampleNames.forEach(function(name) {
            dropDown.append("option").text(name).property("value");
        });
    
    // pass first sample call. build bubbles and pass first sample
    
        const firstSubject = sampleNames[0];
        buildPanel(firstSubject);
        buildBubbles(firstSubject);
        
});

}

    // find first sample name






function optionChanged(element) {
    buildPanel(element);
    buildBubbles(element);
}

initialization();

