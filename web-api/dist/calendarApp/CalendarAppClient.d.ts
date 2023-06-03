import { Activity, ActivityForm, Calendar, Event, EventForm, Label, Member } from "../types";
declare type CalendarAppClientOptions = {
    /** you can overwrite for testing purposes */
    readonly baseURL?: string;
    readonly timeout?: number;
};
declare type GetEventParams = {
    readonly eventId: string;
    readonly include?: {
        readonly creator?: boolean;
        readonly label?: boolean;
        readonly attendees?: boolean;
    };
};
declare type UpdateEventForm = EventForm & {
    readonly eventId: string;
};
declare type GetUpcomingEventsParams = {
    readonly timezone: string;
    /** The number of days to get. A range from 1 to 7 can be specified */
    readonly days?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
    readonly include?: IncludeOptions;
};
declare type IncludeOptions = {
    readonly labels?: boolean;
    readonly members?: boolean;
};
declare type DeleteEventParams = {
    readonly eventId: string;
};
declare type DeleteInstallationParams = {
    readonly installationId: string;
};
export declare class CalendarAppClient {
    private readonly api;
    constructor(accessToken: string, options?: CalendarAppClientOptions);
    deleteInstallation({ installationId, }: DeleteInstallationParams): Promise<import("axios").AxiosResponse<object>>;
    getCalendar(): Promise<Calendar>;
    getLabels(): Promise<readonly Label[]>;
    getMembers(): Promise<readonly Member[]>;
    getUpcomingEvents({ timezone, days, include, }: GetUpcomingEventsParams): Promise<readonly Event[]>;
    getEvent({ eventId }: GetEventParams): Promise<Event>;
    createEvent(eventForm: EventForm): Promise<Event>;
    updateEvent(updateEventForm: UpdateEventForm): Promise<Event>;
    deleteEvent({ eventId }: DeleteEventParams): Promise<import("axios").AxiosResponse<object>>;
    createActivity({ eventId, ...json }: ActivityForm): Promise<Activity>;
}
export {};
