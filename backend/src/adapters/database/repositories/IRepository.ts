// TODO : make this a decorator
export default interface IRepository<T> {
    list        :   () => Promise<T[]>
    findById    :   (id : string) => Promise<T>
    findBy      :   (key : keyof T | string, value : any) => Promise<T>
    create      :   (entity : T) => Promise<T>
    update      :   (entity : T) => Promise<T>
    remove      :   (id : string) => Promise<boolean>    
}