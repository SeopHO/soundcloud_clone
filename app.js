const SongInformation=[
    {
        title: "Here with me",
        writer: "marshmello",
        img:"banner-bg.jpg",
    },

    {
        title: "Happier",
        writer: "marshmello",
        img:"banner-bg.jpg",
    },

    {
        title: "alone",
        writer: "marshmello",
        img:"banner-bg.jpg",
    },

    {
        title: "Shelter",
        writer: "Porter Robinson",
        img:"banner-bg.jpg",
    },

    {
        title: "legend never die",
        writer: "legue of legends",
        img:"banner-bg.jpg",
    },

    {
        title: "Rise",
        writer: "legue of legends",
        img:"banner-bg.jpg",
    },

    {
        title: "Rise",
        writer: "legue of legends",
        img:"banner-bg.jpg",
    },

    {
        title: "Rise",
        writer: "legue of legends",
        img:"banner-bg.jpg",
    },

    {
        title: "Rise",
        writer: "legue of legends",
        img:"banner-bg.jpg",
    },

    {
        title: "Rise",
        writer: "legue of legends",
        img:"banner-bg.jpg",
    },

    {
        title: "Rise",
        writer: "legue of legends",
        img:"banner-bg.jpg",
    },

    {
        title: "Rise",
        writer: "legue of legends",
        img:"banner-bg.jpg",
    },
];

const boxes = document.querySelectorAll(".boxes");
const title = document.querySelectorAll(".songtitle");
const writer = document.querySelectorAll(".songwriter");

window.addEventListener("load",function()
{
    for(let i=0;i<12;i++)
    {
        title[i].textContent =  SongInformation[i].title;
        writer[i].textContent = SongInformation[i].writer;
    }
});




// boxes.forEach(function(box) 
// {
//     box.addEventListener("mouseover",function(event)
//     {
//         const classitem = event.currentTarget.classList;
//         console.log(classitem);
        
//     });
// });

