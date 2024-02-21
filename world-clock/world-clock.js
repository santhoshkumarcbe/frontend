const divEl = document.getElementById('world-clock');

const timeZones = [
    {
        country: 'India',
        localString: 'en-US',
        timeZone: 'Asia/kolkata'
    },
    {
        country: 'Switzerland',
        localString: 'en-US',
        timeZone: 'Europe/Zurich'
    },
    {
        country: 'England',
        localString: 'en-US',
        timeZone: 'Europe/London'
    }
]

function updateTime(country, localString, timeZone) {
    const pEl = document.createElement('p');
    setInterval(() => {
        const time = new Date().toLocaleString(localString, { timeZone: timeZone });
        pEl.innerText = `${country} ${'Time : '} ${time}`
    }, 1000);
    divEl.appendChild(pEl);
}

for (let index = 0; index < timeZones.length; index++) {
    const timeZone = timeZones[index];
    updateTime(timeZone.country, timeZone.localString, timeZone.timeZone)
}

let date = new Date()
const tEl = document.createElement('p');
tEl.innerText= date;
divEl.appendChild(tEl);



// const indiaTimeEl = document.createElement('p');
// const switzerlandTimeEl = document.createElement('p');
// const englandTimeEl = document.createElement('p');

// timeZone('India', 'en-IN', 'Asia/kolkata' );
// timeZone('Switzerland','en-US','Europe/Zurich');
// timeZone('England','en-US','Europe/London');


// function timeZone(country, localString, timeZone ) {
//     const pEl = document.createElement('p');
//     const indiaTime = new Date();
//     let hours = indiaTime.getHours();
//     let minutes = indiaTime.getMinutes();
//     let seconds = indiaTime.getSeconds();
//     let meridian = 'AM';
//     if (hours > 12) {
//         hours -= 12;
//         meridian = 'PM';
//     }
//     if (hours < 10)
//         hours = `${0}${hours}`;
//     if (minutes < 10)
//         minutes = `${0}${minutes}`;
//     if (seconds < 10)
//         seconds = `${0}${seconds}`;

//     indiaTimeEl.innerHTML = `${"Indian Time : "}${indiaTime.getMonth() + 1}${'/'}${indiaTime.getDate()}${'/'}${indiaTime.getFullYear()}${','} ${hours}${":"}${minutes}${":"}${seconds} ${meridian}`;
//     const switzerlandTime = new Date().toLocaleString('en-US', { timeZone: 'Europe/Zurich' });
//     switzerlandTimeEl.innerHTML = `${"Switzerland Time : "} ${switzerlandTime}`;
//     const englandTime = new Date().toLocaleString('en-US', { timeZone: 'Europe/London' });
//     englandTimeEl.innerHTML = `${"England Time : "} ${englandTime}`;
// }