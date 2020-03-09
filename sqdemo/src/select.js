// insert ... 语句

const { Blog, User } = require("./model");

!(async function() {
  const zhangsan = await User.findOne({
    where: {
      userName: "zhangsan"
    }
  });
  console.log(":::::::::", zhangsan.dataValues);

  const zhangsan1 = await User.findOne({
    attributes: ["userName", "nickName"],
    where: {
      userName: "lisi"
    }
  });
  console.log("：：：：：：：：：：：：：", zhangsan1.dataValues);
})();
