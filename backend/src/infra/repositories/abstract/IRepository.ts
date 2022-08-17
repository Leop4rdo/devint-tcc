// TODO : make this a decorator
export default interface IRepository<T> {
    list        :   () => Promise<T[]>
    findById    :   (id : string) => Promise<T>
    findBy      :   (key : keyof T, value : any) => Promise<T>
    create      :   (entity : T) => Promise<T>
    update      :   (entity : T) => Promise<T>    
}