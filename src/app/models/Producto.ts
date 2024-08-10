import { categoria } from "./Categoria";

export interface Productos{
    id:number;
    nombre: string;
    precio:number;
    stock:number;
    estado: boolean;
    categoria:categoria;
}