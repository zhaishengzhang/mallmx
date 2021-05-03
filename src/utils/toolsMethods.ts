/**
 * @summary 该方法是将一个一维数组转换成一个二维数组, 每个二维数组有几个元素可以指定,
 * 主要是为了解决产品首页的产品通栏展示和两栏展示开发, 也可以用于其他类似数组处理
 * @name oneDim2AnyDim
 * @param {Array} arr, 对象类型一维数组
 * @param {Number} col, 二维数组内包含几个元素
 * @return {Array}, 返回一个二维对象数组
 * @example [1,2,3,4] => [[1,2],[3,4]]
 */

function oneDim2AnyDim(arr:any[]=[], col:number = 2):any[] {
     if(arr.length == 0){return []}

     let temArr:any[] = [];
     let _arr:any[] = [];
     arr.map((item:any,index:number)=>{
        _arr.push(item);
        
        if((index+1)%col == 0){
            temArr.push(_arr);
            _arr = [];
        }
     });

     if(_arr.length>0){
        temArr.push(_arr);
     }

     return temArr;
}

export {
    oneDim2AnyDim
}

