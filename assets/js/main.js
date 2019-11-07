var countyData = [{
        name: "Kilkenny",
        about: "Kilkenny is a medieval town in southeast Ireland. Its grand Kilkenny Castle was built in 1195 by Norman occupiers. The town has deep religious roots and many well-preserved churches and monasteries, including imposing St. Canice’s Cathedraland the Black Abbey Dominican priory, both from the 13th century. It's also a crafts hub, with shops along its winding lanes selling pottery, paintings and jewellery.",

    },
    {
        name: "Galway",
        about: "Galway, a harbour city on Ireland’s west coast, sits where the River Corrib meets the Atlantic Ocean. The city’s hub is 18th-century Eyre Square, a popular meeting spot surrounded by shops and traditional pubs that often offer live Irish folk music. Nearby, stone-clad cafes, boutiques and art galleries line the winding lanes of the Latin Quarter, which retains portions of the medieval city walls."
    },
    {
        name: "Cork",
        about: "Cork is a city in south-west Ireland, in the province of Munster. As of the 2016 census, the city had a population of 125,657, but following a boundary extension in 2019, the population increased to c. 210,000. It is the second largest city in the Republic of Ireland"

    },
    {
        name: "Donegal",
        about: "County Donegal is a largely Irish-speaking region bordering the Atlantic Ocean in northwestern Ireland. It’s made up of castles, rugged coastline and mountains such as the quartzite Mount Errigal. Glenveagh National Park,once a private estate, encompasses forests, lakes and bogland in the Derryveagh Mountains. Its 1870s manor house, the Scottish Baronial-style Glenveagh Castle, is known for its Victorian gardens."

    },
    {
        name: "Dublin",
        about: "Dublin, capital of the Republic of Ireland, is on Ireland’s east coast at the mouth of the River Liffey. Its historic buildings include Dublin Castle, dating to the 13th century, and imposing St Patrick’s Cathedral, founded in 1191. City parks include landscaped St Stephen’s Green and huge Phoenix Park, containing Dublin Zoo. The National Museum of Ireland explores Irish heritage and culture."

    }

];

document.getElementById("places").innerHTML = `
<h1 class="county-title">Places To Visit In Ireland.</h1>
${countyData.map(function(counties){
    return `
        <div class = "county">
           <h2>${counties.name}</h2>
            <p>${counties.about}</p>
        <div>`;
}).join("")}
`;

//Smooth scroll 
var scroll = new SmoothScroll('.navbar-nav a[href*="#"]',{
    speed: 800
});




