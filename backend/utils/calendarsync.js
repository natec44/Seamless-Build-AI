import { google } from 'googleapis';

export const syncToGoogleCalendar = async (eventDetails, oauth2Client) => {
  const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

  const event = {
    summary: eventDetails.title,
    description: eventDetails.description,
    start: { dateTime: eventDetails.startDate },
    end: { dateTime: eventDetails.endDate },
  };

  try {
    const res = await calendar.events.insert({
      calendarId: 'primary',
      resource: event,
    });
    return res.data;
  } catch (err) {
    throw new Error('Failed to sync with Google Calendar');
  }
};
