//#region Definición de tipos creados por el usuario (clases, enumeraciones, ...)
/**
 * Definición de una clase
 */
class Clase {
    public propiedadNumero: number;
    public propiedadString: string;
    public propiedadBooleana: boolean;
    public propiedadArray: Array<any>; // Array<any> es lo mismo que any[]
    // una tupla es un array con un número fijo de elementos y que pueden ser de distinto tipo
    public propiedadTupla: [number, string];
    public propiedadOpcional?: any;
    public propiedadFuncion: (arg: any) => (any);
    // sólo accesible desde una instancia de la clase Clase
    private propiedadPrivada: any;
    // sólo accesible desde una instancia de cualquier clase que extienda Clase
    protected propiedadProtected: any;

    constructor() {}
    
    // metodo con número de argumentos variables (mínimo dos, el resto de argumentos se guardan en un array)
    public metodo(arg0: any, arg1: any, ...rest: any[]): number {
        return rest.length;
    }
    // metodo sin return
    private metodoPrivado(): void {}
    protected metodoProtected(): boolean {
        return true;
    }
    public metodoArgumentosOpcionales(arg0?: any, arg1: any = {}): number {
        return 1;
    }
}

/**
 * Definición de una enumeración
 */
enum Enum {
    A, B, C, D,
}
//#endregion