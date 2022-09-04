const TIMESTAMP_URL = 'http://worldtimeapi.org/api/timezone/America/Chicago'

async function fetchTimestamp() {
    const response = await fetch(TIMESTAMP_URL, {
        method: 'GET',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        // body: JSON.stringify({
        //     query: `
        //         query {
        //             greetings
        //         }
        //     `
        // })
    });

    const responseBody = await response.json();
    return responseBody;
}

const element = document.getElementById('timestamp');
element.textContent = 'Loading...';
fetchTimestamp().then((data) => {
    element.textContent = `${data.datetime} ${data.abbreviation}`;
});