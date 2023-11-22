
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

//get,put,delet (usuario page registro docente)
export interface IDocentes{
    id:number;
    rut:String;
    nombre:String;
    apellido:String;
    correo:String;
    contrasena:String;
    asignatura1:String;
    asignatura2:String;
    sede:String;
    jornada:String;
}

//post
export interface IDocente{
    rut:String;
    nombre:String;
    apellido:String;
    correo:String;
    contrasena:String;
    asignatura1:String;
    asignatura2:String;
    sede:String;
    jornada:String;
}

//pagina iniciar/crear login GET
export interface Users{
    id: number;
    username: String;
    password: String;
    role: String;
    isactive: Boolean;
}

//get,put,delet (usuario page registro alumno)
export interface IAlumnos{
    id:number;
    rut:String;
    nombre:String;
    apellido:String;
    correo:String;
    contrasena:String;
    carrera:String;
    sede:String;
    jornada:String;
}

//post
export interface IAlumno{
    rut:String;
    nombre:String;
    apellido:String;
    correo:String;
    contrasena:String;
    carrera:String;
    sede:String;
    jornada:String;
}

//Generar Qr
export interface IQRs{
    id:number;
    contenido:String;
    nombreProfesor:String;
    correoProfesor:String;
    asignatura:String;
    fechaCreacion:String;
}


export interface IQR{
    contenido:String;
    nombreProfesor:String;
    correoProfesor:String;
    asignatura:String;
    fechaCreacion:String;
}