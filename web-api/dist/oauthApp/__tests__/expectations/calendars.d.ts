export declare const calendars: ({
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
        color: string;
        name: string;
    } | {
        id: string;
        type: string;
        color?: undefined;
        name?: undefined;
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
    relationships?: undefined;
} | {
    id: string;
    type: string;
    name: string;
    description: string;
    color: string;
    order: number;
    imageUrl: string;
    createdAt: string;
    relationships: {};
    labels?: undefined;
    members?: undefined;
})[];
