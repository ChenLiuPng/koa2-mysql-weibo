/**
 * @description 连接 redis 的方法 get set
 * @author 陈柳鹏
 */

const redis = require("redis");
const { REDIS_CONF } = require("../conf/db");
// 创建客户端

const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host);
redisClient.on("error", err => {
  console.log("redis error" + err);
});

// set
/**
 *
 * @param {string} key 键
 * @param {string} val 值
 * @param {number} timeout 过期时间，单位 s
 */
function set(key, val, timeout = 60 * 60) {
  if (typeof val === "object") {
    val = JSON.stringify(val);
  }
  redisClient.set(key, val);
  redisClient.expire(key, timeout);
}
// get

/**
 *
 * @param {string} key 键
 */
function get(key) {
  const promise = new Promise((reslove, reject) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        reject(err);
        return;
      }
      if (val == null) {
        reslove(null);
        return;
      }
      try {
        reslove(JSON.parse(val));
      } catch (ex) {
        reslove(val);
      }
    });
  });
  return promise;
}

module.exports = {
  set,
  get
};
