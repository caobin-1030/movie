export default function send(ops) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: "https://douban.uieee.com/v2/movie/"+ops.url,
      methods: ops.methods || 'get',
      data: ops.data || {},
      header: {
        'Content-Type': 'application/xml'
      },
      success: resolve,
      fail: reject
    })
  })
}