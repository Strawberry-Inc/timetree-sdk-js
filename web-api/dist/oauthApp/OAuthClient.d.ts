import { RetryOptions } from "../api";
import { Calendar, Label, Member, Event, User, Activity, EventForm, ActivityForm } from "../types";
declare type OAuthClientOptions = {
    /** you can overwrite for testing purposes */
    readonly baseURL?: string;
    readonly timeout?: number;
    readonly retry?: RetryOptions["retry"];
    readonly validateRetryable?: RetryOptions["validateRetryable"];
    readonly onRetry?: RetryOptions["onRetry"];
};
declare type IncludeOptions = {
    readonly labels?: boolean;
    readonly members?: boolean;
};
declare type GetUpcomingEventsParams = {
    readonly timezone: string;
    readonly calendarId: string;
    /** The number of days to get. A range from 1 to 7 can be specified */
    readonly days?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
    readonly include?: IncludeOptions;
};
declare type GetEventParams = {
    readonly calendarId: string;
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
declare type DeleteEventParams = {
    readonly calendarId: string;
    readonly eventId: string;
};
export declare class OAuthClient {
    private readonly api;
    constructor(accessToken: string, { retry, onRetry, validateRetryable, ...options }?: OAuthClientOptions);
    getUser(): Promise<User>;
    getCalendars(include?: IncludeOptions): Promise<readonly Calendar[]>;
    getCalendar(calendarId: string, include?: IncludeOptions): Promise<Calendar>;
    getLabels(calendarId: string): Promise<readonly Label[]>;
    getMembers(calendarId: string): Promise<readonly Member[]>;
    getUpcomingEvents({ calendarId, timezone, days, include, }: GetUpcomingEventsParams): Promise<readonly Event[]>;
    getEvent({ eventId, calendarId, include }: GetEventParams): Promise<Event>;
    createEvent({ calendarId, ...json }: EventForm): Promise<Event>;
    updateEvent({ calendarId, eventId, ...json }: UpdateEventForm): Promise<Event>;
    deleteEvent({ calendarId, eventId }: DeleteEventParams): Promise<import("axios").AxiosResponse<object>>;
    createActivity({ calendarId, eventId, ...json }: ActivityForm): Promise<Activity>;
}
export {};
