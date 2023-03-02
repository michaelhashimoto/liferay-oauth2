import React, {useState} from 'react';

function Authorize() {
	const [authUrl, setAuthUrl] = useState('');
	const [clientId, setClientId] = useState('');

	function handleAuthorize(event) {
		event.preventDefault();

		try {
			window.location.replace(
				authUrl + '?response_type=code&client_id=' + clientId
			);
		}
		catch (e) {
			throw new Error(e);
		}
	}

	const urlParams = new URLSearchParams(window.location.search);

	return (
		<div>
			<h2>Authorize</h2>
			<input
				onChange={client => setAuthUrl(client.target.value)}
				placeholder='Liferay Authorize URL'
				style={{width: '500px'}}
				type='text'
				value={authUrl}
			/>
			(e.g. http://localhost:8080/o/oauth2/authorize)
			<br />
			<input
				onChange={client => setClientId(client.target.value)}
				placeholder='Client ID'
				style={{width: '500px'}}
				type='text'
				value={clientId}
			/>
			<br />
			<form onSubmit={handleAuthorize}>
				<button type='onSubmit'>Authorize</button>
			</form>
			<br />
			Authorization code: {urlParams.get('code')}
		</div>
	);
}

export default Authorize;
