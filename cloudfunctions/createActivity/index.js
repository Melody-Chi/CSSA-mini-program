// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:'dev-cssa-3gx7fzqk6ef42fa3',
})

const db = cloud.database({env: 'dev-cssa-3gx7fzqk6ef42fa3'})
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await db.collection("activity").add({
      data: event.data,
      });
  } catch(e) {
    console.error(e)
    return "error";
  }
}