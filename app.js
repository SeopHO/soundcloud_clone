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
];

const boxes = document.querySelectorAll(".boxes");

boxes.forEach(function(box) 
{
    box.addEventListener("mouseover",function(event)
    {
        const classitem = event.currentTarget.classList;
        if(classitem.contains("box1"))
        {
            console.log(`box1`);
        }
    });
});
