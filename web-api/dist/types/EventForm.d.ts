declare type User = {
    readonly id: string;
    readonly type: "user";
};
declare type Attributes = {
    readonly calendarId: string;
    /** maxLength: 50 */
    readonly title: string;
    /** maxLength 10000 */
    readonly description?: string;
    /** maxLength 100 */
    readonly location?: string;
    readonly url?: string;
    readonly startTimezone?: string;
    readonly endTimezone?: string;
    readonly label: {
        readonly id: string;
        readonly type: "label";
    };
    readonly attendees?: readonly User[];
};
declare type ScheduleForm = Attributes & {
    readonly category: "schedule";
    readonly allDay: boolean;
    readonly startAt: string;
    readonly endAt: string;
};
declare type KeepForm = Attributes & {
    readonly category: "keep";
    readonly allDay?: boolean;
    readonly startAt?: string;
    readonly endAt?: string;
};
export declare type EventForm = ScheduleForm | KeepForm;
export {};
