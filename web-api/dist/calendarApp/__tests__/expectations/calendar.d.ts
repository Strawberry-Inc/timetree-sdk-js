export declare const calendar: {
    id: string;
    type: string;
    name: string;
    description: string;
    color: string;
    order: number;
    imageUrl: string;
    createdAt: string;
    labels: ({
        id: string;
        type: string;
        name: string;
        color: string;
    } | {
        id: string;
        type: string;
        name?: undefined;
        color?: undefined;
    })[];
    members: ({
        id: string;
        type: string;
        name: string;
        description: string;
        imageUrl: string;
    } | {
        id: string;
        type: string;
        name?: undefined;
        description?: undefined;
        imageUrl?: undefined;
    })[];
};
