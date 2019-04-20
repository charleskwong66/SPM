// pages/customer-info/customer_info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    customer: {
      id: "001",
      name: "杨美丽",
      gender: "女",
      age: 25,
      phone: "13288614700",
      wechatId: "yangmeili",
      addr: "广州市天河区龙洞",
      type: "试用阶段",
      startDate: "2019-04-01",
      advisor: "张三",
      skinDesc: "干性皮肤，有色斑。。。",
      product: "洗面奶，爽肤水，保湿霜"
    },
    tracingRecord: [{
      date: "2019-04-01",
      desc: "干燥脱皮，泛红",
      adjustment: "无",
      advisor: "张三"
    }]
  },
  //swiper切换时会调用
  pagechange: function(e) {
    if ("touch" === e.detail.source) {
      let currentPageIndex = this.data.currentIndex
      currentPageIndex = (currentPageIndex + 1) % 2
      this.setData({
        currentIndex: currentPageIndex
      })
    }
  },
  //用户点击tab时调用
  titleClick: function(e) {
    let currentPageIndex =
      this.setData({
        //拿到当前索引并动态改变
        currentIndex: e.currentTarget.dataset.idx
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  adddetial: function() {   
    wx.navigateTo({ 
      url: '/pages/customer-info/add_trace/add_trace',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
})