export declare const event: {
    data: {
        id: string;
        type: string;
        attributes: {
            category: string;
            title: string;
            all_day: boolean;
            start_at: string;
            start_timezone: string;
            end_at: string;
            end_timezone: string;
            recurrences: never[];
            description: string;
            location: string;
            url: string;
            updated_at: string;
            created_at: string;
        };
        relationships: {
            creator: {
                data: {
                    id: string;
                    type: string;
                };
            };
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
