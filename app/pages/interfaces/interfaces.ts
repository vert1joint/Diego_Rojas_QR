
export interface RespuestaToHeadLines{
    status: string;
    totalResults: number;
    articles: Article[];
}

export interface Article{
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface Source{
    id: string;
    name: string;
}



export interface RespuestaFeriados{
    status: string;
    data: Data[];
}

export interface Data{
    date: number;
    title: string;
    type: string;
    inalienable: boolean;
    extra: string;
}

//get,put,delete
export interface IAnimalitos{
    id:number;
    nombre:String;
    tipoMascota:String;
    raza:String;
}
//post
export interface IAnimalito{
    nombre:String;
    tipoMascota:String;
    raza:String;
}