export declare const calendar: {
    data: {
        id: string;
        type: string;
        attributes: {
            name: string;
            description: string;
            color: string;
            order: number;
            image_url: string;
            created_at: string;
        };
        relationships: {
            labels: {
                data: {
                    id: string;
                    type: string;
                }[];
            };
            members: {
                data: {
                    id: string;
                    type: string;
                }[];
            };
        };
    };
    included: ({
        id: string;
        type: string;
        attributes: {
            name: string;
            color: string;
            description?: undefined;
            image_url?: undefined;
        };
    } | {
        id: string;
        type: string;
        attributes: {
            name: string;
            description: string;
            image_url: string;
            color?: undefined;
        };
    })[];
};
