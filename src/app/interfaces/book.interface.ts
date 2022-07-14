export interface BookI {
    id: string;
    volumeInfo: {
        title: string;
        authors: Array<string>;
    }
}