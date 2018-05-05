import React, { PureComponent } from 'react';
import {width,height} from './components/common/Dimensions'
import { StatusBar,View,BackHandler, Animated, Easing ,Image,StyleSheet} from 'react-native'
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  addNavigationHelpers,
  NavigationActions
} from 'react-navigation'
import { connect } from 'react-redux';
import JPushModule from 'jpush-react-native';


import Famous from './containers/Famous';
import Mine from './containers/Mine';  //我的
import MineAccount from './containers/MineAccount';//账户管理
import ReplaceTel from './containers/ReplaceTel';//更换手机号码
import ReplaceTelFinish from './containers/ReplaceTelFinish';//更换手机号码完成
import ReplaceTelNext from './containers/ReplaceTelNext';//更换手机号码下一步
import MineIntegral from './containers/MineIntegral'; //我的积分
import MineIntegralDetails from './containers/MineIntegralDetails';  //我的积分详情
import MineAddress from './containers/MineAddress';         //我的地址
import MineCompany from './containers/MineCompany';         //我的小区单位
import MineAddressAdd from './containers/MineAddressAdd';  //添加地址
import MyBill from './containers/MyBill';  //我的账单
import MyRepair from './containers/MyRepair';  //我的报修
import WorkOrderDetail from './containers/WorkOrderDetail';  //工单详情
import WorkOrderState from './containers/WorkOrderState';  //工单状态
import ChargesDetails from './containers/ChargesDetails';  //费用明细
import MyComplaint from './containers/MyComplaint'; //我的投诉
import MyComplaintDetail from './containers/MyComplaintDetail'; //投诉单详情
import MySuggest from './containers/MySuggest'; //我的建议
import MyInquiries from './containers/MyInquiries'; //我的问询
import MySuggestDetail from './containers/MySuggestDetail'; //建议单详情
import MyInquiriesDetail from './containers/MyInquiriesDetail'; //问询单详情
import MyVote from './containers/MyVote'; //我的投票
import MyActivity from './containers/MyActivity'; //我的活动
import MyInvestigation from './containers/MyInvestigation'; //我的调查
import MySetting from './containers/MySetting'; //设置
import MyOrder from './containers/MyOrder'; //我的订单
import MyOrderDetail from './containers/MyOrderDetail'; //我的订单详情
import MyOrderLogisticsDetails from './containers/MyOrderLogisticsDetails'; //我的订单物流详情
import About from './containers/About'; //关于中科慧勤
import ModifyPassword from './containers/ModifyPassword'; //修改密码
import ForgotPassword from './containers/ForgotPassword'; //忘记密码
import ForgotPasswordNext from './containers/ForgotPasswordNext'; //忘记密码下一步
import LoginPassword from './containers/LoginPassword'; //密码登录
import LoginCode from './containers/LoginCode'; //验证码登录
import Register from './containers/Register'; //注册
import RegisterNext from './containers/RegisterNext'; //注册下一步

import Matter from './containers/Matter'; //事项
import MessageNotice from './containers/Message/Main'; //消息公告
import MessageNoticeDetail from './containers/Message/NoticeDetail'//消息详情

import RepairWorkDetail from './containers/RepairWorkDetail'; //报修工作查看
import ComplaintWorkDetail from './containers/ComplaintWorkDetail'; //投诉工作查看
import SuggestWorkDetail from './containers/SuggestWorkDetail'; //建议工作查看
import InquiriesWorkDetail from './containers/InquiriesWorkDetail'; //问询工作查看
import TodayCost from './containers/TodayCost'; //今日费用
import RepairCostList from './containers/RepairCostList'; //维修结算单
import RepairCostListDetail from './containers/RepairCostListDetail'; //维修结算单详情
import StatisticalReport from './containers/StatisticalReport'; //统计报表
import MineCompanyAdd from './containers/MineCompanyAdd' //所在单位小区


import CommodityDetails from './containers/CommodityDetails'; //商品详情
import ExchangeConfirmation from './containers/ExchangeConfirmation'; //兑换确认
import PaySuccess from './containers/PaySuccess'; //提交成功
import IntegralMall from './containers/IntegralMall'; //积分商城
import Activity from './containers/Activity'; //活动
import ActivityDetail from './containers/ActivityDetail'; //活动详情
import Vote from './containers/Vote'; //投票
import VoteDetail from './containers/VoteDetail'; //投票详情
import VoteResult from './containers/VoteResult'; //投票结果
import Questionnaire from './containers/Questionnaire'; //调查问卷
import QuestionnaireDetail from './containers/QuestionnaireDetail'; //调查问卷详情
import QuestionnaireResult from './containers/QuestionnaireResult'; //调查问卷结果
import ApplyRepair from './containers/ApplyRepair'; //申请报修
import SelectPlace from './containers/SelectPlace'//选择地址
import ApplySuccess from './containers/ApplySuccess'; //提交成功
import ApplyInquiries from './containers/ApplyInquiries'; //申请问询
import ApplySuggest from './containers/ApplySuggest'; //申请建议
import ApplyComplaint from './containers/ApplyComplaint'; //申请投诉
import ApplyComplaintType from './containers/ApplyComplaintType'; //申请投诉类型
import ApplyRepairMyRepair from './containers/ApplyRepairMyRepair';  //由投诉关联工单号进入我的报修
import BootPage from './containers/BootPage';//引导页
import Repair from './containers/Repair';//报修
import MaintenanceTeam from './containers/MaintenanceTeam';//小队
import MaintenanceWorker from './containers/MaintenanceWorker';//个人维修工
import SelectedTeamWorker from './containers/SelectedTeamWorker';//已选小队维修工

import DispatchDetail from './containers/DispatchDetail'//未派工单详情


import WorkOrderApplyModal from './components/workOrder/WorkOrderApplyModal'; //报修支付
import workOrderDetailAppraiseModal from './components/workOrderDetail/workOrderDetailAppraiseModal'; //报修支付
import CacheCleanup from './components/setting/CacheCleanup'; //清理缓存中
import Logout from './components/setting/Logout';//确认退出登录
import ForgotPasswordJump from './components/setting/ForgotPasswordJump'; //忘记密码跳转
import CacheCleanupSuccess from './components/setting/CacheCleanupSuccess'; //清理缓存成功
import PasswordFail from './components/setting/PasswordFail';//修改密码失败
import PasswordSuccess from './components/setting/PasswordSuccess'; //修改密码成功
import MatterWork from './components/matter/MatterWork'; //事项-查看工作
import PromptModal from './components/exchangeConfirmation/PromptModal'; //首页-兑换确认-积分不足
import PaymentMethodModal from './components/exchangeConfirmation/PaymentMethodModal'; //首页-兑换确认-选择支付方式
import Entering from './components/applyRepair/Entering'; //正在输入
import AccessCamera from './components/applyRepair/AccessCamera'; //打开相册
import AccessMicrophone from './components/applyRepair/AccessMicrophone'; //打开麦克风
import AllEvaluation from './containers/AllEvaluation';
import AllComplaint from './containers/AllComplaint';
import EvaluationDetails from './containers/EvaluationDetails'


import Account from './containers/Account.js'
import Detail from './containers/Detail'
const LoginRend = TabNavigator({
    LoginCode:{
        screen: LoginCode ,
    },
    LoginPassword:{
        screen: LoginPassword ,
    }
  },
  {
    animationEnabled: true, // 切换页面时是否有动画效果
    swipeEnabled: true, // 是否可以左右滑动切换tab
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions:{
        style: {
              height:0
          },
      },
    lazy:true,
  }
)
const NavTopRend = TabNavigator({
  Famous: {
    screen: Famous ,
    path:"app/famous",
    navigationOptions: {  // 也可以写在组件的static navigationOptions内
        tabBarLabel: '首页',
        tabBarIcon: ({tintColor,focused}) => (!focused?<Image source={require('./images/homePage_b.png')} style={styles.navIcon}/> :<Image source={require('./images/homePage_a.png')} style={styles.navIcon}/>),
        },
    },

Matter: {
    screen: Matter ,
    path:"app/matter",
    navigationOptions: {  // 也可以写在组件的static navigationOptions内
      tabBarLabel: '事项',
      tabBarIcon: ({tintColor,focused}) => (!focused?<Image source={require('./images/matter_b.png')} style={styles.navIcon}/> :<Image source={require('./images/matter_a.png')} style={styles.navIcon}/>),
    },
  },

Mine:{
      screen: Mine ,
      path:"app/my",
      navigationOptions: {  // 也可以写在组件的static navigationOptions内
        tabBarLabel: '我的',
        tabBarIcon: ({tintColor,focused}) => (!focused?<Image source={require('./images/mine_b.png')} style={styles.navIcon}/> :<Image source={require('./images/mine_a.png')} style={styles.navIcon}/>),
      },
  },

},
{
  animationEnabled: false, // 切换页面时是否有动画效果
  tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
  swipeEnabled: false, // 是否可以左右滑动切换tab
  backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
  lazy:true,
  tabBarOptions: {
      activeTintColor: '#5986ff', // 文字和图片选中颜色
      inactiveTintColor: '#999999', // 文字和图片未选中颜色
      showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
      indicatorStyle: {
          height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
      },
      activeBackgroundColor:"#fff",
      inactiveBackgroundColor:"#fff",
      style: {
          backgroundColor: '#ffffff', // TabBar 背景色
          height:100*width/750,
          // alignItems:"center",
          // justifyContent:"center",
      },
      labelStyle: {
          fontSize: 9, // 文字大小
          marginTop:0,

      },
  },
})


const AppNavigator = StackNavigator(
  {
    BootPage:{
        screen: BootPage,
        navigationOptions:{
        header:null,
            }
        },
    Matter: {
        screen: NavTopRend,
        path:"app/matter",
          navigationOptions:{
              header:null,
          }
      },
    Famous: {
        screen: NavTopRend,
        path:"app/famous",
            navigationOptions:{
                header:null,
            }
    },
    Mine: {
        screen: NavTopRend,
        path:"app/my",
            navigationOptions:{
                header:null,
            }
    },
    MineAccount:{
        screen: MineAccount,
            navigationOptions:{
                header:null,
            }
    },

    ReplaceTel: {
           screen: ReplaceTel,
           navigationOptions:{
              header:null,
            }
        },
    ReplaceTelFinish: {
          screen: ReplaceTelFinish,
          navigationOptions:{
              header:null,
          }
      },
    ReplaceTelNext: {
          screen: ReplaceTelNext,
          navigationOptions:{
              header:null,
          }
       },
    MineIntegral: {
           screen: MineIntegral,
           navigationOptions:{
               header:null,
           }
       },
    MineIntegralDetails: {
           screen: MineIntegralDetails,
           navigationOptions:{
               header:null,
           }
        },
    MineAddress: {
             screen: MineAddress,
             navigationOptions:{
                 header:null,
             }
          },
    MineCompany: {
           screen: MineCompany,
           navigationOptions:{
             header:null,
           }
        },
    MineAddressAdd: {
           screen: MineAddressAdd,
           navigationOptions:{
            header:null,
                 }
              },
    ChargesDetails: {
            screen: ChargesDetails,
            navigationOptions:{
            header:null,
                  }
              },
    MyBill: {
            screen: MyBill,
            navigationOptions:{
            header:null,
                  }
              },
    MyComplaint: {
            screen: MyComplaint,
            navigationOptions:{
            header:null,
                }
              },
    MyRepair: {
            screen: MyRepair,
            navigationOptions:{
            header:null,
                    }
            },
    MyVote: {
            screen: MyVote,
            navigationOptions:{
            header:null,
                    }
            },
    WorkOrderDetail: {
            screen: WorkOrderDetail,
            navigationOptions:{
            header:null,
                }
            },
    WorkOrderState: {
            screen: WorkOrderState,
            navigationOptions:{
            header:null,
                  }
            },
    MyComplaintDetail: {
          screen: MyComplaintDetail,
          navigationOptions:{
          header:null,
            }
       },
    MySuggest: {
          screen: MySuggest,
          navigationOptions:{
          header:null,
            }
        },
    MyInquiries: {
          screen: MyInquiries,
          navigationOptions:{
          header:null,
            }
      },
    MyInquiriesDetail: {
          screen: MyInquiriesDetail,
          navigationOptions:{
          header:null,
                }
           },
    MySuggestDetail: {
          screen: MySuggestDetail,
          navigationOptions:{
          header:null,
            }
        },
    MyActivity: {
          screen: MyActivity,
          navigationOptions:{
          header:null,
          }
      },
    MyInvestigation: {
          screen: MyInvestigation,
          navigationOptions:{
          header:null,
          }
      },
    MySetting: {
          screen: MySetting,
          navigationOptions:{
          header:null,
            }
        },
    MyOrder: {
          screen: MyOrder,
          navigationOptions:{
          header:null,
          }
        },
    About: {
          screen: About,
          navigationOptions:{
          header:null,
          }
        },
    ModifyPassword: {
          screen: ModifyPassword,
          navigationOptions:{
          header:null,
          }
       },
       LoginPassword: {
           screen: LoginRend,
           navigationOptions:{
           header:null,
           }
       },
       LoginCode: {
        screen: LoginRend,
        navigationOptions:{
        header:null,
        }
    },
     ForgotPasswordNext: {
           screen: ForgotPasswordNext,
           navigationOptions:{
           header:null,
             }
         },
     ForgotPassword: {
           screen: ForgotPassword,
           navigationOptions:{
           header:null,
           }
         },
     Register: {
           screen: Register,
           navigationOptions:{
           header:null,
           }
         },
     RegisterNext: {
           screen: RegisterNext,
           navigationOptions:{
           header:null,
           }
        },
     MyOrderLogisticsDetails: {
           screen: MyOrderLogisticsDetails,
           navigationOptions:{
           header:null,
            }
        },
     MyOrderDetail: {
           screen: MyOrderDetail,
           navigationOptions:{
           header:null,
            }
        },
    WorkOrderApplyModal: {
        screen: WorkOrderApplyModal,
        navigationOptions:{
        header:null,
        }
      },
    workOrderDetailAppraiseModal: {
      screen: workOrderDetailAppraiseModal,
      navigationOptions:{
      header:null,
      }
    },
    CacheCleanupSuccess: {
          screen: CacheCleanupSuccess,
          navigationOptions:{
          header:null,
          }
        },
    Logout: {
          screen: Logout,
          navigationOptions:{
          header:null,
          }
        },
    CacheCleanup: {
          screen: CacheCleanup,
          navigationOptions:{
          header:null,
              }
            },
    ForgotPasswordJump: {
          screen: ForgotPasswordJump,
          navigationOptions:{
          header:null,
              }
          },
    PasswordFail: {
          screen: PasswordFail,
          navigationOptions:{
          header:null,
             }
        },
    PasswordSuccess: {
          screen: PasswordSuccess,
          navigationOptions:{
          header:null,
            }
        },
    MatterWork: {
          screen: MatterWork,
          navigationOptions:{
          header:null,
            }
        },
    MessageNotice: {
        screen: MessageNotice,
        navigationOptions:{
        header:null,
          }
        },
    RepairWorkDetail: {
        screen: RepairWorkDetail,
        navigationOptions:{
        header:null,
          }
        },
    SuggestWorkDetail: {
        screen: SuggestWorkDetail,
        navigationOptions:{
        header:null,
          }
        },
    ComplaintWorkDetail: {
        screen: ComplaintWorkDetail,
        navigationOptions:{
        header:null,
            }
        },
    InquiriesWorkDetail: {
        screen: InquiriesWorkDetail,
        navigationOptions:{
        header:null,
            }
        },
    TodayCost: {
        screen: TodayCost,
        navigationOptions:{
        header:null,
            }
        },
    RepairCostList: {
        screen: RepairCostList,
        navigationOptions:{
        header:null,
            }
        },
    RepairCostListDetail: {
        screen: RepairCostListDetail,
        navigationOptions:{
        header:null,
            }
        },
    StatisticalReport: {
        screen: StatisticalReport,
        navigationOptions:{
        header:null,
            }
        },
    CommodityDetails: {
        screen: CommodityDetails,
        navigationOptions:{
        header:null,
            }
        },
    ExchangeConfirmation: {
        screen: ExchangeConfirmation,
        navigationOptions:{
        header:null,
            }
        },
    PromptModal: {
        screen: PromptModal,
        navigationOptions:{
        header:null,
          }
        },
    PaymentMethodModal: {
        screen: PaymentMethodModal,
        navigationOptions:{
        header:null,
              }
            },
    PaySuccess: {
        screen: PaySuccess,
        navigationOptions:{
        header:null,
                }
            },
    IntegralMall: {
        screen: IntegralMall,
        navigationOptions:{
        header:null,
                }
            },
    Activity: {
        screen: Activity,
        navigationOptions:{
        header:null,
                }
            },
    ActivityDetail: {
        screen: ActivityDetail,
        navigationOptions:{
        header:null,
                }
            },
    VoteResult: {
        screen: VoteResult,
        navigationOptions:{
        header:null,
                }
            },
    VoteDetail: {
        screen: VoteDetail,
        navigationOptions:{
        header:null,
                }
            },
    Questionnaire: {
        screen: Questionnaire,
        navigationOptions:{
        header:null,
                }
            },
    QuestionnaireDetail: {
        screen: QuestionnaireDetail,
        navigationOptions:{
        header:null,
                }
            },
    QuestionnaireResult: {
        screen: QuestionnaireResult,
        navigationOptions:{
        header:null,
                }
            },
    Vote: {
        screen: Vote,
        navigationOptions:{
        header:null,
                }
            },
    ApplyRepair: {
        screen: ApplyRepair,
        navigationOptions:{
        header:null,
                }
            },
    Entering: {
        screen: Entering,
        navigationOptions:{
        header:null,
                }
            },
    AccessCamera: {
        screen: AccessCamera,
        navigationOptions:{
        header:null,
                }
            },
    AccessMicrophone: {
        screen: AccessMicrophone,
        navigationOptions:{
        header:null,
                }
            },
    ApplySuccess: {
        screen: ApplySuccess,
        navigationOptions:{
        header:null,
                }
            },
    ApplyInquiries: {
        screen: ApplyInquiries,
        navigationOptions:{
        header:null,
                }
            },
    ApplySuggest: {
        screen: ApplySuggest,
        navigationOptions:{
        header:null,
                }
            },
    ApplyComplaint: {
        screen: ApplyComplaint,
        navigationOptions:{
        header:null,
                }
            },
    ApplyComplaintType: {
        screen: ApplyComplaintType,
        navigationOptions:{
        header:null,
                }
            },
    ApplyRepairMyRepair: {
        screen: ApplyRepairMyRepair,
        navigationOptions:{
        header:null,
                }
            },
    Repair:{
        screen: Repair,
        navigationOptions:{
        header:null,
            }
        },
    MaintenanceWorker:{
        screen:MaintenanceWorker,
        navigationOptions:{
            header:null
        }
    },
    MaintenanceTeam:{
        screen:MaintenanceTeam,
        navigationOptions:{
            header:null
        }
    },
    SelectedTeamWorker:{
        screen:SelectedTeamWorker,
        navigationOptions:{
            header:null
        }
    },
    DispatchDetail:{
        screen:DispatchDetail,
        navigationOptions:{
            header:null
        }
    },
    MineCompanyAdd:{
        screen:MineCompanyAdd,
        navigationOptions:{
            header:null
        }
    },
    MessageNoticeDetail:{
        screen:MessageNoticeDetail,
        navigationOptions:{
            header:null
        }
    },
    Account:{
        screen:Account,
        navigationOptions:{
            header:null
        }
    },
    Detail:{
        screen:Detail,
        navigationOptions:{
            header:null
        }
    },
    SelectPlace:{
        screen:SelectPlace,
        navigationOptions:{
            header:null
        }
    },
    EvaluationDetails:{
        screen:EvaluationDetails,
        navigationOptions:{
            header:null
        }
    },
    AllEvaluation:{
        screen:AllEvaluation,
        navigationOptions:{
            header:null
        }
    },
    AllComplaint:{
        screen:AllComplaint,
        navigationOptions:{
            header:null
        }
    }
    //StatisticalReport  ApplyRepair SelectPlace  Account  StatisticalReport  InquiriesWorkDetail  ComplaintWorkDetail  SuggestWorkDetail  WorkOrderDetail
  },
  {
    initialRouteName:"Famous",
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps
        const { index } = scene

        const height = layout.initHeight
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        })

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        })

        return { opacity, transform: [{ translateY }] }
      },
    }),
  }
)

function getCurrentScreen(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getCurrentScreen(route)
  }
  return route.routeName
}

@connect(({ router }) => ({ router }))
class Router extends PureComponent {

    constructor(props) {
      super(props);
      this.state = {
        statusBarshow:false,
      }
    }
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
  }

  backHandle = () => {
    const currentScreen = getCurrentScreen(this.props.router)
    if (currentScreen === 'Famous') {
       return true
    }
    if (currentScreen !== 'Mine') {
      this.props.dispatch(NavigationActions.back())
         return true
    }
    if(currentScreen !== 'Matter'){
        return true
    }
    return false
  }

  render() {
    const { dispatch, router } = this.props
    const navigation = addNavigationHelpers({ dispatch, state: router })
    return (
        <View style={{flex:1}}>
             {this.state.statusBarshow?
               <View style={{height:StatusBar.currentHeight,backgroundColor:"transparent"}}>
                    <StatusBar
                        translucent={true}
                        backgroundColor={"transparent"}
                        barStyle="dark-content"
                    />
                </View>
             :null}
              <AppNavigator
                onNavigationStateChange={(prevState,currentState)=>{
                                const  currentScreen = getCurrentScreen(currentState)
                                const  prevScreen = getCurrentScreen(prevState);
                                if(currentScreen=="Mine"){
                                    this.setState({
                                        statusBarshow:false
                                    })
                                }else{
                                    this.setState({
                                        statusBarshow:true
                                    })
                                }
                    }}
                />
        </View>
    )
  }
}

export function routerReducer(state, action = {}) {
  return AppNavigator.router.getStateForAction(action, state)
}
const styles = StyleSheet.create({
  navIcon:{
    width: 22,
    height: 22
  }
});
export default Router
