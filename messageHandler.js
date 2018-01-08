

/**
 * Message that welcomes the user to the bot
 *
 * @param {string} apiUri - Hostname of the server.
 * @returns {object} - Message with welcome text and a button to start a new list.
 */
const mainMenu = () => {
	return {
		'attachment': {
			'type': 'template',
			'payload': {
				'template_type':'generic',
				'elements': [
					{
						'title': 'What would you like to do?',
						'buttons': [
							{
								'type': 'postback',
								'title': 'Search for a vehicle',
								'payload': 'searchVehicle'
							},
							{
								'type': 'postback',
								'title': 'Schedule appointment',
								'payload': 'scheduleAppointment'
							},
							{
								'type': 'postback',
								'title': 'Find your Toyota',
								'payload': 'findToyota'
							}
						]
					}
				]
			}
		}
	};
};


const welcomeMessage = () => {
	return {
		"text": "Hey Alex! Welcome to Beaverton Toyota. I can sift through all our inventory in seconds to find the car you need or schedule you a vehicle service appointment."
	}
}


module.exports = {
	mainMenu,
	welcomeMessage
}