/**
 * Buffer
 * 1.他是一个类数组对象，用于存储数据（存储的是二进制数据）
 * 2.Buffer的效率很高，存储读取速度很快，直接对计算机的内存进行操作。
 * 3.BUffer大小一旦确定无法修改
 * 4.每个元素占一个字节
 * 5.Buffer是node中的核心模块，无需下载，无需引入即可使用
 */


 // 1.创建一个buffer实例,即将被废弃,效率很低
 let buf = new Buffer(2);

 // 2.将一个字符串存储到buffer实例中
 let buf1 = Buffer.from('demo')

 // 3.效率一般
 let buf2 = Buffer.alloc('demo')

 // 4. 效率好，但是不安全
 let buf3 = Buffer.allocUnsafe('demo')
