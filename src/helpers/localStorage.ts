interface GetData {
    [key: string]: Array<string>;
  }
export const getLocalStorage=(keys:Array<string>) =>{
    const getData: GetData={}
    keys.forEach(key => {
        const itemFromLocalStorage = localStorage.getItem(key);
        getData[key] = itemFromLocalStorage ? JSON.parse(itemFromLocalStorage) : [];
    } )
return getData
}
interface SetData{
    key:string;
    value:Array<number>
}

export const setLocalStorage=(setData:SetData):void=>{
    localStorage.setItem(setData.key, JSON.stringify(setData.value))
}