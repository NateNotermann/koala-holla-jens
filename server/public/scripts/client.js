console.log('js');

$(document).ready(function () {
	console.log('JQ');
	// Establish Click Listeners
	setupClickListeners();
	// load existing koalas on page load
	getKoalas();
}); // end doc ready

function setupClickListeners() {
	$('#addButton').on('click', function () {
		// Nate - changed class to #addKoalaBtn
		console.log('in addButton on click');
		// get user input and put in an object
		// NOT WORKING YET :(
		// using a test object
		let koalaToSend = {
			name: 'testName',
			age: 'testName',
			gender: 'testName',
			readyForTransfer: 'testName',
			notes: 'testName',
		};
		// call saveKoala with the new obejct
		saveKoala(koalaToSend);
	});
}

function getKoalas() {
	console.log('in getKoalas');

	$.ajax({
		url: '/koalas',
		method: 'GET',
	})
		.then(function (response) {
			console.log('test GET response,', response);
			renderKoala(response);
		})
		.catch(function (error) {
			console.log(error);
			alert('Error in getKoalas');
		});
	console.log('end of getKoalas');

	// ajax call to server to get koalas
} // end getKoalas

function renderKoala(koalas) {
	// changed to render koalas
	console.log('in renderKoala', koalas);
	// ajax call to server to get koalas --  ignore this line
	$('#koalaInfo').empty();
	for (let koala of koalas) {
		console.log(koala);
		$('#koalaInfo').append(`
    <tr>
    <td>${koala.name}</td>
    <td>${koala.age}</td>
    <td>${koala.gender}</td>
    <td>${koala.ready_to_transfer}</td>
    <td>${koala.notes}</td>
    </tr>
    `);
	}
	$('input').val('');
}
