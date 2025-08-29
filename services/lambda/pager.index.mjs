import {SESClient, SendEmailCommand} from '@aws-sdk/client-ses';

const ses = new SESClient({});

const RESPONSE_HEADERS = {
	'Content-Type': 'application/json',
};

export const handler = async event => {
	try {
		if (event.requestContext?.http?.method !== 'POST') {
			return {
				statusCode: 405,
				headers: RESPONSE_HEADERS,
				body: JSON.stringify({
					error: 'Method not allowed.',
					message: 'We are never ever getting back together with this request.',
				}),
			};
		}

		if (!event.body) {
			return {
				statusCode: 400,
				headers: RESPONSE_HEADERS,
				body: JSON.stringify({
					error: "Missing request body, It's giving Blank Space.",
				}),
			};
		}

		let payload;
		try {
			payload = JSON.parse(event.body);
		} catch {
			return {
				statusCode: 400,
				headers: RESPONSE_HEADERS,
				body: JSON.stringify({
					error:
						'Body must be valid JSON, I remember it all too well—except your closing brace.',
				}),
			};
		}

		const msg = payload?.message;
		if (typeof msg !== 'string' || msg.trim().length === 0) {
			return {
				statusCode: 400,
				headers: RESPONSE_HEADERS,
				body: JSON.stringify({
					error: "Invalid payload: 'message' must be a non-empty string",
					message: 'Don’t blame me—send a ‘message’ with words',
				}),
			};
		}

		const from = process.env.EMAIL_FROM;
		const to = process.env.EMAIL_TO;
		if (!from || !to) {
			console.error('Missing EMAIL_FROM or EMAIL_TO environment variables');
			return {
				statusCode: 500,
				headers: RESPONSE_HEADERS,
				body: JSON.stringify({error: 'Server misconfiguration'}),
			};
		}

		const subject = "Someone paged you! - Tushar's Terminal App";
		const textBody = `You received a new message:\n\n${msg}`;

		const command = new SendEmailCommand({
			Source: from,
			Destination: {ToAddresses: [to]},
			Message: {
				Subject: {Data: subject, Charset: 'UTF-8'},
				Body: {
					Text: {Data: textBody, Charset: 'UTF-8'},
				},
			},
		});

		await ses.send(command);

		return {
			statusCode: 200,
			headers: RESPONSE_HEADERS,
			body: JSON.stringify({ok: true}),
		};
	} catch (err) {
		console.error('Error sending email:', err);
		return {
			statusCode: 500,
			headers: RESPONSE_HEADERS,
			body: JSON.stringify({error: 'Failed to send email'}),
		};
	}
};
