// 一个文件就是一个模块
function tiemo(){
    console.log("调用了贴膜函数")
}

function niejiao(){
    console.log("调用了捏脚函数")
}



// 暴露模块中的数据，方式一：对象
module.exports={
    tiemo,
    niejiao
}

// 暴露模块中的数据，方式二：一个个属性暴露
// exports.tiemo=tiemo
// exports.niejiao=niejiao

// 其实默认暴露的是一个空对象，module.exports和exports都是指向同一个对象
// 但是注意require导入模块时返回的是module.exports中的数据，而不是exports指向的对象，
// 即不能使用exports ={ tiemo } 暴露属性，这样会让exports指向的对象变化而module.exports指向的对象还是原来的空对象
// 当然exports.tiemo=tiemo 是操作的对象下属性的指向而不是操作exports的指向其他的对象
// module.exports = exports = {}


