// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
})

const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  const merchants = db.collection("merchants");
  try {
    return await merchants.where({
      _id: event.id
    })
    .update({
      data: event.data,
    })
  } catch(e) {
    console.error(e)
  }
}