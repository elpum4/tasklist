export interface Task{
    id?: number, //Cuando creamos puede no venir el ID
    text: string,
    day: string,
    reminder: boolean;
}