// insert ... 语句

const { Blog, User } = require("./model");

!(async function() {
  // 创建用户
  const zhangsan = await User.create({
    userName: "zhangsan",
    password: "123",
    nickName: "张三"
  });
  let zhangsanId = zhangsan.dataValues.id;
  console.log(":::::::::", zhangsan.dataValues);
  const lisi = await User.create({
    userName: "lisi",
    password: "123",
    nickName: "李四"
  });
  let lisiId = lisi.dataValues.id;
  const blog1 = await Blog.create({
    title: "标题1",
    content: "内容1",
    userId: zhangsanId
  });
  const blog2 = await Blog.create({
    title: "标题2",
    content: "内容2",
    userId: lisiId
  });
})();
