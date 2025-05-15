export interface Post {
    id: number;
    title: string;
    author: string;
    summary: string;
    favorite: boolean;
}
export const POSTS: Post[] = [
    {
        id: 1,
        title: 'First Post',
        author: 'Fahad',
        summary: 'Content of first post.',
        favorite: false
    },
    {
        id: 2,
        title: 'Second Post',
        author: 'Junaid',
        summary: 'Content of second post.',
        favorite: false
    },
    {
        id: 3,
        title: 'Third Post',
        author: 'Momin',
        summary: 'Content of third post.',
        favorite: true
    },

];
