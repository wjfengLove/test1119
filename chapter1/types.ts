let sex: 'male' | 'female';
sex = 'male';
sex = 'female';

let cm: boolean | string;
cm = true;
cm = "game"

let aa: number;
aa = 12;

let d: any;

d = 99;
d = 'sta';
d = true;

let e: unknown;

if (typeof cm === 'string') {
    e = cm;
}

// 类型断言
aa = e as number;
aa = <number>e;

// 返回空值
function game() :void{
}

// 永远没有返回值
function fn() :never {
    throw new Error('报错信息')
}

