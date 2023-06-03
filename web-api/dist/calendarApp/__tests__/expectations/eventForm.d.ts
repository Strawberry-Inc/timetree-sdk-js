export declare const eventForm: {
    data: {
        attributes: {
            category: string;
            title: string;
            all_day: boolean;
            start_at: string;
            start_timezone: string;
            end_at: string;
            end_timezone: string;
            description: string;
            location: string;
            url: string;
        };
        relationships: {
            label: {
                data: {
                    id: string;
                    type: string;
                };
            };
            attendees: {
                data: {
                    id: string;
                    type: string;
                }[];
            };
        };
    };
};
