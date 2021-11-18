class City{
    cName: string = '';
    cLevel:  number = 1;

    // 构造函数
    constructor(name:string,level:number){
        this.cName = name;
        this.cLevel = level;
    }

    // 成员方法
    about() {
        console.log(`欢迎来到${this.cName},这里工作环境系数为：${this.cLevel}`);
    }
}

// 创建对象
let c1 = new City('绿城', 8);
c1.about();