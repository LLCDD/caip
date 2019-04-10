import Vue from 'vue'
import Router from 'vue-router'
import { getToken } from './util/token'

Vue.use(Router)

let router = new Router({
  // redirect重定向
  // meta 可以在页面中用$route.meta来获取里面的数据
  routes: [
    { path: '', redirect: '/login' },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "login" */ './components/login/login'),
      meta: {
        requiresAuth: false,
        bool: false
      }
    },
    // 忘记密码
    {
      path: '/announcement',
      name: 'announcement',
      component: () =>
        import(/* webpackChunkName: "announcement" */ './components/announcement/annmouncement.vue'),
      meta: {
        requiresAuth: false,
        header: true,
        footer: false,
        title: "店铺活动",
        fan: 1
      }
    },
    // Business details
    {
      path: '/Businessdetails',
      name: 'Businessdetails',
      component: () =>
        import(/* webpackChunkName: "Businessdetails" */ './components/Businessdetails/Businessdetails'),
      meta: {
        requiresAuth: false,
        header: true,
        footer: false,
        title: "商家详情",
        fan: 1
      }
    },
    // money 
    {
      path: '/money',
      name: 'money',
      component: () =>
        import(/* webpackChunkName: "Businessdetails" */ './components/money/money'),
      meta: {
        requiresAuth: false,
        header: true,
        footer: true,
        title: "钱包",
        fan: 0
      }
    },
    // football  足球的游戏规则
    {
      path: '/football',
      name: 'football',
      component: () =>
        import(/* webpackChunkName: "football" */ './components/football/football'),
      meta: {
        requiresAuth: false,
        header: false,
        footer: false,
        fan: 1
      },
      // hunhe
      children: [{ path: '', redirect: 'hunhe' }, {
        path: 'hunhe',
        name: 'hunhe',
        component: () =>
          import(/* webpackChunkName: "hemai" */ './components/type/hunhe.vue'),
        meta: {
          requiresAuth: false,
          header: false,
          footer: false,
          fan: 1
        }
      }, {
        path: 'pinfu',
        name: 'pinfu',
        component: () =>
          import(/* webpackChunkName: "hemai" */ './components/type/pinfu.vue'),
        meta: {
          requiresAuth: false,
          header: false,
          footer: false,
          fan: 1
        }
      }, {
        path: 'rangqiu',
        name: 'rangqiu',
        component: () =>
          import(/* webpackChunkName: "hemai" */ './components/type/rangqiu.vue'),
        meta: {
          requiresAuth: false,
          header: false,
          footer: false,
          fan: 1
        }
      }, {
        path: 'jinqiu',
        name: 'jinqiu',
        component: () =>
          import(/* webpackChunkName: "jinqiu" */ './components/type/jinqiu.vue'),
        meta: {
          requiresAuth: false,
          header: false,
          footer: false,
          fan: 1
        }
      }, {
        path: 'banchang',
        name: 'banchang',
        component: () =>
          import(/* webpackChunkName: "banchang" */ './components/type/banchang.vue'),
        meta: {
          requiresAuth: false,
          header: false,
          footer: false,
          fan: 1
        }
      }, {
        path: 'bifen',
        name: 'bifen',
        component: () =>
          import(/* webpackChunkName: "bifen" */ './components/type/bifen.vue'),
        meta: {
          requiresAuth: false,
          header: false,
          footer: false,
          fan: 1
        }
      }]
    },
    // apply  申请提现
    {
      path: '/apply',
      name: 'apply',
      component: () =>
        import(/* webpackChunkName: "apply" */ './components/apply/apply'),
      meta: {
        requiresAuth: false,
        header: true,
        footer: false,
        title: "申请提现",
        fan: 1
      }
    },
    // 工高详情
    {
      path: '/gdetails/:id',
      name: 'gdetails',
      component: () =>
        import(/* webpackChunkName: "apply" */ './components/gdetails/gdetails'),
      meta: {
        requiresAuth: false,
        header: true,
        footer: false,
        title: "公告详情",
        fan: 1
      }
    },
    // userinfo  用户信息  zuqiu
    {
      path: '/userinfo',
      name: 'userinfo',
      component: () =>
        import(/* webpackChunkName: "userinfo" */ './components/userinfo/userinfo.vue'),
      meta: {
        requiresAuth: false,
        header: false,
        footer: false,
        title: "申请提现",
        fan: 1
      }
    },
    // balance
    {
      path: '/balance',
      name: 'balance',
      component: () =>
        import(/* webpackChunkName: "balance" */ './components/balance/balance'),
      meta: {
        requiresAuth: false,
        header: true,
        footer: false,
        title: "余额充值",
        fan: 1
      }
    },
    {
      path: '/forget',
      name: 'forget',
      component: () =>
        import(/* webpackChunkName: "forget" */ './components/forget/forget'),
      meta: {
        requiresAuth: false,
        header: false,
        footer: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/register/register'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/index',
      name: 'index',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/index/index'),
      meta: {
        requiresAuth: false,
        title: "开仓放粮",
        header: true,
        footer: true
      }
    },
    {
      path: '/data',
      name: 'data',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/data/data'),
      meta: {
        requiresAuth: false,
        title: "关注",
        header: true,
        footer: false,
        fan: 1
      }
    },
    // advertising  修改密码
    {
      path: '/advertising',
      name: 'advertising',
      component: () =>
        import(/* webpackChunkName: "advertising" */ './components/advertising/advertising'),
      meta: {
        requiresAuth: false,
        title: "修改密码",
        header: true,
        footer: false,
        fan: 1
      }
    },
    {
      path: '/task',
      name: 'task',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/task/task'),
      meta: {
        requiresAuth: false,
        title: "记录",
        header: true,
        footer: true,
        ce: 1
      }
    },
    // team 最新消息
    {
      path: '/team',
      name: 'team',
      component: () =>
        import(/* webpackChunkName: "team" */ './components/team/team'),
      meta: {
        requiresAuth: false,
        title: "最新消息",
        header: true,
        footer: false,
        fan: 1
      }
    },
    // documentary  店内跟单
    {
      path: '/documentary',
      name: 'documentary',
      component: () =>
        import(/* webpackChunkName: "documentary" */ './components/documentary/documentary'),
      meta: {
        requiresAuth: false,
        title: "店内跟单",
        header: true,
        footer: false,
        fan: 1
      },
      children: [{ path: '', redirect: 'fmoney' }, {
        path: 'fmoney',
        name: 'fmoney',
        component: () =>
          import(/* webpackChunkName: "hemai" */ './components/fmoney/fmoney.vue'),
        meta: {
          requiresAuth: false,
          title: "店内合买",
          header: true,
          footer: false,
          fan: 1
        }
      }, {
        path: 'prople',
        name: 'prople',
        component: () =>
          import(/* webpackChunkName: "hemai" */ './components/prople/prople.vue'),
        meta: {
          requiresAuth: false,
          title: "店内合买",
          header: true,
          footer: false,
          fan: 1
        }
      },
      ]
    },
    // record  意见反馈
    {
      path: '/record',
      name: 'record',
      component: () =>
        import(/* webpackChunkName: "record" */ './components/record/record'),
      meta: {
        requiresAuth: false,
        title: "意见反馈",
        header: true,
        footer: false,
        fan: 1
      }
    },
    // chipped  店内合买
    {
      path: '/chipped',
      name: 'chipped',
      component: () =>
        import(/* webpackChunkName: "chipped" */ './components/chipped/chipped'),
      meta: {
        requiresAuth: false,
        title: "店内合买",
        header: true,
        footer: false,
        fan: 1
      },
      children: [{ path: '', redirect: 'hemai' }, {
        path: 'hemai',
        name: 'hemai',
        component: () =>
          import(/* webpackChunkName: "hemai" */ './components/hemai/hemai.vue'),
        meta: {
          requiresAuth: false,
          title: "店内合买",
          header: true,
          footer: false,
          fan: 1
        }
      }, {
        path: 'hemai1',
        name: 'hemai1',
        component: () =>
          import(/* webpackChunkName: "hemai" */ './components/hemai/hemai1.vue'),
        meta: {
          requiresAuth: false,
          title: "店内合买",
          header: true,
          footer: false,
          fan: 1
        }
      },
      ]
    },
    // card 修改资料
    {
      path: '/card',
      name: 'card',
      component: () =>
        import(/* webpackChunkName: "card" */ './components/card/card'),
      meta: {
        requiresAuth: false,
        title: "修改资料",
        header: true,
        footer: false,
        fan: 1
      }
    },
    // 竞彩篮球 basketball  personal
    {
      path: '/basketball',
      name: 'basketball',
      component: () =>
        import(/* webpackChunkName: "basketball" */ './components/basketball/basketball'),
      meta: {
        requiresAuth: false,
        title: "修改资料",
        header: true,
        footer: false,
        fan: 1
      }
    },
    // ------------------------------------------
    // 足球14场
    {
      path: '/zuqiu',
      name: 'zuqiu',
      component: () =>
        import(/* webpackChunkName: "card" */ './components/zuqiuchang/zuqiu'),
      meta: {
        requiresAuth: false,
        title: "足球14场",
        header: true, //头部
        footer: false, //底部
        fan: 1//这个返回按钮1显示 0隐藏
      }
    },
    // 任选9场
    {
      path: '/zuqiu2',
      name: 'zuqiu2',
      component: () =>
        import(/* webpackChunkName: "card" */ './components/zuqiuchang/zuqiu2'),
      meta: {
        requiresAuth: false,
        title: "任选9场",
        header: true, //头部
        footer: false, //底部
        fan: 1//这个返回按钮1显示 0隐藏
      }
    },
    //比分直播
    {
      path: '/zhibo',
      name: 'zhibo',
      component: () =>
        import(/* webpackChunkName: "card" */ './components/tiantian/zhibo'),
      meta: {
        requiresAuth: false,
        title: "比分直播",
        header: true, //头部
        footer: false, //底部
        fan: 1//这个返回按钮1显示 0隐藏
      },
      children: [{ path: '', redirect: 'guanzhu' }, {
        path: 'guanzhu',
        name: 'guanzhu',
        component: () =>
          import(/* webpackChunkName: "hemai" */ './components/tiantian/zhibo1.vue'),
        meta: {
          requiresAuth: false,
          title: "比分直播",
          header: true,
          footer: false,
          fan: 1
        }
      }, {
        path: 'zuqiu',
        name: 'zuqiu',
        component: () =>
          import(/* webpackChunkName: "hemai" */ './components/tiantian/zhibo2.vue'),
        meta: {
          requiresAuth: false,
          title: "比分直播",
          header: true,
          footer: false,
          fan: 1
        }
      },
      {
        path: 'lanqiu',
        name: 'lanqiu',
        component: () =>
          import(/* webpackChunkName: "hemai" */ './components/tiantian/zhibo3.vue'),
        meta: {
          requiresAuth: false,
          title: "比分直播",
          header: true,
          footer: false,
          fan: 1
        }
      },
      ]
    },
    // --------------------------------------------
    {
      path: '/personal',
      name: 'personal',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/personal/personal'),
      meta: {
        requiresAuth: false,
        footer: true
      }
    },
    // optional  自选详情
    {
      path: '/optional/:id',
      name: 'optional',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/optional/optional'),
      meta: {
        requiresAuth: false,
        footer: false,
        header: true,
        title: "自选详情",
        fan: 1
      }
    },
    // 发起跟单
    {
      path: '/gendan/:id',
      name: 'gendan',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/gendan/gendan'),
      meta: {
        requiresAuth: false,
        footer: false,
        header: true,
        title: "发起跟单",
        fan: 1
      }
    },
    // 发起合买  fahemai
    {
      path: '/fahemai/:id',
      name: 'fahemai',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/fahemai/fahemai'),
      meta: {
        requiresAuth: false,
        footer: false,
        header: true,
        title: "发起合买",
        fan: 1
      }
    },
    // 投注详情 tzxq
    {
      path: '/tzxq/:id',
      name: 'tzxq',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/tzxq/tzxq'),
      meta: {
        requiresAuth: false,
        footer: false,
        header: true,
        title: "投注详情",
        fan: 1
      }
    },
    // Documentary details  跟单详情
    {
      path: '/Documentarydetails/:id',
      name: 'Documentarydetails',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/Documentarydetails/Documentarydetails'),
      meta: {
        requiresAuth: false,
        footer: false,
        header: true,
        title: "跟单详情",
        fan: 1
      },
      children: [{ path: '', redirect: 'dingdan' }, {

        path: 'dingdan',
        name: 'dingdan',
        component: () =>
          import(/* webpackChunkName: "register" */ './components/chippedDetails/dingdan_xiang.vue'),
        meta: {
          requiresAuth: false,
          footer: false,
          header: true,
          title: "跟单详情",
          fan: 1
        }
      }]
    },
    // 奖金优化  youhua
    {
      path: '/youhua/:id',
      name: 'youhua',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/youhua/youhua'),
      meta: {
        requiresAuth: false,
        footer: false,
        header: true,
        title: "奖金优化",
        fan: 1
      },
      children: [{ path: '', redirect: 'averagebonus' },
      {
        path: 'averagebonus',
        name: 'averagebonus',
        component: () =>
          import(/* webpackChunkName: "averagebonus" */ './components/youhua/averagebonus'),
        meta: {
          requiresAuth: false,
          footer: false,
          header: true,
          title: "奖金优化",
          fan: 1
        },
      },
      // 合买
      {
        path: 'breakeven',
        name: 'breakeven',
        component: () =>
          import(/* webpackChunkName: "averagebonus" */ './components/youhua/breakeven'),
        meta: {
          requiresAuth: false,
          footer: false,
          header: true,
          title: "奖金优化",
          fan: 1
        },
      },
      {
        path: 'bonus',
        name: 'bonus',
        component: () =>
          import(/* webpackChunkName: "averagebonus" */ './components/youhua/bonus'),
        meta: {
          requiresAuth: false,
          footer: false,
          header: true,
          title: "奖金优化",
          fan: 1
        },
      }
      ]
    },
    // -----------------------------------------鹏 router
    {//合买详情
      path: '/xiangqing/:id',
      name: 'xiangqing',
      component: () =>
        import(/* webpackChunkName: "card" */ './components/chippedDetails/xiangqingbox'),
      meta: {
        requiresAuth: false,
        title: "合买详情",
        header: true, //头部
        footer: false, //底部
        fan: 1//这个返回按钮1显示 0隐藏
      },
      children: [{ path: '', redirect: 'dingdan' }, {  //redirect 跳转第一个路由的子组件 //订单详情
        path: 'dingdan',
        name: 'dingdan',
        component: () =>
          import(/* webpackChunkName: "hemai" */ './components/chippedDetails/dingdan_xiang.vue'),
        meta: {
          requiresAuth: false,
          title: "合买详情",
          header: true,
          footer: false,
          fan: 1
        }
      }, {//参与人详情
        path: 'canyu',
        name: 'canyu',
        component: () =>
          import(/* webpackChunkName: "hemai" */ './components/chippedDetails/canyu_xiang.vue'),
        meta: {
          requiresAuth: false,
          title: "合买详情",
          header: true,
          footer: false,
          fan: 1
        }
      },

      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  // console.log(to)
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (!getToken()) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    console.log(to.matched)
    next()
  }
})

export default router
