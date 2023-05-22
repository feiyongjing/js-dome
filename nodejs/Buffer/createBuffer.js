// Buffer是缓冲区，也是内存中的一段空间，其实是一个数组每个元素占用1个字节
// Buffer存储的是二进制数据，需要使用unicode码对照，当然Ascii码是兼容unicode码的
// 以下是三种方式创建Buffer

// 1、alloc方式创建Buffer，参数是数组长度
// 注意allocUnsaf方式创建的Buffer内部的数据已经全部清理的归零了
let buf=Buffer.alloc(10)
console.log("alloc方式创建的buf",buf)

// 2、allocUnsafe方式创建Buffer，参数是数组长度
// 注意allocUnsafe方式创建的Buffer内部的数据是没有清理的旧数据，使用时需要注意
let buf1=Buffer.allocUnsafe(10)
console.log("allocUnsafe方式创建的buf",buf1)

// 3、from方式创建Buffer，参数是占用内存空间的数据，可以是字符串或是数组数据
let buf2=Buffer.from('hello')
console.log("from方式创建的buf,存储的是‘hello’",buf2)
console.log("根据索引获取Buffer数组中的元素，注意数据是二进制的，",buf2[0])

let buf3=Buffer.from([105,108,111,118,101,121,111,117])
console.log("from方式创建的buf,存储的是数组数据",buf3)
console.log("buffer内的数据转换为字符串，默认是utf-8",buf3.toString())

// 注意存放数据时不要超过255造成溢出，溢出的高位会直接丢弃
console.log("中文汉字的字节使用utf-8编码一般是3个字节，例如‘你好’是6个字节：",Buffer.from('你好'))