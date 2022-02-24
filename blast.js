import fetch from 'node-fetch';
import request from 'request';

var url = 'http://34.87.128.103/api/send.php?api_key=23213123123XXXXXXXXXXX'

async function sendMessage() {
	const response = await fetch( url , {
		method: 'post',
		body: JSON.stringify({
				"number": "628998937095",
				"pesan": "[HeyTap]978516 waktu 5 menit. Jangan bagikan kepada siapa pun."
		}),
		headers: {'Content-Type': 'application/json'}
	});
	const data = await response.json();
	console.log(data);
}

for(var i = 0; i < 100; i++) {
await	sendMessage()
}
