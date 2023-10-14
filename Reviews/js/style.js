const reviews = [
    {
        id: 1,
        name: 'mira jahan',
        job: 'web developer',
        img: 'https://www.course-api.com/images/people/person-1.jpeg',
        text: 'i am baby maggings twee health goth +1. bicyle rights tu',
        addresses: 'Address: Dhaka',
        joining: 'Join Date:',
        years: '26 May 2023',
    },

    {
        id: 2,
        name: 'anna jones',
        job: 'web designer',
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal',
        addresses: 'Address: Rajshahi',
        joining: 'Join Date:',
        years: '25 May 2023',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag',
        addresses: 'Address: Khulna',
        joining: 'Join Date:',
        years: '24 May 2023',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.',
        addresses: 'Address: Rangpur',
        joining: 'Join Date:',
        years: '23 May 2023',
    },
    {
        id: 5,
        name: 'shamim hasan',
        job: 'boss',
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        text: 'We concentrate on the language itself here, with the minimum of environment-specific notes.',
        addresses: 'Address: Bogura',
        joining: 'Join Date:',
        years: '22 May 2023',
    },
];

// select image item

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const add = document.getElementById('address');
const dat = document.getElementById('date');
const joi = document.getElementById('join');

const prevbtn = document.querySelector('.prev-btn');
const nextbtn =document.querySelector('.next-btn');
const randombtn= document.querySelector('.random-btn');

//set starting item
let currentItem = 0;

//load intital item
window.addEventListener('DOMContentLoaded', function(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent =item.text;
    add.textContent = item.addresses;
    joi.textContent = item.joining;
    dat.textContent = item.years;
});

// show person based on item

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    add.textContent = item.addresses;
    joi.textContent = item.joining;
    dat.textContent = item.years;
}

// show next person
nextbtn.addEventListener('click', function () {
    currentItem++;
    if(currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

// show prev person
prevbtn.addEventListener('click', function (){
    currentItem--;
    if (currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson(currentItem);
});

// show random person
randombtn.addEventListener('click', function () {

   currentItem =Math.floor(Math.random()* reviews.length);
   showPerson(currentItem);
});