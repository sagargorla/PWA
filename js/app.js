const apikey = "efb3b259-be95-4def-9317-3d0fbe412c8d";
const main = document.querySelector('.container');


window.addEventListener('load',function(e) {
    //fetchWeather();
    getUserList();
});

async function fetchWeather() {
    const API_KEYForcast = 'a3dbc68162b235e12abb1652d5652de2';
    const loc = 'London,uk';
    console.log('Initializing fetch in fetchWeather.js');
    let promise = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=a3dbc68162b235e12abb1652d5652de2'
    ).then((response) => response.json());
    console.log(promise);
    return await promise;
};


async function getUserList() {
   // const mainDoc = document.querySelector('.container');
    const res = await fetch('https://reqres.in/api/users');
    const json = await res.json();
    main.innerHTML = json.data.map(createUserList).join('\n');
}

function createUserList(User) {
    return `
            <div class="User">
            <a href="${User.first_name}">
            <h2> ${User.last_name} </h2>
            <img src="${User.avatar}">
               <p>${User.email} </p>
            </a>
            </div>
        `;
}


