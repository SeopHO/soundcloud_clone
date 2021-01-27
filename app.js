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
const titles = document.querySelectorAll(".songtitle");
const writers = document.querySelectorAll(".songwriter");

const items = [];

window.addEventListener("load",function()
{
    for(let i=0;i<SongInformation.length;i++)
    {
        items[i] = SongInformation[i];
    }
    console.log(items);
    
});


// boxes.forEach(function(box) 
// {
//     box.addEventListener("mouseover",function(event)
//     {
//         const classitem = event.currentTarget.classList;
//         console.log(classitem);
        
//     });
// });

titles.forEach(function(title) 
{
    title.addEventListener("click",function(event)
    {
        const classitem2 = event.currentTarget.classList;
        console.log(classitem2);
        for(let i=0; i<11;i++)
        {
            if(classitem2.contains(`title${i}`))
            {
                titles.textContent = items[i];
            }
        }
        
    });
});

writers.forEach(function(writer) 
{
    writer.addEventListener("click",function(event)
    {
        const classitem3 = event.currentTarget.classList;
        console.log(classitem3);
        
    });
});


function find()
{
    boxes.forEach(function()
    {
        let a = boxes.childNodes;
        console.log(a);
        
    });
}

find();


