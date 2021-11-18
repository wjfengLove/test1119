// 创建一个DataHelper类，负责操作localstorage
class DataHelper {
    dataKey: string;
    primaryKey: string

    // let dh = new DataHelper('plData','id');
    constructor(dataKey:string, primaryKey: string) {
        this.dataKey = dataKey;
        this.primaryKey = primaryKey;
    }

    readData():any{
        // 读取本地数据 根据dataKey
        let strData = localStorage.getItem(this.dataKey);
        // 将读取的json数组字符串转成数组对象
        // 返回数组对象
    }

}