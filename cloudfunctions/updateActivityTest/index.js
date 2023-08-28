// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'dev-cssa-3gx7fzqk6ef42fa3'
})

const db = cloud.database({env: 'dev-cssa-3gx7fzqk6ef42fa3'})
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  const activity = db.collection("activity");
  console.log(event);
  try {
    return await activity.where({
      _id: event.id
    })
    .update({
      data: event.postForm,
    })
  } catch(e) {
    console.error(e)
  }
}