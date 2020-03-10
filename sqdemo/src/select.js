// insert ... 语句

const { Blog, User } = require("./model");

!(async function() {
  // const zhangsan = await User.findOne({
  //   where: {
  //     userName: "zhangsan"
  //   }
  // });
  // console.log(":::::::::", zhangsan.dataValues);

  // const zhangsan1 = await User.findOne({
  //   attributes: ["userName", "nickName"],
  //   where: {
  //     userName: "lisi"
  //   }
  // });
  // console.log("：：：：：：：：：：：：：", zhangsan1.dataValues);

  // 连表查询1
  // const blogListWithUser = await Blog.findAndCountAll({
  //   order: [["id", "desc"]],
  //   include: [
  //     {
  //       model: User,
  //       attributes: ["userName", "nickName"],
  //       where: {
  //         userName: "zhangsan"
  //       }
  //     }
  //   ]
  // });
  // console.log(
  //   ":::::::::::::::::::::::::::::::::",
  //   blogListWithUser.count,
  //   blogListWithUser.rows.map(blog => {
  //     const blogval = blog.dataValues;
  //     console.log(blogval);
  //     blogval.user = blogval.user.dataValues;
  //     return blogval;
  //   })
  // );

  // 连表查询2
  const blogListWithUser = await User.findAndCountAll({
    attributes: ["userName", "nickName"],
    include: [
      {
        model: Blog
      }
    ]
  });
  blogListWithUser.rows.map(user => {
    user.dataValues.blogs.map(user1 => {
      console.log(user1.dataValues);
    });
  });
})();
