export function date2str(x,y) {
  var z = {
     y: x.getFullYear(),
     M: x.getMonth() + 1,
     d: x.getDate(),
     h: x.getHours(),
     m: x.getMinutes(),
     s: x.getSeconds()
  };
  return y.replace(/(y+|M+|d+|h+|m+|s+)/g, function(v) {
     return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1))).slice(-(v.length > 2 ? v.length : 2))
  });
}


const Constants = {};
Constants.regionoptions=[
    {
        "value": 2,
        "code": "110000000000",
        "label": "北京",
        "children": [
            {
                "value": 101,
                "code": "110100000000",
                "label": "市辖区",
                "children": [
                    {
                        "value": 2680,
                        "code": "110101000000",
                        "label": "东城区",
                        "children": null
                    },
                    {
                        "value": 2681,
                        "code": "110102000000",
                        "label": "西城区",
                        "children": null
                    },
                    {
                        "value": 2682,
                        "code": "110105000000",
                        "label": "朝阳区",
                        "children": null
                    },
                    {
                        "value": 2683,
                        "code": "110106000000",
                        "label": "丰台区",
                        "children": null
                    },
                    {
                        "value": 2684,
                        "code": "110107000000",
                        "label": "石景山区",
                        "children": null
                    },
                    {
                        "value": 2685,
                        "code": "110108000000",
                        "label": "海淀区",
                        "children": null
                    },
                    {
                        "value": 2686,
                        "code": "110109000000",
                        "label": "门头沟区",
                        "children": null
                    },
                    {
                        "value": 2687,
                        "code": "110111000000",
                        "label": "房山区",
                        "children": null
                    },
                    {
                        "value": 2688,
                        "code": "110112000000",
                        "label": "通州区",
                        "children": null
                    },
                    {
                        "value": 2689,
                        "code": "110113000000",
                        "label": "顺义区",
                        "children": null
                    },
                    {
                        "value": 2690,
                        "code": "110114000000",
                        "label": "昌平区",
                        "children": null
                    },
                    {
                        "value": 2691,
                        "code": "110115000000",
                        "label": "大兴区",
                        "children": null
                    },
                    {
                        "value": 2692,
                        "code": "110116000000",
                        "label": "怀柔区",
                        "children": null
                    },
                    {
                        "value": 2693,
                        "code": "110117000000",
                        "label": "平谷区",
                        "children": null
                    }
                ]
            },

            {
                "value": 102,
                "code": "110200000000",
                "label": "县",
                "children": [
                    {
                        "value": 2600,
                        "code": "110228000000",
                        "label": "密云县",
                        "children": null
                    },
                    {
                        "value": 2601,
                        "code": "110229000000",
                        "label": "延庆县",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "value": 3,
        "code": "120000000000",
        "label": "天津",
        "children": [
            {
                "value": 216,
                "code": "120100000000",
                "label": "市辖区",
                "children": [
                    {
                        "value": 649,
                        "code": "120101000000",
                        "label": "和平区",
                        "children": null
                    },
                    {
                        "value": 650,
                        "code": "120102000000",
                        "label": "河东区",
                        "children": null
                    },
                    {
                        "value": 651,
                        "code": "120103000000",
                        "label": "河西区",
                        "children": null
                    },
                    {
                        "value": 652,
                        "code": "120104000000",
                        "label": "南开区",
                        "children": null
                    },
                    {
                        "value": 653,
                        "code": "120105000000",
                        "label": "河北区",
                        "children": null
                    },
                    {
                        "value": 654,
                        "code": "120106000000",
                        "label": "红桥区",
                        "children": null
                    },
                    {
                        "value": 655,
                        "code": "120110000000",
                        "label": "东丽区",
                        "children": null
                    },
                    {
                        "value": 656,
                        "code": "120111000000",
                        "label": "西青区",
                        "children": null
                    },
                    {
                        "value": 657,
                        "code": "120112000000",
                        "label": "津南区",
                        "children": null
                    },
                    {
                        "value": 658,
                        "code": "120113000000",
                        "label": "北辰区",
                        "children": null
                    },
                    {
                        "value": 659,
                        "code": "120114000000",
                        "label": "武清区",
                        "children": null
                    },
                    {
                        "value": 660,
                        "code": "120115000000",
                        "label": "宝坻区",
                        "children": null
                    },
                    {
                        "value": 661,
                        "code": "120116000000",
                        "label": "滨海新区",
                        "children": null
                    }
                ]
            },
            {
                "value": 217,
                "code": "120200000000",
                "label": "县",
                "children": [
                    {
                        "value": 572,
                        "code": "120221000000",
                        "label": "宁河县",
                        "children": null
                    },
                    {
                        "value": 573,
                        "code": "120223000000",
                        "label": "静海县",
                        "children": null
                    },
                    {
                        "value": 574,
                        "code": "120225000000",
                        "label": "蓟县",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "value": 4,
        "code": "130000000000",
        "label": "河北",
        "children": [
            {
                "value": 176,
                "code": "130100000000",
                "label": "石家庄市",
                "children": [
                    {
                        "value": 1563,
                        "code": "130102000000",
                        "label": "长安区",
                        "children": null
                    },
                    {
                        "value": 1564,
                        "code": "130103000000",
                        "label": "桥东区",
                        "children": null
                    },
                    {
                        "value": 1565,
                        "code": "130104000000",
                        "label": "桥西区",
                        "children": null
                    },
                    {
                        "value": 1566,
                        "code": "130105000000",
                        "label": "新华区",
                        "children": null
                    },
                    {
                        "value": 1567,
                        "code": "130107000000",
                        "label": "井陉矿区",
                        "children": null
                    },
                    {
                        "value": 1568,
                        "code": "130108000000",
                        "label": "裕华区",
                        "children": null
                    },
                    {
                        "value": 1569,
                        "code": "130121000000",
                        "label": "井陉县",
                        "children": null
                    },
                    {
                        "value": 1570,
                        "code": "130123000000",
                        "label": "正定县",
                        "children": null
                    },
                    {
                        "value": 1571,
                        "code": "130124000000",
                        "label": "栾城县",
                        "children": null
                    },
                    {
                        "value": 1572,
                        "code": "130125000000",
                        "label": "行唐县",
                        "children": null
                    },
                    {
                        "value": 1573,
                        "code": "130126000000",
                        "label": "灵寿县",
                        "children": null
                    },
                    {
                        "value": 1574,
                        "code": "130127000000",
                        "label": "高邑县",
                        "children": null
                    },
                    {
                        "value": 1575,
                        "code": "130128000000",
                        "label": "深泽县",
                        "children": null
                    },
                    {
                        "value": 1576,
                        "code": "130129000000",
                        "label": "赞皇县",
                        "children": null
                    },
                    {
                        "value": 1577,
                        "code": "130130000000",
                        "label": "无极县",
                        "children": null
                    },
                    {
                        "value": 1578,
                        "code": "130131000000",
                        "label": "平山县",
                        "children": null
                    },
                    {
                        "value": 1579,
                        "code": "130132000000",
                        "label": "元氏县",
                        "children": null
                    },
                    {
                        "value": 1580,
                        "code": "130133000000",
                        "label": "赵县",
                        "children": null
                    },
                    {
                        "value": 1581,
                        "code": "130181000000",
                        "label": "辛集市",
                        "children": null
                    },
                    {
                        "value": 1582,
                        "code": "130182000000",
                        "label": "藁城市",
                        "children": null
                    },
                    {
                        "value": 1583,
                        "code": "130183000000",
                        "label": "晋州市",
                        "children": null
                    },
                    {
                        "value": 1584,
                        "code": "130184000000",
                        "label": "新乐市",
                        "children": null
                    },
                    {
                        "value": 1585,
                        "code": "130185000000",
                        "label": "鹿泉市",
                        "children": null
                    }
                ]
            },
            {
                "value": 177,
                "code": "130200000000",
                "label": "唐山市",
                "children": [
                    {
                        "value": 1445,
                        "code": "130202000000",
                        "label": "路南区",
                        "children": null
                    },
                    {
                        "value": 1446,
                        "code": "130203000000",
                        "label": "路北区",
                        "children": null
                    },
                    {
                        "value": 1447,
                        "code": "130204000000",
                        "label": "古冶区",
                        "children": null
                    },
                    {
                        "value": 1448,
                        "code": "130205000000",
                        "label": "开平区",
                        "children": null
                    },
                    {
                        "value": 1449,
                        "code": "130207000000",
                        "label": "丰南区",
                        "children": null
                    },
                    {
                        "value": 1450,
                        "code": "130208000000",
                        "label": "丰润区",
                        "children": null
                    },
                    {
                        "value": 1451,
                        "code": "130223000000",
                        "label": "滦县",
                        "children": null
                    },
                    {
                        "value": 1452,
                        "code": "130224000000",
                        "label": "滦南县",
                        "children": null
                    },
                    {
                        "value": 1453,
                        "code": "130225000000",
                        "label": "乐亭县",
                        "children": null
                    },
                    {
                        "value": 1454,
                        "code": "130227000000",
                        "label": "迁西县",
                        "children": null
                    },
                    {
                        "value": 1455,
                        "code": "130229000000",
                        "label": "玉田县",
                        "children": null
                    },
                    {
                        "value": 1456,
                        "code": "130230000000",
                        "label": "唐海县",
                        "children": null
                    },
                    {
                        "value": 1457,
                        "code": "130281000000",
                        "label": "遵化市",
                        "children": null
                    },
                    {
                        "value": 1458,
                        "code": "130283000000",
                        "label": "迁安市",
                        "children": null
                    }
                ]
            },
            {
                "value": 178,
                "code": "130300000000",
                "label": "秦皇岛市",
                "children": [
                    {
                        "value": 1372,
                        "code": "130302000000",
                        "label": "海港区",
                        "children": null
                    },
                    {
                        "value": 1373,
                        "code": "130303000000",
                        "label": "山海关区",
                        "children": null
                    },
                    {
                        "value": 1374,
                        "code": "130304000000",
                        "label": "北戴河区",
                        "children": null
                    },
                    {
                        "value": 1375,
                        "code": "130321000000",
                        "label": "青龙满族自治县",
                        "children": null
                    },
                    {
                        "value": 1376,
                        "code": "130322000000",
                        "label": "昌黎县",
                        "children": null
                    },
                    {
                        "value": 1377,
                        "code": "130323000000",
                        "label": "抚宁县",
                        "children": null
                    },
                    {
                        "value": 1378,
                        "code": "130324000000",
                        "label": "卢龙县",
                        "children": null
                    }
                ]
            },
            {
                "value": 179,
                "code": "130400000000",
                "label": "邯郸市",
                "children": [
                    {
                        "value": 1269,
                        "code": "130402000000",
                        "label": "邯山区",
                        "children": null
                    },
                    {
                        "value": 1270,
                        "code": "130403000000",
                        "label": "丛台区",
                        "children": null
                    },
                    {
                        "value": 1271,
                        "code": "130404000000",
                        "label": "复兴区",
                        "children": null
                    },
                    {
                        "value": 1272,
                        "code": "130406000000",
                        "label": "峰峰矿区",
                        "children": null
                    },
                    {
                        "value": 1273,
                        "code": "130421000000",
                        "label": "邯郸县",
                        "children": null
                    },
                    {
                        "value": 1274,
                        "code": "130423000000",
                        "label": "临漳县",
                        "children": null
                    },
                    {
                        "value": 1275,
                        "code": "130424000000",
                        "label": "成安县",
                        "children": null
                    },
                    {
                        "value": 1276,
                        "code": "130425000000",
                        "label": "大名县",
                        "children": null
                    },
                    {
                        "value": 1277,
                        "code": "130426000000",
                        "label": "涉县",
                        "children": null
                    },
                    {
                        "value": 1278,
                        "code": "130427000000",
                        "label": "磁县",
                        "children": null
                    },
                    {
                        "value": 1279,
                        "code": "130428000000",
                        "label": "肥乡县",
                        "children": null
                    },
                    {
                        "value": 1280,
                        "code": "130429000000",
                        "label": "永年县",
                        "children": null
                    },
                    {
                        "value": 1281,
                        "code": "130430000000",
                        "label": "邱县",
                        "children": null
                    },
                    {
                        "value": 1282,
                        "code": "130431000000",
                        "label": "鸡泽县",
                        "children": null
                    },
                    {
                        "value": 1283,
                        "code": "130432000000",
                        "label": "广平县",
                        "children": null
                    },
                    {
                        "value": 1284,
                        "code": "130433000000",
                        "label": "馆陶县",
                        "children": null
                    },
                    {
                        "value": 1285,
                        "code": "130434000000",
                        "label": "魏县",
                        "children": null
                    },
                    {
                        "value": 1286,
                        "code": "130435000000",
                        "label": "曲周县",
                        "children": null
                    },
                    {
                        "value": 1287,
                        "code": "130481000000",
                        "label": "武安市",
                        "children": null
                    }
                ]
            },
            {
                "value": 180,
                "code": "130500000000",
                "label": "邢台市",
                "children": [
                    {
                        "value": 1173,
                        "code": "130502000000",
                        "label": "桥东区",
                        "children": null
                    },
                    {
                        "value": 1174,
                        "code": "130503000000",
                        "label": "桥西区",
                        "children": null
                    },
                    {
                        "value": 1175,
                        "code": "130521000000",
                        "label": "邢台县",
                        "children": null
                    },
                    {
                        "value": 1176,
                        "code": "130522000000",
                        "label": "临城县",
                        "children": null
                    },
                    {
                        "value": 1177,
                        "code": "130523000000",
                        "label": "内丘县",
                        "children": null
                    },
                    {
                        "value": 1178,
                        "code": "130524000000",
                        "label": "柏乡县",
                        "children": null
                    },
                    {
                        "value": 1179,
                        "code": "130525000000",
                        "label": "隆尧县",
                        "children": null
                    },
                    {
                        "value": 1180,
                        "code": "130526000000",
                        "label": "任县",
                        "children": null
                    },
                    {
                        "value": 1181,
                        "code": "130527000000",
                        "label": "南和县",
                        "children": null
                    },
                    {
                        "value": 1182,
                        "code": "130528000000",
                        "label": "宁晋县",
                        "children": null
                    },
                    {
                        "value": 1183,
                        "code": "130529000000",
                        "label": "巨鹿县",
                        "children": null
                    },
                    {
                        "value": 1184,
                        "code": "130530000000",
                        "label": "新河县",
                        "children": null
                    },
                    {
                        "value": 1185,
                        "code": "130531000000",
                        "label": "广宗县",
                        "children": null
                    },
                    {
                        "value": 1186,
                        "code": "130532000000",
                        "label": "平乡县",
                        "children": null
                    },
                    {
                        "value": 1187,
                        "code": "130533000000",
                        "label": "威县",
                        "children": null
                    },
                    {
                        "value": 1188,
                        "code": "130534000000",
                        "label": "清河县",
                        "children": null
                    },
                    {
                        "value": 1189,
                        "code": "130535000000",
                        "label": "临西县",
                        "children": null
                    },
                    {
                        "value": 1190,
                        "code": "130581000000",
                        "label": "南宫市",
                        "children": null
                    },
                    {
                        "value": 1191,
                        "code": "130582000000",
                        "label": "沙河市",
                        "children": null
                    }
                ]
            },
            {
                "value": 181,
                "code": "130600000000",
                "label": "保定市",
                "children": [
                    {
                        "value": 1047,
                        "code": "130602000000",
                        "label": "新市区",
                        "children": null
                    },
                    {
                        "value": 1048,
                        "code": "130603000000",
                        "label": "北市区",
                        "children": null
                    },
                    {
                        "value": 1049,
                        "code": "130604000000",
                        "label": "南市区",
                        "children": null
                    },
                    {
                        "value": 1050,
                        "code": "130621000000",
                        "label": "满城县",
                        "children": null
                    },
                    {
                        "value": 1051,
                        "code": "130622000000",
                        "label": "清苑县",
                        "children": null
                    },
                    {
                        "value": 1052,
                        "code": "130623000000",
                        "label": "涞水县",
                        "children": null
                    },
                    {
                        "value": 1053,
                        "code": "130624000000",
                        "label": "阜平县",
                        "children": null
                    },
                    {
                        "value": 1054,
                        "code": "130625000000",
                        "label": "徐水县",
                        "children": null
                    },
                    {
                        "value": 1055,
                        "code": "130626000000",
                        "label": "定兴县",
                        "children": null
                    },
                    {
                        "value": 1056,
                        "code": "130627000000",
                        "label": "唐县",
                        "children": null
                    },
                    {
                        "value": 1057,
                        "code": "130628000000",
                        "label": "高阳县",
                        "children": null
                    },
                    {
                        "value": 1058,
                        "code": "130629000000",
                        "label": "容城县",
                        "children": null
                    },
                    {
                        "value": 1059,
                        "code": "130630000000",
                        "label": "涞源县",
                        "children": null
                    },
                    {
                        "value": 1060,
                        "code": "130631000000",
                        "label": "望都县",
                        "children": null
                    },
                    {
                        "value": 1061,
                        "code": "130632000000",
                        "label": "安新县",
                        "children": null
                    },
                    {
                        "value": 1062,
                        "code": "130633000000",
                        "label": "易县",
                        "children": null
                    },
                    {
                        "value": 1063,
                        "code": "130634000000",
                        "label": "曲阳县",
                        "children": null
                    },
                    {
                        "value": 1064,
                        "code": "130635000000",
                        "label": "蠡县",
                        "children": null
                    },
                    {
                        "value": 1065,
                        "code": "130636000000",
                        "label": "顺平县",
                        "children": null
                    },
                    {
                        "value": 1066,
                        "code": "130637000000",
                        "label": "博野县",
                        "children": null
                    },
                    {
                        "value": 1067,
                        "code": "130638000000",
                        "label": "雄县",
                        "children": null
                    },
                    {
                        "value": 1068,
                        "code": "130681000000",
                        "label": "涿州市",
                        "children": null
                    },
                    {
                        "value": 1069,
                        "code": "130682000000",
                        "label": "定州市",
                        "children": null
                    },
                    {
                        "value": 1070,
                        "code": "130683000000",
                        "label": "安国市",
                        "children": null
                    },
                    {
                        "value": 1071,
                        "code": "130684000000",
                        "label": "高碑店市",
                        "children": null
                    }
                ]
            },
            {
                "value": 182,
                "code": "130700000000",
                "label": "张家口市",
                "children": [
                    {
                        "value": 925,
                        "code": "130702000000",
                        "label": "桥东区",
                        "children": null
                    },
                    {
                        "value": 926,
                        "code": "130703000000",
                        "label": "桥西区",
                        "children": null
                    },
                    {
                        "value": 927,
                        "code": "130705000000",
                        "label": "宣化区",
                        "children": null
                    },
                    {
                        "value": 928,
                        "code": "130706000000",
                        "label": "下花园区",
                        "children": null
                    },
                    {
                        "value": 929,
                        "code": "130721000000",
                        "label": "宣化县",
                        "children": null
                    },
                    {
                        "value": 930,
                        "code": "130722000000",
                        "label": "张北县",
                        "children": null
                    },
                    {
                        "value": 931,
                        "code": "130723000000",
                        "label": "康保县",
                        "children": null
                    },
                    {
                        "value": 932,
                        "code": "130724000000",
                        "label": "沽源县",
                        "children": null
                    },
                    {
                        "value": 933,
                        "code": "130725000000",
                        "label": "尚义县",
                        "children": null
                    },
                    {
                        "value": 934,
                        "code": "130726000000",
                        "label": "蔚县",
                        "children": null
                    },
                    {
                        "value": 935,
                        "code": "130727000000",
                        "label": "阳原县",
                        "children": null
                    },
                    {
                        "value": 936,
                        "code": "130728000000",
                        "label": "怀安县",
                        "children": null
                    },
                    {
                        "value": 937,
                        "code": "130729000000",
                        "label": "万全县",
                        "children": null
                    },
                    {
                        "value": 938,
                        "code": "130730000000",
                        "label": "怀来县",
                        "children": null
                    },
                    {
                        "value": 939,
                        "code": "130731000000",
                        "label": "涿鹿县",
                        "children": null
                    },
                    {
                        "value": 940,
                        "code": "130732000000",
                        "label": "赤城县",
                        "children": null
                    },
                    {
                        "value": 941,
                        "code": "130733000000",
                        "label": "崇礼县",
                        "children": null
                    }
                ]
            },
            {
                "value": 183,
                "code": "130800000000",
                "label": "承德市",
                "children": [
                    {
                        "value": 443,
                        "code": "130802000000",
                        "label": "双桥区",
                        "children": null
                    },
                    {
                        "value": 444,
                        "code": "130803000000",
                        "label": "双滦区",
                        "children": null
                    },
                    {
                        "value": 445,
                        "code": "130804000000",
                        "label": "鹰手营子矿区",
                        "children": null
                    },
                    {
                        "value": 446,
                        "code": "130821000000",
                        "label": "承德县",
                        "children": null
                    },
                    {
                        "value": 447,
                        "code": "130822000000",
                        "label": "兴隆县",
                        "children": null
                    },
                    {
                        "value": 448,
                        "code": "130823000000",
                        "label": "平泉县",
                        "children": null
                    },
                    {
                        "value": 449,
                        "code": "130824000000",
                        "label": "滦平县",
                        "children": null
                    },
                    {
                        "value": 450,
                        "code": "130825000000",
                        "label": "隆化县",
                        "children": null
                    },
                    {
                        "value": 451,
                        "code": "130826000000",
                        "label": "丰宁满族自治县",
                        "children": null
                    },
                    {
                        "value": 452,
                        "code": "130827000000",
                        "label": "宽城满族自治县",
                        "children": null
                    },
                    {
                        "value": 453,
                        "code": "130828000000",
                        "label": "围场满族蒙古族自治县",
                        "children": null
                    }
                ]
            },
            {
                "value": 184,
                "code": "130900000000",
                "label": "沧州市",
                "children": [
                    {
                        "value": 3214,
                        "code": "130902000000",
                        "label": "新华区",
                        "children": null
                    },
                    {
                        "value": 3215,
                        "code": "130903000000",
                        "label": "运河区",
                        "children": null
                    },
                    {
                        "value": 3216,
                        "code": "130921000000",
                        "label": "沧县",
                        "children": null
                    },
                    {
                        "value": 3217,
                        "code": "130922000000",
                        "label": "青县",
                        "children": null
                    },
                    {
                        "value": 3218,
                        "code": "130923000000",
                        "label": "东光县",
                        "children": null
                    },
                    {
                        "value": 3219,
                        "code": "130924000000",
                        "label": "海兴县",
                        "children": null
                    },
                    {
                        "value": 3220,
                        "code": "130925000000",
                        "label": "盐山县",
                        "children": null
                    },
                    {
                        "value": 3221,
                        "code": "130926000000",
                        "label": "肃宁县",
                        "children": null
                    },
                    {
                        "value": 3222,
                        "code": "130927000000",
                        "label": "南皮县",
                        "children": null
                    },
                    {
                        "value": 3223,
                        "code": "130928000000",
                        "label": "吴桥县",
                        "children": null
                    },
                    {
                        "value": 3224,
                        "code": "130929000000",
                        "label": "献县",
                        "children": null
                    },
                    {
                        "value": 3225,
                        "code": "130930000000",
                        "label": "孟村回族自治县",
                        "children": null
                    },
                    {
                        "value": 3226,
                        "code": "130981000000",
                        "label": "泊头市",
                        "children": null
                    },
                    {
                        "value": 3227,
                        "code": "130982000000",
                        "label": "任丘市",
                        "children": null
                    },
                    {
                        "value": 3228,
                        "code": "130983000000",
                        "label": "黄骅市",
                        "children": null
                    },
                    {
                        "value": 3229,
                        "code": "130984000000",
                        "label": "河间市",
                        "children": null
                    }
                ]
            },
            {
                "value": 185,
                "code": "131000000000",
                "label": "廊坊市",
                "children": [
                    {
                        "value": 3006,
                        "code": "131002000000",
                        "label": "安次区",
                        "children": null
                    },
                    {
                        "value": 3007,
                        "code": "131003000000",
                        "label": "广阳区",
                        "children": null
                    },
                    {
                        "value": 3008,
                        "code": "131022000000",
                        "label": "固安县",
                        "children": null
                    },
                    {
                        "value": 3009,
                        "code": "131023000000",
                        "label": "永清县",
                        "children": null
                    },
                    {
                        "value": 3010,
                        "code": "131024000000",
                        "label": "香河县",
                        "children": null
                    },
                    {
                        "value": 3011,
                        "code": "131025000000",
                        "label": "大城县",
                        "children": null
                    },
                    {
                        "value": 3012,
                        "code": "131026000000",
                        "label": "文安县",
                        "children": null
                    },
                    {
                        "value": 3013,
                        "code": "131028000000",
                        "label": "大厂回族自治县",
                        "children": null
                    },
                    {
                        "value": 3014,
                        "code": "131081000000",
                        "label": "霸州市",
                        "children": null
                    },
                    {
                        "value": 3015,
                        "code": "131082000000",
                        "label": "三河市",
                        "children": null
                    }
                ]
            },
            {
                "value": 186,
                "code": "131100000000",
                "label": "衡水市",
                "children": [
                    {
                        "value": 2910,
                        "code": "131102000000",
                        "label": "桃城区",
                        "children": null
                    },
                    {
                        "value": 2911,
                        "code": "131121000000",
                        "label": "枣强县",
                        "children": null
                    },
                    {
                        "value": 2912,
                        "code": "131122000000",
                        "label": "武邑县",
                        "children": null
                    },
                    {
                        "value": 2913,
                        "code": "131123000000",
                        "label": "武强县",
                        "children": null
                    },
                    {
                        "value": 2914,
                        "code": "131124000000",
                        "label": "饶阳县",
                        "children": null
                    },
                    {
                        "value": 2915,
                        "code": "131125000000",
                        "label": "安平县",
                        "children": null
                    },
                    {
                        "value": 2916,
                        "code": "131126000000",
                        "label": "故城县",
                        "children": null
                    },
                    {
                        "value": 2917,
                        "code": "131127000000",
                        "label": "景县",
                        "children": null
                    },
                    {
                        "value": 2918,
                        "code": "131128000000",
                        "label": "阜城县",
                        "children": null
                    },
                    {
                        "value": 2919,
                        "code": "131181000000",
                        "label": "冀州市",
                        "children": null
                    },
                    {
                        "value": 2920,
                        "code": "131182000000",
                        "label": "深州市",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "value": 5,
        "code": "140000000000",
        "label": "山西",
        "children": [
            {
                "value": 230,
                "code": "140100000000",
                "label": "太原市",
                "children": [
                    {
                        "value": 2505,
                        "code": "140105000000",
                        "label": "小店区",
                        "children": null
                    },
                    {
                        "value": 2506,
                        "code": "140106000000",
                        "label": "迎泽区",
                        "children": null
                    },
                    {
                        "value": 2507,
                        "code": "140107000000",
                        "label": "杏花岭区",
                        "children": null
                    },
                    {
                        "value": 2508,
                        "code": "140108000000",
                        "label": "尖草坪区",
                        "children": null
                    },
                    {
                        "value": 2509,
                        "code": "140109000000",
                        "label": "万柏林区",
                        "children": null
                    },
                    {
                        "value": 2510,
                        "code": "140110000000",
                        "label": "晋源区",
                        "children": null
                    },
                    {
                        "value": 2511,
                        "code": "140121000000",
                        "label": "清徐县",
                        "children": null
                    },
                    {
                        "value": 2512,
                        "code": "140122000000",
                        "label": "阳曲县",
                        "children": null
                    },
                    {
                        "value": 2513,
                        "code": "140123000000",
                        "label": "娄烦县",
                        "children": null
                    },
                    {
                        "value": 2514,
                        "code": "140181000000",
                        "label": "古交市",
                        "children": null
                    }
                ]
            },
            {
                "value": 231,
                "code": "140200000000",
                "label": "大同市",
                "children": [
                    {
                        "value": 2409,
                        "code": "140202000000",
                        "label": "城区",
                        "children": null
                    },
                    {
                        "value": 2410,
                        "code": "140203000000",
                        "label": "矿区",
                        "children": null
                    },
                    {
                        "value": 2411,
                        "code": "140211000000",
                        "label": "南郊区",
                        "children": null
                    },
                    {
                        "value": 2412,
                        "code": "140212000000",
                        "label": "新荣区",
                        "children": null
                    },
                    {
                        "value": 2413,
                        "code": "140221000000",
                        "label": "阳高县",
                        "children": null
                    },
                    {
                        "value": 2414,
                        "code": "140222000000",
                        "label": "天镇县",
                        "children": null
                    },
                    {
                        "value": 2415,
                        "code": "140223000000",
                        "label": "广灵县",
                        "children": null
                    },
                    {
                        "value": 2416,
                        "code": "140224000000",
                        "label": "灵丘县",
                        "children": null
                    },
                    {
                        "value": 2417,
                        "code": "140225000000",
                        "label": "浑源县",
                        "children": null
                    },
                    {
                        "value": 2418,
                        "code": "140226000000",
                        "label": "左云县",
                        "children": null
                    },
                    {
                        "value": 2419,
                        "code": "140227000000",
                        "label": "大同县",
                        "children": null
                    }
                ]
            },
            {
                "value": 232,
                "code": "140300000000",
                "label": "阳泉市",
                "children": [
                    {
                        "value": 2279,
                        "code": "140302000000",
                        "label": "城区",
                        "children": null
                    },
                    {
                        "value": 2280,
                        "code": "140303000000",
                        "label": "矿区",
                        "children": null
                    },
                    {
                        "value": 2281,
                        "code": "140311000000",
                        "label": "郊区",
                        "children": null
                    },
                    {
                        "value": 2282,
                        "code": "140321000000",
                        "label": "平定县",
                        "children": null
                    },
                    {
                        "value": 2283,
                        "code": "140322000000",
                        "label": "盂县",
                        "children": null
                    }
                ]
            },
            {
                "value": 233,
                "code": "140400000000",
                "label": "长治市",
                "children": [
                    {
                        "value": 2169,
                        "code": "140402000000",
                        "label": "城区",
                        "children": null
                    },
                    {
                        "value": 2170,
                        "code": "140411000000",
                        "label": "郊区",
                        "children": null
                    },
                    {
                        "value": 2171,
                        "code": "140421000000",
                        "label": "长治县",
                        "children": null
                    },
                    {
                        "value": 2172,
                        "code": "140423000000",
                        "label": "襄垣县",
                        "children": null
                    },
                    {
                        "value": 2173,
                        "code": "140424000000",
                        "label": "屯留县",
                        "children": null
                    },
                    {
                        "value": 2174,
                        "code": "140425000000",
                        "label": "平顺县",
                        "children": null
                    },
                    {
                        "value": 2175,
                        "code": "140426000000",
                        "label": "黎城县",
                        "children": null
                    },
                    {
                        "value": 2176,
                        "code": "140427000000",
                        "label": "壶关县",
                        "children": null
                    },
                    {
                        "value": 2177,
                        "code": "140428000000",
                        "label": "长子县",
                        "children": null
                    },
                    {
                        "value": 2178,
                        "code": "140429000000",
                        "label": "武乡县",
                        "children": null
                    },
                    {
                        "value": 2179,
                        "code": "140430000000",
                        "label": "沁县",
                        "children": null
                    },
                    {
                        "value": 2180,
                        "code": "140431000000",
                        "label": "沁源县",
                        "children": null
                    },
                    {
                        "value": 2181,
                        "code": "140481000000",
                        "label": "潞城市",
                        "children": null
                    }
                ]
            },
            {
                "value": 234,
                "code": "140500000000",
                "label": "晋城市",
                "children": [
                    {
                        "value": 2060,
                        "code": "140501000000",
                        "label": "晋城市市辖区",
                        "children": null
                    },
                    {
                        "value": 2061,
                        "code": "140502000000",
                        "label": "城区",
                        "children": null
                    },
                    {
                        "value": 2062,
                        "code": "140521000000",
                        "label": "沁水县",
                        "children": null
                    },
                    {
                        "value": 2063,
                        "code": "140522000000",
                        "label": "阳城县",
                        "children": null
                    },
                    {
                        "value": 2064,
                        "code": "140524000000",
                        "label": "陵川县",
                        "children": null
                    },
                    {
                        "value": 2065,
                        "code": "140525000000",
                        "label": "泽州县",
                        "children": null
                    },
                    {
                        "value": 2066,
                        "code": "140581000000",
                        "label": "高平市",
                        "children": null
                    }
                ]
            },
            {
                "value": 235,
                "code": "140600000000",
                "label": "朔州市",
                "children": [
                    {
                        "value": 1998,
                        "code": "140602000000",
                        "label": "朔城区",
                        "children": null
                    },
                    {
                        "value": 1999,
                        "code": "140603000000",
                        "label": "平鲁区",
                        "children": null
                    },
                    {
                        "value": 2000,
                        "code": "140621000000",
                        "label": "山阴县",
                        "children": null
                    },
                    {
                        "value": 2001,
                        "code": "140622000000",
                        "label": "应县",
                        "children": null
                    },
                    {
                        "value": 2002,
                        "code": "140623000000",
                        "label": "右玉县",
                        "children": null
                    },
                    {
                        "value": 2003,
                        "code": "140624000000",
                        "label": "怀仁县",
                        "children": null
                    }
                ]
            },
            {
                "value": 236,
                "code": "140700000000",
                "label": "晋中市",
                "children": [
                    {
                        "value": 1924,
                        "code": "140702000000",
                        "label": "榆次区",
                        "children": null
                    },
                    {
                        "value": 1925,
                        "code": "140721000000",
                        "label": "榆社县",
                        "children": null
                    },
                    {
                        "value": 1926,
                        "code": "140722000000",
                        "label": "左权县",
                        "children": null
                    },
                    {
                        "value": 1927,
                        "code": "140723000000",
                        "label": "和顺县",
                        "children": null
                    },
                    {
                        "value": 1928,
                        "code": "140724000000",
                        "label": "昔阳县",
                        "children": null
                    },
                    {
                        "value": 1929,
                        "code": "140725000000",
                        "label": "寿阳县",
                        "children": null
                    },
                    {
                        "value": 1930,
                        "code": "140726000000",
                        "label": "太谷县",
                        "children": null
                    },
                    {
                        "value": 1931,
                        "code": "140727000000",
                        "label": "祁县",
                        "children": null
                    },
                    {
                        "value": 1932,
                        "code": "140728000000",
                        "label": "平遥县",
                        "children": null
                    },
                    {
                        "value": 1933,
                        "code": "140729000000",
                        "label": "灵石县",
                        "children": null
                    },
                    {
                        "value": 1934,
                        "code": "140781000000",
                        "label": "介休市",
                        "children": null
                    }
                ]
            },
            {
                "value": 237,
                "code": "140800000000",
                "label": "运城市",
                "children": [
                    {
                        "value": 1335,
                        "code": "140802000000",
                        "label": "盐湖区",
                        "children": null
                    },
                    {
                        "value": 1336,
                        "code": "140821000000",
                        "label": "临猗县",
                        "children": null
                    },
                    {
                        "value": 1337,
                        "code": "140822000000",
                        "label": "万荣县",
                        "children": null
                    },
                    {
                        "value": 1338,
                        "code": "140823000000",
                        "label": "闻喜县",
                        "children": null
                    },
                    {
                        "value": 1339,
                        "code": "140824000000",
                        "label": "稷山县",
                        "children": null
                    },
                    {
                        "value": 1340,
                        "code": "140825000000",
                        "label": "新绛县",
                        "children": null
                    },
                    {
                        "value": 1341,
                        "code": "140826000000",
                        "label": "绛县",
                        "children": null
                    },
                    {
                        "value": 1342,
                        "code": "140827000000",
                        "label": "垣曲县",
                        "children": null
                    },
                    {
                        "value": 1343,
                        "code": "140828000000",
                        "label": "夏县",
                        "children": null
                    },
                    {
                        "value": 1344,
                        "code": "140829000000",
                        "label": "平陆县",
                        "children": null
                    },
                    {
                        "value": 1345,
                        "code": "140830000000",
                        "label": "芮城县",
                        "children": null
                    },
                    {
                        "value": 1346,
                        "code": "140881000000",
                        "label": "永济市",
                        "children": null
                    },
                    {
                        "value": 1347,
                        "code": "140882000000",
                        "label": "河津市",
                        "children": null
                    }
                ]
            },
            {
                "value": 238,
                "code": "140900000000",
                "label": "忻州市",
                "children": [
                    {
                        "value": 1241,
                        "code": "140902000000",
                        "label": "忻府区",
                        "children": null
                    },
                    {
                        "value": 1242,
                        "code": "140921000000",
                        "label": "定襄县",
                        "children": null
                    },
                    {
                        "value": 1243,
                        "code": "140922000000",
                        "label": "五台县",
                        "children": null
                    },
                    {
                        "value": 1244,
                        "code": "140923000000",
                        "label": "代县",
                        "children": null
                    },
                    {
                        "value": 1245,
                        "code": "140924000000",
                        "label": "繁峙县",
                        "children": null
                    },
                    {
                        "value": 1246,
                        "code": "140925000000",
                        "label": "宁武县",
                        "children": null
                    },
                    {
                        "value": 1247,
                        "code": "140926000000",
                        "label": "静乐县",
                        "children": null
                    },
                    {
                        "value": 1248,
                        "code": "140927000000",
                        "label": "神池县",
                        "children": null
                    },
                    {
                        "value": 1249,
                        "code": "140928000000",
                        "label": "五寨县",
                        "children": null
                    },
                    {
                        "value": 1250,
                        "code": "140929000000",
                        "label": "岢岚县",
                        "children": null
                    },
                    {
                        "value": 1251,
                        "code": "140930000000",
                        "label": "河曲县",
                        "children": null
                    },
                    {
                        "value": 1252,
                        "code": "140931000000",
                        "label": "保德县",
                        "children": null
                    },
                    {
                        "value": 1253,
                        "code": "140932000000",
                        "label": "偏关县",
                        "children": null
                    },
                    {
                        "value": 1254,
                        "code": "140981000000",
                        "label": "原平市",
                        "children": null
                    }
                ]
            },
            {
                "value": 239,
                "code": "141000000000",
                "label": "临汾市",
                "children": [
                    {
                        "value": 897,
                        "code": "141002000000",
                        "label": "尧都区",
                        "children": null
                    },
                    {
                        "value": 898,
                        "code": "141021000000",
                        "label": "曲沃县",
                        "children": null
                    },
                    {
                        "value": 899,
                        "code": "141022000000",
                        "label": "翼城县",
                        "children": null
                    },
                    {
                        "value": 900,
                        "code": "141023000000",
                        "label": "襄汾县",
                        "children": null
                    },
                    {
                        "value": 901,
                        "code": "141024000000",
                        "label": "洪洞县",
                        "children": null
                    },
                    {
                        "value": 902,
                        "code": "141025000000",
                        "label": "古县",
                        "children": null
                    },
                    {
                        "value": 903,
                        "code": "141026000000",
                        "label": "安泽县",
                        "children": null
                    },
                    {
                        "value": 904,
                        "code": "141027000000",
                        "label": "浮山县",
                        "children": null
                    },
                    {
                        "value": 905,
                        "code": "141028000000",
                        "label": "吉县",
                        "children": null
                    },
                    {
                        "value": 906,
                        "code": "141029000000",
                        "label": "乡宁县",
                        "children": null
                    },
                    {
                        "value": 907,
                        "code": "141030000000",
                        "label": "大宁县",
                        "children": null
                    },
                    {
                        "value": 908,
                        "code": "141031000000",
                        "label": "隰县",
                        "children": null
                    },
                    {
                        "value": 909,
                        "code": "141032000000",
                        "label": "永和县",
                        "children": null
                    },
                    {
                        "value": 910,
                        "code": "141033000000",
                        "label": "蒲县",
                        "children": null
                    },
                    {
                        "value": 911,
                        "code": "141034000000",
                        "label": "汾西县",
                        "children": null
                    },
                    {
                        "value": 912,
                        "code": "141081000000",
                        "label": "侯马市",
                        "children": null
                    },
                    {
                        "value": 913,
                        "code": "141082000000",
                        "label": "霍州市",
                        "children": null
                    }
                ]
            },
            {
                "value": 240,
                "code": "141100000000",
                "label": "吕梁市",
                "children": [
                    {
                        "value": 816,
                        "code": "141102000000",
                        "label": "离石区",
                        "children": null
                    },
                    {
                        "value": 817,
                        "code": "141121000000",
                        "label": "文水县",
                        "children": null
                    },
                    {
                        "value": 818,
                        "code": "141122000000",
                        "label": "交城县",
                        "children": null
                    },
                    {
                        "value": 819,
                        "code": "141123000000",
                        "label": "兴县",
                        "children": null
                    },
                    {
                        "value": 820,
                        "code": "141124000000",
                        "label": "临县",
                        "children": null
                    },
                    {
                        "value": 821,
                        "code": "141125000000",
                        "label": "柳林县",
                        "children": null
                    },
                    {
                        "value": 822,
                        "code": "141126000000",
                        "label": "石楼县",
                        "children": null
                    },
                    {
                        "value": 823,
                        "code": "141127000000",
                        "label": "岚县",
                        "children": null
                    },
                    {
                        "value": 824,
                        "code": "141128000000",
                        "label": "方山县",
                        "children": null
                    },
                    {
                        "value": 825,
                        "code": "141129000000",
                        "label": "中阳县",
                        "children": null
                    },
                    {
                        "value": 826,
                        "code": "141130000000",
                        "label": "交口县",
                        "children": null
                    },
                    {
                        "value": 827,
                        "code": "141181000000",
                        "label": "孝义市",
                        "children": null
                    },
                    {
                        "value": 828,
                        "code": "141182000000",
                        "label": "汾阳市",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "value": 6,
        "code": "150000000000",
        "label": "内蒙古",
        "children": [
            {
                "value": 274,
                "code": "150100000000",
                "label": "呼和浩特市",
                "children": [
                    {
                        "value": 495,
                        "code": "150102000000",
                        "label": "新城区",
                        "children": null
                    },
                    {
                        "value": 496,
                        "code": "150103000000",
                        "label": "回民区",
                        "children": null
                    },
                    {
                        "value": 497,
                        "code": "150104000000",
                        "label": "玉泉区",
                        "children": null
                    },
                    {
                        "value": 498,
                        "code": "150105000000",
                        "label": "赛罕区",
                        "children": null
                    },
                    {
                        "value": 499,
                        "code": "150121000000",
                        "label": "土默特左旗",
                        "children": null
                    },
                    {
                        "value": 500,
                        "code": "150122000000",
                        "label": "托克托县",
                        "children": null
                    },
                    {
                        "value": 501,
                        "code": "150123000000",
                        "label": "和林格尔县",
                        "children": null
                    },
                    {
                        "value": 502,
                        "code": "150124000000",
                        "label": "清水河县",
                        "children": null
                    },
                    {
                        "value": 503,
                        "code": "150125000000",
                        "label": "武川县",
                        "children": null
                    }
                ]
            },
            {
                "value": 275,
                "code": "150200000000",
                "label": "包头市",
                "children": [
                    {
                        "value": 1745,
                        "code": "150202000000",
                        "label": "东河区",
                        "children": null
                    },
                    {
                        "value": 1746,
                        "code": "150203000000",
                        "label": "昆都仑区",
                        "children": null
                    },
                    {
                        "value": 1747,
                        "code": "150204000000",
                        "label": "青山区",
                        "children": null
                    },
                    {
                        "value": 1748,
                        "code": "150205000000",
                        "label": "石拐区",
                        "children": null
                    },
                    {
                        "value": 1749,
                        "code": "150206000000",
                        "label": "白云鄂博矿区",
                        "children": null
                    },
                    {
                        "value": 1750,
                        "code": "150207000000",
                        "label": "九原区",
                        "children": null
                    },
                    {
                        "value": 1751,
                        "code": "150221000000",
                        "label": "土默特右旗",
                        "children": null
                    },
                    {
                        "value": 1752,
                        "code": "150222000000",
                        "label": "固阳县",
                        "children": null
                    },
                    {
                        "value": 1753,
                        "code": "150223000000",
                        "label": "达尔罕茂明安联合旗",
                        "children": null
                    }
                ]
            },
            {
                "value": 276,
                "code": "150300000000",
                "label": "乌海市",
                "children": [
                    {
                        "value": 3162,
                        "code": "150302000000",
                        "label": "海勃湾区",
                        "children": null
                    },
                    {
                        "value": 3163,
                        "code": "150303000000",
                        "label": "海南区",
                        "children": null
                    },
                    {
                        "value": 3164,
                        "code": "150304000000",
                        "label": "乌达区",
                        "children": null
                    }
                ]
            },
            {
                "value": 277,
                "code": "150400000000",
                "label": "赤峰市",
                "children": [
                    {
                        "value": 1721,
                        "code": "150402000000",
                        "label": "红山区",
                        "children": null
                    },
                    {
                        "value": 1722,
                        "code": "150403000000",
                        "label": "元宝山区",
                        "children": null
                    },
                    {
                        "value": 1723,
                        "code": "150404000000",
                        "label": "松山区",
                        "children": null
                    },
                    {
                        "value": 1724,
                        "code": "150421000000",
                        "label": "阿鲁科尔沁旗",
                        "children": null
                    },
                    {
                        "value": 1725,
                        "code": "150422000000",
                        "label": "巴林左旗",
                        "children": null
                    },
                    {
                        "value": 1726,
                        "code": "150423000000",
                        "label": "巴林右旗",
                        "children": null
                    },
                    {
                        "value": 1727,
                        "code": "150424000000",
                        "label": "林西县",
                        "children": null
                    },
                    {
                        "value": 1728,
                        "code": "150425000000",
                        "label": "克什克腾旗",
                        "children": null
                    },
                    {
                        "value": 1729,
                        "code": "150426000000",
                        "label": "翁牛特旗",
                        "children": null
                    },
                    {
                        "value": 1730,
                        "code": "150428000000",
                        "label": "喀喇沁旗",
                        "children": null
                    },
                    {
                        "value": 1731,
                        "code": "150429000000",
                        "label": "宁城县",
                        "children": null
                    },
                    {
                        "value": 1732,
                        "code": "150430000000",
                        "label": "敖汉旗",
                        "children": null
                    }
                ]
            },
            {
                "value": 278,
                "code": "150500000000",
                "label": "通辽市",
                "children": [
                    {
                        "value": 3051,
                        "code": "150502000000",
                        "label": "科尔沁区",
                        "children": null
                    },
                    {
                        "value": 3052,
                        "code": "150521000000",
                        "label": "科尔沁左翼中旗",
                        "children": null
                    },
                    {
                        "value": 3053,
                        "code": "150522000000",
                        "label": "科尔沁左翼后旗",
                        "children": null
                    },
                    {
                        "value": 3054,
                        "code": "150523000000",
                        "label": "开鲁县",
                        "children": null
                    },
                    {
                        "value": 3055,
                        "code": "150524000000",
                        "label": "库伦旗",
                        "children": null
                    },
                    {
                        "value": 3056,
                        "code": "150525000000",
                        "label": "奈曼旗",
                        "children": null
                    },
                    {
                        "value": 3057,
                        "code": "150526000000",
                        "label": "扎鲁特旗",
                        "children": null
                    },
                    {
                        "value": 3058,
                        "code": "150581000000",
                        "label": "霍林郭勒市",
                        "children": null
                    }
                ]
            },
            {
                "value": 279,
                "code": "150600000000",
                "label": "鄂尔多斯市",
                "children": [
                    {
                        "value": 2947,
                        "code": "150602000000",
                        "label": "东胜区",
                        "children": null
                    },
                    {
                        "value": 2948,
                        "code": "150621000000",
                        "label": "达拉特旗",
                        "children": null
                    },
                    {
                        "value": 2949,
                        "code": "150622000000",
                        "label": "准格尔旗",
                        "children": null
                    },
                    {
                        "value": 2950,
                        "code": "150623000000",
                        "label": "鄂托克前旗",
                        "children": null
                    },
                    {
                        "value": 2951,
                        "code": "150624000000",
                        "label": "鄂托克旗",
                        "children": null
                    },
                    {
                        "value": 2952,
                        "code": "150625000000",
                        "label": "杭锦旗",
                        "children": null
                    },
                    {
                        "value": 2953,
                        "code": "150626000000",
                        "label": "乌审旗",
                        "children": null
                    },
                    {
                        "value": 2954,
                        "code": "150627000000",
                        "label": "伊金霍洛旗",
                        "children": null
                    }
                ]
            },
            {
                "value": 280,
                "code": "150700000000",
                "label": "呼伦贝尔市",
                "children": [
                    {
                        "value": 2862,
                        "code": "150702000000",
                        "label": "海拉尔区",
                        "children": null
                    },
                    {
                        "value": 2863,
                        "code": "150721000000",
                        "label": "阿荣旗",
                        "children": null
                    },
                    {
                        "value": 2864,
                        "code": "150722000000",
                        "label": "莫力达瓦达斡尔族自治旗",
                        "children": null
                    },
                    {
                        "value": 2865,
                        "code": "150723000000",
                        "label": "鄂伦春自治旗",
                        "children": null
                    },
                    {
                        "value": 2866,
                        "code": "150724000000",
                        "label": "鄂温克族自治旗",
                        "children": null
                    },
                    {
                        "value": 2867,
                        "code": "150725000000",
                        "label": "陈巴尔虎旗",
                        "children": null
                    },
                    {
                        "value": 2868,
                        "code": "150726000000",
                        "label": "新巴尔虎左旗",
                        "children": null
                    },
                    {
                        "value": 2869,
                        "code": "150727000000",
                        "label": "新巴尔虎右旗",
                        "children": null
                    },
                    {
                        "value": 2870,
                        "code": "150781000000",
                        "label": "满洲里市",
                        "children": null
                    },
                    {
                        "value": 2871,
                        "code": "150782000000",
                        "label": "牙克石市",
                        "children": null
                    },
                    {
                        "value": 2872,
                        "code": "150783000000",
                        "label": "扎兰屯市",
                        "children": null
                    },
                    {
                        "value": 2873,
                        "code": "150784000000",
                        "label": "额尔古纳市",
                        "children": null
                    },
                    {
                        "value": 2874,
                        "code": "150785000000",
                        "label": "根河市",
                        "children": null
                    }
                ]
            },
            {
                "value": 281,
                "code": "150800000000",
                "label": "巴彦淖尔市",
                "children": [
                    {
                        "value": 2241,
                        "code": "150802000000",
                        "label": "临河区",
                        "children": null
                    },
                    {
                        "value": 2242,
                        "code": "150821000000",
                        "label": "五原县",
                        "children": null
                    },
                    {
                        "value": 2243,
                        "code": "150822000000",
                        "label": "磴口县",
                        "children": null
                    },
                    {
                        "value": 2244,
                        "code": "150823000000",
                        "label": "乌拉特前旗",
                        "children": null
                    },
                    {
                        "value": 2245,
                        "code": "150824000000",
                        "label": "乌拉特中旗",
                        "children": null
                    },
                    {
                        "value": 2246,
                        "code": "150825000000",
                        "label": "乌拉特后旗",
                        "children": null
                    },
                    {
                        "value": 2247,
                        "code": "150826000000",
                        "label": "杭锦后旗",
                        "children": null
                    }
                ]
            },
            {
                "value": 282,
                "code": "150900000000",
                "label": "乌兰察布市",
                "children": [
                    {
                        "value": 2129,
                        "code": "150902000000",
                        "label": "集宁区",
                        "children": null
                    },
                    {
                        "value": 2130,
                        "code": "150921000000",
                        "label": "卓资县",
                        "children": null
                    },
                    {
                        "value": 2131,
                        "code": "150922000000",
                        "label": "化德县",
                        "children": null
                    },
                    {
                        "value": 2132,
                        "code": "150923000000",
                        "label": "商都县",
                        "children": null
                    },
                    {
                        "value": 2133,
                        "code": "150924000000",
                        "label": "兴和县",
                        "children": null
                    },
                    {
                        "value": 2134,
                        "code": "150925000000",
                        "label": "凉城县",
                        "children": null
                    },
                    {
                        "value": 2135,
                        "code": "150926000000",
                        "label": "察哈尔右翼前旗",
                        "children": null
                    },
                    {
                        "value": 2136,
                        "code": "150927000000",
                        "label": "察哈尔右翼中旗",
                        "children": null
                    },
                    {
                        "value": 2137,
                        "code": "150928000000",
                        "label": "察哈尔右翼后旗",
                        "children": null
                    },
                    {
                        "value": 2138,
                        "code": "150929000000",
                        "label": "四子王旗",
                        "children": null
                    },
                    {
                        "value": 2139,
                        "code": "150981000000",
                        "label": "丰镇市",
                        "children": null
                    }
                ]
            },
            {
                "value": 283,
                "code": "152200000000",
                "label": "兴安盟",
                "children": [
                    {
                        "value": 643,
                        "code": "152201000000",
                        "label": "乌兰浩特市",
                        "children": null
                    },
                    {
                        "value": 644,
                        "code": "152202000000",
                        "label": "阿尔山市",
                        "children": null
                    },
                    {
                        "value": 645,
                        "code": "152221000000",
                        "label": "科尔沁右翼前旗",
                        "children": null
                    },
                    {
                        "value": 646,
                        "code": "152222000000",
                        "label": "科尔沁右翼中旗",
                        "children": null
                    },
                    {
                        "value": 647,
                        "code": "152223000000",
                        "label": "扎赉特旗",
                        "children": null
                    },
                    {
                        "value": 648,
                        "code": "152224000000",
                        "label": "突泉县",
                        "children": null
                    }
                ]
            },
            {
                "value": 284,
                "code": "152500000000",
                "label": "锡林郭勒盟",
                "children": [
                    {
                        "value": 1864,
                        "code": "152501000000",
                        "label": "二连浩特市",
                        "children": null
                    },
                    {
                        "value": 1865,
                        "code": "152502000000",
                        "label": "锡林浩特市",
                        "children": null
                    },
                    {
                        "value": 1866,
                        "code": "152522000000",
                        "label": "阿巴嘎旗",
                        "children": null
                    },
                    {
                        "value": 1867,
                        "code": "152523000000",
                        "label": "苏尼特左旗",
                        "children": null
                    },
                    {
                        "value": 1868,
                        "code": "152524000000",
                        "label": "苏尼特右旗",
                        "children": null
                    },
                    {
                        "value": 1869,
                        "code": "152525000000",
                        "label": "东乌珠穆沁旗",
                        "children": null
                    },
                    {
                        "value": 1870,
                        "code": "152526000000",
                        "label": "西乌珠穆沁旗",
                        "children": null
                    },
                    {
                        "value": 1871,
                        "code": "152527000000",
                        "label": "太仆寺旗",
                        "children": null
                    },
                    {
                        "value": 1872,
                        "code": "152528000000",
                        "label": "镶黄旗",
                        "children": null
                    },
                    {
                        "value": 1873,
                        "code": "152529000000",
                        "label": "正镶白旗",
                        "children": null
                    },
                    {
                        "value": 1874,
                        "code": "152530000000",
                        "label": "正蓝旗",
                        "children": null
                    },
                    {
                        "value": 1875,
                        "code": "152531000000",
                        "label": "多伦县",
                        "children": null
                    }
                ]
            },
            {
                "value": 285,
                "code": "152900000000",
                "label": "阿拉善盟",
                "children": [
                    {
                        "value": 887,
                        "code": "152921000000",
                        "label": "阿拉善左旗",
                        "children": null
                    },
                    {
                        "value": 888,
                        "code": "152922000000",
                        "label": "阿拉善右旗",
                        "children": null
                    },
                    {
                        "value": 889,
                        "code": "152923000000",
                        "label": "额济纳旗",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "value": 7,
        "code": "210000000000",
        "label": "辽宁",
        "children": [
            {
                "value": 87,
                "code": "210100000000",
                "label": "沈阳市",
                "children": [
                    {
                        "value": 2694,
                        "code": "210102000000",
                        "label": "和平区",
                        "children": null
                    },
                    {
                        "value": 2695,
                        "code": "210103000000",
                        "label": "沈河区",
                        "children": null
                    },
                    {
                        "value": 2696,
                        "code": "210104000000",
                        "label": "大东区",
                        "children": null
                    },
                    {
                        "value": 2697,
                        "code": "210105000000",
                        "label": "皇姑区",
                        "children": null
                    },
                    {
                        "value": 2698,
                        "code": "210106000000",
                        "label": "铁西区",
                        "children": null
                    },
                    {
                        "value": 2699,
                        "code": "210111000000",
                        "label": "苏家屯区",
                        "children": null
                    },
                    {
                        "value": 2700,
                        "code": "210112000000",
                        "label": "东陵区",
                        "children": null
                    },
                    {
                        "value": 2701,
                        "code": "210113000000",
                        "label": "沈北新区",
                        "children": null
                    },
                    {
                        "value": 2702,
                        "code": "210114000000",
                        "label": "于洪区",
                        "children": null
                    },
                    {
                        "value": 2703,
                        "code": "210122000000",
                        "label": "辽中县",
                        "children": null
                    },
                    {
                        "value": 2704,
                        "code": "210123000000",
                        "label": "康平县",
                        "children": null
                    },
                    {
                        "value": 2705,
                        "code": "210124000000",
                        "label": "法库县",
                        "children": null
                    },
                    {
                        "value": 2706,
                        "code": "210181000000",
                        "label": "新民市",
                        "children": null
                    }
                ]
            },
            {
                "value": 88,
                "code": "210200000000",
                "label": "大连市",
                "children": [
                    {
                        "value": 2602,
                        "code": "210202000000",
                        "label": "中山区",
                        "children": null
                    },
                    {
                        "value": 2603,
                        "code": "210203000000",
                        "label": "西岗区",
                        "children": null
                    },
                    {
                        "value": 2604,
                        "code": "210204000000",
                        "label": "沙河口区",
                        "children": null
                    },
                    {
                        "value": 2605,
                        "code": "210211000000",
                        "label": "甘井子区",
                        "children": null
                    },
                    {
                        "value": 2606,
                        "code": "210212000000",
                        "label": "旅顺口区",
                        "children": null
                    },
                    {
                        "value": 2607,
                        "code": "210213000000",
                        "label": "金州区",
                        "children": null
                    },
                    {
                        "value": 2608,
                        "code": "210224000000",
                        "label": "长海县",
                        "children": null
                    },
                    {
                        "value": 2609,
                        "code": "210281000000",
                        "label": "瓦房店市",
                        "children": null
                    },
                    {
                        "value": 2610,
                        "code": "210282000000",
                        "label": "普兰店市",
                        "children": null
                    },
                    {
                        "value": 2611,
                        "code": "210283000000",
                        "label": "庄河市",
                        "children": null
                    }
                ]
            },
            {
                "value": 89,
                "code": "210300000000",
                "label": "鞍山市",
                "children": [
                    {
                        "value": 2498,
                        "code": "210302000000",
                        "label": "铁东区",
                        "children": null
                    },
                    {
                        "value": 2499,
                        "code": "210303000000",
                        "label": "铁西区",
                        "children": null
                    },
                    {
                        "value": 2500,
                        "code": "210304000000",
                        "label": "立山区",
                        "children": null
                    },
                    {
                        "value": 2501,
                        "code": "210311000000",
                        "label": "千山区",
                        "children": null
                    },
                    {
                        "value": 2502,
                        "code": "210321000000",
                        "label": "台安县",
                        "children": null
                    },
                    {
                        "value": 2503,
                        "code": "210323000000",
                        "label": "岫岩满族自治县",
                        "children": null
                    },
                    {
                        "value": 2504,
                        "code": "210381000000",
                        "label": "海城市",
                        "children": null
                    }
                ]
            },
            {
                "value": 90,
                "code": "210400000000",
                "label": "抚顺市",
                "children": [
                    {
                        "value": 2402,
                        "code": "210402000000",
                        "label": "新抚区",
                        "children": null
                    },
                    {
                        "value": 2403,
                        "code": "210403000000",
                        "label": "东洲区",
                        "children": null
                    },
                    {
                        "value": 2404,
                        "code": "210404000000",
                        "label": "望花区",
                        "children": null
                    },
                    {
                        "value": 2405,
                        "code": "210411000000",
                        "label": "顺城区",
                        "children": null
                    },
                    {
                        "value": 2406,
                        "code": "210421000000",
                        "label": "抚顺县",
                        "children": null
                    },
                    {
                        "value": 2407,
                        "code": "210422000000",
                        "label": "新宾满族自治县",
                        "children": null
                    },
                    {
                        "value": 2408,
                        "code": "210423000000",
                        "label": "清原满族自治县",
                        "children": null
                    }
                ]
            },
            {
                "value": 91,
                "code": "210500000000",
                "label": "本溪市",
                "children": [
                    {
                        "value": 2273,
                        "code": "210502000000",
                        "label": "平山区",
                        "children": null
                    },
                    {
                        "value": 2274,
                        "code": "210503000000",
                        "label": "溪湖区",
                        "children": null
                    },
                    {
                        "value": 2275,
                        "code": "210504000000",
                        "label": "明山区",
                        "children": null
                    },
                    {
                        "value": 2276,
                        "code": "210505000000",
                        "label": "南芬区",
                        "children": null
                    },
                    {
                        "value": 2277,
                        "code": "210521000000",
                        "label": "本溪满族自治县",
                        "children": null
                    },
                    {
                        "value": 2278,
                        "code": "210522000000",
                        "label": "桓仁满族自治县",
                        "children": null
                    }
                ]
            },
            {
                "value": 92,
                "code": "210600000000",
                "label": "丹东市",
                "children": [
                    {
                        "value": 2163,
                        "code": "210602000000",
                        "label": "元宝区",
                        "children": null
                    },
                    {
                        "value": 2164,
                        "code": "210603000000",
                        "label": "振兴区",
                        "children": null
                    },
                    {
                        "value": 2165,
                        "code": "210604000000",
                        "label": "振安区",
                        "children": null
                    },
                    {
                        "value": 2166,
                        "code": "210624000000",
                        "label": "宽甸满族自治县",
                        "children": null
                    },
                    {
                        "value": 2167,
                        "code": "210681000000",
                        "label": "东港市",
                        "children": null
                    },
                    {
                        "value": 2168,
                        "code": "210682000000",
                        "label": "凤城市",
                        "children": null
                    }
                ]
            },
            {
                "value": 93,
                "code": "210700000000",
                "label": "锦州市",
                "children": [
                    {
                        "value": 716,
                        "code": "210702000000",
                        "label": "古塔区",
                        "children": null
                    },
                    {
                        "value": 717,
                        "code": "210703000000",
                        "label": "凌河区",
                        "children": null
                    },
                    {
                        "value": 718,
                        "code": "210711000000",
                        "label": "太和区",
                        "children": null
                    },
                    {
                        "value": 719,
                        "code": "210726000000",
                        "label": "黑山县",
                        "children": null
                    },
                    {
                        "value": 720,
                        "code": "210727000000",
                        "label": "义县",
                        "children": null
                    },
                    {
                        "value": 721,
                        "code": "210781000000",
                        "label": "凌海市",
                        "children": null
                    },
                    {
                        "value": 722,
                        "code": "210782000000",
                        "label": "北镇市",
                        "children": null
                    }
                ]
            },
            {
                "value": 94,
                "code": "210800000000",
                "label": "营口市",
                "children": [
                    {
                        "value": 1519,
                        "code": "210802000000",
                        "label": "站前区",
                        "children": null
                    },
                    {
                        "value": 1520,
                        "code": "210803000000",
                        "label": "西市区",
                        "children": null
                    },
                    {
                        "value": 1521,
                        "code": "210804000000",
                        "label": "鲅鱼圈区",
                        "children": null
                    },
                    {
                        "value": 1522,
                        "code": "210811000000",
                        "label": "老边区",
                        "children": null
                    },
                    {
                        "value": 1523,
                        "code": "210881000000",
                        "label": "盖州市",
                        "children": null
                    },
                    {
                        "value": 1524,
                        "code": "210882000000",
                        "label": "大石桥市",
                        "children": null
                    }
                ]
            },
            {
                "value": 95,
                "code": "210900000000",
                "label": "阜新市",
                "children": [
                    {
                        "value": 1417,
                        "code": "210902000000",
                        "label": "海州区",
                        "children": null
                    },
                    {
                        "value": 1418,
                        "code": "210903000000",
                        "label": "新邱区",
                        "children": null
                    },
                    {
                        "value": 1419,
                        "code": "210904000000",
                        "label": "太平区",
                        "children": null
                    },
                    {
                        "value": 1420,
                        "code": "210905000000",
                        "label": "清河门区",
                        "children": null
                    },
                    {
                        "value": 1421,
                        "code": "210911000000",
                        "label": "细河区",
                        "children": null
                    },
                    {
                        "value": 1422,
                        "code": "210921000000",
                        "label": "阜新蒙古族自治县",
                        "children": null
                    },
                    {
                        "value": 1423,
                        "code": "210922000000",
                        "label": "彰武县",
                        "children": null
                    }
                ]
            },
            {
                "value": 96,
                "code": "211000000000",
                "label": "辽阳市",
                "children": [
                    {
                        "value": 2326,
                        "code": "211002000000",
                        "label": "白塔区",
                        "children": null
                    },
                    {
                        "value": 2327,
                        "code": "211003000000",
                        "label": "文圣区",
                        "children": null
                    },
                    {
                        "value": 2328,
                        "code": "211004000000",
                        "label": "宏伟区",
                        "children": null
                    },
                    {
                        "value": 2329,
                        "code": "211005000000",
                        "label": "弓长岭区",
                        "children": null
                    },
                    {
                        "value": 2330,
                        "code": "211011000000",
                        "label": "太子河区",
                        "children": null
                    },
                    {
                        "value": 2331,
                        "code": "211021000000",
                        "label": "辽阳县",
                        "children": null
                    },
                    {
                        "value": 2332,
                        "code": "211081000000",
                        "label": "灯塔市",
                        "children": null
                    }
                ]
            },
            {
                "value": 97,
                "code": "211100000000",
                "label": "盘锦市",
                "children": [
                    {
                        "value": 1019,
                        "code": "211102000000",
                        "label": "双台子区",
                        "children": null
                    },
                    {
                        "value": 1020,
                        "code": "211103000000",
                        "label": "兴隆台区",
                        "children": null
                    },
                    {
                        "value": 1021,
                        "code": "211121000000",
                        "label": "大洼县",
                        "children": null
                    },
                    {
                        "value": 1022,
                        "code": "211122000000",
                        "label": "盘山县",
                        "children": null
                    }
                ]
            },
            {
                "value": 98,
                "code": "211200000000",
                "label": "铁岭市",
                "children": [
                    {
                        "value": 890,
                        "code": "211202000000",
                        "label": "银州区",
                        "children": null
                    },
                    {
                        "value": 891,
                        "code": "211204000000",
                        "label": "清河区",
                        "children": null
                    },
                    {
                        "value": 892,
                        "code": "211221000000",
                        "label": "铁岭县",
                        "children": null
                    },
                    {
                        "value": 893,
                        "code": "211223000000",
                        "label": "西丰县",
                        "children": null
                    },
                    {
                        "value": 894,
                        "code": "211224000000",
                        "label": "昌图县",
                        "children": null
                    },
                    {
                        "value": 895,
                        "code": "211281000000",
                        "label": "调兵山市",
                        "children": null
                    },
                    {
                        "value": 896,
                        "code": "211282000000",
                        "label": "开原市",
                        "children": null
                    }
                ]
            },
            {
                "value": 99,
                "code": "211300000000",
                "label": "朝阳市",
                "children": [
                    {
                        "value": 809,
                        "code": "211302000000",
                        "label": "双塔区",
                        "children": null
                    },
                    {
                        "value": 810,
                        "code": "211303000000",
                        "label": "龙城区",
                        "children": null
                    },
                    {
                        "value": 811,
                        "code": "211321000000",
                        "label": "朝阳县",
                        "children": null
                    },
                    {
                        "value": 812,
                        "code": "211322000000",
                        "label": "建平县",
                        "children": null
                    },
                    {
                        "value": 813,
                        "code": "211324000000",
                        "label": "喀喇沁左翼蒙古族自治县",
                        "children": null
                    },
                    {
                        "value": 814,
                        "code": "211381000000",
                        "label": "北票市",
                        "children": null
                    },
                    {
                        "value": 815,
                        "code": "211382000000",
                        "label": "凌源市",
                        "children": null
                    }
                ]
            },
            {
                "value": 100,
                "code": "211400000000",
                "label": "葫芦岛市",
                "children": [
                    {
                        "value": 2808,
                        "code": "211402000000",
                        "label": "连山区",
                        "children": null
                    },
                    {
                        "value": 2809,
                        "code": "211403000000",
                        "label": "龙港区",
                        "children": null
                    },
                    {
                        "value": 2810,
                        "code": "211404000000",
                        "label": "南票区",
                        "children": null
                    },
                    {
                        "value": 2811,
                        "code": "211421000000",
                        "label": "绥中县",
                        "children": null
                    },
                    {
                        "value": 2812,
                        "code": "211422000000",
                        "label": "建昌县",
                        "children": null
                    },
                    {
                        "value": 2813,
                        "code": "211481000000",
                        "label": "兴城市",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "value": 8,
        "code": "220000000000",
        "label": "吉林",
        "children": [
            {
                "value": 207,
                "code": "220100000000",
                "label": "长春市",
                "children": [
                    {
                        "value": 662,
                        "code": "220102000000",
                        "label": "南关区",
                        "children": null
                    },
                    {
                        "value": 663,
                        "code": "220103000000",
                        "label": "宽城区",
                        "children": null
                    },
                    {
                        "value": 664,
                        "code": "220104000000",
                        "label": "朝阳区",
                        "children": null
                    },
                    {
                        "value": 665,
                        "code": "220105000000",
                        "label": "二道区",
                        "children": null
                    },
                    {
                        "value": 666,
                        "code": "220106000000",
                        "label": "绿园区",
                        "children": null
                    },
                    {
                        "value": 667,
                        "code": "220112000000",
                        "label": "双阳区",
                        "children": null
                    },
                    {
                        "value": 668,
                        "code": "220122000000",
                        "label": "农安县",
                        "children": null
                    },
                    {
                        "value": 669,
                        "code": "220181000000",
                        "label": "九台市",
                        "children": null
                    },
                    {
                        "value": 670,
                        "code": "220182000000",
                        "label": "榆树市",
                        "children": null
                    },
                    {
                        "value": 671,
                        "code": "220183000000",
                        "label": "德惠市",
                        "children": null
                    }
                ]
            },
            {
                "value": 208,
                "code": "220200000000",
                "label": "吉林市",
                "children": [
                    {
                        "value": 575,
                        "code": "220202000000",
                        "label": "昌邑区",
                        "children": null
                    },
                    {
                        "value": 576,
                        "code": "220203000000",
                        "label": "龙潭区",
                        "children": null
                    },
                    {
                        "value": 577,
                        "code": "220204000000",
                        "label": "船营区",
                        "children": null
                    },
                    {
                        "value": 578,
                        "code": "220211000000",
                        "label": "丰满区",
                        "children": null
                    },
                    {
                        "value": 579,
                        "code": "220221000000",
                        "label": "永吉县",
                        "children": null
                    },
                    {
                        "value": 580,
                        "code": "220281000000",
                        "label": "蛟河市",
                        "children": null
                    },
                    {
                        "value": 581,
                        "code": "220282000000",
                        "label": "桦甸市",
                        "children": null
                    },
                    {
                        "value": 582,
                        "code": "220283000000",
                        "label": "舒兰市",
                        "children": null
                    },
                    {
                        "value": 583,
                        "code": "220284000000",
                        "label": "磐石市",
                        "children": null
                    }
                ]
            },
            {
                "value": 209,
                "code": "220300000000",
                "label": "四平市",
                "children": [
                    {
                        "value": 489,
                        "code": "220302000000",
                        "label": "铁西区",
                        "children": null
                    },
                    {
                        "value": 490,
                        "code": "220303000000",
                        "label": "铁东区",
                        "children": null
                    },
                    {
                        "value": 491,
                        "code": "220322000000",
                        "label": "梨树县",
                        "children": null
                    },
                    {
                        "value": 492,
                        "code": "220323000000",
                        "label": "伊通满族自治县",
                        "children": null
                    },
                    {
                        "value": 493,
                        "code": "220381000000",
                        "label": "公主岭市",
                        "children": null
                    },
                    {
                        "value": 494,
                        "code": "220382000000",
                        "label": "双辽市",
                        "children": null
                    }
                ]
            },
            {
                "value": 210,
                "code": "220400000000",
                "label": "辽源市",
                "children": [
                    {
                        "value": 411,
                        "code": "220402000000",
                        "label": "龙山区",
                        "children": null
                    },
                    {
                        "value": 412,
                        "code": "220403000000",
                        "label": "西安区",
                        "children": null
                    },
                    {
                        "value": 413,
                        "code": "220421000000",
                        "label": "东丰县",
                        "children": null
                    },
                    {
                        "value": 414,
                        "code": "220422000000",
                        "label": "东辽县",
                        "children": null
                    }
                ]
            },
            {
                "value": 211,
                "code": "220500000000",
                "label": "通化市",
                "children": [
                    {
                        "value": 3155,
                        "code": "220502000000",
                        "label": "东昌区",
                        "children": null
                    },
                    {
                        "value": 3156,
                        "code": "220503000000",
                        "label": "二道江区",
                        "children": null
                    },
                    {
                        "value": 3157,
                        "code": "220521000000",
                        "label": "通化县",
                        "children": null
                    },
                    {
                        "value": 3158,
                        "code": "220523000000",
                        "label": "辉南县",
                        "children": null
                    },
                    {
                        "value": 3159,
                        "code": "220524000000",
                        "label": "柳河县",
                        "children": null
                    },
                    {
                        "value": 3160,
                        "code": "220581000000",
                        "label": "梅河口市",
                        "children": null
                    },
                    {
                        "value": 3161,
                        "code": "220582000000",
                        "label": "集安市",
                        "children": null
                    }
                ]
            },
            {
                "value": 212,
                "code": "220600000000",
                "label": "白山市",
                "children": [
                    {
                        "value": 3088,
                        "code": "220602000000",
                        "label": "八道江区",
                        "children": null
                    },
                    {
                        "value": 3089,
                        "code": "220605000000",
                        "label": "江源区",
                        "children": null
                    },
                    {
                        "value": 3090,
                        "code": "220621000000",
                        "label": "抚松县",
                        "children": null
                    },
                    {
                        "value": 3091,
                        "code": "220622000000",
                        "label": "靖宇县",
                        "children": null
                    },
                    {
                        "value": 3092,
                        "code": "220623000000",
                        "label": "长白朝鲜族自治县",
                        "children": null
                    },
                    {
                        "value": 3093,
                        "code": "220681000000",
                        "label": "临江市",
                        "children": null
                    }
                ]
            },
            {
                "value": 213,
                "code": "220700000000",
                "label": "松原市",
                "children": [
                    {
                        "value": 3046,
                        "code": "220702000000",
                        "label": "宁江区",
                        "children": null
                    },
                    {
                        "value": 3047,
                        "code": "220721000000",
                        "label": "前郭尔罗斯蒙古族自治县",
                        "children": null
                    },
                    {
                        "value": 3048,
                        "code": "220722000000",
                        "label": "长岭县",
                        "children": null
                    },
                    {
                        "value": 3049,
                        "code": "220723000000",
                        "label": "乾安县",
                        "children": null
                    },
                    {
                        "value": 3050,
                        "code": "220724000000",
                        "label": "扶余县",
                        "children": null
                    }
                ]
            },
            {
                "value": 214,
                "code": "220800000000",
                "label": "白城市",
                "children": [
                    {
                        "value": 2473,
                        "code": "220802000000",
                        "label": "洮北区",
                        "children": null
                    },
                    {
                        "value": 2474,
                        "code": "220821000000",
                        "label": "镇赉县",
                        "children": null
                    },
                    {
                        "value": 2475,
                        "code": "220822000000",
                        "label": "通榆县",
                        "children": null
                    },
                    {
                        "value": 2476,
                        "code": "220881000000",
                        "label": "洮南市",
                        "children": null
                    },
                    {
                        "value": 2477,
                        "code": "220882000000",
                        "label": "大安市",
                        "children": null
                    }
                ]
            },
            {
                "value": 215,
                "code": "222400000000",
                "label": "延边朝鲜族自治州",
                "children": [
                    {
                        "value": 1694,
                        "code": "222401000000",
                        "label": "延吉市",
                        "children": null
                    },
                    {
                        "value": 1695,
                        "code": "222402000000",
                        "label": "图们市",
                        "children": null
                    },
                    {
                        "value": 1696,
                        "code": "222403000000",
                        "label": "敦化市",
                        "children": null
                    },
                    {
                        "value": 1697,
                        "code": "222404000000",
                        "label": "珲春市",
                        "children": null
                    },
                    {
                        "value": 1698,
                        "code": "222405000000",
                        "label": "龙井市",
                        "children": null
                    },
                    {
                        "value": 1699,
                        "code": "222406000000",
                        "label": "和龙市",
                        "children": null
                    },
                    {
                        "value": 1700,
                        "code": "222424000000",
                        "label": "汪清县",
                        "children": null
                    },
                    {
                        "value": 1701,
                        "code": "222426000000",
                        "label": "安图县",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "value": 9,
        "code": "230000000000",
        "label": "黑龙江",
        "children": [
            {
                "value": 146,
                "code": "230100000000",
                "label": "哈尔滨市",
                "children": [
                    {
                        "value": 1586,
                        "code": "230102000000",
                        "label": "道里区",
                        "children": null
                    },
                    {
                        "value": 1587,
                        "code": "230103000000",
                        "label": "南岗区",
                        "children": null
                    },
                    {
                        "value": 1588,
                        "code": "230104000000",
                        "label": "道外区",
                        "children": null
                    },
                    {
                        "value": 1589,
                        "code": "230108000000",
                        "label": "平房区",
                        "children": null
                    },
                    {
                        "value": 1590,
                        "code": "230109000000",
                        "label": "松北区",
                        "children": null
                    },
                    {
                        "value": 1591,
                        "code": "230110000000",
                        "label": "香坊区",
                        "children": null
                    },
                    {
                        "value": 1592,
                        "code": "230111000000",
                        "label": "呼兰区",
                        "children": null
                    },
                    {
                        "value": 1593,
                        "code": "230112000000",
                        "label": "阿城区",
                        "children": null
                    },
                    {
                        "value": 1594,
                        "code": "230123000000",
                        "label": "依兰县",
                        "children": null
                    },
                    {
                        "value": 1595,
                        "code": "230124000000",
                        "label": "方正县",
                        "children": null
                    },
                    {
                        "value": 1596,
                        "code": "230125000000",
                        "label": "宾县",
                        "children": null
                    },
                    {
                        "value": 1597,
                        "code": "230126000000",
                        "label": "巴彦县",
                        "children": null
                    },
                    {
                        "value": 1598,
                        "code": "230127000000",
                        "label": "木兰县",
                        "children": null
                    },
                    {
                        "value": 1599,
                        "code": "230128000000",
                        "label": "通河县",
                        "children": null
                    },
                    {
                        "value": 1600,
                        "code": "230129000000",
                        "label": "延寿县",
                        "children": null
                    },
                    {
                        "value": 1601,
                        "code": "230182000000",
                        "label": "双城市",
                        "children": null
                    },
                    {
                        "value": 1602,
                        "code": "230183000000",
                        "label": "尚志市",
                        "children": null
                    },
                    {
                        "value": 1603,
                        "code": "230184000000",
                        "label": "五常市",
                        "children": null
                    }
                ]
            },
            {
                "value": 147,
                "code": "230200000000",
                "label": "齐齐哈尔市",
                "children": [
                    {
                        "value": 1459,
                        "code": "230202000000",
                        "label": "龙沙区",
                        "children": null
                    },
                    {
                        "value": 1460,
                        "code": "230203000000",
                        "label": "建华区",
                        "children": null
                    },
                    {
                        "value": 1461,
                        "code": "230204000000",
                        "label": "铁锋区",
                        "children": null
                    },
                    {
                        "value": 1462,
                        "code": "230205000000",
                        "label": "昂昂溪区",
                        "children": null
                    },
                    {
                        "value": 1463,
                        "code": "230206000000",
                        "label": "富拉尔基区",
                        "children": null
                    },
                    {
                        "value": 1464,
                        "code": "230207000000",
                        "label": "碾子山区",
                        "children": null
                    },
                    {
                        "value": 1465,
                        "code": "230208000000",
                        "label": "梅里斯达斡尔族区",
                        "children": null
                    },
                    {
                        "value": 1466,
                        "code": "230221000000",
                        "label": "龙江县",
                        "children": null
                    },
                    {
                        "value": 1467,
                        "code": "230223000000",
                        "label": "依安县",
                        "children": null
                    },
                    {
                        "value": 1468,
                        "code": "230224000000",
                        "label": "泰来县",
                        "children": null
                    },
                    {
                        "value": 1469,
                        "code": "230225000000",
                        "label": "甘南县",
                        "children": null
                    },
                    {
                        "value": 1470,
                        "code": "230227000000",
                        "label": "富裕县",
                        "children": null
                    },
                    {
                        "value": 1471,
                        "code": "230229000000",
                        "label": "克山县",
                        "children": null
                    },
                    {
                        "value": 1472,
                        "code": "230230000000",
                        "label": "克东县",
                        "children": null
                    },
                    {
                        "value": 1473,
                        "code": "230231000000",
                        "label": "拜泉县",
                        "children": null
                    },
                    {
                        "value": 1474,
                        "code": "230281000000",
                        "label": "讷河市",
                        "children": null
                    }
                ]
            },
            {
                "value": 148,
                "code": "230300000000",
                "label": "鸡西市",
                "children": [
                    {
                        "value": 1379,
                        "code": "230302000000",
                        "label": "鸡冠区",
                        "children": null
                    },
                    {
                        "value": 1380,
                        "code": "230303000000",
                        "label": "恒山区",
                        "children": null
                    },
                    {
                        "value": 1381,
                        "code": "230304000000",
                        "label": "滴道区",
                        "children": null
                    },
                    {
                        "value": 1382,
                        "code": "230305000000",
                        "label": "梨树区",
                        "children": null
                    },
                    {
                        "value": 1383,
                        "code": "230306000000",
                        "label": "城子河区",
                        "children": null
                    },
                    {
                        "value": 1384,
                        "code": "230307000000",
                        "label": "麻山区",
                        "children": null
                    },
                    {
                        "value": 1385,
                        "code": "230321000000",
                        "label": "鸡东县",
                        "children": null
                    },
                    {
                        "value": 1386,
                        "code": "230381000000",
                        "label": "虎林市",
                        "children": null
                    },
                    {
                        "value": 1387,
                        "code": "230382000000",
                        "label": "密山市",
                        "children": null
                    }
                ]
            },
            {
                "value": 149,
                "code": "230400000000",
                "label": "鹤岗市",
                "children": [
                    {
                        "value": 1288,
                        "code": "230402000000",
                        "label": "向阳区",
                        "children": null
                    },
                    {
                        "value": 1289,
                        "code": "230403000000",
                        "label": "工农区",
                        "children": null
                    },
                    {
                        "value": 1290,
                        "code": "230404000000",
                        "label": "南山区",
                        "children": null
                    },
                    {
                        "value": 1291,
                        "code": "230405000000",
                        "label": "兴安区",
                        "children": null
                    },
                    {
                        "value": 1292,
                        "code": "230406000000",
                        "label": "东山区",
                        "children": null
                    },
                    {
                        "value": 1293,
                        "code": "230407000000",
                        "label": "兴山区",
                        "children": null
                    },
                    {
                        "value": 1294,
                        "code": "230421000000",
                        "label": "萝北县",
                        "children": null
                    },
                    {
                        "value": 1295,
                        "code": "230422000000",
                        "label": "绥滨县",
                        "children": null
                    }
                ]
            },
            {
                "value": 150,
                "code": "230500000000",
                "label": "双鸭山市",
                "children": [
                    {
                        "value": 1192,
                        "code": "230502000000",
                        "label": "尖山区",
                        "children": null
                    },
                    {
                        "value": 1193,
                        "code": "230503000000",
                        "label": "岭东区",
                        "children": null
                    },
                    {
                        "value": 1194,
                        "code": "230505000000",
                        "label": "四方台区",
                        "children": null
                    },
                    {
                        "value": 1195,
                        "code": "230506000000",
                        "label": "宝山区",
                        "children": null
                    },
                    {
                        "value": 1196,
                        "code": "230521000000",
                        "label": "集贤县",
                        "children": null
                    },
                    {
                        "value": 1197,
                        "code": "230522000000",
                        "label": "友谊县",
                        "children": null
                    },
                    {
                        "value": 1198,
                        "code": "230523000000",
                        "label": "宝清县",
                        "children": null
                    },
                    {
                        "value": 1199,
                        "code": "230524000000",
                        "label": "饶河县",
                        "children": null
                    }
                ]
            },
            {
                "value": 151,
                "code": "230600000000",
                "label": "大庆市",
                "children": [
                    {
                        "value": 1072,
                        "code": "230602000000",
                        "label": "萨尔图区",
                        "children": null
                    },
                    {
                        "value": 1073,
                        "code": "230603000000",
                        "label": "龙凤区",
                        "children": null
                    },
                    {
                        "value": 1074,
                        "code": "230604000000",
                        "label": "让胡路区",
                        "children": null
                    },
                    {
                        "value": 1075,
                        "code": "230605000000",
                        "label": "红岗区",
                        "children": null
                    },
                    {
                        "value": 1076,
                        "code": "230606000000",
                        "label": "大同区",
                        "children": null
                    },
                    {
                        "value": 1077,
                        "code": "230621000000",
                        "label": "肇州县",
                        "children": null
                    },
                    {
                        "value": 1078,
                        "code": "230622000000",
                        "label": "肇源县",
                        "children": null
                    },
                    {
                        "value": 1079,
                        "code": "230623000000",
                        "label": "林甸县",
                        "children": null
                    },
                    {
                        "value": 1080,
                        "code": "230624000000",
                        "label": "杜尔伯特蒙古族自治县",
                        "children": null
                    }
                ]
            },
            {
                "value": 152,
                "code": "230700000000",
                "label": "伊春市",
                "children": [
                    {
                        "value": 942,
                        "code": "230702000000",
                        "label": "伊春区",
                        "children": null
                    },
                    {
                        "value": 943,
                        "code": "230703000000",
                        "label": "南岔区",
                        "children": null
                    },
                    {
                        "value": 944,
                        "code": "230704000000",
                        "label": "友好区",
                        "children": null
                    },
                    {
                        "value": 945,
                        "code": "230705000000",
                        "label": "西林区",
                        "children": null
                    },
                    {
                        "value": 946,
                        "code": "230706000000",
                        "label": "翠峦区",
                        "children": null
                    },
                    {
                        "value": 947,
                        "code": "230707000000",
                        "label": "新青区",
                        "children": null
                    },
                    {
                        "value": 948,
                        "code": "230708000000",
                        "label": "美溪区",
                        "children": null
                    },
                    {
                        "value": 949,
                        "code": "230709000000",
                        "label": "金山屯区",
                        "children": null
                    },
                    {
                        "value": 950,
                        "code": "230710000000",
                        "label": "五营区",
                        "children": null
                    },
                    {
                        "value": 951,
                        "code": "230711000000",
                        "label": "乌马河区",
                        "children": null
                    },
                    {
                        "value": 952,
                        "code": "230712000000",
                        "label": "汤旺河区",
                        "children": null
                    },
                    {
                        "value": 953,
                        "code": "230713000000",
                        "label": "带岭区",
                        "children": null
                    },
                    {
                        "value": 954,
                        "code": "230714000000",
                        "label": "乌伊岭区",
                        "children": null
                    },
                    {
                        "value": 955,
                        "code": "230715000000",
                        "label": "红星区",
                        "children": null
                    },
                    {
                        "value": 956,
                        "code": "230716000000",
                        "label": "上甘岭区",
                        "children": null
                    },
                    {
                        "value": 957,
                        "code": "230722000000",
                        "label": "嘉荫县",
                        "children": null
                    },
                    {
                        "value": 958,
                        "code": "230781000000",
                        "label": "铁力市",
                        "children": null
                    }
                ]
            },
            {
                "value": 153,
                "code": "230800000000",
                "label": "佳木斯市",
                "children": [
                    {
                        "value": 454,
                        "code": "230803000000",
                        "label": "向阳区",
                        "children": null
                    },
                    {
                        "value": 455,
                        "code": "230804000000",
                        "label": "前进区",
                        "children": null
                    },
                    {
                        "value": 456,
                        "code": "230805000000",
                        "label": "东风区",
                        "children": null
                    },
                    {
                        "value": 457,
                        "code": "230811000000",
                        "label": "郊区",
                        "children": null
                    },
                    {
                        "value": 458,
                        "code": "230822000000",
                        "label": "桦南县",
                        "children": null
                    },
                    {
                        "value": 459,
                        "code": "230826000000",
                        "label": "桦川县",
                        "children": null
                    },
                    {
                        "value": 460,
                        "code": "230828000000",
                        "label": "汤原县",
                        "children": null
                    },
                    {
                        "value": 461,
                        "code": "230833000000",
                        "label": "抚远县",
                        "children": null
                    },
                    {
                        "value": 462,
                        "code": "230881000000",
                        "label": "同江市",
                        "children": null
                    },
                    {
                        "value": 463,
                        "code": "230882000000",
                        "label": "富锦市",
                        "children": null
                    }
                ]
            },
            {
                "value": 154,
                "code": "230900000000",
                "label": "七台河市",
                "children": [
                    {
                        "value": 3230,
                        "code": "230902000000",
                        "label": "新兴区",
                        "children": null
                    },
                    {
                        "value": 3231,
                        "code": "230903000000",
                        "label": "桃山区",
                        "children": null
                    },
                    {
                        "value": 3232,
                        "code": "230904000000",
                        "label": "茄子河区",
                        "children": null
                    },
                    {
                        "value": 3233,
                        "code": "230921000000",
                        "label": "勃利县",
                        "children": null
                    }
                ]
            },
            {
                "value": 155,
                "code": "231000000000",
                "label": "牡丹江市",
                "children": [
                    {
                        "value": 3016,
                        "code": "231002000000",
                        "label": "东安区",
                        "children": null
                    },
                    {
                        "value": 3017,
                        "code": "231003000000",
                        "label": "阳明区",
                        "children": null
                    },
                    {
                        "value": 3018,
                        "code": "231004000000",
                        "label": "爱民区",
                        "children": null
                    },
                    {
                        "value": 3019,
                        "code": "231005000000",
                        "label": "西安区",
                        "children": null
                    },
                    {
                        "value": 3020,
                        "code": "231024000000",
                        "label": "东宁县",
                        "children": null
                    },
                    {
                        "value": 3021,
                        "code": "231025000000",
                        "label": "林口县",
                        "children": null
                    },
                    {
                        "value": 3022,
                        "code": "231081000000",
                        "label": "绥芬河市",
                        "children": null
                    },
                    {
                        "value": 3023,
                        "code": "231083000000",
                        "label": "海林市",
                        "children": null
                    },
                    {
                        "value": 3024,
                        "code": "231084000000",
                        "label": "宁安市",
                        "children": null
                    },
                    {
                        "value": 3025,
                        "code": "231085000000",
                        "label": "穆棱市",
                        "children": null
                    }
                ]
            },
            {
                "value": 156,
                "code": "231100000000",
                "label": "黑河市",
                "children": [
                    {
                        "value": 2921,
                        "code": "231102000000",
                        "label": "爱辉区",
                        "children": null
                    },
                    {
                        "value": 2922,
                        "code": "231121000000",
                        "label": "嫩江县",
                        "children": null
                    },
                    {
                        "value": 2923,
                        "code": "231123000000",
                        "label": "逊克县",
                        "children": null
                    },
                    {
                        "value": 2924,
                        "code": "231124000000",
                        "label": "孙吴县",
                        "children": null
                    },
                    {
                        "value": 2925,
                        "code": "231181000000",
                        "label": "北安市",
                        "children": null
                    },
                    {
                        "value": 2926,
                        "code": "231182000000",
                        "label": "五大连池市",
                        "children": null
                    }
                ]
            },
            {
                "value": 157,
                "code": "231200000000",
                "label": "绥化市",
                "children": [
                    {
                        "value": 2829,
                        "code": "231202000000",
                        "label": "北林区",
                        "children": null
                    },
                    {
                        "value": 2830,
                        "code": "231221000000",
                        "label": "望奎县",
                        "children": null
                    },
                    {
                        "value": 2831,
                        "code": "231222000000",
                        "label": "兰西县",
                        "children": null
                    },
                    {
                        "value": 2832,
                        "code": "231223000000",
                        "label": "青冈县",
                        "children": null
                    },
                    {
                        "value": 2833,
                        "code": "231224000000",
                        "label": "庆安县",
                        "children": null
                    },
                    {
                        "value": 2834,
                        "code": "231225000000",
                        "label": "明水县",
                        "children": null
                    },
                    {
                        "value": 2835,
                        "code": "231226000000",
                        "label": "绥棱县",
                        "children": null
                    },
                    {
                        "value": 2836,
                        "code": "231281000000",
                        "label": "安达市",
                        "children": null
                    },
                    {
                        "value": 2837,
                        "code": "231282000000",
                        "label": "肇东市",
                        "children": null
                    },
                    {
                        "value": 2838,
                        "code": "231283000000",
                        "label": "海伦市",
                        "children": null
                    }
                ]
            },
            {
                "value": 158,
                "code": "232700000000",
                "label": "大兴安岭地区",
                "children": [
                    {
                        "value": 1832,
                        "code": "232701000000",
                        "label": "加格达奇区",
                        "children": null
                    },
                    {
                        "value": 1833,
                        "code": "232702000000",
                        "label": "松岭区",
                        "children": null
                    },
                    {
                        "value": 1834,
                        "code": "232703000000",
                        "label": "新林区",
                        "children": null
                    },
                    {
                        "value": 1835,
                        "code": "232704000000",
                        "label": "呼中区",
                        "children": null
                    },
                    {
                        "value": 1836,
                        "code": "232721000000",
                        "label": "呼玛县",
                        "children": null
                    },
                    {
                        "value": 1837,
                        "code": "232722000000",
                        "label": "塔河县",
                        "children": null
                    },
                    {
                        "value": 1838,
                        "code": "232723000000",
                        "label": "漠河县",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "value": 10,
        "code": "310000000000",
        "label": "上海",
        "children": [
            {
                "value": 286,
                "code": "310100000000",
                "label": "市辖区",
                "children": [
                    {
                        "value": 2707,
                        "code": "310101000000",
                        "label": "黄浦区",
                        "children": null
                    },
                    {
                        "value": 2708,
                        "code": "310104000000",
                        "label": "徐汇区",
                        "children": null
                    },
                    {
                        "value": 2709,
                        "code": "310105000000",
                        "label": "长宁区",
                        "children": null
                    },
                    {
                        "value": 2710,
                        "code": "310106000000",
                        "label": "静安区",
                        "children": null
                    },
                    {
                        "value": 2711,
                        "code": "310107000000",
                        "label": "普陀区",
                        "children": null
                    },
                    {
                        "value": 2712,
                        "code": "310108000000",
                        "label": "闸北区",
                        "children": null
                    },
                    {
                        "value": 2713,
                        "code": "310109000000",
                        "label": "虹口区",
                        "children": null
                    },
                    {
                        "value": 2714,
                        "code": "310110000000",
                        "label": "杨浦区",
                        "children": null
                    },
                    {
                        "value": 2715,
                        "code": "310112000000",
                        "label": "闵行区",
                        "children": null
                    },
                    {
                        "value": 2716,
                        "code": "310113000000",
                        "label": "宝山区",
                        "children": null
                    },
                    {
                        "value": 2717,
                        "code": "310114000000",
                        "label": "嘉定区",
                        "children": null
                    },
                    {
                        "value": 2718,
                        "code": "310115000000",
                        "label": "浦东新区",
                        "children": null
                    },
                    {
                        "value": 2719,
                        "code": "310116000000",
                        "label": "金山区",
                        "children": null
                    },
                    {
                        "value": 2720,
                        "code": "310117000000",
                        "label": "松江区",
                        "children": null
                    },
                    {
                        "value": 2721,
                        "code": "310118000000",
                        "label": "青浦区",
                        "children": null
                    },
                    {
                        "value": 2722,
                        "code": "310120000000",
                        "label": "奉贤区",
                        "children": null
                    }
                ]
            },
            {
                "value": 287,
                "code": "310200000000",
                "label": "县",
                "children": [
                    {
                        "value": 2612,
                        "code": "310230000000",
                        "label": "崇明县",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "value": 11,
        "code": "320000000000",
        "label": "江苏",
        "children": [
            {
                "value": 327,
                "code": "320100000000",
                "label": "南京市",
                "children": [
                    {
                        "value": 672,
                        "code": "320102000000",
                        "label": "玄武区",
                        "children": null
                    },
                    {
                        "value": 673,
                        "code": "320103000000",
                        "label": "白下区",
                        "children": null
                    },
                    {
                        "value": 674,
                        "code": "320104000000",
                        "label": "秦淮区",
                        "children": null
                    },
                    {
                        "value": 675,
                        "code": "320105000000",
                        "label": "建邺区",
                        "children": null
                    },
                    {
                        "value": 676,
                        "code": "320106000000",
                        "label": "鼓楼区",
                        "children": null
                    },
                    {
                        "value": 677,
                        "code": "320107000000",
                        "label": "下关区",
                        "children": null
                    },
                    {
                        "value": 678,
                        "code": "320111000000",
                        "label": "浦口区",
                        "children": null
                    },
                    {
                        "value": 679,
                        "code": "320113000000",
                        "label": "栖霞区",
                        "children": null
                    },
                    {
                        "value": 680,
                        "code": "320114000000",
                        "label": "雨花台区",
                        "children": null
                    },
                    {
                        "value": 681,
                        "code": "320115000000",
                        "label": "江宁区",
                        "children": null
                    },
                    {
                        "value": 682,
                        "code": "320116000000",
                        "label": "六合区",
                        "children": null
                    },
                    {
                        "value": 683,
                        "code": "320124000000",
                        "label": "溧水县",
                        "children": null
                    },
                    {
                        "value": 684,
                        "code": "320125000000",
                        "label": "高淳县",
                        "children": null
                    }
                ]
            },
            {
                "value": 328,
                "code": "320200000000",
                "label": "无锡市",
                "children": [
                    {
                        "value": 584,
                        "code": "320202000000",
                        "label": "崇安区",
                        "children": null
                    },
                    {
                        "value": 585,
                        "code": "320203000000",
                        "label": "南长区",
                        "children": null
                    },
                    {
                        "value": 586,
                        "code": "320204000000",
                        "label": "北塘区",
                        "children": null
                    },
                    {
                        "value": 587,
                        "code": "320205000000",
                        "label": "锡山区",
                        "children": null
                    },
                    {
                        "value": 588,
                        "code": "320206000000",
                        "label": "惠山区",
                        "children": null
                    },
                    {
                        "value": 589,
                        "code": "320211000000",
                        "label": "滨湖区",
                        "children": null
                    },
                    {
                        "value": 590,
                        "code": "320281000000",
                        "label": "江阴市",
                        "children": null
                    },
                    {
                        "value": 591,
                        "code": "320282000000",
                        "label": "宜兴市",
                        "children": null
                    }
                ]
            },
            {
                "value": 329,
                "code": "320300000000",
                "label": "徐州市",
                "children": [
                    {
                        "value": 1495,
                        "code": "320302000000",
                        "label": "鼓楼区",
                        "children": null
                    },
                    {
                        "value": 1496,
                        "code": "320303000000",
                        "label": "云龙区",
                        "children": null
                    },
                    {
                        "value": 1497,
                        "code": "320305000000",
                        "label": "贾汪区",
                        "children": null
                    },
                    {
                        "value": 1498,
                        "code": "320311000000",
                        "label": "泉山区",
                        "children": null
                    },
                    {
                        "value": 1499,
                        "code": "320312000000",
                        "label": "铜山区",
                        "children": null
                    },
                    {
                        "value": 1500,
                        "code": "320321000000",
                        "label": "丰县",
                        "children": null
                    },
                    {
                        "value": 1501,
                        "code": "320322000000",
                        "label": "沛县",
                        "children": null
                    },
                    {
                        "value": 1502,
                        "code": "320324000000",
                        "label": "睢宁县",
                        "children": null
                    },
                    {
                        "value": 1503,
                        "code": "320381000000",
                        "label": "新沂市",
                        "children": null
                    },
                    {
                        "value": 1504,
                        "code": "320382000000",
                        "label": "邳州市",
                        "children": null
                    }
                ]
            },
            {
                "value": 330,
                "code": "320400000000",
                "label": "常州市",
                "children": [
                    {
                        "value": 415,
                        "code": "320402000000",
                        "label": "天宁区",
                        "children": null
                    },
                    {
                        "value": 416,
                        "code": "320404000000",
                        "label": "钟楼区",
                        "children": null
                    },
                    {
                        "value": 417,
                        "code": "320405000000",
                        "label": "戚墅堰区",
                        "children": null
                    },
                    {
                        "value": 418,
                        "code": "320411000000",
                        "label": "新北区",
                        "children": null
                    },
                    {
                        "value": 419,
                        "code": "320412000000",
                        "label": "武进区",
                        "children": null
                    },
                    {
                        "value": 420,
                        "code": "320481000000",
                        "label": "溧阳市",
                        "children": null
                    },
                    {
                        "value": 421,
                        "code": "320482000000",
                        "label": "金坛市",
                        "children": null
                    }
                ]
            },
            {
                "value": 331,
                "code": "320500000000",
                "label": "苏州市",
                "children": [
                    {
                        "value": 1668,
                        "code": "320502000000",
                        "label": "沧浪区",
                        "children": null
                    },
                    {
                        "value": 1669,
                        "code": "320503000000",
                        "label": "平江区",
                        "children": null
                    },
                    {
                        "value": 1670,
                        "code": "320504000000",
                        "label": "金阊区",
                        "children": null
                    },
                    {
                        "value": 1671,
                        "code": "320505000000",
                        "label": "虎丘区",
                        "children": null
                    },
                    {
                        "value": 1672,
                        "code": "320506000000",
                        "label": "吴中区",
                        "children": null
                    },
                    {
                        "value": 1673,
                        "code": "320507000000",
                        "label": "相城区",
                        "children": null
                    },
                    {
                        "value": 1674,
                        "code": "320581000000",
                        "label": "常熟市",
                        "children": null
                    },
                    {
                        "value": 1675,
                        "code": "320582000000",
                        "label": "张家港市",
                        "children": null
                    },
                    {
                        "value": 1676,
                        "code": "320583000000",
                        "label": "昆山市",
                        "children": null
                    },
                    {
                        "value": 1677,
                        "code": "320584000000",
                        "label": "吴江市",
                        "children": null
                    },
                    {
                        "value": 1678,
                        "code": "320585000000",
                        "label": "太仓市",
                        "children": null
                    }
                ]
            },
            {
                "value": 332,
                "code": "320600000000",
                "label": "南通市",
                "children": [
                    {
                        "value": 3094,
                        "code": "320602000000",
                        "label": "崇川区",
                        "children": null
                    },
                    {
                        "value": 3095,
                        "code": "320611000000",
                        "label": "港闸区",
                        "children": null
                    },
                    {
                        "value": 3096,
                        "code": "320612000000",
                        "label": "通州区",
                        "children": null
                    },
                    {
                        "value": 3097,
                        "code": "320621000000",
                        "label": "海安县",
                        "children": null
                    },
                    {
                        "value": 3098,
                        "code": "320623000000",
                        "label": "如东县",
                        "children": null
                    },
                    {
                        "value": 3099,
                        "code": "320681000000",
                        "label": "启东市",
                        "children": null
                    },
                    {
                        "value": 3100,
                        "code": "320682000000",
                        "label": "如皋市",
                        "children": null
                    },
                    {
                        "value": 3101,
                        "code": "320684000000",
                        "label": "海门市",
                        "children": null
                    }
                ]
            },
            {
                "value": 333,
                "code": "320700000000",
                "label": "连云港市",
                "children": [
                    {
                        "value": 2260,
                        "code": "320703000000",
                        "label": "连云区",
                        "children": null
                    },
                    {
                        "value": 2261,
                        "code": "320705000000",
                        "label": "新浦区",
                        "children": null
                    },
                    {
                        "value": 2262,
                        "code": "320706000000",
                        "label": "海州区",
                        "children": null
                    },
                    {
                        "value": 2263,
                        "code": "320721000000",
                        "label": "赣榆县",
                        "children": null
                    },
                    {
                        "value": 2264,
                        "code": "320722000000",
                        "label": "东海县",
                        "children": null
                    },
                    {
                        "value": 2265,
                        "code": "320723000000",
                        "label": "灌云县",
                        "children": null
                    },
                    {
                        "value": 2266,
                        "code": "320724000000",
                        "label": "灌南县",
                        "children": null
                    }
                ]
            },
            {
                "value": 334,
                "code": "320800000000",
                "label": "淮安市",
                "children": [
                    {
                        "value": 2478,
                        "code": "320802000000",
                        "label": "清河区",
                        "children": null
                    },
                    {
                        "value": 2479,
                        "code": "320803000000",
                        "label": "楚州区",
                        "children": null
                    },
                    {
                        "value": 2480,
                        "code": "320804000000",
                        "label": "淮阴区",
                        "children": null
                    },
                    {
                        "value": 2481,
                        "code": "320811000000",
                        "label": "清浦区",
                        "children": null
                    },
                    {
                        "value": 2482,
                        "code": "320826000000",
                        "label": "涟水县",
                        "children": null
                    },
                    {
                        "value": 2483,
                        "code": "320829000000",
                        "label": "洪泽县",
                        "children": null
                    },
                    {
                        "value": 2484,
                        "code": "320830000000",
                        "label": "盱眙县",
                        "children": null
                    },
                    {
                        "value": 2485,
                        "code": "320831000000",
                        "label": "金湖县",
                        "children": null
                    }
                ]
            },
            {
                "value": 335,
                "code": "320900000000",
                "label": "盐城市",
                "children": [
                    {
                        "value": 2361,
                        "code": "320902000000",
                        "label": "亭湖区",
                        "children": null
                    },
                    {
                        "value": 2362,
                        "code": "320903000000",
                        "label": "盐都区",
                        "children": null
                    },
                    {
                        "value": 2363,
                        "code": "320921000000",
                        "label": "响水县",
                        "children": null
                    },
                    {
                        "value": 2364,
                        "code": "320922000000",
                        "label": "滨海县",
                        "children": null
                    },
                    {
                        "value": 2365,
                        "code": "320923000000",
                        "label": "阜宁县",
                        "children": null
                    },
                    {
                        "value": 2366,
                        "code": "320924000000",
                        "label": "射阳县",
                        "children": null
                    },
                    {
                        "value": 2367,
                        "code": "320925000000",
                        "label": "建湖县",
                        "children": null
                    },
                    {
                        "value": 2368,
                        "code": "320981000000",
                        "label": "东台市",
                        "children": null
                    },
                    {
                        "value": 2369,
                        "code": "320982000000",
                        "label": "大丰市",
                        "children": null
                    }
                ]
            },
            {
                "value": 336,
                "code": "321000000000",
                "label": "扬州市",
                "children": [
                    {
                        "value": 2038,
                        "code": "321002000000",
                        "label": "广陵区",
                        "children": null
                    },
                    {
                        "value": 2039,
                        "code": "321003000000",
                        "label": "邗江区",
                        "children": null
                    },
                    {
                        "value": 2040,
                        "code": "321012000000",
                        "label": "江都区",
                        "children": null
                    },
                    {
                        "value": 2041,
                        "code": "321023000000",
                        "label": "宝应县",
                        "children": null
                    },
                    {
                        "value": 2042,
                        "code": "321081000000",
                        "label": "仪征市",
                        "children": null
                    },
                    {
                        "value": 2043,
                        "code": "321084000000",
                        "label": "高邮市",
                        "children": null
                    }
                ]
            },
            {
                "value": 337,
                "code": "321100000000",
                "label": "镇江市",
                "children": [
                    {
                        "value": 1975,
                        "code": "321102000000",
                        "label": "京口区",
                        "children": null
                    },
                    {
                        "value": 1976,
                        "code": "321111000000",
                        "label": "润州区",
                        "children": null
                    },
                    {
                        "value": 1977,
                        "code": "321112000000",
                        "label": "丹徒区",
                        "children": null
                    },
                    {
                        "value": 1978,
                        "code": "321181000000",
                        "label": "丹阳市",
                        "children": null
                    },
                    {
                        "value": 1979,
                        "code": "321182000000",
                        "label": "扬中市",
                        "children": null
                    },
                    {
                        "value": 1980,
                        "code": "321183000000",
                        "label": "句容市",
                        "children": null
                    }
                ]
            },
            {
                "value": 338,
                "code": "321200000000",
                "label": "泰州市",
                "children": [
                    {
                        "value": 1899,
                        "code": "321202000000",
                        "label": "海陵区",
                        "children": null
                    },
                    {
                        "value": 1900,
                        "code": "321203000000",
                        "label": "高港区",
                        "children": null
                    },
                    {
                        "value": 1901,
                        "code": "321281000000",
                        "label": "兴化市",
                        "children": null
                    },
                    {
                        "value": 1902,
                        "code": "321282000000",
                        "label": "靖江市",
                        "children": null
                    },
                    {
                        "value": 1903,
                        "code": "321283000000",
                        "label": "泰兴市",
                        "children": null
                    },
                    {
                        "value": 1904,
                        "code": "321284000000",
                        "label": "姜堰市",
                        "children": null
                    }
                ]
            },
            {
                "value": 339,
                "code": "321300000000",
                "label": "宿迁市",
                "children": [
                    {
                        "value": 1819,
                        "code": "321302000000",
                        "label": "宿城区",
                        "children": null
                    },
                    {
                        "value": 1820,
                        "code": "321311000000",
                        "label": "宿豫区",
                        "children": null
                    },
                    {
                        "value": 1821,
                        "code": "321322000000",
                        "label": "沭阳县",
                        "children": null
                    },
                    {
                        "value": 1822,
                        "code": "321323000000",
                        "label": "泗阳县",
                        "children": null
                    },
                    {
                        "value": 1823,
                        "code": "321324000000",
                        "label": "泗洪县",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "value": 12,
        "code": "330000000000",
        "label": "浙江",
        "children": [
            {
                "value": 302,
                "code": "330100000000",
                "label": "杭州市",
                "children": [
                    {
                        "value": 1604,
                        "code": "330102000000",
                        "label": "上城区",
                        "children": null
                    },
                    {
                        "value": 1605,
                        "code": "330103000000",
                        "label": "下城区",
                        "children": null
                    },
                    {
                        "value": 1606,
                        "code": "330104000000",
                        "label": "江干区",
                        "children": null
                    },
                    {
                        "value": 1607,
                        "code": "330105000000",
                        "label": "拱墅区",
                        "children": null
                    },
                    {
                        "value": 1608,
                        "code": "330106000000",
                        "label": "西湖区",
                        "children": null
                    },
                    {
                        "value": 1609,
                        "code": "330108000000",
                        "label": "滨江区",
                        "children": null
                    },
                    {
                        "value": 1610,
                        "code": "330109000000",
                        "label": "萧山区",
                        "children": null
                    },
                    {
                        "value": 1611,
                        "code": "330110000000",
                        "label": "余杭区",
                        "children": null
                    },
                    {
                        "value": 1612,
                        "code": "330122000000",
                        "label": "桐庐县",
                        "children": null
                    },
                    {
                        "value": 1613,
                        "code": "330127000000",
                        "label": "淳安县",
                        "children": null
                    },
                    {
                        "value": 1614,
                        "code": "330182000000",
                        "label": "建德市",
                        "children": null
                    },
                    {
                        "value": 1615,
                        "code": "330183000000",
                        "label": "富阳市",
                        "children": null
                    },
                    {
                        "value": 1616,
                        "code": "330185000000",
                        "label": "临安市",
                        "children": null
                    }
                ]
            },
            {
                "value": 303,
                "code": "330200000000",
                "label": "宁波市",
                "children": [
                    {
                        "value": 1475,
                        "code": "330203000000",
                        "label": "海曙区",
                        "children": null
                    },
                    {
                        "value": 1476,
                        "code": "330204000000",
                        "label": "江东区",
                        "children": null
                    },
                    {
                        "value": 1477,
                        "code": "330205000000",
                        "label": "江北区",
                        "children": null
                    },
                    {
                        "value": 1478,
                        "code": "330206000000",
                        "label": "北仑区",
                        "children": null
                    },
                    {
                        "value": 1479,
                        "code": "330211000000",
                        "label": "镇海区",
                        "children": null
                    },
                    {
                        "value": 1480,
                        "code": "330212000000",
                        "label": "鄞州区",
                        "children": null
                    },
                    {
                        "value": 1481,
                        "code": "330225000000",
                        "label": "象山县",
                        "children": null
                    },
                    {
                        "value": 1482,
                        "code": "330226000000",
                        "label": "宁海县",
                        "children": null
                    },
                    {
                        "value": 1483,
                        "code": "330281000000",
                        "label": "余姚市",
                        "children": null
                    },
                    {
                        "value": 1484,
                        "code": "330282000000",
                        "label": "慈溪市",
                        "children": null
                    },
                    {
                        "value": 1485,
                        "code": "330283000000",
                        "label": "奉化市",
                        "children": null
                    }
                ]
            },
            {
                "value": 304,
                "code": "330300000000",
                "label": "温州市",
                "children": [
                    {
                        "value": 1388,
                        "code": "330302000000",
                        "label": "鹿城区",
                        "children": null
                    },
                    {
                        "value": 1389,
                        "code": "330303000000",
                        "label": "龙湾区",
                        "children": null
                    },
                    {
                        "value": 1390,
                        "code": "330304000000",
                        "label": "瓯海区",
                        "children": null
                    },
                    {
                        "value": 1391,
                        "code": "330322000000",
                        "label": "洞头县",
                        "children": null
                    },
                    {
                        "value": 1392,
                        "code": "330324000000",
                        "label": "永嘉县",
                        "children": null
                    },
                    {
                        "value": 1393,
                        "code": "330326000000",
                        "label": "平阳县",
                        "children": null
                    },
                    {
                        "value": 1394,
                        "code": "330327000000",
                        "label": "苍南县",
                        "children": null
                    },
                    {
                        "value": 1395,
                        "code": "330328000000",
                        "label": "文成县",
                        "children": null
                    },
                    {
                        "value": 1396,
                        "code": "330329000000",
                        "label": "泰顺县",
                        "children": null
                    },
                    {
                        "value": 1397,
                        "code": "330381000000",
                        "label": "瑞安市",
                        "children": null
                    },
                    {
                        "value": 1398,
                        "code": "330382000000",
                        "label": "乐清市",
                        "children": null
                    }
                ]
            },
            {
                "value": 305,
                "code": "330400000000",
                "label": "嘉兴市",
                "children": [
                    {
                        "value": 1296,
                        "code": "330402000000",
                        "label": "南湖区",
                        "children": null
                    },
                    {
                        "value": 1297,
                        "code": "330411000000",
                        "label": "秀洲区",
                        "children": null
                    },
                    {
                        "value": 1298,
                        "code": "330421000000",
                        "label": "嘉善县",
                        "children": null
                    },
                    {
                        "value": 1299,
                        "code": "330424000000",
                        "label": "海盐县",
                        "children": null
                    },
                    {
                        "value": 1300,
                        "code": "330481000000",
                        "label": "海宁市",
                        "children": null
                    },
                    {
                        "value": 1301,
                        "code": "330482000000",
                        "label": "平湖市",
                        "children": null
                    },
                    {
                        "value": 1302,
                        "code": "330483000000",
                        "label": "桐乡市",
                        "children": null
                    }
                ]
            },
            {
                "value": 306,
                "code": "330500000000",
                "label": "湖州市",
                "children": [
                    {
                        "value": 1200,
                        "code": "330502000000",
                        "label": "吴兴区",
                        "children": null
                    },
                    {
                        "value": 1201,
                        "code": "330503000000",
                        "label": "南浔区",
                        "children": null
                    },
                    {
                        "value": 1202,
                        "code": "330521000000",
                        "label": "德清县",
                        "children": null
                    },
                    {
                        "value": 1203,
                        "code": "330522000000",
                        "label": "长兴县",
                        "children": null
                    },
                    {
                        "value": 1204,
                        "code": "330523000000",
                        "label": "安吉县",
                        "children": null
                    }
                ]
            },
            {
                "value": 307,
                "code": "330600000000",
                "label": "绍兴市",
                "children": [
                    {
                        "value": 1081,
                        "code": "330602000000",
                        "label": "越城区",
                        "children": null
                    },
                    {
                        "value": 1082,
                        "code": "330621000000",
                        "label": "绍兴县",
                        "children": null
                    },
                    {
                        "value": 1083,
                        "code": "330624000000",
                        "label": "新昌县",
                        "children": null
                    },
                    {
                        "value": 1084,
                        "code": "330681000000",
                        "label": "诸暨市",
                        "children": null
                    },
                    {
                        "value": 1085,
                        "code": "330682000000",
                        "label": "上虞市",
                        "children": null
                    },
                    {
                        "value": 1086,
                        "code": "330683000000",
                        "label": "嵊州市",
                        "children": null
                    }
                ]
            },
            {
                "value": 308,
                "code": "330700000000",
                "label": "金华市",
                "children": [
                    {
                        "value": 959,
                        "code": "330702000000",
                        "label": "婺城区",
                        "children": null
                    },
                    {
                        "value": 960,
                        "code": "330703000000",
                        "label": "金东区",
                        "children": null
                    },
                    {
                        "value": 961,
                        "code": "330723000000",
                        "label": "武义县",
                        "children": null
                    },
                    {
                        "value": 962,
                        "code": "330726000000",
                        "label": "浦江县",
                        "children": null
                    },
                    {
                        "value": 963,
                        "code": "330727000000",
                        "label": "磐安县",
                        "children": null
                    },
                    {
                        "value": 964,
                        "code": "330781000000",
                        "label": "兰溪市",
                        "children": null
                    },
                    {
                        "value": 965,
                        "code": "330782000000",
                        "label": "义乌市",
                        "children": null
                    },
                    {
                        "value": 966,
                        "code": "330783000000",
                        "label": "东阳市",
                        "children": null
                    },
                    {
                        "value": 967,
                        "code": "330784000000",
                        "label": "永康市",
                        "children": null
                    }
                ]
            },
            {
                "value": 309,
                "code": "330800000000",
                "label": "衢州市",
                "children": [
                    {
                        "value": 464,
                        "code": "330802000000",
                        "label": "柯城区",
                        "children": null
                    },
                    {
                        "value": 465,
                        "code": "330803000000",
                        "label": "衢江区",
                        "children": null
                    },
                    {
                        "value": 466,
                        "code": "330822000000",
                        "label": "常山县",
                        "children": null
                    },
                    {
                        "value": 467,
                        "code": "330824000000",
                        "label": "开化县",
                        "children": null
                    },
                    {
                        "value": 468,
                        "code": "330825000000",
                        "label": "龙游县",
                        "children": null
                    },
                    {
                        "value": 469,
                        "code": "330881000000",
                        "label": "江山市",
                        "children": null
                    }
                ]
            },
            {
                "value": 310,
                "code": "330900000000",
                "label": "舟山市",
                "children": [
                    {
                        "value": 3234,
                        "code": "330902000000",
                        "label": "定海区",
                        "children": null
                    },
                    {
                        "value": 3235,
                        "code": "330903000000",
                        "label": "普陀区",
                        "children": null
                    },
                    {
                        "value": 3236,
                        "code": "330921000000",
                        "label": "岱山县",
                        "children": null
                    },
                    {
                        "value": 3237,
                        "code": "330922000000",
                        "label": "嵊泗县",
                        "children": null
                    }
                ]
            },
            {
                "value": 311,
                "code": "331000000000",
                "label": "台州市",
                "children": [
                    {
                        "value": 3026,
                        "code": "331002000000",
                        "label": "椒江区",
                        "children": null
                    },
                    {
                        "value": 3027,
                        "code": "331003000000",
                        "label": "黄岩区",
                        "children": null
                    },
                    {
                        "value": 3028,
                        "code": "331004000000",
                        "label": "路桥区",
                        "children": null
                    },
                    {
                        "value": 3029,
                        "code": "331021000000",
                        "label": "玉环县",
                        "children": null
                    },
                    {
                        "value": 3030,
                        "code": "331022000000",
                        "label": "三门县",
                        "children": null
                    },
                    {
                        "value": 3031,
                        "code": "331023000000",
                        "label": "天台县",
                        "children": null
                    },
                    {
                        "value": 3032,
                        "code": "331024000000",
                        "label": "仙居县",
                        "children": null
                    },
                    {
                        "value": 3033,
                        "code": "331081000000",
                        "label": "温岭市",
                        "children": null
                    },
                    {
                        "value": 3034,
                        "code": "331082000000",
                        "label": "临海市",
                        "children": null
                    }
                ]
            },
            {
                "value": 312,
                "code": "331100000000",
                "label": "丽水市",
                "children": [
                    {
                        "value": 2927,
                        "code": "331102000000",
                        "label": "莲都区",
                        "children": null
                    },
                    {
                        "value": 2928,
                        "code": "331121000000",
                        "label": "青田县",
                        "children": null
                    },
                    {
                        "value": 2929,
                        "code": "331122000000",
                        "label": "缙云县",
                        "children": null
                    },
                    {
                        "value": 2930,
                        "code": "331123000000",
                        "label": "遂昌县",
                        "children": null
                    },
                    {
                        "value": 2931,
                        "code": "331124000000",
                        "label": "松阳县",
                        "children": null
                    },
                    {
                        "value": 2932,
                        "code": "331125000000",
                        "label": "云和县",
                        "children": null
                    },
                    {
                        "value": 2933,
                        "code": "331126000000",
                        "label": "庆元县",
                        "children": null
                    },
                    {
                        "value": 2934,
                        "code": "331127000000",
                        "label": "景宁畲族自治县",
                        "children": null
                    },
                    {
                        "value": 2935,
                        "code": "331181000000",
                        "label": "龙泉市",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "value": 13,
        "code": "340000000000",
        "label": "安徽",
        "children": [
            {
                "value": 361,
                "code": "340100000000",
                "label": "合肥市",
                "children": [
                    {
                        "value": 602,
                        "code": "340102000000",
                        "label": "瑶海区",
                        "children": null
                    },
                    {
                        "value": 603,
                        "code": "340103000000",
                        "label": "庐阳区",
                        "children": null
                    },
                    {
                        "value": 604,
                        "code": "340104000000",
                        "label": "蜀山区",
                        "children": null
                    },
                    {
                        "value": 605,
                        "code": "340111000000",
                        "label": "包河区",
                        "children": null
                    },
                    {
                        "value": 606,
                        "code": "340121000000",
                        "label": "长丰县",
                        "children": null
                    },
                    {
                        "value": 607,
                        "code": "340122000000",
                        "label": "肥东县",
                        "children": null
                    },
                    {
                        "value": 608,
                        "code": "340123000000",
                        "label": "肥西县",
                        "children": null
                    },
                    {
                        "value": 609,
                        "code": "340124000000",
                        "label": "庐江县",
                        "children": null
                    },
                    {
                        "value": 610,
                        "code": "340181000000",
                        "label": "巢湖市",
                        "children": null
                    }
                ]
            },
            {
                "value": 362,
                "code": "340200000000",
                "label": "芜湖市",
                "children": [
                    {
                        "value": 2384,
                        "code": "340202000000",
                        "label": "镜湖区",
                        "children": null
                    },
                    {
                        "value": 2385,
                        "code": "340203000000",
                        "label": "弋江区",
                        "children": null
                    },
                    {
                        "value": 2386,
                        "code": "340207000000",
                        "label": "鸠江区",
                        "children": null
                    },
                    {
                        "value": 2387,
                        "code": "340208000000",
                        "label": "三山区",
                        "children": null
                    },
                    {
                        "value": 2388,
                        "code": "340221000000",
                        "label": "芜湖县",
                        "children": null
                    },
                    {
                        "value": 2389,
                        "code": "340222000000",
                        "label": "繁昌县",
                        "children": null
                    },
                    {
                        "value": 2390,
                        "code": "340223000000",
                        "label": "南陵县",
                        "children": null
                    },
                    {
                        "value": 2391,
                        "code": "340225000000",
                        "label": "无为县",
                        "children": null
                    }
                ]
            },
            {
                "value": 363,
                "code": "340300000000",
                "label": "蚌埠市",
                "children": [
                    {
                        "value": 1234,
                        "code": "340302000000",
                        "label": "龙子湖区",
                        "children": null
                    },
                    {
                        "value": 1235,
                        "code": "340303000000",
                        "label": "蚌山区",
                        "children": null
                    },
                    {
                        "value": 1236,
                        "code": "340304000000",
                        "label": "禹会区",
                        "children": null
                    },
                    {
                        "value": 1237,
                        "code": "340311000000",
                        "label": "淮上区",
                        "children": null
                    },
                    {
                        "value": 1238,
                        "code": "340321000000",
                        "label": "怀远县",
                        "children": null
                    },
                    {
                        "value": 1239,
                        "code": "340322000000",
                        "label": "五河县",
                        "children": null
                    },
                    {
                        "value": 1240,
                        "code": "340323000000",
                        "label": "固镇县",
                        "children": null
                    }
                ]
            },
            {
                "value": 364,
                "code": "340400000000",
                "label": "淮南市",
                "children": [
                    {
                        "value": 851,
                        "code": "340402000000",
                        "label": "大通区",
                        "children": null
                    },
                    {
                        "value": 852,
                        "code": "340403000000",
                        "label": "田家庵区",
                        "children": null
                    },
                    {
                        "value": 853,
                        "code": "340404000000",
                        "label": "谢家集区",
                        "children": null
                    },
                    {
                        "value": 854,
                        "code": "340405000000",
                        "label": "八公山区",
                        "children": null
                    },
                    {
                        "value": 855,
                        "code": "340406000000",
                        "label": "潘集区",
                        "children": null
                    },
                    {
                        "value": 856,
                        "code": "340421000000",
                        "label": "凤台县",
                        "children": null
                    }
                ]
            },
            {
                "value": 365,
                "code": "340500000000",
                "label": "马鞍山市",
                "children": [
                    {
                        "value": 1886,
                        "code": "340502000000",
                        "label": "金家庄区",
                        "children": null
                    },
                    {
                        "value": 1887,
                        "code": "340503000000",
                        "label": "花山区",
                        "children": null
                    },
                    {
                        "value": 1888,
                        "code": "340504000000",
                        "label": "雨山区",
                        "children": null
                    },
                    {
                        "value": 1889,
                        "code": "340521000000",
                        "label": "当涂县",
                        "children": null
                    },
                    {
                        "value": 1890,
                        "code": "340522000000",
                        "label": "含山县",
                        "children": null
                    },
                    {
                        "value": 1891,
                        "code": "340523000000",
                        "label": "和县",
                        "children": null
                    }
                ]
            },
            {
                "value": 366,
                "code": "340600000000",
                "label": "淮北市",
                "children": [
                    {
                        "value": 2004,
                        "code": "340602000000",
                        "label": "杜集区",
                        "children": null
                    },
                    {
                        "value": 2005,
                        "code": "340603000000",
                        "label": "相山区",
                        "children": null
                    },
                    {
                        "value": 2006,
                        "code": "340604000000",
                        "label": "烈山区",
                        "children": null
                    },
                    {
                        "value": 2007,
                        "code": "340621000000",
                        "label": "濉溪县",
                        "children": null
                    }
                ]
            },
            {
                "value": 367,
                "code": "340700000000",
                "label": "铜陵市",
                "children": [
                    {
                        "value": 1935,
                        "code": "340702000000",
                        "label": "铜官山区",
                        "children": null
                    },
                    {
                        "value": 1936,
                        "code": "340703000000",
                        "label": "狮子山区",
                        "children": null
                    },
                    {
                        "value": 1937,
                        "code": "340711000000",
                        "label": "郊区",
                        "children": null
                    },
                    {
                        "value": 1938,
                        "code": "340721000000",
                        "label": "铜陵县",
                        "children": null
                    }
                ]
            },
            {
                "value": 368,
                "code": "340800000000",
                "label": "安庆市",
                "children": [
                    {
                        "value": 1348,
                        "code": "340802000000",
                        "label": "迎江区",
                        "children": null
                    },
                    {
                        "value": 1349,
                        "code": "340803000000",
                        "label": "大观区",
                        "children": null
                    },
                    {
                        "value": 1350,
                        "code": "340811000000",
                        "label": "宜秀区",
                        "children": null
                    },
                    {
                        "value": 1351,
                        "code": "340822000000",
                        "label": "怀宁县",
                        "children": null
                    },
                    {
                        "value": 1352,
                        "code": "340823000000",
                        "label": "枞阳县",
                        "children": null
                    },
                    {
                        "value": 1353,
                        "code": "340824000000",
                        "label": "潜山县",
                        "children": null
                    },
                    {
                        "value": 1354,
                        "code": "340825000000",
                        "label": "太湖县",
                        "children": null
                    },
                    {
                        "value": 1355,
                        "code": "340826000000",
                        "label": "宿松县",
                        "children": null
                    },
                    {
                        "value": 1356,
                        "code": "340827000000",
                        "label": "望江县",
                        "children": null
                    },
                    {
                        "value": 1357,
                        "code": "340828000000",
                        "label": "岳西县",
                        "children": null
                    },
                    {
                        "value": 1358,
                        "code": "340881000000",
                        "label": "桐城市",
                        "children": null
                    }
                ]
            },
            {
                "value": 369,
                "code": "341000000000",
                "label": "黄山市",
                "children": [
                    {
                        "value": 2110,
                        "code": "341002000000",
                        "label": "屯溪区",
                        "children": null
                    },
                    {
                        "value": 2111,
                        "code": "341003000000",
                        "label": "黄山区",
                        "children": null
                    },
                    {
                        "value": 2112,
                        "code": "341004000000",
                        "label": "徽州区",
                        "children": null
                    },
                    {
                        "value": 2113,
                        "code": "341021000000",
                        "label": "歙县",
                        "children": null
                    },
                    {
                        "value": 2114,
                        "code": "341022000000",
                        "label": "休宁县",
                        "children": null
                    },
                    {
                        "value": 2115,
                        "code": "341023000000",
                        "label": "黟县",
                        "children": null
                    },
                    {
                        "value": 2116,
                        "code": "341024000000",
                        "label": "祁门县",
                        "children": null
                    }
                ]
            },
            {
                "value": 370,
                "code": "341100000000",
                "label": "滁州市",
                "children": [
                    {
                        "value": 1023,
                        "code": "341102000000",
                        "label": "琅琊区",
                        "children": null
                    },
                    {
                        "value": 1024,
                        "code": "341103000000",
                        "label": "南谯区",
                        "children": null
                    },
                    {
                        "value": 1025,
                        "code": "341122000000",
                        "label": "来安县",
                        "children": null
                    },
                    {
                        "value": 1026,
                        "code": "341124000000",
                        "label": "全椒县",
                        "children": null
                    },
                    {
                        "value": 1027,
                        "code": "341125000000",
                        "label": "定远县",
                        "children": null
                    },
                    {
                        "value": 1028,
                        "code": "341126000000",
                        "label": "凤阳县",
                        "children": null
                    },
                    {
                        "value": 1029,
                        "code": "341181000000",
                        "label": "天长市",
                        "children": null
                    },
                    {
                        "value": 1030,
                        "code": "341182000000",
                        "label": "明光市",
                        "children": null
                    }
                ]
            },
            {
                "value": 371,
                "code": "341200000000",
                "label": "阜阳市",
                "children": [
                    {
                        "value": 740,
                        "code": "341202000000",
                        "label": "颍州区",
                        "children": null
                    },
                    {
                        "value": 741,
                        "code": "341203000000",
                        "label": "颍东区",
                        "children": null
                    },
                    {
                        "value": 742,
                        "code": "341204000000",
                        "label": "颍泉区",
                        "children": null
                    },
                    {
                        "value": 743,
                        "code": "341221000000",
                        "label": "临泉县",
                        "children": null
                    },
                    {
                        "value": 744,
                        "code": "341222000000",
                        "label": "太和县",
                        "children": null
                    },
                    {
                        "value": 745,
                        "code": "341225000000",
                        "label": "阜南县",
                        "children": null
                    },
                    {
                        "value": 746,
                        "code": "341226000000",
                        "label": "颍上县",
                        "children": null
                    },
                    {
                        "value": 747,
                        "code": "341282000000",
                        "label": "界首市",
                        "children": null
                    }
                ]
            },
            {
                "value": 372,
                "code": "341300000000",
                "label": "宿州市",
                "children": [
                    {
                        "value": 723,
                        "code": "341302000000",
                        "label": "埇桥区",
                        "children": null
                    },
                    {
                        "value": 724,
                        "code": "341321000000",
                        "label": "砀山县",
                        "children": null
                    },
                    {
                        "value": 725,
                        "code": "341322000000",
                        "label": "萧县",
                        "children": null
                    },
                    {
                        "value": 726,
                        "code": "341323000000",
                        "label": "灵璧县",
                        "children": null
                    },
                    {
                        "value": 727,
                        "code": "341324000000",
                        "label": "泗县",
                        "children": null
                    }
                ]
            },
            {
                "value": 373,
                "code": "341500000000",
                "label": "六安市",
                "children": [
                    {
                        "value": 404,
                        "code": "341502000000",
                        "label": "金安区",
                        "children": null
                    },
                    {
                        "value": 405,
                        "code": "341503000000",
                        "label": "裕安区",
                        "children": null
                    },
                    {
                        "value": 406,
                        "code": "341521000000",
                        "label": "寿县",
                        "children": null
                    },
                    {
                        "value": 407,
                        "code": "341522000000",
                        "label": "霍邱县",
                        "children": null
                    },
                    {
                        "value": 408,
                        "code": "341523000000",
                        "label": "舒城县",
                        "children": null
                    },
                    {
                        "value": 409,
                        "code": "341524000000",
                        "label": "金寨县",
                        "children": null
                    },
                    {
                        "value": 410,
                        "code": "341525000000",
                        "label": "霍山县",
                        "children": null
                    }
                ]
            },
            {
                "value": 374,
                "code": "341600000000",
                "label": "亳州市",
                "children": [
                    {
                        "value": 2452,
                        "code": "341602000000",
                        "label": "谯城区",
                        "children": null
                    },
                    {
                        "value": 2453,
                        "code": "341621000000",
                        "label": "涡阳县",
                        "children": null
                    },
                    {
                        "value": 2454,
                        "code": "341622000000",
                        "label": "蒙城县",
                        "children": null
                    },
                    {
                        "value": 2455,
                        "code": "341623000000",
                        "label": "利辛县",
                        "children": null
                    }
                ]
            },
            {
                "value": 375,
                "code": "341700000000",
                "label": "池州市",
                "children": [
                    {
                        "value": 2345,
                        "code": "341702000000",
                        "label": "贵池区",
                        "children": null
                    },
                    {
                        "value": 2346,
                        "code": "341721000000",
                        "label": "东至县",
                        "children": null
                    },
                    {
                        "value": 2347,
                        "code": "341722000000",
                        "label": "石台县",
                        "children": null
                    },
                    {
                        "value": 2348,
                        "code": "341723000000",
                        "label": "青阳县",
                        "children": null
                    }
                ]
            },
            {
                "value": 376,
                "code": "341800000000",
                "label": "宣城市",
                "children": [
                    {
                        "value": 1777,
                        "code": "341802000000",
                        "label": "宣州区",
                        "children": null
                    },
                    {
                        "value": 1778,
                        "code": "341821000000",
                        "label": "郎溪县",
                        "children": null
                    },
                    {
                        "value": 1779,
                        "code": "341822000000",
                        "label": "广德县",
                        "children": null
                    },
                    {
                        "value": 1780,
                        "code": "341823000000",
                        "label": "泾县",
                        "children": null
                    },
                    {
                        "value": 1781,
                        "code": "341824000000",
                        "label": "绩溪县",
                        "children": null
                    },
                    {
                        "value": 1782,
                        "code": "341825000000",
                        "label": "旌德县",
                        "children": null
                    },
                    {
                        "value": 1783,
                        "code": "341881000000",
                        "label": "宁国市",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "value": 14,
        "code": "350000000000",
        "label": "福建",
        "children": [
            {
                "value": 57,
                "code": "350100000000",
                "label": "福州市",
                "children": [
                    {
                        "value": 512,
                        "code": "350102000000",
                        "label": "鼓楼区",
                        "children": null
                    },
                    {
                        "value": 513,
                        "code": "350103000000",
                        "label": "台江区",
                        "children": null
                    },
                    {
                        "value": 514,
                        "code": "350104000000",
                        "label": "仓山区",
                        "children": null
                    },
                    {
                        "value": 515,
                        "code": "350105000000",
                        "label": "马尾区",
                        "children": null
                    },
                    {
                        "value": 516,
                        "code": "350111000000",
                        "label": "晋安区",
                        "children": null
                    },
                    {
                        "value": 517,
                        "code": "350121000000",
                        "label": "闽侯县",
                        "children": null
                    },
                    {
                        "value": 518,
                        "code": "350122000000",
                        "label": "连江县",
                        "children": null
                    },
                    {
                        "value": 519,
                        "code": "350123000000",
                        "label": "罗源县",
                        "children": null
                    },
                    {
                        "value": 520,
                        "code": "350124000000",
                        "label": "闽清县",
                        "children": null
                    },
                    {
                        "value": 521,
                        "code": "350125000000",
                        "label": "永泰县",
                        "children": null
                    },
                    {
                        "value": 522,
                        "code": "350128000000",
                        "label": "平潭县",
                        "children": null
                    },
                    {
                        "value": 523,
                        "code": "350181000000",
                        "label": "福清市",
                        "children": null
                    },
                    {
                        "value": 524,
                        "code": "350182000000",
                        "label": "长乐市",
                        "children": null
                    }
                ]
            },
            {
                "value": 58,
                "code": "350200000000",
                "label": "厦门市",
                "children": [
                    {
                        "value": 993,
                        "code": "350203000000",
                        "label": "思明区",
                        "children": null
                    },
                    {
                        "value": 994,
                        "code": "350205000000",
                        "label": "海沧区",
                        "children": null
                    },
                    {
                        "value": 995,
                        "code": "350206000000",
                        "label": "湖里区",
                        "children": null
                    },
                    {
                        "value": 996,
                        "code": "350211000000",
                        "label": "集美区",
                        "children": null
                    },
                    {
                        "value": 997,
                        "code": "350212000000",
                        "label": "同安区",
                        "children": null
                    },
                    {
                        "value": 998,
                        "code": "350213000000",
                        "label": "翔安区",
                        "children": null
                    }
                ]
            },
            {
                "value": 59,
                "code": "350300000000",
                "label": "莆田市",
                "children": [
                    {
                        "value": 3178,
                        "code": "350302000000",
                        "label": "城厢区",
                        "children": null
                    },
                    {
                        "value": 3179,
                        "code": "350303000000",
                        "label": "涵江区",
                        "children": null
                    },
                    {
                        "value": 3180,
                        "code": "350304000000",
                        "label": "荔城区",
                        "children": null
                    },
                    {
                        "value": 3181,
                        "code": "350305000000",
                        "label": "秀屿区",
                        "children": null
                    },
                    {
                        "value": 3182,
                        "code": "350322000000",
                        "label": "仙游县",
                        "children": null
                    }
                ]
            },
            {
                "value": 60,
                "code": "350400000000",
                "label": "三明市",
                "children": [
                    {
                        "value": 1733,
                        "code": "350402000000",
                        "label": "梅列区",
                        "children": null
                    },
                    {
                        "value": 1734,
                        "code": "350403000000",
                        "label": "三元区",
                        "children": null
                    },
                    {
                        "value": 1735,
                        "code": "350421000000",
                        "label": "明溪县",
                        "children": null
                    },
                    {
                        "value": 1736,
                        "code": "350423000000",
                        "label": "清流县",
                        "children": null
                    },
                    {
                        "value": 1737,
                        "code": "350424000000",
                        "label": "宁化县",
                        "children": null
                    },
                    {
                        "value": 1738,
                        "code": "350425000000",
                        "label": "大田县",
                        "children": null
                    },
                    {
                        "value": 1739,
                        "code": "350426000000",
                        "label": "尤溪县",
                        "children": null
                    },
                    {
                        "value": 1740,
                        "code": "350427000000",
                        "label": "沙县",
                        "children": null
                    },
                    {
                        "value": 1741,
                        "code": "350428000000",
                        "label": "将乐县",
                        "children": null
                    },
                    {
                        "value": 1742,
                        "code": "350429000000",
                        "label": "泰宁县",
                        "children": null
                    },
                    {
                        "value": 1743,
                        "code": "350430000000",
                        "label": "建宁县",
                        "children": null
                    },
                    {
                        "value": 1744,
                        "code": "350481000000",
                        "label": "永安市",
                        "children": null
                    }
                ]
            },
            {
                "value": 61,
                "code": "350500000000",
                "label": "泉州市",
                "children": [
                    {
                        "value": 3062,
                        "code": "350502000000",
                        "label": "鲤城区",
                        "children": null
                    },
                    {
                        "value": 3063,
                        "code": "350503000000",
                        "label": "丰泽区",
                        "children": null
                    },
                    {
                        "value": 3064,
                        "code": "350504000000",
                        "label": "洛江区",
                        "children": null
                    },
                    {
                        "value": 3065,
                        "code": "350505000000",
                        "label": "泉港区",
                        "children": null
                    },
                    {
                        "value": 3066,
                        "code": "350521000000",
                        "label": "惠安县",
                        "children": null
                    },
                    {
                        "value": 3067,
                        "code": "350524000000",
                        "label": "安溪县",
                        "children": null
                    },
                    {
                        "value": 3068,
                        "code": "350525000000",
                        "label": "永春县",
                        "children": null
                    },
                    {
                        "value": 3069,
                        "code": "350526000000",
                        "label": "德化县",
                        "children": null
                    },
                    {
                        "value": 3070,
                        "code": "350527000000",
                        "label": "金门县",
                        "children": null
                    },
                    {
                        "value": 3071,
                        "code": "350581000000",
                        "label": "石狮市",
                        "children": null
                    },
                    {
                        "value": 3072,
                        "code": "350582000000",
                        "label": "晋江市",
                        "children": null
                    },
                    {
                        "value": 3073,
                        "code": "350583000000",
                        "label": "南安市",
                        "children": null
                    }
                ]
            },
            {
                "value": 62,
                "code": "350600000000",
                "label": "漳州市",
                "children": [
                    {
                        "value": 2955,
                        "code": "350602000000",
                        "label": "芗城区",
                        "children": null
                    },
                    {
                        "value": 2956,
                        "code": "350603000000",
                        "label": "龙文区",
                        "children": null
                    },
                    {
                        "value": 2957,
                        "code": "350622000000",
                        "label": "云霄县",
                        "children": null
                    },
                    {
                        "value": 2958,
                        "code": "350623000000",
                        "label": "漳浦县",
                        "children": null
                    },
                    {
                        "value": 2959,
                        "code": "350624000000",
                        "label": "诏安县",
                        "children": null
                    },
                    {
                        "value": 2960,
                        "code": "350625000000",
                        "label": "长泰县",
                        "children": null
                    },
                    {
                        "value": 2961,
                        "code": "350626000000",
                        "label": "东山县",
                        "children": null
                    },
                    {
                        "value": 2962,
                        "code": "350627000000",
                        "label": "南靖县",
                        "children": null
                    },
                    {
                        "value": 2963,
                        "code": "350628000000",
                        "label": "平和县",
                        "children": null
                    },
                    {
                        "value": 2964,
                        "code": "350629000000",
                        "label": "华安县",
                        "children": null
                    },
                    {
                        "value": 2965,
                        "code": "350681000000",
                        "label": "龙海市",
                        "children": null
                    }
                ]
            },
            {
                "value": 63,
                "code": "350700000000",
                "label": "南平市",
                "children": [
                    {
                        "value": 2875,
                        "code": "350702000000",
                        "label": "延平区",
                        "children": null
                    },
                    {
                        "value": 2876,
                        "code": "350721000000",
                        "label": "顺昌县",
                        "children": null
                    },
                    {
                        "value": 2877,
                        "code": "350722000000",
                        "label": "浦城县",
                        "children": null
                    },
                    {
                        "value": 2878,
                        "code": "350723000000",
                        "label": "光泽县",
                        "children": null
                    },
                    {
                        "value": 2879,
                        "code": "350724000000",
                        "label": "松溪县",
                        "children": null
                    },
                    {
                        "value": 2880,
                        "code": "350725000000",
                        "label": "政和县",
                        "children": null
                    },
                    {
                        "value": 2881,
                        "code": "350781000000",
                        "label": "邵武市",
                        "children": null
                    },
                    {
                        "value": 2882,
                        "code": "350782000000",
                        "label": "武夷山市",
                        "children": null
                    },
                    {
                        "value": 2883,
                        "code": "350783000000",
                        "label": "建瓯市",
                        "children": null
                    },
                    {
                        "value": 2884,
                        "code": "350784000000",
                        "label": "建阳市",
                        "children": null
                    }
                ]
            },
            {
                "value": 64,
                "code": "350800000000",
                "label": "龙岩市",
                "children": [
                    {
                        "value": 2248,
                        "code": "350802000000",
                        "label": "新罗区",
                        "children": null
                    },
                    {
                        "value": 2249,
                        "code": "350821000000",
                        "label": "长汀县",
                        "children": null
                    },
                    {
                        "value": 2250,
                        "code": "350822000000",
                        "label": "永定县",
                        "children": null
                    },
                    {
                        "value": 2251,
                        "code": "350823000000",
                        "label": "上杭县",
                        "children": null
                    },
                    {
                        "value": 2252,
                        "code": "350824000000",
                        "label": "武平县",
                        "children": null
                    },
                    {
                        "value": 2253,
                        "code": "350825000000",
                        "label": "连城县",
                        "children": null
                    },
                    {
                        "value": 2254,
                        "code": "350881000000",
                        "label": "漳平市",
                        "children": null
                    }
                ]
            },
            {
                "value": 65,
                "code": "350900000000",
                "label": "宁德市",
                "children": [
                    {
                        "value": 2140,
                        "code": "350902000000",
                        "label": "蕉城区",
                        "children": null
                    },
                    {
                        "value": 2141,
                        "code": "350921000000",
                        "label": "霞浦县",
                        "children": null
                    },
                    {
                        "value": 2142,
                        "code": "350922000000",
                        "label": "古田县",
                        "children": null
                    },
                    {
                        "value": 2143,
                        "code": "350923000000",
                        "label": "屏南县",
                        "children": null
                    },
                    {
                        "value": 2144,
                        "code": "350924000000",
                        "label": "寿宁县",
                        "children": null
                    },
                    {
                        "value": 2145,
                        "code": "350925000000",
                        "label": "周宁县",
                        "children": null
                    },
                    {
                        "value": 2146,
                        "code": "350926000000",
                        "label": "柘荣县",
                        "children": null
                    },
                    {
                        "value": 2147,
                        "code": "350981000000",
                        "label": "福安市",
                        "children": null
                    },
                    {
                        "value": 2148,
                        "code": "350982000000",
                        "label": "福鼎市",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "value": 15,
        "code": "360000000000",
        "label": "江西",
        "children": [
            {
                "value": 187,
                "code": "360100000000",
                "label": "南昌市",
                "children": [
                    {
                        "value": 794,
                        "code": "360102000000",
                        "label": "东湖区",
                        "children": null
                    },
                    {
                        "value": 795,
                        "code": "360103000000",
                        "label": "西湖区",
                        "children": null
                    },
                    {
                        "value": 796,
                        "code": "360104000000",
                        "label": "青云谱区",
                        "children": null
                    },
                    {
                        "value": 797,
                        "code": "360105000000",
                        "label": "湾里区",
                        "children": null
                    },
                    {
                        "value": 798,
                        "code": "360111000000",
                        "label": "青山湖区",
                        "children": null
                    },
                    {
                        "value": 799,
                        "code": "360121000000",
                        "label": "南昌县",
                        "children": null
                    },
                    {
                        "value": 800,
                        "code": "360122000000",
                        "label": "新建县",
                        "children": null
                    },
                    {
                        "value": 801,
                        "code": "360123000000",
                        "label": "安义县",
                        "children": null
                    },
                    {
                        "value": 802,
                        "code": "360124000000",
                        "label": "进贤县",
                        "children": null
                    }
                ]
            },
            {
                "value": 188,
                "code": "360200000000",
                "label": "景德镇市",
                "children": [
                    {
                        "value": 989,
                        "code": "360202000000",
                        "label": "昌江区",
                        "children": null
                    },
                    {
                        "value": 990,
                        "code": "360203000000",
                        "label": "珠山区",
                        "children": null
                    },
                    {
                        "value": 991,
                        "code": "360222000000",
                        "label": "浮梁县",
                        "children": null
                    },
                    {
                        "value": 992,
                        "code": "360281000000",
                        "label": "乐平市",
                        "children": null
                    }
                ]
            },
            {
                "value": 189,
                "code": "360300000000",
                "label": "萍乡市",
                "children": [
                    {
                        "value": 1217,
                        "code": "360302000000",
                        "label": "安源区",
                        "children": null
                    },
                    {
                        "value": 1218,
                        "code": "360313000000",
                        "label": "湘东区",
                        "children": null
                    },
                    {
                        "value": 1219,
                        "code": "360321000000",
                        "label": "莲花县",
                        "children": null
                    },
                    {
                        "value": 1220,
                        "code": "360322000000",
                        "label": "上栗县",
                        "children": null
                    },
                    {
                        "value": 1221,
                        "code": "360323000000",
                        "label": "芦溪县",
                        "children": null
                    }
                ]
            },
            {
                "value": 190,
                "code": "360400000000",
                "label": "九江市",
                "children": [
                    {
                        "value": 391,
                        "code": "360402000000",
                        "label": "庐山区",
                        "children": null
                    },
                    {
                        "value": 392,
                        "code": "360403000000",
                        "label": "浔阳区",
                        "children": null
                    },
                    {
                        "value": 393,
                        "code": "360421000000",
                        "label": "九江县",
                        "children": null
                    },
                    {
                        "value": 394,
                        "code": "360423000000",
                        "label": "武宁县",
                        "children": null
                    },
                    {
                        "value": 395,
                        "code": "360424000000",
                        "label": "修水县",
                        "children": null
                    },
                    {
                        "value": 396,
                        "code": "360425000000",
                        "label": "永修县",
                        "children": null
                    },
                    {
                        "value": 397,
                        "code": "360426000000",
                        "label": "德安县",
                        "children": null
                    },
                    {
                        "value": 398,
                        "code": "360427000000",
                        "label": "星子县",
                        "children": null
                    },
                    {
                        "value": 399,
                        "code": "360428000000",
                        "label": "都昌县",
                        "children": null
                    },
                    {
                        "value": 400,
                        "code": "360429000000",
                        "label": "湖口县",
                        "children": null
                    },
                    {
                        "value": 401,
                        "code": "360430000000",
                        "label": "彭泽县",
                        "children": null
                    },
                    {
                        "value": 402,
                        "code": "360481000000",
                        "label": "瑞昌市",
                        "children": null
                    },
                    {
                        "value": 403,
                        "code": "360482000000",
                        "label": "共青城市",
                        "children": null
                    }
                ]
            },
            {
                "value": 191,
                "code": "360500000000",
                "label": "新余市",
                "children": [
                    {
                        "value": 977,
                        "code": "360502000000",
                        "label": "渝水区",
                        "children": null
                    },
                    {
                        "value": 978,
                        "code": "360521000000",
                        "label": "分宜县",
                        "children": null
                    }
                ]
            },
            {
                "value": 192,
                "code": "360600000000",
                "label": "鹰潭市",
                "children": [
                    {
                        "value": 860,
                        "code": "360602000000",
                        "label": "月湖区",
                        "children": null
                    },
                    {
                        "value": 861,
                        "code": "360622000000",
                        "label": "余江县",
                        "children": null
                    },
                    {
                        "value": 862,
                        "code": "360681000000",
                        "label": "贵溪市",
                        "children": null
                    }
                ]
            },
            {
                "value": 193,
                "code": "360700000000",
                "label": "赣州市",
                "children": [
                    {
                        "value": 769,
                        "code": "360702000000",
                        "label": "章贡区",
                        "children": null
                    },
                    {
                        "value": 770,
                        "code": "360721000000",
                        "label": "赣县",
                        "children": null
                    },
                    {
                        "value": 771,
                        "code": "360722000000",
                        "label": "信丰县",
                        "children": null
                    },
                    {
                        "value": 772,
                        "code": "360723000000",
                        "label": "大余县",
                        "children": null
                    },
                    {
                        "value": 773,
                        "code": "360724000000",
                        "label": "上犹县",
                        "children": null
                    },
                    {
                        "value": 774,
                        "code": "360725000000",
                        "label": "崇义县",
                        "children": null
                    },
                    {
                        "value": 775,
                        "code": "360726000000",
                        "label": "安远县",
                        "children": null
                    },
                    {
                        "value": 776,
                        "code": "360727000000",
                        "label": "龙南县",
                        "children": null
                    },
                    {
                        "value": 777,
                        "code": "360728000000",
                        "label": "定南县",
                        "children": null
                    },
                    {
                        "value": 778,
                        "code": "360729000000",
                        "label": "全南县",
                        "children": null
                    },
                    {
                        "value": 779,
                        "code": "360730000000",
                        "label": "宁都县",
                        "children": null
                    },
                    {
                        "value": 780,
                        "code": "360731000000",
                        "label": "于都县",
                        "children": null
                    },
                    {
                        "value": 781,
                        "code": "360732000000",
                        "label": "兴国县",
                        "children": null
                    },
                    {
                        "value": 782,
                        "code": "360733000000",
                        "label": "会昌县",
                        "children": null
                    },
                    {
                        "value": 783,
                        "code": "360734000000",
                        "label": "寻乌县",
                        "children": null
                    },
                    {
                        "value": 784,
                        "code": "360735000000",
                        "label": "石城县",
                        "children": null
                    },
                    {
                        "value": 785,
                        "code": "360781000000",
                        "label": "瑞金市",
                        "children": null
                    },
                    {
                        "value": 786,
                        "code": "360782000000",
                        "label": "南康市",
                        "children": null
                    }
                ]
            },
            {
                "value": 194,
                "code": "360800000000",
                "label": "吉安市",
                "children": [
                    {
                        "value": 3142,
                        "code": "360802000000",
                        "label": "吉州区",
                        "children": null
                    },
                    {
                        "value": 3143,
                        "code": "360803000000",
                        "label": "青原区",
                        "children": null
                    },
                    {
                        "value": 3144,
                        "code": "360821000000",
                        "label": "吉安县",
                        "children": null
                    },
                    {
                        "value": 3145,
                        "code": "360822000000",
                        "label": "吉水县",
                        "children": null
                    },
                    {
                        "value": 3146,
                        "code": "360823000000",
                        "label": "峡江县",
                        "children": null
                    },
                    {
                        "value": 3147,
                        "code": "360824000000",
                        "label": "新干县",
                        "children": null
                    },
                    {
                        "value": 3148,
                        "code": "360825000000",
                        "label": "永丰县",
                        "children": null
                    },
                    {
                        "value": 3149,
                        "code": "360826000000",
                        "label": "泰和县",
                        "children": null
                    },
                    {
                        "value": 3150,
                        "code": "360827000000",
                        "label": "遂川县",
                        "children": null
                    },
                    {
                        "value": 3151,
                        "code": "360828000000",
                        "label": "万安县",
                        "children": null
                    },
                    {
                        "value": 3152,
                        "code": "360829000000",
                        "label": "安福县",
                        "children": null
                    },
                    {
                        "value": 3153,
                        "code": "360830000000",
                        "label": "永新县",
                        "children": null
                    },
                    {
                        "value": 3154,
                        "code": "360881000000",
                        "label": "井冈山市",
                        "children": null
                    }
                ]
            },
            {
                "value": 195,
                "code": "360900000000",
                "label": "宜春市",
                "children": [
                    {
                        "value": 3078,
                        "code": "360902000000",
                        "label": "袁州区",
                        "children": null
                    },
                    {
                        "value": 3079,
                        "code": "360921000000",
                        "label": "奉新县",
                        "children": null
                    },
                    {
                        "value": 3080,
                        "code": "360922000000",
                        "label": "万载县",
                        "children": null
                    },
                    {
                        "value": 3081,
                        "code": "360923000000",
                        "label": "上高县",
                        "children": null
                    },
                    {
                        "value": 3082,
                        "code": "360924000000",
                        "label": "宜丰县",
                        "children": null
                    },
                    {
                        "value": 3083,
                        "code": "360925000000",
                        "label": "靖安县",
                        "children": null
                    },
                    {
                        "value": 3084,
                        "code": "360926000000",
                        "label": "铜鼓县",
                        "children": null
                    },
                    {
                        "value": 3085,
                        "code": "360981000000",
                        "label": "丰城市",
                        "children": null
                    },
                    {
                        "value": 3086,
                        "code": "360982000000",
                        "label": "樟树市",
                        "children": null
                    },
                    {
                        "value": 3087,
                        "code": "360983000000",
                        "label": "高安市",
                        "children": null
                    }
                ]
            },
            {
                "value": 196,
                "code": "361000000000",
                "label": "抚州市",
                "children": [
                    {
                        "value": 2851,
                        "code": "361002000000",
                        "label": "临川区",
                        "children": null
                    },
                    {
                        "value": 2852,
                        "code": "361021000000",
                        "label": "南城县",
                        "children": null
                    },
                    {
                        "value": 2853,
                        "code": "361022000000",
                        "label": "黎川县",
                        "children": null
                    },
                    {
                        "value": 2854,
                        "code": "361023000000",
                        "label": "南丰县",
                        "children": null
                    },
                    {
                        "value": 2855,
                        "code": "361024000000",
                        "label": "崇仁县",
                        "children": null
                    },
                    {
                        "value": 2856,
                        "code": "361025000000",
                        "label": "乐安县",
                        "children": null
                    },
                    {
                        "value": 2857,
                        "code": "361026000000",
                        "label": "宜黄县",
                        "children": null
                    },
                    {
                        "value": 2858,
                        "code": "361027000000",
                        "label": "金溪县",
                        "children": null
                    },
                    {
                        "value": 2859,
                        "code": "361028000000",
                        "label": "资溪县",
                        "children": null
                    },
                    {
                        "value": 2860,
                        "code": "361029000000",
                        "label": "东乡县",
                        "children": null
                    },
                    {
                        "value": 2861,
                        "code": "361030000000",
                        "label": "广昌县",
                        "children": null
                    }
                ]
            },
            {
                "value": 197,
                "code": "361100000000",
                "label": "上饶市",
                "children": [
                    {
                        "value": 2792,
                        "code": "361102000000",
                        "label": "信州区",
                        "children": null
                    },
                    {
                        "value": 2793,
                        "code": "361121000000",
                        "label": "上饶县",
                        "children": null
                    },
                    {
                        "value": 2794,
                        "code": "361122000000",
                        "label": "广丰县",
                        "children": null
                    },
                    {
                        "value": 2795,
                        "code": "361123000000",
                        "label": "玉山县",
                        "children": null
                    },
                    {
                        "value": 2796,
                        "code": "361124000000",
                        "label": "铅山县",
                        "children": null
                    },
                    {
                        "value": 2797,
                        "code": "361125000000",
                        "label": "横峰县",
                        "children": null
                    },
                    {
                        "value": 2798,
                        "code": "361126000000",
                        "label": "弋阳县",
                        "children": null
                    },
                    {
                        "value": 2799,
                        "code": "361127000000",
                        "label": "余干县",
                        "children": null
                    },
                    {
                        "value": 2800,
                        "code": "361128000000",
                        "label": "鄱阳县",
                        "children": null
                    },
                    {
                        "value": 2801,
                        "code": "361129000000",
                        "label": "万年县",
                        "children": null
                    },
                    {
                        "value": 2802,
                        "code": "361130000000",
                        "label": "婺源县",
                        "children": null
                    },
                    {
                        "value": 2803,
                        "code": "361181000000",
                        "label": "德兴市",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "value": 16,
        "code": "370000000000",
        "label": "山东",
        "children": [
            {
                "value": 113,
                "code": "370100000000",
                "label": "济南市",
                "children": [
                    {
                        "value": 2306,
                        "code": "370102000000",
                        "label": "历下区",
                        "children": null
                    },
                    {
                        "value": 2307,
                        "code": "370103000000",
                        "label": "市中区",
                        "children": null
                    },
                    {
                        "value": 2308,
                        "code": "370104000000",
                        "label": "槐荫区",
                        "children": null
                    },
                    {
                        "value": 2309,
                        "code": "370105000000",
                        "label": "天桥区",
                        "children": null
                    },
                    {
                        "value": 2310,
                        "code": "370112000000",
                        "label": "历城区",
                        "children": null
                    },
                    {
                        "value": 2311,
                        "code": "370113000000",
                        "label": "长清区",
                        "children": null
                    },
                    {
                        "value": 2312,
                        "code": "370124000000",
                        "label": "平阴县",
                        "children": null
                    },
                    {
                        "value": 2313,
                        "code": "370125000000",
                        "label": "济阳县",
                        "children": null
                    },
                    {
                        "value": 2314,
                        "code": "370126000000",
                        "label": "商河县",
                        "children": null
                    },
                    {
                        "value": 2315,
                        "code": "370181000000",
                        "label": "章丘市",
                        "children": null
                    }
                ]
            },
            {
                "value": 114,
                "code": "370200000000",
                "label": "青岛市",
                "children": [
                    {
                        "value": 2206,
                        "code": "370202000000",
                        "label": "市南区",
                        "children": null
                    },
                    {
                        "value": 2207,
                        "code": "370203000000",
                        "label": "市北区",
                        "children": null
                    },
                    {
                        "value": 2208,
                        "code": "370205000000",
                        "label": "四方区",
                        "children": null
                    },
                    {
                        "value": 2209,
                        "code": "370211000000",
                        "label": "黄岛区",
                        "children": null
                    },
                    {
                        "value": 2210,
                        "code": "370212000000",
                        "label": "崂山区",
                        "children": null
                    },
                    {
                        "value": 2211,
                        "code": "370213000000",
                        "label": "李沧区",
                        "children": null
                    },
                    {
                        "value": 2212,
                        "code": "370214000000",
                        "label": "城阳区",
                        "children": null
                    },
                    {
                        "value": 2213,
                        "code": "370281000000",
                        "label": "胶州市",
                        "children": null
                    },
                    {
                        "value": 2214,
                        "code": "370282000000",
                        "label": "即墨市",
                        "children": null
                    },
                    {
                        "value": 2215,
                        "code": "370283000000",
                        "label": "平度市",
                        "children": null
                    },
                    {
                        "value": 2216,
                        "code": "370284000000",
                        "label": "胶南市",
                        "children": null
                    },
                    {
                        "value": 2217,
                        "code": "370285000000",
                        "label": "莱西市",
                        "children": null
                    }
                ]
            },
            {
                "value": 115,
                "code": "370300000000",
                "label": "淄博市",
                "children": [
                    {
                        "value": 2099,
                        "code": "370302000000",
                        "label": "淄川区",
                        "children": null
                    },
                    {
                        "value": 2100,
                        "code": "370303000000",
                        "label": "张店区",
                        "children": null
                    },
                    {
                        "value": 2101,
                        "code": "370304000000",
                        "label": "博山区",
                        "children": null
                    },
                    {
                        "value": 2102,
                        "code": "370305000000",
                        "label": "临淄区",
                        "children": null
                    },
                    {
                        "value": 2103,
                        "code": "370306000000",
                        "label": "周村区",
                        "children": null
                    },
                    {
                        "value": 2104,
                        "code": "370321000000",
                        "label": "桓台县",
                        "children": null
                    },
                    {
                        "value": 2105,
                        "code": "370322000000",
                        "label": "高青县",
                        "children": null
                    },
                    {
                        "value": 2106,
                        "code": "370323000000",
                        "label": "沂源县",
                        "children": null
                    }
                ]
            },
            {
                "value": 116,
                "code": "370400000000",
                "label": "枣庄市",
                "children": [
                    {
                        "value": 2013,
                        "code": "370402000000",
                        "label": "市中区",
                        "children": null
                    },
                    {
                        "value": 2014,
                        "code": "370403000000",
                        "label": "薛城区",
                        "children": null
                    },
                    {
                        "value": 2015,
                        "code": "370404000000",
                        "label": "峄城区",
                        "children": null
                    },
                    {
                        "value": 2016,
                        "code": "370405000000",
                        "label": "台儿庄区",
                        "children": null
                    },
                    {
                        "value": 2017,
                        "code": "370406000000",
                        "label": "山亭区",
                        "children": null
                    },
                    {
                        "value": 2018,
                        "code": "370481000000",
                        "label": "滕州市",
                        "children": null
                    }
                ]
            },
            {
                "value": 117,
                "code": "370500000000",
                "label": "东营市",
                "children": [
                    {
                        "value": 1946,
                        "code": "370502000000",
                        "label": "东营区",
                        "children": null
                    },
                    {
                        "value": 1947,
                        "code": "370503000000",
                        "label": "河口区",
                        "children": null
                    },
                    {
                        "value": 1948,
                        "code": "370521000000",
                        "label": "垦利县",
                        "children": null
                    },
                    {
                        "value": 1949,
                        "code": "370522000000",
                        "label": "利津县",
                        "children": null
                    },
                    {
                        "value": 1950,
                        "code": "370523000000",
                        "label": "广饶县",
                        "children": null
                    }
                ]
            },
            {
                "value": 118,
                "code": "370600000000",
                "label": "烟台市",
                "children": [
                    {
                        "value": 1852,
                        "code": "370602000000",
                        "label": "芝罘区",
                        "children": null
                    },
                    {
                        "value": 1853,
                        "code": "370611000000",
                        "label": "福山区",
                        "children": null
                    },
                    {
                        "value": 1854,
                        "code": "370612000000",
                        "label": "牟平区",
                        "children": null
                    },
                    {
                        "value": 1855,
                        "code": "370613000000",
                        "label": "莱山区",
                        "children": null
                    },
                    {
                        "value": 1856,
                        "code": "370634000000",
                        "label": "长岛县",
                        "children": null
                    },
                    {
                        "value": 1857,
                        "code": "370681000000",
                        "label": "龙口市",
                        "children": null
                    },
                    {
                        "value": 1858,
                        "code": "370682000000",
                        "label": "莱阳市",
                        "children": null
                    },
                    {
                        "value": 1859,
                        "code": "370683000000",
                        "label": "莱州市",
                        "children": null
                    },
                    {
                        "value": 1860,
                        "code": "370684000000",
                        "label": "蓬莱市",
                        "children": null
                    },
                    {
                        "value": 1861,
                        "code": "370685000000",
                        "label": "招远市",
                        "children": null
                    },
                    {
                        "value": 1862,
                        "code": "370686000000",
                        "label": "栖霞市",
                        "children": null
                    },
                    {
                        "value": 1863,
                        "code": "370687000000",
                        "label": "海阳市",
                        "children": null
                    }
                ]
            },
            {
                "value": 119,
                "code": "370700000000",
                "label": "潍坊市",
                "children": [
                    {
                        "value": 1765,
                        "code": "370702000000",
                        "label": "潍城区",
                        "children": null
                    },
                    {
                        "value": 1766,
                        "code": "370703000000",
                        "label": "寒亭区",
                        "children": null
                    },
                    {
                        "value": 1767,
                        "code": "370704000000",
                        "label": "坊子区",
                        "children": null
                    },
                    {
                        "value": 1768,
                        "code": "370705000000",
                        "label": "奎文区",
                        "children": null
                    },
                    {
                        "value": 1769,
                        "code": "370724000000",
                        "label": "临朐县",
                        "children": null
                    },
                    {
                        "value": 1770,
                        "code": "370725000000",
                        "label": "昌乐县",
                        "children": null
                    },
                    {
                        "value": 1771,
                        "code": "370781000000",
                        "label": "青州市",
                        "children": null
                    },
                    {
                        "value": 1772,
                        "code": "370782000000",
                        "label": "诸城市",
                        "children": null
                    },
                    {
                        "value": 1773,
                        "code": "370783000000",
                        "label": "寿光市",
                        "children": null
                    },
                    {
                        "value": 1774,
                        "code": "370784000000",
                        "label": "安丘市",
                        "children": null
                    },
                    {
                        "value": 1775,
                        "code": "370785000000",
                        "label": "高密市",
                        "children": null
                    },
                    {
                        "value": 1776,
                        "code": "370786000000",
                        "label": "昌邑市",
                        "children": null
                    }
                ]
            },
            {
                "value": 120,
                "code": "370800000000",
                "label": "济宁市",
                "children": [
                    {
                        "value": 1135,
                        "code": "370802000000",
                        "label": "市中区",
                        "children": null
                    },
                    {
                        "value": 1136,
                        "code": "370811000000",
                        "label": "任城区",
                        "children": null
                    },
                    {
                        "value": 1137,
                        "code": "370826000000",
                        "label": "微山县",
                        "children": null
                    },
                    {
                        "value": 1138,
                        "code": "370827000000",
                        "label": "鱼台县",
                        "children": null
                    },
                    {
                        "value": 1139,
                        "code": "370828000000",
                        "label": "金乡县",
                        "children": null
                    },
                    {
                        "value": 1140,
                        "code": "370829000000",
                        "label": "嘉祥县",
                        "children": null
                    },
                    {
                        "value": 1141,
                        "code": "370830000000",
                        "label": "汶上县",
                        "children": null
                    },
                    {
                        "value": 1142,
                        "code": "370831000000",
                        "label": "泗水县",
                        "children": null
                    },
                    {
                        "value": 1143,
                        "code": "370832000000",
                        "label": "梁山县",
                        "children": null
                    },
                    {
                        "value": 1144,
                        "code": "370881000000",
                        "label": "曲阜市",
                        "children": null
                    },
                    {
                        "value": 1145,
                        "code": "370882000000",
                        "label": "兖州市",
                        "children": null
                    },
                    {
                        "value": 1146,
                        "code": "370883000000",
                        "label": "邹城市",
                        "children": null
                    }
                ]
            },
            {
                "value": 121,
                "code": "370900000000",
                "label": "泰安市",
                "children": [
                    {
                        "value": 1013,
                        "code": "370902000000",
                        "label": "泰山区",
                        "children": null
                    },
                    {
                        "value": 1014,
                        "code": "370911000000",
                        "label": "岱岳区",
                        "children": null
                    },
                    {
                        "value": 1015,
                        "code": "370921000000",
                        "label": "宁阳县",
                        "children": null
                    },
                    {
                        "value": 1016,
                        "code": "370923000000",
                        "label": "东平县",
                        "children": null
                    },
                    {
                        "value": 1017,
                        "code": "370982000000",
                        "label": "新泰市",
                        "children": null
                    },
                    {
                        "value": 1018,
                        "code": "370983000000",
                        "label": "肥城市",
                        "children": null
                    }
                ]
            },
            {
                "value": 122,
                "code": "371000000000",
                "label": "威海市",
                "children": [
                    {
                        "value": 1009,
                        "code": "371002000000",
                        "label": "环翠区",
                        "children": null
                    },
                    {
                        "value": 1010,
                        "code": "371081000000",
                        "label": "文登市",
                        "children": null
                    },
                    {
                        "value": 1011,
                        "code": "371082000000",
                        "label": "荣成市",
                        "children": null
                    },
                    {
                        "value": 1012,
                        "code": "371083000000",
                        "label": "乳山市",
                        "children": null
                    }
                ]
            },
            {
                "value": 123,
                "code": "371100000000",
                "label": "日照市",
                "children": [
                    {
                        "value": 733,
                        "code": "371102000000",
                        "label": "东港区",
                        "children": null
                    },
                    {
                        "value": 734,
                        "code": "371103000000",
                        "label": "岚山区",
                        "children": null
                    },
                    {
                        "value": 735,
                        "code": "371121000000",
                        "label": "五莲县",
                        "children": null
                    },
                    {
                        "value": 736,
                        "code": "371122000000",
                        "label": "莒县",
                        "children": null
                    }
                ]
            },
            {
                "value": 124,
                "code": "371200000000",
                "label": "莱芜市",
                "children": [
                    {
                        "value": 618,
                        "code": "371202000000",
                        "label": "莱城区",
                        "children": null
                    },
                    {
                        "value": 619,
                        "code": "371203000000",
                        "label": "钢城区",
                        "children": null
                    }
                ]
            },
            {
                "value": 125,
                "code": "371300000000",
                "label": "临沂市",
                "children": [
                    {
                        "value": 554,
                        "code": "371302000000",
                        "label": "兰山区",
                        "children": null
                    },
                    {
                        "value": 555,
                        "code": "371311000000",
                        "label": "罗庄区",
                        "children": null
                    },
                    {
                        "value": 556,
                        "code": "371312000000",
                        "label": "河东区",
                        "children": null
                    },
                    {
                        "value": 557,
                        "code": "371321000000",
                        "label": "沂南县",
                        "children": null
                    },
                    {
                        "value": 558,
                        "code": "371322000000",
                        "label": "郯城县",
                        "children": null
                    },
                    {
                        "value": 559,
                        "code": "371323000000",
                        "label": "沂水县",
                        "children": null
                    },
                    {
                        "value": 560,
                        "code": "371324000000",
                        "label": "苍山县",
                        "children": null
                    },
                    {
                        "value": 561,
                        "code": "371325000000",
                        "label": "费县",
                        "children": null
                    },
                    {
                        "value": 562,
                        "code": "371326000000",
                        "label": "平邑县",
                        "children": null
                    },
                    {
                        "value": 563,
                        "code": "371327000000",
                        "label": "莒南县",
                        "children": null
                    },
                    {
                        "value": 564,
                        "code": "371328000000",
                        "label": "蒙阴县",
                        "children": null
                    },
                    {
                        "value": 565,
                        "code": "371329000000",
                        "label": "临沭县",
                        "children": null
                    }
                ]
            },
            {
                "value": 126,
                "code": "371400000000",
                "label": "德州市",
                "children": [
                    {
                        "value": 2462,
                        "code": "371402000000",
                        "label": "德城区",
                        "children": null
                    },
                    {
                        "value": 2463,
                        "code": "371421000000",
                        "label": "陵县",
                        "children": null
                    },
                    {
                        "value": 2464,
                        "code": "371422000000",
                        "label": "宁津县",
                        "children": null
                    },
                    {
                        "value": 2465,
                        "code": "371423000000",
                        "label": "庆云县",
                        "children": null
                    },
                    {
                        "value": 2466,
                        "code": "371424000000",
                        "label": "临邑县",
                        "children": null
                    },
                    {
                        "value": 2467,
                        "code": "371425000000",
                        "label": "齐河县",
                        "children": null
                    },
                    {
                        "value": 2468,
                        "code": "371426000000",
                        "label": "平原县",
                        "children": null
                    },
                    {
                        "value": 2469,
                        "code": "371427000000",
                        "label": "夏津县",
                        "children": null
                    },
                    {
                        "value": 2470,
                        "code": "371428000000",
                        "label": "武城县",
                        "children": null
                    },
                    {
                        "value": 2471,
                        "code": "371481000000",
                        "label": "乐陵市",
                        "children": null
                    },
                    {
                        "value": 2472,
                        "code": "371482000000",
                        "label": "禹城市",
                        "children": null
                    }
                ]
            },
            {
                "value": 127,
                "code": "371500000000",
                "label": "聊城市",
                "children": [
                    {
                        "value": 2353,
                        "code": "371502000000",
                        "label": "东昌府区",
                        "children": null
                    },
                    {
                        "value": 2354,
                        "code": "371521000000",
                        "label": "阳谷县",
                        "children": null
                    },
                    {
                        "value": 2355,
                        "code": "371522000000",
                        "label": "莘县",
                        "children": null
                    },
                    {
                        "value": 2356,
                        "code": "371523000000",
                        "label": "茌平县",
                        "children": null
                    },
                    {
                        "value": 2357,
                        "code": "371524000000",
                        "label": "东阿县",
                        "children": null
                    },
                    {
                        "value": 2358,
                        "code": "371525000000",
                        "label": "冠县",
                        "children": null
                    },
                    {
                        "value": 2359,
                        "code": "371526000000",
                        "label": "高唐县",
                        "children": null
                    },
                    {
                        "value": 2360,
                        "code": "371581000000",
                        "label": "临清市",
                        "children": null
                    }
                ]
            },
            {
                "value": 128,
                "code": "371600000000",
                "label": "滨州市",
                "children": [
                    {
                        "value": 2234,
                        "code": "371602000000",
                        "label": "滨城区",
                        "children": null
                    },
                    {
                        "value": 2235,
                        "code": "371621000000",
                        "label": "惠民县",
                        "children": null
                    },
                    {
                        "value": 2236,
                        "code": "371622000000",
                        "label": "阳信县",
                        "children": null
                    },
                    {
                        "value": 2237,
                        "code": "371623000000",
                        "label": "无棣县",
                        "children": null
                    },
                    {
                        "value": 2238,
                        "code": "371624000000",
                        "label": "沾化县",
                        "children": null
                    },
                    {
                        "value": 2239,
                        "code": "371625000000",
                        "label": "博兴县",
                        "children": null
                    },
                    {
                        "value": 2240,
                        "code": "371626000000",
                        "label": "邹平县",
                        "children": null
                    }
                ]
            },
            {
                "value": 129,
                "code": "371700000000",
                "label": "菏泽市",
                "children": [
                    {
                        "value": 2120,
                        "code": "371702000000",
                        "label": "牡丹区",
                        "children": null
                    },
                    {
                        "value": 2121,
                        "code": "371721000000",
                        "label": "曹县",
                        "children": null
                    },
                    {
                        "value": 2122,
                        "code": "371722000000",
                        "label": "单县",
                        "children": null
                    },
                    {
                        "value": 2123,
                        "code": "371723000000",
                        "label": "成武县",
                        "children": null
                    },
                    {
                        "value": 2124,
                        "code": "371724000000",
                        "label": "巨野县",
                        "children": null
                    },
                    {
                        "value": 2125,
                        "code": "371725000000",
                        "label": "郓城县",
                        "children": null
                    },
                    {
                        "value": 2126,
                        "code": "371726000000",
                        "label": "鄄城县",
                        "children": null
                    },
                    {
                        "value": 2127,
                        "code": "371727000000",
                        "label": "定陶县",
                        "children": null
                    },
                    {
                        "value": 2128,
                        "code": "371728000000",
                        "label": "东明县",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "value": 17,
        "code": "410000000000",
        "label": "河南",
        "children": [
            {
                "value": 256,
                "code": "410100000000",
                "label": "郑州市",
                "children": [
                    {
                        "value": 2723,
                        "code": "410102000000",
                        "label": "中原区",
                        "children": null
                    },
                    {
                        "value": 2724,
                        "code": "410103000000",
                        "label": "二七区",
                        "children": null
                    },
                    {
                        "value": 2725,
                        "code": "410104000000",
                        "label": "管城回族区",
                        "children": null
                    },
                    {
                        "value": 2726,
                        "code": "410105000000",
                        "label": "金水区",
                        "children": null
                    },
                    {
                        "value": 2727,
                        "code": "410106000000",
                        "label": "上街区",
                        "children": null
                    },
                    {
                        "value": 2728,
                        "code": "410108000000",
                        "label": "惠济区",
                        "children": null
                    },
                    {
                        "value": 2729,
                        "code": "410122000000",
                        "label": "中牟县",
                        "children": null
                    },
                    {
                        "value": 2730,
                        "code": "410181000000",
                        "label": "巩义市",
                        "children": null
                    },
                    {
                        "value": 2731,
                        "code": "410182000000",
                        "label": "荥阳市",
                        "children": null
                    },
                    {
                        "value": 2732,
                        "code": "410183000000",
                        "label": "新密市",
                        "children": null
                    },
                    {
                        "value": 2733,
                        "code": "410184000000",
                        "label": "新郑市",
                        "children": null
                    },
                    {
                        "value": 2734,
                        "code": "410185000000",
                        "label": "登封市",
                        "children": null
                    }
                ]
            },
            {
                "value": 257,
                "code": "410200000000",
                "label": "开封市",
                "children": [
                    {
                        "value": 2613,
                        "code": "410202000000",
                        "label": "龙亭区",
                        "children": null
                    },
                    {
                        "value": 2614,
                        "code": "410203000000",
                        "label": "顺河回族区",
                        "children": null
                    },
                    {
                        "value": 2615,
                        "code": "410204000000",
                        "label": "鼓楼区",
                        "children": null
                    },
                    {
                        "value": 2616,
                        "code": "410205000000",
                        "label": "禹王台区",
                        "children": null
                    },
                    {
                        "value": 2617,
                        "code": "410211000000",
                        "label": "金明区",
                        "children": null
                    },
                    {
                        "value": 2618,
                        "code": "410221000000",
                        "label": "杞县",
                        "children": null
                    },
                    {
                        "value": 2619,
                        "code": "410222000000",
                        "label": "通许县",
                        "children": null
                    },
                    {
                        "value": 2620,
                        "code": "410223000000",
                        "label": "尉氏县",
                        "children": null
                    },
                    {
                        "value": 2621,
                        "code": "410224000000",
                        "label": "开封县",
                        "children": null
                    },
                    {
                        "value": 2622,
                        "code": "410225000000",
                        "label": "兰考县",
                        "children": null
                    }
                ]
            },
            {
                "value": 258,
                "code": "410300000000",
                "label": "洛阳市",
                "children": [
                    {
                        "value": 2515,
                        "code": "410302000000",
                        "label": "老城区",
                        "children": null
                    },
                    {
                        "value": 2516,
                        "code": "410303000000",
                        "label": "西工区",
                        "children": null
                    },
                    {
                        "value": 2517,
                        "code": "410304000000",
                        "label": "瀍河回族区",
                        "children": null
                    },
                    {
                        "value": 2518,
                        "code": "410305000000",
                        "label": "涧西区",
                        "children": null
                    },
                    {
                        "value": 2519,
                        "code": "410306000000",
                        "label": "吉利区",
                        "children": null
                    },
                    {
                        "value": 2520,
                        "code": "410311000000",
                        "label": "洛龙区",
                        "children": null
                    },
                    {
                        "value": 2521,
                        "code": "410322000000",
                        "label": "孟津县",
                        "children": null
                    },
                    {
                        "value": 2522,
                        "code": "410323000000",
                        "label": "新安县",
                        "children": null
                    },
                    {
                        "value": 2523,
                        "code": "410324000000",
                        "label": "栾川县",
                        "children": null
                    },
                    {
                        "value": 2524,
                        "code": "410325000000",
                        "label": "嵩县",
                        "children": null
                    },
                    {
                        "value": 2525,
                        "code": "410326000000",
                        "label": "汝阳县",
                        "children": null
                    },
                    {
                        "value": 2526,
                        "code": "410327000000",
                        "label": "宜阳县",
                        "children": null
                    },
                    {
                        "value": 2527,
                        "code": "410328000000",
                        "label": "洛宁县",
                        "children": null
                    },
                    {
                        "value": 2528,
                        "code": "410329000000",
                        "label": "伊川县",
                        "children": null
                    },
                    {
                        "value": 2529,
                        "code": "410381000000",
                        "label": "偃师市",
                        "children": null
                    }
                ]
            },
            {
                "value": 259,
                "code": "410400000000",
                "label": "平顶山市",
                "children": [
                    {
                        "value": 2420,
                        "code": "410402000000",
                        "label": "新华区",
                        "children": null
                    },
                    {
                        "value": 2421,
                        "code": "410403000000",
                        "label": "卫东区",
                        "children": null
                    },
                    {
                        "value": 2422,
                        "code": "410404000000",
                        "label": "石龙区",
                        "children": null
                    },
                    {
                        "value": 2423,
                        "code": "410411000000",
                        "label": "湛河区",
                        "children": null
                    },
                    {
                        "value": 2424,
                        "code": "410421000000",
                        "label": "宝丰县",
                        "children": null
                    },
                    {
                        "value": 2425,
                        "code": "410422000000",
                        "label": "叶县",
                        "children": null
                    },
                    {
                        "value": 2426,
                        "code": "410423000000",
                        "label": "鲁山县",
                        "children": null
                    },
                    {
                        "value": 2427,
                        "code": "410425000000",
                        "label": "郏县",
                        "children": null
                    },
                    {
                        "value": 2428,
                        "code": "410481000000",
                        "label": "舞钢市",
                        "children": null
                    },
                    {
                        "value": 2429,
                        "code": "410482000000",
                        "label": "汝州市",
                        "children": null
                    }
                ]
            },
            {
                "value": 260,
                "code": "410500000000",
                "label": "安阳市",
                "children": [
                    {
                        "value": 2284,
                        "code": "410502000000",
                        "label": "文峰区",
                        "children": null
                    },
                    {
                        "value": 2285,
                        "code": "410503000000",
                        "label": "北关区",
                        "children": null
                    },
                    {
                        "value": 2286,
                        "code": "410505000000",
                        "label": "殷都区",
                        "children": null
                    },
                    {
                        "value": 2287,
                        "code": "410506000000",
                        "label": "龙安区",
                        "children": null
                    },
                    {
                        "value": 2288,
                        "code": "410522000000",
                        "label": "安阳县",
                        "children": null
                    },
                    {
                        "value": 2289,
                        "code": "410523000000",
                        "label": "汤阴县",
                        "children": null
                    },
                    {
                        "value": 2290,
                        "code": "410526000000",
                        "label": "滑县",
                        "children": null
                    },
                    {
                        "value": 2291,
                        "code": "410527000000",
                        "label": "内黄县",
                        "children": null
                    },
                    {
                        "value": 2292,
                        "code": "410581000000",
                        "label": "林州市",
                        "children": null
                    }
                ]
            },
            {
                "value": 261,
                "code": "410600000000",
                "label": "鹤壁市",
                "children": [
                    {
                        "value": 2182,
                        "code": "410602000000",
                        "label": "鹤山区",
                        "children": null
                    },
                    {
                        "value": 2183,
                        "code": "410603000000",
                        "label": "山城区",
                        "children": null
                    },
                    {
                        "value": 2184,
                        "code": "410611000000",
                        "label": "淇滨区",
                        "children": null
                    },
                    {
                        "value": 2185,
                        "code": "410621000000",
                        "label": "浚县",
                        "children": null
                    },
                    {
                        "value": 2186,
                        "code": "410622000000",
                        "label": "淇县",
                        "children": null
                    }
                ]
            },
            {
                "value": 262,
                "code": "410700000000",
                "label": "新乡市",
                "children": [
                    {
                        "value": 2067,
                        "code": "410702000000",
                        "label": "红旗区",
                        "children": null
                    },
                    {
                        "value": 2068,
                        "code": "410703000000",
                        "label": "卫滨区",
                        "children": null
                    },
                    {
                        "value": 2069,
                        "code": "410704000000",
                        "label": "凤泉区",
                        "children": null
                    },
                    {
                        "value": 2070,
                        "code": "410711000000",
                        "label": "牧野区",
                        "children": null
                    },
                    {
                        "value": 2071,
                        "code": "410721000000",
                        "label": "新乡县",
                        "children": null
                    },
                    {
                        "value": 2072,
                        "code": "410724000000",
                        "label": "获嘉县",
                        "children": null
                    },
                    {
                        "value": 2073,
                        "code": "410725000000",
                        "label": "原阳县",
                        "children": null
                    },
                    {
                        "value": 2074,
                        "code": "410726000000",
                        "label": "延津县",
                        "children": null
                    },
                    {
                        "value": 2075,
                        "code": "410727000000",
                        "label": "封丘县",
                        "children": null
                    },
                    {
                        "value": 2076,
                        "code": "410728000000",
                        "label": "长垣县",
                        "children": null
                    },
                    {
                        "value": 2077,
                        "code": "410781000000",
                        "label": "卫辉市",
                        "children": null
                    },
                    {
                        "value": 2078,
                        "code": "410782000000",
                        "label": "辉县市",
                        "children": null
                    }
                ]
            },
            {
                "value": 263,
                "code": "410800000000",
                "label": "焦作市",
                "children": [
                    {
                        "value": 1525,
                        "code": "410802000000",
                        "label": "解放区",
                        "children": null
                    },
                    {
                        "value": 1526,
                        "code": "410803000000",
                        "label": "中站区",
                        "children": null
                    },
                    {
                        "value": 1527,
                        "code": "410804000000",
                        "label": "马村区",
                        "children": null
                    },
                    {
                        "value": 1528,
                        "code": "410811000000",
                        "label": "山阳区",
                        "children": null
                    },
                    {
                        "value": 1529,
                        "code": "410821000000",
                        "label": "修武县",
                        "children": null
                    },
                    {
                        "value": 1530,
                        "code": "410822000000",
                        "label": "博爱县",
                        "children": null
                    },
                    {
                        "value": 1531,
                        "code": "410823000000",
                        "label": "武陟县",
                        "children": null
                    },
                    {
                        "value": 1532,
                        "code": "410825000000",
                        "label": "温县",
                        "children": null
                    },
                    {
                        "value": 1533,
                        "code": "410882000000",
                        "label": "沁阳市",
                        "children": null
                    },
                    {
                        "value": 1534,
                        "code": "410883000000",
                        "label": "孟州市",
                        "children": null
                    }
                ]
            },
            {
                "value": 264,
                "code": "410900000000",
                "label": "濮阳市",
                "children": [
                    {
                        "value": 1424,
                        "code": "410902000000",
                        "label": "华龙区",
                        "children": null
                    },
                    {
                        "value": 1425,
                        "code": "410922000000",
                        "label": "清丰县",
                        "children": null
                    },
                    {
                        "value": 1426,
                        "code": "410923000000",
                        "label": "南乐县",
                        "children": null
                    },
                    {
                        "value": 1427,
                        "code": "410926000000",
                        "label": "范县",
                        "children": null
                    },
                    {
                        "value": 1428,
                        "code": "410927000000",
                        "label": "台前县",
                        "children": null
                    },
                    {
                        "value": 1429,
                        "code": "410928000000",
                        "label": "濮阳县",
                        "children": null
                    }
                ]
            },
            {
                "value": 265,
                "code": "411000000000",
                "label": "许昌市",
                "children": [
                    {
                        "value": 1155,
                        "code": "411002000000",
                        "label": "魏都区",
                        "children": null
                    },
                    {
                        "value": 1156,
                        "code": "411023000000",
                        "label": "许昌县",
                        "children": null
                    },
                    {
                        "value": 1157,
                        "code": "411024000000",
                        "label": "鄢陵县",
                        "children": null
                    },
                    {
                        "value": 1158,
                        "code": "411025000000",
                        "label": "襄城县",
                        "children": null
                    },
                    {
                        "value": 1159,
                        "code": "411081000000",
                        "label": "禹州市",
                        "children": null
                    },
                    {
                        "value": 1160,
                        "code": "411082000000",
                        "label": "长葛市",
                        "children": null
                    }
                ]
            },
            {
                "value": 266,
                "code": "411100000000",
                "label": "漯河市",
                "children": [
                    {
                        "value": 1031,
                        "code": "411102000000",
                        "label": "源汇区",
                        "children": null
                    },
                    {
                        "value": 1032,
                        "code": "411103000000",
                        "label": "郾城区",
                        "children": null
                    },
                    {
                        "value": 1033,
                        "code": "411104000000",
                        "label": "召陵区",
                        "children": null
                    },
                    {
                        "value": 1034,
                        "code": "411121000000",
                        "label": "舞阳县",
                        "children": null
                    },
                    {
                        "value": 1035,
                        "code": "411122000000",
                        "label": "临颍县",
                        "children": null
                    }
                ]
            },
            {
                "value": 267,
                "code": "411200000000",
                "label": "三门峡市",
                "children": [
                    {
                        "value": 803,
                        "code": "411202000000",
                        "label": "湖滨区",
                        "children": null
                    },
                    {
                        "value": 804,
                        "code": "411221000000",
                        "label": "渑池县",
                        "children": null
                    },
                    {
                        "value": 805,
                        "code": "411222000000",
                        "label": "陕县",
                        "children": null
                    },
                    {
                        "value": 806,
                        "code": "411224000000",
                        "label": "卢氏县",
                        "children": null
                    },
                    {
                        "value": 807,
                        "code": "411281000000",
                        "label": "义马市",
                        "children": null
                    },
                    {
                        "value": 808,
                        "code": "411282000000",
                        "label": "灵宝市",
                        "children": null
                    }
                ]
            },
            {
                "value": 268,
                "code": "411300000000",
                "label": "南阳市",
                "children": [
                    {
                        "value": 829,
                        "code": "411302000000",
                        "label": "宛城区",
                        "children": null
                    },
                    {
                        "value": 830,
                        "code": "411303000000",
                        "label": "卧龙区",
                        "children": null
                    },
                    {
                        "value": 831,
                        "code": "411321000000",
                        "label": "南召县",
                        "children": null
                    },
                    {
                        "value": 832,
                        "code": "411322000000",
                        "label": "方城县",
                        "children": null
                    },
                    {
                        "value": 833,
                        "code": "411323000000",
                        "label": "西峡县",
                        "children": null
                    },
                    {
                        "value": 834,
                        "code": "411324000000",
                        "label": "镇平县",
                        "children": null
                    },
                    {
                        "value": 835,
                        "code": "411325000000",
                        "label": "内乡县",
                        "children": null
                    },
                    {
                        "value": 836,
                        "code": "411326000000",
                        "label": "淅川县",
                        "children": null
                    },
                    {
                        "value": 837,
                        "code": "411327000000",
                        "label": "社旗县",
                        "children": null
                    },
                    {
                        "value": 838,
                        "code": "411328000000",
                        "label": "唐河县",
                        "children": null
                    },
                    {
                        "value": 839,
                        "code": "411329000000",
                        "label": "新野县",
                        "children": null
                    },
                    {
                        "value": 840,
                        "code": "411330000000",
                        "label": "桐柏县",
                        "children": null
                    },
                    {
                        "value": 841,
                        "code": "411381000000",
                        "label": "邓州市",
                        "children": null
                    }
                ]
            },
            {
                "value": 269,
                "code": "411400000000",
                "label": "商丘市",
                "children": [
                    {
                        "value": 2814,
                        "code": "411402000000",
                        "label": "梁园区",
                        "children": null
                    },
                    {
                        "value": 2815,
                        "code": "411403000000",
                        "label": "睢阳区",
                        "children": null
                    },
                    {
                        "value": 2816,
                        "code": "411421000000",
                        "label": "民权县",
                        "children": null
                    },
                    {
                        "value": 2817,
                        "code": "411422000000",
                        "label": "睢县",
                        "children": null
                    },
                    {
                        "value": 2818,
                        "code": "411423000000",
                        "label": "宁陵县",
                        "children": null
                    },
                    {
                        "value": 2819,
                        "code": "411424000000",
                        "label": "柘城县",
                        "children": null
                    },
                    {
                        "value": 2820,
                        "code": "411425000000",
                        "label": "虞城县",
                        "children": null
                    },
                    {
                        "value": 2821,
                        "code": "411426000000",
                        "label": "夏邑县",
                        "children": null
                    },
                    {
                        "value": 2822,
                        "code": "411481000000",
                        "label": "永城市",
                        "children": null
                    }
                ]
            },
            {
                "value": 270,
                "code": "411500000000",
                "label": "信阳市",
                "children": [
                    {
                        "value": 2767,
                        "code": "411502000000",
                        "label": "浉河区",
                        "children": null
                    },
                    {
                        "value": 2768,
                        "code": "411503000000",
                        "label": "平桥区",
                        "children": null
                    },
                    {
                        "value": 2769,
                        "code": "411521000000",
                        "label": "罗山县",
                        "children": null
                    },
                    {
                        "value": 2770,
                        "code": "411522000000",
                        "label": "光山县",
                        "children": null
                    },
                    {
                        "value": 2771,
                        "code": "411523000000",
                        "label": "新县",
                        "children": null
                    },
                    {
                        "value": 2772,
                        "code": "411524000000",
                        "label": "商城县",
                        "children": null
                    },
                    {
                        "value": 2773,
                        "code": "411525000000",
                        "label": "固始县",
                        "children": null
                    },
                    {
                        "value": 2774,
                        "code": "411526000000",
                        "label": "潢川县",
                        "children": null
                    },
                    {
                        "value": 2775,
                        "code": "411527000000",
                        "label": "淮滨县",
                        "children": null
                    },
                    {
                        "value": 2776,
                        "code": "411528000000",
                        "label": "息县",
                        "children": null
                    }
                ]
            },
            {
                "value": 271,
                "code": "411600000000",
                "label": "周口市",
                "children": [
                    {
                        "value": 2627,
                        "code": "411602000000",
                        "label": "川汇区",
                        "children": null
                    },
                    {
                        "value": 2628,
                        "code": "411621000000",
                        "label": "扶沟县",
                        "children": null
                    },
                    {
                        "value": 2629,
                        "code": "411622000000",
                        "label": "西华县",
                        "children": null
                    },
                    {
                        "value": 2630,
                        "code": "411623000000",
                        "label": "商水县",
                        "children": null
                    },
                    {
                        "value": 2631,
                        "code": "411624000000",
                        "label": "沈丘县",
                        "children": null
                    },
                    {
                        "value": 2632,
                        "code": "411625000000",
                        "label": "郸城县",
                        "children": null
                    },
                    {
                        "value": 2633,
                        "code": "411626000000",
                        "label": "淮阳县",
                        "children": null
                    },
                    {
                        "value": 2634,
                        "code": "411627000000",
                        "label": "太康县",
                        "children": null
                    },
                    {
                        "value": 2635,
                        "code": "411628000000",
                        "label": "鹿邑县",
                        "children": null
                    },
                    {
                        "value": 2636,
                        "code": "411681000000",
                        "label": "项城市",
                        "children": null
                    }
                ]
            },
            {
                "value": 272,
                "code": "411700000000",
                "label": "驻马店市",
                "children": [
                    {
                        "value": 2562,
                        "code": "411702000000",
                        "label": "驿城区",
                        "children": null
                    },
                    {
                        "value": 2563,
                        "code": "411721000000",
                        "label": "西平县",
                        "children": null
                    },
                    {
                        "value": 2564,
                        "code": "411722000000",
                        "label": "上蔡县",
                        "children": null
                    },
                    {
                        "value": 2565,
                        "code": "411723000000",
                        "label": "平舆县",
                        "children": null
                    },
                    {
                        "value": 2566,
                        "code": "411724000000",
                        "label": "正阳县",
                        "children": null
                    },
                    {
                        "value": 2567,
                        "code": "411725000000",
                        "label": "确山县",
                        "children": null
                    },
                    {
                        "value": 2568,
                        "code": "411726000000",
                        "label": "泌阳县",
                        "children": null
                    },
                    {
                        "value": 2569,
                        "code": "411727000000",
                        "label": "汝南县",
                        "children": null
                    },
                    {
                        "value": 2570,
                        "code": "411728000000",
                        "label": "遂平县",
                        "children": null
                    },
                    {
                        "value": 2571,
                        "code": "411729000000",
                        "label": "新蔡县",
                        "children": null
                    }
                ]
            },
            {
                "value": 273,
                "code": "419000000000",
                "label": "省直辖县级行政区划",
                "children": [
                    {
                        "value": 1911,
                        "code": "419001000000",
                        "label": "济源市",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "value": 18,
        "code": "420000000000",
        "label": "湖北",
        "children": [
            {
                "value": 313,
                "code": "420100000000",
                "label": "武汉市",
                "children": [
                    {
                        "value": 685,
                        "code": "420102000000",
                        "label": "江岸区",
                        "children": null
                    },
                    {
                        "value": 686,
                        "code": "420103000000",
                        "label": "江汉区",
                        "children": null
                    },
                    {
                        "value": 687,
                        "code": "420104000000",
                        "label": "硚口区",
                        "children": null
                    },
                    {
                        "value": 688,
                        "code": "420105000000",
                        "label": "汉阳区",
                        "children": null
                    },
                    {
                        "value": 689,
                        "code": "420106000000",
                        "label": "武昌区",
                        "children": null
                    },
                    {
                        "value": 690,
                        "code": "420107000000",
                        "label": "青山区",
                        "children": null
                    },
                    {
                        "value": 691,
                        "code": "420111000000",
                        "label": "洪山区",
                        "children": null
                    },
                    {
                        "value": 692,
                        "code": "420112000000",
                        "label": "东西湖区",
                        "children": null
                    },
                    {
                        "value": 693,
                        "code": "420113000000",
                        "label": "汉南区",
                        "children": null
                    },
                    {
                        "value": 694,
                        "code": "420114000000",
                        "label": "蔡甸区",
                        "children": null
                    },
                    {
                        "value": 695,
                        "code": "420115000000",
                        "label": "江夏区",
                        "children": null
                    },
                    {
                        "value": 696,
                        "code": "420116000000",
                        "label": "黄陂区",
                        "children": null
                    },
                    {
                        "value": 697,
                        "code": "420117000000",
                        "label": "新洲区",
                        "children": null
                    }
                ]
            },
            {
                "value": 314,
                "code": "420200000000",
                "label": "黄石市",
                "children": [
                    {
                        "value": 592,
                        "code": "420202000000",
                        "label": "黄石港区",
                        "children": null
                    },
                    {
                        "value": 593,
                        "code": "420203000000",
                        "label": "西塞山区",
                        "children": null
                    },
                    {
                        "value": 594,
                        "code": "420204000000",
                        "label": "下陆区",
                        "children": null
                    },
                    {
                        "value": 595,
                        "code": "420205000000",
                        "label": "铁山区",
                        "children": null
                    },
                    {
                        "value": 596,
                        "code": "420222000000",
                        "label": "阳新县",
                        "children": null
                    },
                    {
                        "value": 597,
                        "code": "420281000000",
                        "label": "大冶市",
                        "children": null
                    }
                ]
            },
            {
                "value": 315,
                "code": "420300000000",
                "label": "十堰市",
                "children": [
                    {
                        "value": 504,
                        "code": "420302000000",
                        "label": "茅箭区",
                        "children": null
                    },
                    {
                        "value": 505,
                        "code": "420303000000",
                        "label": "张湾区",
                        "children": null
                    },
                    {
                        "value": 506,
                        "code": "420321000000",
                        "label": "郧县",
                        "children": null
                    },
                    {
                        "value": 507,
                        "code": "420322000000",
                        "label": "郧西县",
                        "children": null
                    },
                    {
                        "value": 508,
                        "code": "420323000000",
                        "label": "竹山县",
                        "children": null
                    },
                    {
                        "value": 509,
                        "code": "420324000000",
                        "label": "竹溪县",
                        "children": null
                    },
                    {
                        "value": 510,
                        "code": "420325000000",
                        "label": "房县",
                        "children": null
                    },
                    {
                        "value": 511,
                        "code": "420381000000",
                        "label": "丹江口市",
                        "children": null
                    }
                ]
            },
            {
                "value": 316,
                "code": "420500000000",
                "label": "宜昌市",
                "children": [
                    {
                        "value": 3165,
                        "code": "420502000000",
                        "label": "西陵区",
                        "children": null
                    },
                    {
                        "value": 3166,
                        "code": "420503000000",
                        "label": "伍家岗区",
                        "children": null
                    },
                    {
                        "value": 3167,
                        "code": "420504000000",
                        "label": "点军区",
                        "children": null
                    },
                    {
                        "value": 3168,
                        "code": "420505000000",
                        "label": "猇亭区",
                        "children": null
                    },
                    {
                        "value": 3169,
                        "code": "420506000000",
                        "label": "夷陵区",
                        "children": null
                    },
                    {
                        "value": 3170,
                        "code": "420525000000",
                        "label": "远安县",
                        "children": null
                    },
                    {
                        "value": 3171,
                        "code": "420526000000",
                        "label": "兴山县",
                        "children": null
                    },
                    {
                        "value": 3172,
                        "code": "420527000000",
                        "label": "秭归县",
                        "children": null
                    },
                    {
                        "value": 3173,
                        "code": "420528000000",
                        "label": "长阳土家族自治县",
                        "children": null
                    },
                    {
                        "value": 3174,
                        "code": "420529000000",
                        "label": "五峰土家族自治县",
                        "children": null
                    },
                    {
                        "value": 3175,
                        "code": "420581000000",
                        "label": "宜都市",
                        "children": null
                    },
                    {
                        "value": 3176,
                        "code": "420582000000",
                        "label": "当阳市",
                        "children": null
                    },
                    {
                        "value": 3177,
                        "code": "420583000000",
                        "label": "枝江市",
                        "children": null
                    }
                ]
            },
            {
                "value": 317,
                "code": "420600000000",
                "label": "襄阳市",
                "children": [
                    {
                        "value": 3102,
                        "code": "420602000000",
                        "label": "襄城区",
                        "children": null
                    },
                    {
                        "value": 3103,
                        "code": "420606000000",
                        "label": "樊城区",
                        "children": null
                    },
                    {
                        "value": 3104,
                        "code": "420607000000",
                        "label": "襄州区",
                        "children": null
                    },
                    {
                        "value": 3105,
                        "code": "420624000000",
                        "label": "南漳县",
                        "children": null
                    },
                    {
                        "value": 3106,
                        "code": "420625000000",
                        "label": "谷城县",
                        "children": null
                    },
                    {
                        "value": 3107,
                        "code": "420626000000",
                        "label": "保康县",
                        "children": null
                    },
                    {
                        "value": 3108,
                        "code": "420682000000",
                        "label": "老河口市",
                        "children": null
                    },
                    {
                        "value": 3109,
                        "code": "420683000000",
                        "label": "枣阳市",
                        "children": null
                    },
                    {
                        "value": 3110,
                        "code": "420684000000",
                        "label": "宜城市",
                        "children": null
                    }
                ]
            },
            {
                "value": 318,
                "code": "420700000000",
                "label": "鄂州市",
                "children": [
                    {
                        "value": 3059,
                        "code": "420702000000",
                        "label": "梁子湖区",
                        "children": null
                    },
                    {
                        "value": 3060,
                        "code": "420703000000",
                        "label": "华容区",
                        "children": null
                    },
                    {
                        "value": 3061,
                        "code": "420704000000",
                        "label": "鄂城区",
                        "children": null
                    }
                ]
            },
            {
                "value": 319,
                "code": "420800000000",
                "label": "荆门市",
                "children": [
                    {
                        "value": 2486,
                        "code": "420802000000",
                        "label": "东宝区",
                        "children": null
                    },
                    {
                        "value": 2487,
                        "code": "420804000000",
                        "label": "掇刀区",
                        "children": null
                    },
                    {
                        "value": 2488,
                        "code": "420821000000",
                        "label": "京山县",
                        "children": null
                    },
                    {
                        "value": 2489,
                        "code": "420822000000",
                        "label": "沙洋县",
                        "children": null
                    },
                    {
                        "value": 2490,
                        "code": "420881000000",
                        "label": "钟祥市",
                        "children": null
                    }
                ]
            },
            {
                "value": 320,
                "code": "420900000000",
                "label": "孝感市",
                "children": [
                    {
                        "value": 2370,
                        "code": "420902000000",
                        "label": "孝南区",
                        "children": null
                    },
                    {
                        "value": 2371,
                        "code": "420921000000",
                        "label": "孝昌县",
                        "children": null
                    },
                    {
                        "value": 2372,
                        "code": "420922000000",
                        "label": "大悟县",
                        "children": null
                    },
                    {
                        "value": 2373,
                        "code": "420923000000",
                        "label": "云梦县",
                        "children": null
                    },
                    {
                        "value": 2374,
                        "code": "420981000000",
                        "label": "应城市",
                        "children": null
                    },
                    {
                        "value": 2375,
                        "code": "420982000000",
                        "label": "安陆市",
                        "children": null
                    },
                    {
                        "value": 2376,
                        "code": "420984000000",
                        "label": "汉川市",
                        "children": null
                    }
                ]
            },
            {
                "value": 321,
                "code": "421000000000",
                "label": "荆州市",
                "children": [
                    {
                        "value": 2044,
                        "code": "421002000000",
                        "label": "沙市区",
                        "children": null
                    },
                    {
                        "value": 2045,
                        "code": "421003000000",
                        "label": "荆州区",
                        "children": null
                    },
                    {
                        "value": 2046,
                        "code": "421022000000",
                        "label": "公安县",
                        "children": null
                    },
                    {
                        "value": 2047,
                        "code": "421023000000",
                        "label": "监利县",
                        "children": null
                    },
                    {
                        "value": 2048,
                        "code": "421024000000",
                        "label": "江陵县",
                        "children": null
                    },
                    {
                        "value": 2049,
                        "code": "421081000000",
                        "label": "石首市",
                        "children": null
                    },
                    {
                        "value": 2050,
                        "code": "421083000000",
                        "label": "洪湖市",
                        "children": null
                    },
                    {
                        "value": 2051,
                        "code": "421087000000",
                        "label": "松滋市",
                        "children": null
                    }
                ]
            },
            {
                "value": 322,
                "code": "421100000000",
                "label": "黄冈市",
                "children": [
                    {
                        "value": 1981,
                        "code": "421102000000",
                        "label": "黄州区",
                        "children": null
                    },
                    {
                        "value": 1982,
                        "code": "421121000000",
                        "label": "团风县",
                        "children": null
                    },
                    {
                        "value": 1983,
                        "code": "421122000000",
                        "label": "红安县",
                        "children": null
                    },
                    {
                        "value": 1984,
                        "code": "421123000000",
                        "label": "罗田县",
                        "children": null
                    },
                    {
                        "value": 1985,
                        "code": "421124000000",
                        "label": "英山县",
                        "children": null
                    },
                    {
                        "value": 1986,
                        "code": "421125000000",
                        "label": "浠水县",
                        "children": null
                    },
                    {
                        "value": 1987,
                        "code": "421126000000",
                        "label": "蕲春县",
                        "children": null
                    },
                    {
                        "value": 1988,
                        "code": "421127000000",
                        "label": "黄梅县",
                        "children": null
                    },
                    {
                        "value": 1989,
                        "code": "421181000000",
                        "label": "麻城市",
                        "children": null
                    },
                    {
                        "value": 1990,
                        "code": "421182000000",
                        "label": "武穴市",
                        "children": null
                    }
                ]
            },
            {
                "value": 323,
                "code": "421200000000",
                "label": "咸宁市",
                "children": [
                    {
                        "value": 1905,
                        "code": "421202000000",
                        "label": "咸安区",
                        "children": null
                    },
                    {
                        "value": 1906,
                        "code": "421221000000",
                        "label": "嘉鱼县",
                        "children": null
                    },
                    {
                        "value": 1907,
                        "code": "421222000000",
                        "label": "通城县",
                        "children": null
                    },
                    {
                        "value": 1908,
                        "code": "421223000000",
                        "label": "崇阳县",
                        "children": null
                    },
                    {
                        "value": 1909,
                        "code": "421224000000",
                        "label": "通山县",
                        "children": null
                    },
                    {
                        "value": 1910,
                        "code": "421281000000",
                        "label": "赤壁市",
                        "children": null
                    }
                ]
            },
            {
                "value": 324,
                "code": "421300000000",
                "label": "随州市",
                "children": [
                    {
                        "value": 1824,
                        "code": "421303000000",
                        "label": "曾都区",
                        "children": null
                    },
                    {
                        "value": 1825,
                        "code": "421321000000",
                        "label": "随县",
                        "children": null
                    },
                    {
                        "value": 1826,
                        "code": "421381000000",
                        "label": "广水市",
                        "children": null
                    }
                ]
            },
            {
                "value": 325,
                "code": "422800000000",
                "label": "恩施土家族苗族自治州",
                "children": [
                    {
                        "value": 1261,
                        "code": "422801000000",
                        "label": "恩施市",
                        "children": null
                    },
                    {
                        "value": 1262,
                        "code": "422802000000",
                        "label": "利川市",
                        "children": null
                    },
                    {
                        "value": 1263,
                        "code": "422822000000",
                        "label": "建始县",
                        "children": null
                    },
                    {
                        "value": 1264,
                        "code": "422823000000",
                        "label": "巴东县",
                        "children": null
                    },
                    {
                        "value": 1265,
                        "code": "422825000000",
                        "label": "宣恩县",
                        "children": null
                    },
                    {
                        "value": 1266,
                        "code": "422826000000",
                        "label": "咸丰县",
                        "children": null
                    },
                    {
                        "value": 1267,
                        "code": "422827000000",
                        "label": "来凤县",
                        "children": null
                    },
                    {
                        "value": 1268,
                        "code": "422828000000",
                        "label": "鹤峰县",
                        "children": null
                    }
                ]
            },
            {
                "value": 326,
                "code": "429000000000",
                "label": "省直辖县级行政区划",
                "children": [
                    {
                        "value": 1368,
                        "code": "429004000000",
                        "label": "仙桃市",
                        "children": null
                    },
                    {
                        "value": 1369,
                        "code": "429005000000",
                        "label": "潜江市",
                        "children": null
                    },
                    {
                        "value": 1370,
                        "code": "429006000000",
                        "label": "天门市",
                        "children": null
                    },
                    {
                        "value": 1371,
                        "code": "429021000000",
                        "label": "神农架林区",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "value": 19,
        "code": "430000000000",
        "label": "湖南",
        "children": [
            {
                "value": 288,
                "code": "430100000000",
                "label": "长沙市",
                "children": [
                    {
                        "value": 1617,
                        "code": "430102000000",
                        "label": "芙蓉区",
                        "children": null
                    },
                    {
                        "value": 1618,
                        "code": "430103000000",
                        "label": "天心区",
                        "children": null
                    },
                    {
                        "value": 1619,
                        "code": "430104000000",
                        "label": "岳麓区",
                        "children": null
                    },
                    {
                        "value": 1620,
                        "code": "430105000000",
                        "label": "开福区",
                        "children": null
                    },
                    {
                        "value": 1621,
                        "code": "430111000000",
                        "label": "雨花区",
                        "children": null
                    },
                    {
                        "value": 1622,
                        "code": "430112000000",
                        "label": "望城区",
                        "children": null
                    },
                    {
                        "value": 1623,
                        "code": "430121000000",
                        "label": "长沙县",
                        "children": null
                    },
                    {
                        "value": 1624,
                        "code": "430124000000",
                        "label": "宁乡县",
                        "children": null
                    },
                    {
                        "value": 1625,
                        "code": "430181000000",
                        "label": "浏阳市",
                        "children": null
                    }
                ]
            },
            {
                "value": 289,
                "code": "430200000000",
                "label": "株洲市",
                "children": [
                    {
                        "value": 1486,
                        "code": "430202000000",
                        "label": "荷塘区",
                        "children": null
                    },
                    {
                        "value": 1487,
                        "code": "430203000000",
                        "label": "芦淞区",
                        "children": null
                    },
                    {
                        "value": 1488,
                        "code": "430204000000",
                        "label": "石峰区",
                        "children": null
                    },
                    {
                        "value": 1489,
                        "code": "430211000000",
                        "label": "天元区",
                        "children": null
                    },
                    {
                        "value": 1490,
                        "code": "430221000000",
                        "label": "株洲县",
                        "children": null
                    },
                    {
                        "value": 1491,
                        "code": "430223000000",
                        "label": "攸县",
                        "children": null
                    },
                    {
                        "value": 1492,
                        "code": "430224000000",
                        "label": "茶陵县",
                        "children": null
                    },
                    {
                        "value": 1493,
                        "code": "430225000000",
                        "label": "炎陵县",
                        "children": null
                    },
                    {
                        "value": 1494,
                        "code": "430281000000",
                        "label": "醴陵市",
                        "children": null
                    }
                ]
            },
            {
                "value": 290,
                "code": "430300000000",
                "label": "湘潭市",
                "children": [
                    {
                        "value": 1399,
                        "code": "430302000000",
                        "label": "雨湖区",
                        "children": null
                    },
                    {
                        "value": 1400,
                        "code": "430304000000",
                        "label": "岳塘区",
                        "children": null
                    },
                    {
                        "value": 1401,
                        "code": "430321000000",
                        "label": "湘潭县",
                        "children": null
                    },
                    {
                        "value": 1402,
                        "code": "430381000000",
                        "label": "湘乡市",
                        "children": null
                    },
                    {
                        "value": 1403,
                        "code": "430382000000",
                        "label": "韶山市",
                        "children": null
                    }
                ]
            },
            {
                "value": 291,
                "code": "430400000000",
                "label": "衡阳市",
                "children": [
                    {
                        "value": 1303,
                        "code": "430405000000",
                        "label": "珠晖区",
                        "children": null
                    },
                    {
                        "value": 1304,
                        "code": "430406000000",
                        "label": "雁峰区",
                        "children": null
                    },
                    {
                        "value": 1305,
                        "code": "430407000000",
                        "label": "石鼓区",
                        "children": null
                    },
                    {
                        "value": 1306,
                        "code": "430408000000",
                        "label": "蒸湘区",
                        "children": null
                    },
                    {
                        "value": 1307,
                        "code": "430412000000",
                        "label": "南岳区",
                        "children": null
                    },
                    {
                        "value": 1308,
                        "code": "430421000000",
                        "label": "衡阳县",
                        "children": null
                    },
                    {
                        "value": 1309,
                        "code": "430422000000",
                        "label": "衡南县",
                        "children": null
                    },
                    {
                        "value": 1310,
                        "code": "430423000000",
                        "label": "衡山县",
                        "children": null
                    },
                    {
                        "value": 1311,
                        "code": "430424000000",
                        "label": "衡东县",
                        "children": null
                    },
                    {
                        "value": 1312,
                        "code": "430426000000",
                        "label": "祁东县",
                        "children": null
                    },
                    {
                        "value": 1313,
                        "code": "430481000000",
                        "label": "耒阳市",
                        "children": null
                    },
                    {
                        "value": 1314,
                        "code": "430482000000",
                        "label": "常宁市",
                        "children": null
                    }
                ]
            },
            {
                "value": 292,
                "code": "430500000000",
                "label": "邵阳市",
                "children": [
                    {
                        "value": 1205,
                        "code": "430502000000",
                        "label": "双清区",
                        "children": null
                    },
                    {
                        "value": 1206,
                        "code": "430503000000",
                        "label": "大祥区",
                        "children": null
                    },
                    {
                        "value": 1207,
                        "code": "430511000000",
                        "label": "北塔区",
                        "children": null
                    },
                    {
                        "value": 1208,
                        "code": "430521000000",
                        "label": "邵东县",
                        "children": null
                    },
                    {
                        "value": 1209,
                        "code": "430522000000",
                        "label": "新邵县",
                        "children": null
                    },
                    {
                        "value": 1210,
                        "code": "430523000000",
                        "label": "邵阳县",
                        "children": null
                    },
                    {
                        "value": 1211,
                        "code": "430524000000",
                        "label": "隆回县",
                        "children": null
                    },
                    {
                        "value": 1212,
                        "code": "430525000000",
                        "label": "洞口县",
                        "children": null
                    },
                    {
                        "value": 1213,
                        "code": "430527000000",
                        "label": "绥宁县",
                        "children": null
                    },
                    {
                        "value": 1214,
                        "code": "430528000000",
                        "label": "新宁县",
                        "children": null
                    },
                    {
                        "value": 1215,
                        "code": "430529000000",
                        "label": "城步苗族自治县",
                        "children": null
                    },
                    {
                        "value": 1216,
                        "code": "430581000000",
                        "label": "武冈市",
                        "children": null
                    }
                ]
            },
            {
                "value": 293,
                "code": "430600000000",
                "label": "岳阳市",
                "children": [
                    {
                        "value": 1087,
                        "code": "430602000000",
                        "label": "岳阳楼区",
                        "children": null
                    },
                    {
                        "value": 1088,
                        "code": "430603000000",
                        "label": "云溪区",
                        "children": null
                    },
                    {
                        "value": 1089,
                        "code": "430611000000",
                        "label": "君山区",
                        "children": null
                    },
                    {
                        "value": 1090,
                        "code": "430621000000",
                        "label": "岳阳县",
                        "children": null
                    },
                    {
                        "value": 1091,
                        "code": "430623000000",
                        "label": "华容县",
                        "children": null
                    },
                    {
                        "value": 1092,
                        "code": "430624000000",
                        "label": "湘阴县",
                        "children": null
                    },
                    {
                        "value": 1093,
                        "code": "430626000000",
                        "label": "平江县",
                        "children": null
                    },
                    {
                        "value": 1094,
                        "code": "430681000000",
                        "label": "汨罗市",
                        "children": null
                    },
                    {
                        "value": 1095,
                        "code": "430682000000",
                        "label": "临湘市",
                        "children": null
                    }
                ]
            },
            {
                "value": 294,
                "code": "430700000000",
                "label": "常德市",
                "children": [
                    {
                        "value": 968,
                        "code": "430702000000",
                        "label": "武陵区",
                        "children": null
                    },
                    {
                        "value": 969,
                        "code": "430703000000",
                        "label": "鼎城区",
                        "children": null
                    },
                    {
                        "value": 970,
                        "code": "430721000000",
                        "label": "安乡县",
                        "children": null
                    },
                    {
                        "value": 971,
                        "code": "430722000000",
                        "label": "汉寿县",
                        "children": null
                    },
                    {
                        "value": 972,
                        "code": "430723000000",
                        "label": "澧县",
                        "children": null
                    },
                    {
                        "value": 973,
                        "code": "430724000000",
                        "label": "临澧县",
                        "children": null
                    },
                    {
                        "value": 974,
                        "code": "430725000000",
                        "label": "桃源县",
                        "children": null
                    },
                    {
                        "value": 975,
                        "code": "430726000000",
                        "label": "石门县",
                        "children": null
                    },
                    {
                        "value": 976,
                        "code": "430781000000",
                        "label": "津市市",
                        "children": null
                    }
                ]
            },
            {
                "value": 295,
                "code": "430800000000",
                "label": "张家界市",
                "children": [
                    {
                        "value": 470,
                        "code": "430802000000",
                        "label": "永定区",
                        "children": null
                    },
                    {
                        "value": 471,
                        "code": "430811000000",
                        "label": "武陵源区",
                        "children": null
                    },
                    {
                        "value": 472,
                        "code": "430821000000",
                        "label": "慈利县",
                        "children": null
                    },
                    {
                        "value": 473,
                        "code": "430822000000",
                        "label": "桑植县",
                        "children": null
                    }
                ]
            },
            {
                "value": 296,
                "code": "430900000000",
                "label": "益阳市",
                "children": [
                    {
                        "value": 377,
                        "code": "430902000000",
                        "label": "资阳区",
                        "children": null
                    },
                    {
                        "value": 378,
                        "code": "430903000000",
                        "label": "赫山区",
                        "children": null
                    },
                    {
                        "value": 379,
                        "code": "430921000000",
                        "label": "南县",
                        "children": null
                    },
                    {
                        "value": 380,
                        "code": "430922000000",
                        "label": "桃江县",
                        "children": null
                    },
                    {
                        "value": 381,
                        "code": "430923000000",
                        "label": "安化县",
                        "children": null
                    },
                    {
                        "value": 382,
                        "code": "430981000000",
                        "label": "沅江市",
                        "children": null
                    }
                ]
            },
            {
                "value": 297,
                "code": "431000000000",
                "label": "郴州市",
                "children": [
                    {
                        "value": 3035,
                        "code": "431002000000",
                        "label": "北湖区",
                        "children": null
                    },
                    {
                        "value": 3036,
                        "code": "431003000000",
                        "label": "苏仙区",
                        "children": null
                    },
                    {
                        "value": 3037,
                        "code": "431021000000",
                        "label": "桂阳县",
                        "children": null
                    },
                    {
                        "value": 3038,
                        "code": "431022000000",
                        "label": "宜章县",
                        "children": null
                    },
                    {
                        "value": 3039,
                        "code": "431023000000",
                        "label": "永兴县",
                        "children": null
                    },
                    {
                        "value": 3040,
                        "code": "431024000000",
                        "label": "嘉禾县",
                        "children": null
                    },
                    {
                        "value": 3041,
                        "code": "431025000000",
                        "label": "临武县",
                        "children": null
                    },
                    {
                        "value": 3042,
                        "code": "431026000000",
                        "label": "汝城县",
                        "children": null
                    },
                    {
                        "value": 3043,
                        "code": "431027000000",
                        "label": "桂东县",
                        "children": null
                    },
                    {
                        "value": 3044,
                        "code": "431028000000",
                        "label": "安仁县",
                        "children": null
                    },
                    {
                        "value": 3045,
                        "code": "431081000000",
                        "label": "资兴市",
                        "children": null
                    }
                ]
            },
            {
                "value": 298,
                "code": "431100000000",
                "label": "永州市",
                "children": [
                    {
                        "value": 2936,
                        "code": "431102000000",
                        "label": "零陵区",
                        "children": null
                    },
                    {
                        "value": 2937,
                        "code": "431103000000",
                        "label": "冷水滩区",
                        "children": null
                    },
                    {
                        "value": 2938,
                        "code": "431121000000",
                        "label": "祁阳县",
                        "children": null
                    },
                    {
                        "value": 2939,
                        "code": "431122000000",
                        "label": "东安县",
                        "children": null
                    },
                    {
                        "value": 2940,
                        "code": "431123000000",
                        "label": "双牌县",
                        "children": null
                    },
                    {
                        "value": 2941,
                        "code": "431124000000",
                        "label": "道县",
                        "children": null
                    },
                    {
                        "value": 2942,
                        "code": "431125000000",
                        "label": "江永县",
                        "children": null
                    },
                    {
                        "value": 2943,
                        "code": "431126000000",
                        "label": "宁远县",
                        "children": null
                    },
                    {
                        "value": 2944,
                        "code": "431127000000",
                        "label": "蓝山县",
                        "children": null
                    },
                    {
                        "value": 2945,
                        "code": "431128000000",
                        "label": "新田县",
                        "children": null
                    },
                    {
                        "value": 2946,
                        "code": "431129000000",
                        "label": "江华瑶族自治县",
                        "children": null
                    }
                ]
            },
            {
                "value": 299,
                "code": "431200000000",
                "label": "怀化市",
                "children": [
                    {
                        "value": 2839,
                        "code": "431202000000",
                        "label": "鹤城区",
                        "children": null
                    },
                    {
                        "value": 2840,
                        "code": "431221000000",
                        "label": "中方县",
                        "children": null
                    },
                    {
                        "value": 2841,
                        "code": "431222000000",
                        "label": "沅陵县",
                        "children": null
                    },
                    {
                        "value": 2842,
                        "code": "431223000000",
                        "label": "辰溪县",
                        "children": null
                    },
                    {
                        "value": 2843,
                        "code": "431224000000",
                        "label": "溆浦县",
                        "children": null
                    },
                    {
                        "value": 2844,
                        "code": "431225000000",
                        "label": "会同县",
                        "children": null
                    },
                    {
                        "value": 2845,
                        "code": "431226000000",
                        "label": "麻阳苗族自治县",
                        "children": null
                    },
                    {
                        "value": 2846,
                        "code": "431227000000",
                        "label": "新晃侗族自治县",
                        "children": null
                    },
                    {
                        "value": 2847,
                        "code": "431228000000",
                        "label": "芷江侗族自治县",
                        "children": null
                    },
                    {
                        "value": 2848,
                        "code": "431229000000",
                        "label": "靖州苗族侗族自治县",
                        "children": null
                    },
                    {
                        "value": 2849,
                        "code": "431230000000",
                        "label": "通道侗族自治县",
                        "children": null
                    },
                    {
                        "value": 2850,
                        "code": "431281000000",
                        "label": "洪江市",
                        "children": null
                    }
                ]
            },
            {
                "value": 300,
                "code": "431300000000",
                "label": "娄底市",
                "children": [
                    {
                        "value": 2787,
                        "code": "431302000000",
                        "label": "娄星区",
                        "children": null
                    },
                    {
                        "value": 2788,
                        "code": "431321000000",
                        "label": "双峰县",
                        "children": null
                    },
                    {
                        "value": 2789,
                        "code": "431322000000",
                        "label": "新化县",
                        "children": null
                    },
                    {
                        "value": 2790,
                        "code": "431381000000",
                        "label": "冷水江市",
                        "children": null
                    },
                    {
                        "value": 2791,
                        "code": "431382000000",
                        "label": "涟源市",
                        "children": null
                    }
                ]
            },
            {
                "value": 301,
                "code": "433100000000",
                "label": "湘西土家族苗族自治州",
                "children": [
                    {
                        "value": 756,
                        "code": "433101000000",
                        "label": "吉首市",
                        "children": null
                    },
                    {
                        "value": 757,
                        "code": "433122000000",
                        "label": "泸溪县",
                        "children": null
                    },
                    {
                        "value": 758,
                        "code": "433123000000",
                        "label": "凤凰县",
                        "children": null
                    },
                    {
                        "value": 759,
                        "code": "433124000000",
                        "label": "花垣县",
                        "children": null
                    },
                    {
                        "value": 760,
                        "code": "433125000000",
                        "label": "保靖县",
                        "children": null
                    },
                    {
                        "value": 761,
                        "code": "433126000000",
                        "label": "古丈县",
                        "children": null
                    },
                    {
                        "value": 762,
                        "code": "433127000000",
                        "label": "永顺县",
                        "children": null
                    },
                    {
                        "value": 763,
                        "code": "433130000000",
                        "label": "龙山县",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "value": 20,
        "code": "440000000000",
        "label": "广东",
        "children": [
            {
                "value": 340,
                "code": "440100000000",
                "label": "广州市",
                "children": [
                    {
                        "value": 2536,
                        "code": "440103000000",
                        "label": "荔湾区",
                        "children": null
                    },
                    {
                        "value": 2537,
                        "code": "440104000000",
                        "label": "越秀区",
                        "children": null
                    },
                    {
                        "value": 2538,
                        "code": "440105000000",
                        "label": "海珠区",
                        "children": null
                    },
                    {
                        "value": 2539,
                        "code": "440106000000",
                        "label": "天河区",
                        "children": null
                    },
                    {
                        "value": 2540,
                        "code": "440111000000",
                        "label": "白云区",
                        "children": null
                    },
                    {
                        "value": 2541,
                        "code": "440112000000",
                        "label": "黄埔区",
                        "children": null
                    },
                    {
                        "value": 2542,
                        "code": "440113000000",
                        "label": "番禺区",
                        "children": null
                    },
                    {
                        "value": 2543,
                        "code": "440114000000",
                        "label": "花都区",
                        "children": null
                    },
                    {
                        "value": 2544,
                        "code": "440115000000",
                        "label": "南沙区",
                        "children": null
                    },
                    {
                        "value": 2545,
                        "code": "440116000000",
                        "label": "萝岗区",
                        "children": null
                    },
                    {
                        "value": 2546,
                        "code": "440183000000",
                        "label": "增城市",
                        "children": null
                    },
                    {
                        "value": 2547,
                        "code": "440184000000",
                        "label": "从化市",
                        "children": null
                    }
                ]
            },
            {
                "value": 341,
                "code": "440200000000",
                "label": "韶关市",
                "children": [
                    {
                        "value": 2392,
                        "code": "440203000000",
                        "label": "武江区",
                        "children": null
                    },
                    {
                        "value": 2393,
                        "code": "440204000000",
                        "label": "浈江区",
                        "children": null
                    },
                    {
                        "value": 2394,
                        "code": "440205000000",
                        "label": "曲江区",
                        "children": null
                    },
                    {
                        "value": 2395,
                        "code": "440222000000",
                        "label": "始兴县",
                        "children": null
                    },
                    {
                        "value": 2396,
                        "code": "440224000000",
                        "label": "仁化县",
                        "children": null
                    },
                    {
                        "value": 2397,
                        "code": "440229000000",
                        "label": "翁源县",
                        "children": null
                    },
                    {
                        "value": 2398,
                        "code": "440232000000",
                        "label": "乳源瑶族自治县",
                        "children": null
                    },
                    {
                        "value": 2399,
                        "code": "440233000000",
                        "label": "新丰县",
                        "children": null
                    },
                    {
                        "value": 2400,
                        "code": "440281000000",
                        "label": "乐昌市",
                        "children": null
                    },
                    {
                        "value": 2401,
                        "code": "440282000000",
                        "label": "南雄市",
                        "children": null
                    }
                ]
            },
            {
                "value": 342,
                "code": "440300000000",
                "label": "深圳市",
                "children": [
                    {
                        "value": 2300,
                        "code": "440303000000",
                        "label": "罗湖区",
                        "children": null
                    },
                    {
                        "value": 2301,
                        "code": "440304000000",
                        "label": "福田区",
                        "children": null
                    },
                    {
                        "value": 2302,
                        "code": "440305000000",
                        "label": "南山区",
                        "children": null
                    },
                    {
                        "value": 2303,
                        "code": "440306000000",
                        "label": "宝安区",
                        "children": null
                    },
                    {
                        "value": 2304,
                        "code": "440307000000",
                        "label": "龙岗区",
                        "children": null
                    },
                    {
                        "value": 2305,
                        "code": "440308000000",
                        "label": "盐田区",
                        "children": null
                    }
                ]
            },
            {
                "value": 343,
                "code": "440400000000",
                "label": "珠海市",
                "children": [
                    {
                        "value": 857,
                        "code": "440402000000",
                        "label": "香洲区",
                        "children": null
                    },
                    {
                        "value": 858,
                        "code": "440403000000",
                        "label": "斗门区",
                        "children": null
                    },
                    {
                        "value": 859,
                        "code": "440404000000",
                        "label": "金湾区",
                        "children": null
                    }
                ]
            },
            {
                "value": 344,
                "code": "440500000000",
                "label": "汕头市",
                "children": [
                    {
                        "value": 1892,
                        "code": "440507000000",
                        "label": "龙湖区",
                        "children": null
                    },
                    {
                        "value": 1893,
                        "code": "440511000000",
                        "label": "金平区",
                        "children": null
                    },
                    {
                        "value": 1894,
                        "code": "440512000000",
                        "label": "濠江区",
                        "children": null
                    },
                    {
                        "value": 1895,
                        "code": "440513000000",
                        "label": "潮阳区",
                        "children": null
                    },
                    {
                        "value": 1896,
                        "code": "440514000000",
                        "label": "潮南区",
                        "children": null
                    },
                    {
                        "value": 1897,
                        "code": "440515000000",
                        "label": "澄海区",
                        "children": null
                    },
                    {
                        "value": 1898,
                        "code": "440523000000",
                        "label": "南澳县",
                        "children": null
                    }
                ]
            },
            {
                "value": 345,
                "code": "440600000000",
                "label": "佛山市",
                "children": [
                    {
                        "value": 2008,
                        "code": "440604000000",
                        "label": "禅城区",
                        "children": null
                    },
                    {
                        "value": 2009,
                        "code": "440605000000",
                        "label": "南海区",
                        "children": null
                    },
                    {
                        "value": 2010,
                        "code": "440606000000",
                        "label": "顺德区",
                        "children": null
                    },
                    {
                        "value": 2011,
                        "code": "440607000000",
                        "label": "三水区",
                        "children": null
                    },
                    {
                        "value": 2012,
                        "code": "440608000000",
                        "label": "高明区",
                        "children": null
                    }
                ]
            },
            {
                "value": 346,
                "code": "440700000000",
                "label": "江门市",
                "children": [
                    {
                        "value": 1939,
                        "code": "440703000000",
                        "label": "蓬江区",
                        "children": null
                    },
                    {
                        "value": 1940,
                        "code": "440704000000",
                        "label": "江海区",
                        "children": null
                    },
                    {
                        "value": 1941,
                        "code": "440705000000",
                        "label": "新会区",
                        "children": null
                    },
                    {
                        "value": 1942,
                        "code": "440781000000",
                        "label": "台山市",
                        "children": null
                    },
                    {
                        "value": 1943,
                        "code": "440783000000",
                        "label": "开平市",
                        "children": null
                    },
                    {
                        "value": 1944,
                        "code": "440784000000",
                        "label": "鹤山市",
                        "children": null
                    },
                    {
                        "value": 1945,
                        "code": "440785000000",
                        "label": "恩平市",
                        "children": null
                    }
                ]
            },
            {
                "value": 347,
                "code": "440800000000",
                "label": "湛江市",
                "children": [
                    {
                        "value": 1359,
                        "code": "440802000000",
                        "label": "赤坎区",
                        "children": null
                    },
                    {
                        "value": 1360,
                        "code": "440803000000",
                        "label": "霞山区",
                        "children": null
                    },
                    {
                        "value": 1361,
                        "code": "440804000000",
                        "label": "坡头区",
                        "children": null
                    },
                    {
                        "value": 1362,
                        "code": "440811000000",
                        "label": "麻章区",
                        "children": null
                    },
                    {
                        "value": 1363,
                        "code": "440823000000",
                        "label": "遂溪县",
                        "children": null
                    },
                    {
                        "value": 1364,
                        "code": "440825000000",
                        "label": "徐闻县",
                        "children": null
                    },
                    {
                        "value": 1365,
                        "code": "440881000000",
                        "label": "廉江市",
                        "children": null
                    },
                    {
                        "value": 1366,
                        "code": "440882000000",
                        "label": "雷州市",
                        "children": null
                    },
                    {
                        "value": 1367,
                        "code": "440883000000",
                        "label": "吴川市",
                        "children": null
                    }
                ]
            },
            {
                "value": 348,
                "code": "440900000000",
                "label": "茂名市",
                "children": [
                    {
                        "value": 1255,
                        "code": "440902000000",
                        "label": "茂南区",
                        "children": null
                    },
                    {
                        "value": 1256,
                        "code": "440903000000",
                        "label": "茂港区",
                        "children": null
                    },
                    {
                        "value": 1257,
                        "code": "440923000000",
                        "label": "电白县",
                        "children": null
                    },
                    {
                        "value": 1258,
                        "code": "440981000000",
                        "label": "高州市",
                        "children": null
                    },
                    {
                        "value": 1259,
                        "code": "440982000000",
                        "label": "化州市",
                        "children": null
                    },
                    {
                        "value": 1260,
                        "code": "440983000000",
                        "label": "信宜市",
                        "children": null
                    }
                ]
            },
            {
                "value": 349,
                "code": "441200000000",
                "label": "肇庆市",
                "children": [
                    {
                        "value": 748,
                        "code": "441202000000",
                        "label": "端州区",
                        "children": null
                    },
                    {
                        "value": 749,
                        "code": "441203000000",
                        "label": "鼎湖区",
                        "children": null
                    },
                    {
                        "value": 750,
                        "code": "441223000000",
                        "label": "广宁县",
                        "children": null
                    },
                    {
                        "value": 751,
                        "code": "441224000000",
                        "label": "怀集县",
                        "children": null
                    },
                    {
                        "value": 752,
                        "code": "441225000000",
                        "label": "封开县",
                        "children": null
                    },
                    {
                        "value": 753,
                        "code": "441226000000",
                        "label": "德庆县",
                        "children": null
                    },
                    {
                        "value": 754,
                        "code": "441283000000",
                        "label": "高要市",
                        "children": null
                    },
                    {
                        "value": 755,
                        "code": "441284000000",
                        "label": "四会市",
                        "children": null
                    }
                ]
            },
            {
                "value": 350,
                "code": "441300000000",
                "label": "惠州市",
                "children": [
                    {
                        "value": 728,
                        "code": "441302000000",
                        "label": "惠城区",
                        "children": null
                    },
                    {
                        "value": 729,
                        "code": "441303000000",
                        "label": "惠阳区",
                        "children": null
                    },
                    {
                        "value": 730,
                        "code": "441322000000",
                        "label": "博罗县",
                        "children": null
                    },
                    {
                        "value": 731,
                        "code": "441323000000",
                        "label": "惠东县",
                        "children": null
                    },
                    {
                        "value": 732,
                        "code": "441324000000",
                        "label": "龙门县",
                        "children": null
                    }
                ]
            },
            {
                "value": 351,
                "code": "441400000000",
                "label": "梅州市",
                "children": [
                    {
                        "value": 2642,
                        "code": "441402000000",
                        "label": "梅江区",
                        "children": null
                    },
                    {
                        "value": 2643,
                        "code": "441421000000",
                        "label": "梅县",
                        "children": null
                    },
                    {
                        "value": 2644,
                        "code": "441422000000",
                        "label": "大埔县",
                        "children": null
                    },
                    {
                        "value": 2645,
                        "code": "441423000000",
                        "label": "丰顺县",
                        "children": null
                    },
                    {
                        "value": 2646,
                        "code": "441424000000",
                        "label": "五华县",
                        "children": null
                    },
                    {
                        "value": 2647,
                        "code": "441426000000",
                        "label": "平远县",
                        "children": null
                    },
                    {
                        "value": 2648,
                        "code": "441427000000",
                        "label": "蕉岭县",
                        "children": null
                    },
                    {
                        "value": 2649,
                        "code": "441481000000",
                        "label": "兴宁市",
                        "children": null
                    }
                ]
            },
            {
                "value": 352,
                "code": "441500000000",
                "label": "汕尾市",
                "children": [
                    {
                        "value": 2579,
                        "code": "441502000000",
                        "label": "城区",
                        "children": null
                    },
                    {
                        "value": 2580,
                        "code": "441521000000",
                        "label": "海丰县",
                        "children": null
                    },
                    {
                        "value": 2581,
                        "code": "441523000000",
                        "label": "陆河县",
                        "children": null
                    },
                    {
                        "value": 2582,
                        "code": "441581000000",
                        "label": "陆丰市",
                        "children": null
                    }
                ]
            },
            {
                "value": 353,
                "code": "441600000000",
                "label": "河源市",
                "children": [
                    {
                        "value": 2456,
                        "code": "441602000000",
                        "label": "源城区",
                        "children": null
                    },
                    {
                        "value": 2457,
                        "code": "441621000000",
                        "label": "紫金县",
                        "children": null
                    },
                    {
                        "value": 2458,
                        "code": "441622000000",
                        "label": "龙川县",
                        "children": null
                    },
                    {
                        "value": 2459,
                        "code": "441623000000",
                        "label": "连平县",
                        "children": null
                    },
                    {
                        "value": 2460,
                        "code": "441624000000",
                        "label": "和平县",
                        "children": null
                    },
                    {
                        "value": 2461,
                        "code": "441625000000",
                        "label": "东源县",
                        "children": null
                    }
                ]
            },
            {
                "value": 354,
                "code": "441700000000",
                "label": "阳江市",
                "children": [
                    {
                        "value": 2349,
                        "code": "441702000000",
                        "label": "江城区",
                        "children": null
                    },
                    {
                        "value": 2350,
                        "code": "441721000000",
                        "label": "阳西县",
                        "children": null
                    },
                    {
                        "value": 2351,
                        "code": "441723000000",
                        "label": "阳东县",
                        "children": null
                    },
                    {
                        "value": 2352,
                        "code": "441781000000",
                        "label": "阳春市",
                        "children": null
                    }
                ]
            },
            {
                "value": 355,
                "code": "441800000000",
                "label": "清远市",
                "children": [
                    {
                        "value": 1784,
                        "code": "441802000000",
                        "label": "清城区",
                        "children": null
                    },
                    {
                        "value": 1785,
                        "code": "441821000000",
                        "label": "佛冈县",
                        "children": null
                    },
                    {
                        "value": 1786,
                        "code": "441823000000",
                        "label": "阳山县",
                        "children": null
                    },
                    {
                        "value": 1787,
                        "code": "441825000000",
                        "label": "连山壮族瑶族自治县",
                        "children": null
                    },
                    {
                        "value": 1788,
                        "code": "441826000000",
                        "label": "连南瑶族自治县",
                        "children": null
                    },
                    {
                        "value": 1789,
                        "code": "441827000000",
                        "label": "清新县",
                        "children": null
                    },
                    {
                        "value": 1790,
                        "code": "441881000000",
                        "label": "英德市",
                        "children": null
                    },
                    {
                        "value": 1791,
                        "code": "441882000000",
                        "label": "连州市",
                        "children": null
                    }
                ]
            },
            {
                "value": 356,
                "code": "441900000000",
                "label": "东莞市",
                "children": null
            },
            {
                "value": 357,
                "code": "442000000000",
                "label": "中山市",
                "children": null
            },
            {
                "value": 358,
                "code": "445100000000",
                "label": "潮州市",
                "children": [
                    {
                        "value": 569,
                        "code": "445102000000",
                        "label": "湘桥区",
                        "children": null
                    },
                    {
                        "value": 570,
                        "code": "445121000000",
                        "label": "潮安县",
                        "children": null
                    },
                    {
                        "value": 571,
                        "code": "445122000000",
                        "label": "饶平县",
                        "children": null
                    }
                ]
            },
            {
                "value": 359,
                "code": "445200000000",
                "label": "揭阳市",
                "children": [
                    {
                        "value": 484,
                        "code": "445202000000",
                        "label": "榕城区",
                        "children": null
                    },
                    {
                        "value": 485,
                        "code": "445221000000",
                        "label": "揭东县",
                        "children": null
                    },
                    {
                        "value": 486,
                        "code": "445222000000",
                        "label": "揭西县",
                        "children": null
                    },
                    {
                        "value": 487,
                        "code": "445224000000",
                        "label": "惠来县",
                        "children": null
                    },
                    {
                        "value": 488,
                        "code": "445281000000",
                        "label": "普宁市",
                        "children": null
                    }
                ]
            },
            {
                "value": 360,
                "code": "445300000000",
                "label": "云浮市",
                "children": [
                    {
                        "value": 549,
                        "code": "445302000000",
                        "label": "云城区",
                        "children": null
                    },
                    {
                        "value": 550,
                        "code": "445321000000",
                        "label": "新兴县",
                        "children": null
                    },
                    {
                        "value": 551,
                        "code": "445322000000",
                        "label": "郁南县",
                        "children": null
                    },
                    {
                        "value": 552,
                        "code": "445323000000",
                        "label": "云安县",
                        "children": null
                    },
                    {
                        "value": 553,
                        "code": "445381000000",
                        "label": "罗定市",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "value": 21,
        "code": "450000000000",
        "label": "广西",
        "children": [
            {
                "value": 33,
                "code": "450100000000",
                "label": "南宁市",
                "children": [
                    {
                        "value": 525,
                        "code": "450102000000",
                        "label": "兴宁区",
                        "children": null
                    },
                    {
                        "value": 526,
                        "code": "450103000000",
                        "label": "青秀区",
                        "children": null
                    },
                    {
                        "value": 527,
                        "code": "450105000000",
                        "label": "江南区",
                        "children": null
                    },
                    {
                        "value": 528,
                        "code": "450107000000",
                        "label": "西乡塘区",
                        "children": null
                    },
                    {
                        "value": 529,
                        "code": "450108000000",
                        "label": "良庆区",
                        "children": null
                    },
                    {
                        "value": 530,
                        "code": "450109000000",
                        "label": "邕宁区",
                        "children": null
                    },
                    {
                        "value": 531,
                        "code": "450122000000",
                        "label": "武鸣县",
                        "children": null
                    },
                    {
                        "value": 532,
                        "code": "450123000000",
                        "label": "隆安县",
                        "children": null
                    },
                    {
                        "value": 533,
                        "code": "450124000000",
                        "label": "马山县",
                        "children": null
                    },
                    {
                        "value": 534,
                        "code": "450125000000",
                        "label": "上林县",
                        "children": null
                    },
                    {
                        "value": 535,
                        "code": "450126000000",
                        "label": "宾阳县",
                        "children": null
                    },
                    {
                        "value": 536,
                        "code": "450127000000",
                        "label": "横县",
                        "children": null
                    }
                ]
            },
            {
                "value": 34,
                "code": "450200000000",
                "label": "柳州市",
                "children": [
                    {
                        "value": 999,
                        "code": "450202000000",
                        "label": "城中区",
                        "children": null
                    },
                    {
                        "value": 1000,
                        "code": "450203000000",
                        "label": "鱼峰区",
                        "children": null
                    },
                    {
                        "value": 1001,
                        "code": "450204000000",
                        "label": "柳南区",
                        "children": null
                    },
                    {
                        "value": 1002,
                        "code": "450205000000",
                        "label": "柳北区",
                        "children": null
                    },
                    {
                        "value": 1003,
                        "code": "450221000000",
                        "label": "柳江县",
                        "children": null
                    },
                    {
                        "value": 1004,
                        "code": "450222000000",
                        "label": "柳城县",
                        "children": null
                    },
                    {
                        "value": 1005,
                        "code": "450223000000",
                        "label": "鹿寨县",
                        "children": null
                    },
                    {
                        "value": 1006,
                        "code": "450224000000",
                        "label": "融安县",
                        "children": null
                    },
                    {
                        "value": 1007,
                        "code": "450225000000",
                        "label": "融水苗族自治县",
                        "children": null
                    },
                    {
                        "value": 1008,
                        "code": "450226000000",
                        "label": "三江侗族自治县",
                        "children": null
                    }
                ]
            },
            {
                "value": 35,
                "code": "450300000000",
                "label": "桂林市",
                "children": [
                    {
                        "value": 3183,
                        "code": "450302000000",
                        "label": "秀峰区",
                        "children": null
                    },
                    {
                        "value": 3184,
                        "code": "450303000000",
                        "label": "叠彩区",
                        "children": null
                    },
                    {
                        "value": 3185,
                        "code": "450304000000",
                        "label": "象山区",
                        "children": null
                    },
                    {
                        "value": 3186,
                        "code": "450305000000",
                        "label": "七星区",
                        "children": null
                    },
                    {
                        "value": 3187,
                        "code": "450311000000",
                        "label": "雁山区",
                        "children": null
                    },
                    {
                        "value": 3188,
                        "code": "450321000000",
                        "label": "阳朔县",
                        "children": null
                    },
                    {
                        "value": 3189,
                        "code": "450322000000",
                        "label": "临桂县",
                        "children": null
                    },
                    {
                        "value": 3190,
                        "code": "450323000000",
                        "label": "灵川县",
                        "children": null
                    },
                    {
                        "value": 3191,
                        "code": "450324000000",
                        "label": "全州县",
                        "children": null
                    },
                    {
                        "value": 3192,
                        "code": "450325000000",
                        "label": "兴安县",
                        "children": null
                    },
                    {
                        "value": 3193,
                        "code": "450326000000",
                        "label": "永福县",
                        "children": null
                    },
                    {
                        "value": 3194,
                        "code": "450327000000",
                        "label": "灌阳县",
                        "children": null
                    },
                    {
                        "value": 3195,
                        "code": "450328000000",
                        "label": "龙胜各族自治县",
                        "children": null
                    },
                    {
                        "value": 3196,
                        "code": "450329000000",
                        "label": "资源县",
                        "children": null
                    },
                    {
                        "value": 3197,
                        "code": "450330000000",
                        "label": "平乐县",
                        "children": null
                    },
                    {
                        "value": 3198,
                        "code": "450331000000",
                        "label": "荔蒲县",
                        "children": null
                    },
                    {
                        "value": 3199,
                        "code": "450332000000",
                        "label": "恭城瑶族自治县",
                        "children": null
                    }
                ]
            },
            {
                "value": 36,
                "code": "450400000000",
                "label": "梧州市",
                "children": [
                    {
                        "value": 3121,
                        "code": "450403000000",
                        "label": "万秀区",
                        "children": null
                    },
                    {
                        "value": 3122,
                        "code": "450404000000",
                        "label": "蝶山区",
                        "children": null
                    },
                    {
                        "value": 3123,
                        "code": "450405000000",
                        "label": "长洲区",
                        "children": null
                    },
                    {
                        "value": 3124,
                        "code": "450421000000",
                        "label": "苍梧县",
                        "children": null
                    },
                    {
                        "value": 3125,
                        "code": "450422000000",
                        "label": "藤县",
                        "children": null
                    },
                    {
                        "value": 3126,
                        "code": "450423000000",
                        "label": "蒙山县",
                        "children": null
                    },
                    {
                        "value": 3127,
                        "code": "450481000000",
                        "label": "岑溪市",
                        "children": null
                    }
                ]
            },
            {
                "value": 37,
                "code": "450500000000",
                "label": "北海市",
                "children": [
                    {
                        "value": 3074,
                        "code": "450502000000",
                        "label": "海城区",
                        "children": null
                    },
                    {
                        "value": 3075,
                        "code": "450503000000",
                        "label": "银海区",
                        "children": null
                    },
                    {
                        "value": 3076,
                        "code": "450512000000",
                        "label": "铁山港区",
                        "children": null
                    },
                    {
                        "value": 3077,
                        "code": "450521000000",
                        "label": "合浦县",
                        "children": null
                    }
                ]
            },
            {
                "value": 38,
                "code": "450600000000",
                "label": "防城港市",
                "children": [
                    {
                        "value": 2966,
                        "code": "450602000000",
                        "label": "港口区",
                        "children": null
                    },
                    {
                        "value": 2967,
                        "code": "450603000000",
                        "label": "防城区",
                        "children": null
                    },
                    {
                        "value": 2968,
                        "code": "450621000000",
                        "label": "上思县",
                        "children": null
                    },
                    {
                        "value": 2969,
                        "code": "450681000000",
                        "label": "东兴市",
                        "children": null
                    }
                ]
            },
            {
                "value": 39,
                "code": "450700000000",
                "label": "钦州市",
                "children": [
                    {
                        "value": 2885,
                        "code": "450702000000",
                        "label": "钦南区",
                        "children": null
                    },
                    {
                        "value": 2886,
                        "code": "450703000000",
                        "label": "钦北区",
                        "children": null
                    },
                    {
                        "value": 2887,
                        "code": "450721000000",
                        "label": "灵山县",
                        "children": null
                    },
                    {
                        "value": 2888,
                        "code": "450722000000",
                        "label": "浦北县",
                        "children": null
                    }
                ]
            },
            {
                "value": 40,
                "code": "450800000000",
                "label": "贵港市",
                "children": [
                    {
                        "value": 2255,
                        "code": "450802000000",
                        "label": "港北区",
                        "children": null
                    },
                    {
                        "value": 2256,
                        "code": "450803000000",
                        "label": "港南区",
                        "children": null
                    },
                    {
                        "value": 2257,
                        "code": "450804000000",
                        "label": "覃塘区",
                        "children": null
                    },
                    {
                        "value": 2258,
                        "code": "450821000000",
                        "label": "平南县",
                        "children": null
                    },
                    {
                        "value": 2259,
                        "code": "450881000000",
                        "label": "桂平市",
                        "children": null
                    }
                ]
            },
            {
                "value": 41,
                "code": "450900000000",
                "label": "玉林市",
                "children": [
                    {
                        "value": 2149,
                        "code": "450902000000",
                        "label": "玉州区",
                        "children": null
                    },
                    {
                        "value": 2150,
                        "code": "450921000000",
                        "label": "容县",
                        "children": null
                    },
                    {
                        "value": 2151,
                        "code": "450922000000",
                        "label": "陆川县",
                        "children": null
                    },
                    {
                        "value": 2152,
                        "code": "450923000000",
                        "label": "博白县",
                        "children": null
                    },
                    {
                        "value": 2153,
                        "code": "450924000000",
                        "label": "兴业县",
                        "children": null
                    },
                    {
                        "value": 2154,
                        "code": "450981000000",
                        "label": "北流市",
                        "children": null
                    }
                ]
            },
            {
                "value": 42,
                "code": "451000000000",
                "label": "百色市",
                "children": [
                    {
                        "value": 1912,
                        "code": "451002000000",
                        "label": "右江区",
                        "children": null
                    },
                    {
                        "value": 1913,
                        "code": "451021000000",
                        "label": "田阳县",
                        "children": null
                    },
                    {
                        "value": 1914,
                        "code": "451022000000",
                        "label": "田东县",
                        "children": null
                    },
                    {
                        "value": 1915,
                        "code": "451023000000",
                        "label": "平果县",
                        "children": null
                    },
                    {
                        "value": 1916,
                        "code": "451024000000",
                        "label": "德保县",
                        "children": null
                    },
                    {
                        "value": 1917,
                        "code": "451025000000",
                        "label": "靖西县",
                        "children": null
                    },
                    {
                        "value": 1918,
                        "code": "451026000000",
                        "label": "那坡县",
                        "children": null
                    },
                    {
                        "value": 1919,
                        "code": "451027000000",
                        "label": "凌云县",
                        "children": null
                    },
                    {
                        "value": 1920,
                        "code": "451028000000",
                        "label": "乐业县",
                        "children": null
                    },
                    {
                        "value": 1921,
                        "code": "451029000000",
                        "label": "田林县",
                        "children": null
                    },
                    {
                        "value": 1922,
                        "code": "451030000000",
                        "label": "西林县",
                        "children": null
                    },
                    {
                        "value": 1923,
                        "code": "451031000000",
                        "label": "隆林各族自治县",
                        "children": null
                    }
                ]
            },
            {
                "value": 43,
                "code": "451100000000",
                "label": "贺州市",
                "children": [
                    {
                        "value": 1827,
                        "code": "451102000000",
                        "label": "八步区",
                        "children": null
                    },
                    {
                        "value": 1828,
                        "code": "451119000000",
                        "label": "平桂管理区",
                        "children": null
                    },
                    {
                        "value": 1829,
                        "code": "451121000000",
                        "label": "昭平县",
                        "children": null
                    },
                    {
                        "value": 1830,
                        "code": "451122000000",
                        "label": "钟山县",
                        "children": null
                    },
                    {
                        "value": 1831,
                        "code": "451123000000",
                        "label": "富川瑶族自治县",
                        "children": null
                    }
                ]
            },
            {
                "value": 44,
                "code": "451200000000",
                "label": "河池市",
                "children": [
                    {
                        "value": 1754,
                        "code": "451202000000",
                        "label": "金城江区",
                        "children": null
                    },
                    {
                        "value": 1755,
                        "code": "451221000000",
                        "label": "南丹县",
                        "children": null
                    },
                    {
                        "value": 1756,
                        "code": "451222000000",
                        "label": "天峨县",
                        "children": null
                    },
                    {
                        "value": 1757,
                        "code": "451223000000",
                        "label": "凤山县",
                        "children": null
                    },
                    {
                        "value": 1758,
                        "code": "451224000000",
                        "label": "东兰县",
                        "children": null
                    },
                    {
                        "value": 1759,
                        "code": "451225000000",
                        "label": "罗城仫佬族自治县",
                        "children": null
                    },
                    {
                        "value": 1760,
                        "code": "451226000000",
                        "label": "环江毛南族自治县",
                        "children": null
                    },
                    {
                        "value": 1761,
                        "code": "451227000000",
                        "label": "巴马瑶族自治县",
                        "children": null
                    },
                    {
                        "value": 1762,
                        "code": "451228000000",
                        "label": "都安瑶族自治县",
                        "children": null
                    },
                    {
                        "value": 1763,
                        "code": "451229000000",
                        "label": "大化瑶族自治县",
                        "children": null
                    },
                    {
                        "value": 1764,
                        "code": "451281000000",
                        "label": "宜州市",
                        "children": null
                    }
                ]
            },
            {
                "value": 45,
                "code": "451300000000",
                "label": "来宾市",
                "children": [
                    {
                        "value": 3204,
                        "code": "451302000000",
                        "label": "兴宾区",
                        "children": null
                    },
                    {
                        "value": 3205,
                        "code": "451321000000",
                        "label": "忻城县",
                        "children": null
                    },
                    {
                        "value": 3206,
                        "code": "451322000000",
                        "label": "象州县",
                        "children": null
                    },
                    {
                        "value": 3207,
                        "code": "451323000000",
                        "label": "武宣县",
                        "children": null
                    },
                    {
                        "value": 3208,
                        "code": "451324000000",
                        "label": "金秀瑶族自治县",
                        "children": null
                    },
                    {
                        "value": 3209,
                        "code": "451381000000",
                        "label": "合山市",
                        "children": null
                    }
                ]
            },
            {
                "value": 46,
                "code": "451400000000",
                "label": "崇左市",
                "children": [
                    {
                        "value": 611,
                        "code": "451402000000",
                        "label": "江洲区",
                        "children": null
                    },
                    {
                        "value": 612,
                        "code": "451421000000",
                        "label": "扶绥县",
                        "children": null
                    },
                    {
                        "value": 613,
                        "code": "451422000000",
                        "label": "宁明县",
                        "children": null
                    },
                    {
                        "value": 614,
                        "code": "451423000000",
                        "label": "龙州县",
                        "children": null
                    },
                    {
                        "value": 615,
                        "code": "451424000000",
                        "label": "大新县",
                        "children": null
                    },
                    {
                        "value": 616,
                        "code": "451425000000",
                        "label": "天等县",
                        "children": null
                    },
                    {
                        "value": 617,
                        "code": "451481000000",
                        "label": "凭祥市",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "value": 22,
        "code": "460000000000",
        "label": "海南",
        "children": [
            {
                "value": 159,
                "code": "460100000000",
                "label": "海口市",
                "children": [
                    {
                        "value": 1413,
                        "code": "460105000000",
                        "label": "秀英区",
                        "children": null
                    },
                    {
                        "value": 1414,
                        "code": "460106000000",
                        "label": "龙华区",
                        "children": null
                    },
                    {
                        "value": 1415,
                        "code": "460107000000",
                        "label": "琼山区",
                        "children": null
                    },
                    {
                        "value": 1416,
                        "code": "460108000000",
                        "label": "美兰区",
                        "children": null
                    }
                ]
            },
            {
                "value": 160,
                "code": "460200000000",
                "label": "三亚市",
                "children": null
            },
            {
                "value": 161,
                "code": "469000000000",
                "label": "省直辖县级行政区划",
                "children": [
                    {
                        "value": 624,
                        "code": "469001000000",
                        "label": "五指山市",
                        "children": null
                    },
                    {
                        "value": 625,
                        "code": "469002000000",
                        "label": "琼海市",
                        "children": null
                    },
                    {
                        "value": 626,
                        "code": "469003000000",
                        "label": "儋州市",
                        "children": null
                    },
                    {
                        "value": 627,
                        "code": "469005000000",
                        "label": "文昌市",
                        "children": null
                    },
                    {
                        "value": 628,
                        "code": "469006000000",
                        "label": "万宁市",
                        "children": null
                    },
                    {
                        "value": 629,
                        "code": "469007000000",
                        "label": "东方市",
                        "children": null
                    },
                    {
                        "value": 630,
                        "code": "469021000000",
                        "label": "定安县",
                        "children": null
                    },
                    {
                        "value": 631,
                        "code": "469022000000",
                        "label": "屯昌县",
                        "children": null
                    },
                    {
                        "value": 632,
                        "code": "469023000000",
                        "label": "澄迈县",
                        "children": null
                    },
                    {
                        "value": 633,
                        "code": "469024000000",
                        "label": "临高县",
                        "children": null
                    },
                    {
                        "value": 634,
                        "code": "469025000000",
                        "label": "白沙黎族自治县",
                        "children": null
                    },
                    {
                        "value": 635,
                        "code": "469026000000",
                        "label": "昌江黎族自治县",
                        "children": null
                    },
                    {
                        "value": 636,
                        "code": "469027000000",
                        "label": "乐东黎族自治县",
                        "children": null
                    },
                    {
                        "value": 637,
                        "code": "469028000000",
                        "label": "陵水黎族自治县",
                        "children": null
                    },
                    {
                        "value": 638,
                        "code": "469029000000",
                        "label": "保亭黎族苗族自治县",
                        "children": null
                    },
                    {
                        "value": 639,
                        "code": "469030000000",
                        "label": "琼中黎族苗族自治县",
                        "children": null
                    },
                    {
                        "value": 640,
                        "code": "469031000000",
                        "label": "西沙群岛",
                        "children": null
                    },
                    {
                        "value": 641,
                        "code": "469032000000",
                        "label": "南沙群岛",
                        "children": null
                    },
                    {
                        "value": 642,
                        "code": "469033000000",
                        "label": "中沙群岛的岛礁及其海域",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "value": 23,
        "code": "500000000000",
        "label": "重庆",
        "children": [
            {
                "value": 111,
                "code": "500100000000",
                "label": "市辖区",
                "children": [
                    {
                        "value": 1792,
                        "code": "500101000000",
                        "label": "万州区",
                        "children": null
                    },
                    {
                        "value": 1793,
                        "code": "500102000000",
                        "label": "涪陵区",
                        "children": null
                    },
                    {
                        "value": 1794,
                        "code": "500103000000",
                        "label": "渝中区",
                        "children": null
                    },
                    {
                        "value": 1795,
                        "code": "500104000000",
                        "label": "大渡口区",
                        "children": null
                    },
                    {
                        "value": 1796,
                        "code": "500105000000",
                        "label": "江北区",
                        "children": null
                    },
                    {
                        "value": 1797,
                        "code": "500106000000",
                        "label": "沙坪坝区",
                        "children": null
                    },
                    {
                        "value": 1798,
                        "code": "500107000000",
                        "label": "九龙坡区",
                        "children": null
                    },
                    {
                        "value": 1799,
                        "code": "500108000000",
                        "label": "南岸区",
                        "children": null
                    },
                    {
                        "value": 1800,
                        "code": "500109000000",
                        "label": "北碚区",
                        "children": null
                    },
                    {
                        "value": 1801,
                        "code": "500110000000",
                        "label": "綦江区",
                        "children": null
                    },
                    {
                        "value": 1802,
                        "code": "500111000000",
                        "label": "大足区",
                        "children": null
                    },
                    {
                        "value": 1803,
                        "code": "500112000000",
                        "label": "渝北区",
                        "children": null
                    },
                    {
                        "value": 1804,
                        "code": "500113000000",
                        "label": "巴南区",
                        "children": null
                    },
                    {
                        "value": 1805,
                        "code": "500114000000",
                        "label": "黔江区",
                        "children": null
                    },
                    {
                        "value": 1806,
                        "code": "500115000000",
                        "label": "长寿区",
                        "children": null
                    },
                    {
                        "value": 1807,
                        "code": "500116000000",
                        "label": "江津区",
                        "children": null
                    },
                    {
                        "value": 1808,
                        "code": "500117000000",
                        "label": "合川区",
                        "children": null
                    },
                    {
                        "value": 1809,
                        "code": "500118000000",
                        "label": "永川区",
                        "children": null
                    },
                    {
                        "value": 1810,
                        "code": "500119000000",
                        "label": "南川区",
                        "children": null
                    }
                ]
            },
            {
                "value": 112,
                "code": "500200000000",
                "label": "县",
                "children": [
                    {
                        "value": 1702,
                        "code": "500223000000",
                        "label": "潼南县",
                        "children": null
                    },
                    {
                        "value": 1703,
                        "code": "500224000000",
                        "label": "铜梁县",
                        "children": null
                    },
                    {
                        "value": 1704,
                        "code": "500226000000",
                        "label": "荣昌县",
                        "children": null
                    },
                    {
                        "value": 1705,
                        "code": "500227000000",
                        "label": "璧山县",
                        "children": null
                    },
                    {
                        "value": 1706,
                        "code": "500228000000",
                        "label": "梁平县",
                        "children": null
                    },
                    {
                        "value": 1707,
                        "code": "500229000000",
                        "label": "城口县",
                        "children": null
                    },
                    {
                        "value": 1708,
                        "code": "500230000000",
                        "label": "丰都县",
                        "children": null
                    },
                    {
                        "value": 1709,
                        "code": "500231000000",
                        "label": "垫江县",
                        "children": null
                    },
                    {
                        "value": 1710,
                        "code": "500232000000",
                        "label": "武隆县",
                        "children": null
                    },
                    {
                        "value": 1711,
                        "code": "500233000000",
                        "label": "忠县",
                        "children": null
                    },
                    {
                        "value": 1712,
                        "code": "500234000000",
                        "label": "开县",
                        "children": null
                    },
                    {
                        "value": 1713,
                        "code": "500235000000",
                        "label": "云阳县",
                        "children": null
                    },
                    {
                        "value": 1714,
                        "code": "500236000000",
                        "label": "奉节县",
                        "children": null
                    },
                    {
                        "value": 1715,
                        "code": "500237000000",
                        "label": "巫山县",
                        "children": null
                    },
                    {
                        "value": 1716,
                        "code": "500238000000",
                        "label": "巫溪县",
                        "children": null
                    },
                    {
                        "value": 1717,
                        "code": "500240000000",
                        "label": "石柱土家族自治县",
                        "children": null
                    },
                    {
                        "value": 1718,
                        "code": "500241000000",
                        "label": "秀山土家族苗族自治县",
                        "children": null
                    },
                    {
                        "value": 1719,
                        "code": "500242000000",
                        "label": "酉阳土家族苗族自治县",
                        "children": null
                    },
                    {
                        "value": 1720,
                        "code": "500243000000",
                        "label": "彭水苗族土家族自治县",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "value": 24,
        "code": "510000000000",
        "label": "四川",
        "children": [
            {
                "value": 66,
                "code": "510100000000",
                "label": "成都市",
                "children": [
                    {
                        "value": 2735,
                        "code": "510104000000",
                        "label": "锦江区",
                        "children": null
                    },
                    {
                        "value": 2736,
                        "code": "510105000000",
                        "label": "青羊区",
                        "children": null
                    },
                    {
                        "value": 2737,
                        "code": "510106000000",
                        "label": "金牛区",
                        "children": null
                    },
                    {
                        "value": 2738,
                        "code": "510107000000",
                        "label": "武侯区",
                        "children": null
                    },
                    {
                        "value": 2739,
                        "code": "510108000000",
                        "label": "成华区",
                        "children": null
                    },
                    {
                        "value": 2740,
                        "code": "510112000000",
                        "label": "龙泉驿区",
                        "children": null
                    },
                    {
                        "value": 2741,
                        "code": "510113000000",
                        "label": "青白江区",
                        "children": null
                    },
                    {
                        "value": 2742,
                        "code": "510114000000",
                        "label": "新都区",
                        "children": null
                    },
                    {
                        "value": 2743,
                        "code": "510115000000",
                        "label": "温江区",
                        "children": null
                    },
                    {
                        "value": 2744,
                        "code": "510121000000",
                        "label": "金堂县",
                        "children": null
                    },
                    {
                        "value": 2745,
                        "code": "510122000000",
                        "label": "双流县",
                        "children": null
                    },
                    {
                        "value": 2746,
                        "code": "510124000000",
                        "label": "郫县",
                        "children": null
                    },
                    {
                        "value": 2747,
                        "code": "510129000000",
                        "label": "大邑县",
                        "children": null
                    },
                    {
                        "value": 2748,
                        "code": "510131000000",
                        "label": "蒲江县",
                        "children": null
                    },
                    {
                        "value": 2749,
                        "code": "510132000000",
                        "label": "新津县",
                        "children": null
                    },
                    {
                        "value": 2750,
                        "code": "510181000000",
                        "label": "都江堰市",
                        "children": null
                    },
                    {
                        "value": 2751,
                        "code": "510182000000",
                        "label": "彭州市",
                        "children": null
                    },
                    {
                        "value": 2752,
                        "code": "510183000000",
                        "label": "邛崃市",
                        "children": null
                    },
                    {
                        "value": 2753,
                        "code": "510184000000",
                        "label": "崇州市",
                        "children": null
                    }
                ]
            },
            {
                "value": 67,
                "code": "510300000000",
                "label": "自贡市",
                "children": [
                    {
                        "value": 2530,
                        "code": "510302000000",
                        "label": "自流井区",
                        "children": null
                    },
                    {
                        "value": 2531,
                        "code": "510303000000",
                        "label": "贡井区",
                        "children": null
                    },
                    {
                        "value": 2532,
                        "code": "510304000000",
                        "label": "大安区",
                        "children": null
                    },
                    {
                        "value": 2533,
                        "code": "510311000000",
                        "label": "沿滩区",
                        "children": null
                    },
                    {
                        "value": 2534,
                        "code": "510321000000",
                        "label": "荣县",
                        "children": null
                    },
                    {
                        "value": 2535,
                        "code": "510322000000",
                        "label": "富顺县",
                        "children": null
                    }
                ]
            },
            {
                "value": 68,
                "code": "510400000000",
                "label": "攀枝花市",
                "children": [
                    {
                        "value": 2430,
                        "code": "510402000000",
                        "label": "东区",
                        "children": null
                    },
                    {
                        "value": 2431,
                        "code": "510403000000",
                        "label": "西区",
                        "children": null
                    },
                    {
                        "value": 2432,
                        "code": "510411000000",
                        "label": "仁和区",
                        "children": null
                    },
                    {
                        "value": 2433,
                        "code": "510421000000",
                        "label": "米易县",
                        "children": null
                    },
                    {
                        "value": 2434,
                        "code": "510422000000",
                        "label": "盐边县",
                        "children": null
                    }
                ]
            },
            {
                "value": 69,
                "code": "510500000000",
                "label": "泸州市",
                "children": [
                    {
                        "value": 2293,
                        "code": "510502000000",
                        "label": "江阳区",
                        "children": null
                    },
                    {
                        "value": 2294,
                        "code": "510503000000",
                        "label": "纳溪区",
                        "children": null
                    },
                    {
                        "value": 2295,
                        "code": "510504000000",
                        "label": "龙马潭区",
                        "children": null
                    },
                    {
                        "value": 2296,
                        "code": "510521000000",
                        "label": "泸县",
                        "children": null
                    },
                    {
                        "value": 2297,
                        "code": "510522000000",
                        "label": "合江县",
                        "children": null
                    },
                    {
                        "value": 2298,
                        "code": "510524000000",
                        "label": "叙永县",
                        "children": null
                    },
                    {
                        "value": 2299,
                        "code": "510525000000",
                        "label": "古蔺县",
                        "children": null
                    }
                ]
            },
            {
                "value": 70,
                "code": "510600000000",
                "label": "德阳市",
                "children": [
                    {
                        "value": 2187,
                        "code": "510603000000",
                        "label": "旌阳区",
                        "children": null
                    },
                    {
                        "value": 2188,
                        "code": "510623000000",
                        "label": "中江县",
                        "children": null
                    },
                    {
                        "value": 2189,
                        "code": "510626000000",
                        "label": "罗江县",
                        "children": null
                    },
                    {
                        "value": 2190,
                        "code": "510681000000",
                        "label": "广汉市",
                        "children": null
                    },
                    {
                        "value": 2191,
                        "code": "510682000000",
                        "label": "什邡市",
                        "children": null
                    },
                    {
                        "value": 2192,
                        "code": "510683000000",
                        "label": "绵竹市",
                        "children": null
                    }
                ]
            },
            {
                "value": 71,
                "code": "510700000000",
                "label": "绵阳市",
                "children": [
                    {
                        "value": 2079,
                        "code": "510703000000",
                        "label": "涪城区",
                        "children": null
                    },
                    {
                        "value": 2080,
                        "code": "510704000000",
                        "label": "游仙区",
                        "children": null
                    },
                    {
                        "value": 2081,
                        "code": "510722000000",
                        "label": "三台县",
                        "children": null
                    },
                    {
                        "value": 2082,
                        "code": "510723000000",
                        "label": "盐亭县",
                        "children": null
                    },
                    {
                        "value": 2083,
                        "code": "510724000000",
                        "label": "安县",
                        "children": null
                    },
                    {
                        "value": 2084,
                        "code": "510725000000",
                        "label": "梓潼县",
                        "children": null
                    },
                    {
                        "value": 2085,
                        "code": "510726000000",
                        "label": "北川羌族自治县",
                        "children": null
                    },
                    {
                        "value": 2086,
                        "code": "510727000000",
                        "label": "平武县",
                        "children": null
                    },
                    {
                        "value": 2087,
                        "code": "510781000000",
                        "label": "江油市",
                        "children": null
                    }
                ]
            },
            {
                "value": 72,
                "code": "510800000000",
                "label": "广元市",
                "children": [
                    {
                        "value": 1535,
                        "code": "510802000000",
                        "label": "利州区",
                        "children": null
                    },
                    {
                        "value": 1536,
                        "code": "510811000000",
                        "label": "元坝区",
                        "children": null
                    },
                    {
                        "value": 1537,
                        "code": "510812000000",
                        "label": "朝天区",
                        "children": null
                    },
                    {
                        "value": 1538,
                        "code": "510821000000",
                        "label": "旺苍县",
                        "children": null
                    },
                    {
                        "value": 1539,
                        "code": "510822000000",
                        "label": "青川县",
                        "children": null
                    },
                    {
                        "value": 1540,
                        "code": "510823000000",
                        "label": "剑阁县",
                        "children": null
                    },
                    {
                        "value": 1541,
                        "code": "510824000000",
                        "label": "苍溪县",
                        "children": null
                    }
                ]
            },
            {
                "value": 73,
                "code": "510900000000",
                "label": "遂宁市",
                "children": [
                    {
                        "value": 1430,
                        "code": "510903000000",
                        "label": "船山区",
                        "children": null
                    },
                    {
                        "value": 1431,
                        "code": "510904000000",
                        "label": "安居区",
                        "children": null
                    },
                    {
                        "value": 1432,
                        "code": "510921000000",
                        "label": "蓬溪县",
                        "children": null
                    },
                    {
                        "value": 1433,
                        "code": "510922000000",
                        "label": "射洪县",
                        "children": null
                    },
                    {
                        "value": 1434,
                        "code": "510923000000",
                        "label": "大英县",
                        "children": null
                    }
                ]
            },
            {
                "value": 74,
                "code": "511000000000",
                "label": "内江市",
                "children": [
                    {
                        "value": 1161,
                        "code": "511002000000",
                        "label": "市中区",
                        "children": null
                    },
                    {
                        "value": 1162,
                        "code": "511011000000",
                        "label": "东兴区",
                        "children": null
                    },
                    {
                        "value": 1163,
                        "code": "511024000000",
                        "label": "威远县",
                        "children": null
                    },
                    {
                        "value": 1164,
                        "code": "511025000000",
                        "label": "资中县",
                        "children": null
                    },
                    {
                        "value": 1165,
                        "code": "511028000000",
                        "label": "隆昌县",
                        "children": null
                    }
                ]
            },
            {
                "value": 75,
                "code": "511100000000",
                "label": "乐山市",
                "children": [
                    {
                        "value": 1036,
                        "code": "511102000000",
                        "label": "市中区",
                        "children": null
                    },
                    {
                        "value": 1037,
                        "code": "511111000000",
                        "label": "沙湾区",
                        "children": null
                    },
                    {
                        "value": 1038,
                        "code": "511112000000",
                        "label": "五通桥区",
                        "children": null
                    },
                    {
                        "value": 1039,
                        "code": "511113000000",
                        "label": "金口河区",
                        "children": null
                    },
                    {
                        "value": 1040,
                        "code": "511123000000",
                        "label": "犍为县",
                        "children": null
                    },
                    {
                        "value": 1041,
                        "code": "511124000000",
                        "label": "井研县",
                        "children": null
                    },
                    {
                        "value": 1042,
                        "code": "511126000000",
                        "label": "夹江县",
                        "children": null
                    },
                    {
                        "value": 1043,
                        "code": "511129000000",
                        "label": "沐川县",
                        "children": null
                    },
                    {
                        "value": 1044,
                        "code": "511132000000",
                        "label": "峨边彝族自治县",
                        "children": null
                    },
                    {
                        "value": 1045,
                        "code": "511133000000",
                        "label": "马边彝族自治县",
                        "children": null
                    },
                    {
                        "value": 1046,
                        "code": "511181000000",
                        "label": "峨眉山市",
                        "children": null
                    }
                ]
            },
            {
                "value": 76,
                "code": "511300000000",
                "label": "南充市",
                "children": [
                    {
                        "value": 842,
                        "code": "511302000000",
                        "label": "顺庆区",
                        "children": null
                    },
                    {
                        "value": 843,
                        "code": "511303000000",
                        "label": "高坪区",
                        "children": null
                    },
                    {
                        "value": 844,
                        "code": "511304000000",
                        "label": "嘉陵区",
                        "children": null
                    },
                    {
                        "value": 845,
                        "code": "511321000000",
                        "label": "南部县",
                        "children": null
                    },
                    {
                        "value": 846,
                        "code": "511322000000",
                        "label": "营山县",
                        "children": null
                    },
                    {
                        "value": 847,
                        "code": "511323000000",
                        "label": "蓬安县",
                        "children": null
                    },
                    {
                        "value": 848,
                        "code": "511324000000",
                        "label": "仪陇县",
                        "children": null
                    },
                    {
                        "value": 849,
                        "code": "511325000000",
                        "label": "西充县",
                        "children": null
                    },
                    {
                        "value": 850,
                        "code": "511381000000",
                        "label": "阆中市",
                        "children": null
                    }
                ]
            },
            {
                "value": 77,
                "code": "511400000000",
                "label": "眉山市",
                "children": [
                    {
                        "value": 2823,
                        "code": "511402000000",
                        "label": "东坡区",
                        "children": null
                    },
                    {
                        "value": 2824,
                        "code": "511421000000",
                        "label": "仁寿县",
                        "children": null
                    },
                    {
                        "value": 2825,
                        "code": "511422000000",
                        "label": "彭山县",
                        "children": null
                    },
                    {
                        "value": 2826,
                        "code": "511423000000",
                        "label": "洪雅县",
                        "children": null
                    },
                    {
                        "value": 2827,
                        "code": "511424000000",
                        "label": "丹棱县",
                        "children": null
                    },
                    {
                        "value": 2828,
                        "code": "511425000000",
                        "label": "青神县",
                        "children": null
                    }
                ]
            },
            {
                "value": 78,
                "code": "511500000000",
                "label": "宜宾市",
                "children": [
                    {
                        "value": 2777,
                        "code": "511502000000",
                        "label": "翠屏区",
                        "children": null
                    },
                    {
                        "value": 2778,
                        "code": "511503000000",
                        "label": "南溪区",
                        "children": null
                    },
                    {
                        "value": 2779,
                        "code": "511521000000",
                        "label": "宜宾县",
                        "children": null
                    },
                    {
                        "value": 2780,
                        "code": "511523000000",
                        "label": "江安县",
                        "children": null
                    },
                    {
                        "value": 2781,
                        "code": "511524000000",
                        "label": "长宁县",
                        "children": null
                    },
                    {
                        "value": 2782,
                        "code": "511525000000",
                        "label": "高县",
                        "children": null
                    },
                    {
                        "value": 2783,
                        "code": "511526000000",
                        "label": "珙县",
                        "children": null
                    },
                    {
                        "value": 2784,
                        "code": "511527000000",
                        "label": "筠连县",
                        "children": null
                    },
                    {
                        "value": 2785,
                        "code": "511528000000",
                        "label": "兴文县",
                        "children": null
                    },
                    {
                        "value": 2786,
                        "code": "511529000000",
                        "label": "屏山县",
                        "children": null
                    }
                ]
            },
            {
                "value": 79,
                "code": "511600000000",
                "label": "广安市",
                "children": [
                    {
                        "value": 2637,
                        "code": "511602000000",
                        "label": "广安区",
                        "children": null
                    },
                    {
                        "value": 2638,
                        "code": "511621000000",
                        "label": "岳池县",
                        "children": null
                    },
                    {
                        "value": 2639,
                        "code": "511622000000",
                        "label": "武胜县",
                        "children": null
                    },
                    {
                        "value": 2640,
                        "code": "511623000000",
                        "label": "邻水县",
                        "children": null
                    },
                    {
                        "value": 2641,
                        "code": "511681000000",
                        "label": "华蓥市",
                        "children": null
                    }
                ]
            },
            {
                "value": 80,
                "code": "511700000000",
                "label": "达州市",
                "children": [
                    {
                        "value": 2572,
                        "code": "511702000000",
                        "label": "通川区",
                        "children": null
                    },
                    {
                        "value": 2573,
                        "code": "511721000000",
                        "label": "达县",
                        "children": null
                    },
                    {
                        "value": 2574,
                        "code": "511722000000",
                        "label": "宣汉县",
                        "children": null
                    },
                    {
                        "value": 2575,
                        "code": "511723000000",
                        "label": "开江县",
                        "children": null
                    },
                    {
                        "value": 2576,
                        "code": "511724000000",
                        "label": "大竹县",
                        "children": null
                    },
                    {
                        "value": 2577,
                        "code": "511725000000",
                        "label": "渠县",
                        "children": null
                    },
                    {
                        "value": 2578,
                        "code": "511781000000",
                        "label": "万源市",
                        "children": null
                    }
                ]
            },
            {
                "value": 81,
                "code": "511800000000",
                "label": "雅安市",
                "children": [
                    {
                        "value": 1967,
                        "code": "511802000000",
                        "label": "雨城区",
                        "children": null
                    },
                    {
                        "value": 1968,
                        "code": "511821000000",
                        "label": "名山县",
                        "children": null
                    },
                    {
                        "value": 1969,
                        "code": "511822000000",
                        "label": "荥经县",
                        "children": null
                    },
                    {
                        "value": 1970,
                        "code": "511823000000",
                        "label": "汉源县",
                        "children": null
                    },
                    {
                        "value": 1971,
                        "code": "511824000000",
                        "label": "石棉县",
                        "children": null
                    },
                    {
                        "value": 1972,
                        "code": "511825000000",
                        "label": "天全县",
                        "children": null
                    },
                    {
                        "value": 1973,
                        "code": "511826000000",
                        "label": "芦山县",
                        "children": null
                    },
                    {
                        "value": 1974,
                        "code": "511827000000",
                        "label": "宝兴县",
                        "children": null
                    }
                ]
            },
            {
                "value": 82,
                "code": "511900000000",
                "label": "巴中市",
                "children": [
                    {
                        "value": 1882,
                        "code": "511902000000",
                        "label": "巴州区",
                        "children": null
                    },
                    {
                        "value": 1883,
                        "code": "511921000000",
                        "label": "通江县",
                        "children": null
                    },
                    {
                        "value": 1884,
                        "code": "511922000000",
                        "label": "南江县",
                        "children": null
                    },
                    {
                        "value": 1885,
                        "code": "511923000000",
                        "label": "平昌县",
                        "children": null
                    }
                ]
            },
            {
                "value": 83,
                "code": "512000000000",
                "label": "资阳市",
                "children": [
                    {
                        "value": 1647,
                        "code": "512002000000",
                        "label": "雁江区",
                        "children": null
                    },
                    {
                        "value": 1648,
                        "code": "512021000000",
                        "label": "安岳县",
                        "children": null
                    },
                    {
                        "value": 1649,
                        "code": "512022000000",
                        "label": "乐至县",
                        "children": null
                    },
                    {
                        "value": 1650,
                        "code": "512081000000",
                        "label": "简阳市",
                        "children": null
                    }
                ]
            },
            {
                "value": 84,
                "code": "513200000000",
                "label": "阿坝藏族羌族自治州",
                "children": [
                    {
                        "value": 1839,
                        "code": "513221000000",
                        "label": "汶川县",
                        "children": null
                    },
                    {
                        "value": 1840,
                        "code": "513222000000",
                        "label": "理县",
                        "children": null
                    },
                    {
                        "value": 1841,
                        "code": "513223000000",
                        "label": "茂县",
                        "children": null
                    },
                    {
                        "value": 1842,
                        "code": "513224000000",
                        "label": "松潘县",
                        "children": null
                    },
                    {
                        "value": 1843,
                        "code": "513225000000",
                        "label": "九寨沟县",
                        "children": null
                    },
                    {
                        "value": 1844,
                        "code": "513226000000",
                        "label": "金川县",
                        "children": null
                    },
                    {
                        "value": 1845,
                        "code": "513227000000",
                        "label": "小金县",
                        "children": null
                    },
                    {
                        "value": 1846,
                        "code": "513228000000",
                        "label": "黑水县",
                        "children": null
                    },
                    {
                        "value": 1847,
                        "code": "513229000000",
                        "label": "马尔康县",
                        "children": null
                    },
                    {
                        "value": 1848,
                        "code": "513230000000",
                        "label": "壤塘县",
                        "children": null
                    },
                    {
                        "value": 1849,
                        "code": "513231000000",
                        "label": "阿坝县",
                        "children": null
                    },
                    {
                        "value": 1850,
                        "code": "513232000000",
                        "label": "若尔盖县",
                        "children": null
                    },
                    {
                        "value": 1851,
                        "code": "513233000000",
                        "label": "红原县",
                        "children": null
                    }
                ]
            },
            {
                "value": 85,
                "code": "513300000000",
                "label": "甘孜藏族自治州",
                "children": [
                    {
                        "value": 2650,
                        "code": "513321000000",
                        "label": "康定县",
                        "children": null
                    },
                    {
                        "value": 2651,
                        "code": "513322000000",
                        "label": "泸定县",
                        "children": null
                    },
                    {
                        "value": 2652,
                        "code": "513323000000",
                        "label": "丹巴县",
                        "children": null
                    },
                    {
                        "value": 2653,
                        "code": "513324000000",
                        "label": "九龙县",
                        "children": null
                    },
                    {
                        "value": 2654,
                        "code": "513325000000",
                        "label": "雅江县",
                        "children": null
                    },
                    {
                        "value": 2655,
                        "code": "513326000000",
                        "label": "道孚县",
                        "children": null
                    },
                    {
                        "value": 2656,
                        "code": "513327000000",
                        "label": "炉霍县",
                        "children": null
                    },
                    {
                        "value": 2657,
                        "code": "513328000000",
                        "label": "甘孜县",
                        "children": null
                    },
                    {
                        "value": 2658,
                        "code": "513329000000",
                        "label": "新龙县",
                        "children": null
                    },
                    {
                        "value": 2659,
                        "code": "513330000000",
                        "label": "德格县",
                        "children": null
                    },
                    {
                        "value": 2660,
                        "code": "513331000000",
                        "label": "白玉县",
                        "children": null
                    },
                    {
                        "value": 2661,
                        "code": "513332000000",
                        "label": "石渠县",
                        "children": null
                    },
                    {
                        "value": 2662,
                        "code": "513333000000",
                        "label": "色达县",
                        "children": null
                    },
                    {
                        "value": 2663,
                        "code": "513334000000",
                        "label": "理塘县",
                        "children": null
                    },
                    {
                        "value": 2664,
                        "code": "513335000000",
                        "label": "巴塘县",
                        "children": null
                    },
                    {
                        "value": 2665,
                        "code": "513336000000",
                        "label": "乡城县",
                        "children": null
                    },
                    {
                        "value": 2666,
                        "code": "513337000000",
                        "label": "稻城县",
                        "children": null
                    },
                    {
                        "value": 2667,
                        "code": "513338000000",
                        "label": "得荣县",
                        "children": null
                    }
                ]
            },
            {
                "value": 86,
                "code": "513400000000",
                "label": "凉山彝族自治州",
                "children": [
                    {
                        "value": 1651,
                        "code": "513401000000",
                        "label": "西昌市",
                        "children": null
                    },
                    {
                        "value": 1652,
                        "code": "513422000000",
                        "label": "木里藏族自治县",
                        "children": null
                    },
                    {
                        "value": 1653,
                        "code": "513423000000",
                        "label": "盐源县",
                        "children": null
                    },
                    {
                        "value": 1654,
                        "code": "513424000000",
                        "label": "德昌县",
                        "children": null
                    },
                    {
                        "value": 1655,
                        "code": "513425000000",
                        "label": "会理县",
                        "children": null
                    },
                    {
                        "value": 1656,
                        "code": "513426000000",
                        "label": "会东县",
                        "children": null
                    },
                    {
                        "value": 1657,
                        "code": "513427000000",
                        "label": "宁南县",
                        "children": null
                    },
                    {
                        "value": 1658,
                        "code": "513428000000",
                        "label": "普格县",
                        "children": null
                    },
                    {
                        "value": 1659,
                        "code": "513429000000",
                        "label": "布拖县",
                        "children": null
                    },
                    {
                        "value": 1660,
                        "code": "513430000000",
                        "label": "金阳县",
                        "children": null
                    },
                    {
                        "value": 1661,
                        "code": "513431000000",
                        "label": "昭觉县",
                        "children": null
                    },
                    {
                        "value": 1662,
                        "code": "513432000000",
                        "label": "喜德县",
                        "children": null
                    },
                    {
                        "value": 1663,
                        "code": "513433000000",
                        "label": "冕宁县",
                        "children": null
                    },
                    {
                        "value": 1664,
                        "code": "513434000000",
                        "label": "越西县",
                        "children": null
                    },
                    {
                        "value": 1665,
                        "code": "513435000000",
                        "label": "甘洛县",
                        "children": null
                    },
                    {
                        "value": 1666,
                        "code": "513436000000",
                        "label": "美姑县",
                        "children": null
                    },
                    {
                        "value": 1667,
                        "code": "513437000000",
                        "label": "雷波县",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "value": 25,
        "code": "520000000000",
        "label": "贵州",
        "children": [
            {
                "value": 198,
                "code": "520100000000",
                "label": "贵阳市",
                "children": [
                    {
                        "value": 698,
                        "code": "520102000000",
                        "label": "南明区",
                        "children": null
                    },
                    {
                        "value": 699,
                        "code": "520103000000",
                        "label": "云岩区",
                        "children": null
                    },
                    {
                        "value": 700,
                        "code": "520111000000",
                        "label": "花溪区",
                        "children": null
                    },
                    {
                        "value": 701,
                        "code": "520112000000",
                        "label": "乌当区",
                        "children": null
                    },
                    {
                        "value": 702,
                        "code": "520113000000",
                        "label": "白云区",
                        "children": null
                    },
                    {
                        "value": 703,
                        "code": "520114000000",
                        "label": "小河区",
                        "children": null
                    },
                    {
                        "value": 704,
                        "code": "520121000000",
                        "label": "开阳县",
                        "children": null
                    },
                    {
                        "value": 705,
                        "code": "520122000000",
                        "label": "息烽县",
                        "children": null
                    },
                    {
                        "value": 706,
                        "code": "520123000000",
                        "label": "修文县",
                        "children": null
                    },
                    {
                        "value": 707,
                        "code": "520181000000",
                        "label": "清镇市",
                        "children": null
                    }
                ]
            },
            {
                "value": 199,
                "code": "520200000000",
                "label": "六盘水市",
                "children": [
                    {
                        "value": 598,
                        "code": "520201000000",
                        "label": "钟山区",
                        "children": null
                    },
                    {
                        "value": 599,
                        "code": "520203000000",
                        "label": "六枝特区",
                        "children": null
                    },
                    {
                        "value": 600,
                        "code": "520221000000",
                        "label": "水城县",
                        "children": null
                    },
                    {
                        "value": 601,
                        "code": "520222000000",
                        "label": "盘县",
                        "children": null
                    }
                ]
            },
            {
                "value": 200,
                "code": "520300000000",
                "label": "遵义市",
                "children": [
                    {
                        "value": 1505,
                        "code": "520302000000",
                        "label": "红花岗区",
                        "children": null
                    },
                    {
                        "value": 1506,
                        "code": "520303000000",
                        "label": "汇川区",
                        "children": null
                    },
                    {
                        "value": 1507,
                        "code": "520321000000",
                        "label": "遵义县",
                        "children": null
                    },
                    {
                        "value": 1508,
                        "code": "520322000000",
                        "label": "桐梓县",
                        "children": null
                    },
                    {
                        "value": 1509,
                        "code": "520323000000",
                        "label": "绥阳县",
                        "children": null
                    },
                    {
                        "value": 1510,
                        "code": "520324000000",
                        "label": "正安县",
                        "children": null
                    },
                    {
                        "value": 1511,
                        "code": "520325000000",
                        "label": "道真仡佬族苗族自治县",
                        "children": null
                    },
                    {
                        "value": 1512,
                        "code": "520326000000",
                        "label": "务川仡佬族苗族自治县",
                        "children": null
                    },
                    {
                        "value": 1513,
                        "code": "520327000000",
                        "label": "凤冈县",
                        "children": null
                    },
                    {
                        "value": 1514,
                        "code": "520328000000",
                        "label": "湄潭县",
                        "children": null
                    },
                    {
                        "value": 1515,
                        "code": "520329000000",
                        "label": "余庆县",
                        "children": null
                    },
                    {
                        "value": 1516,
                        "code": "520330000000",
                        "label": "习水县",
                        "children": null
                    },
                    {
                        "value": 1517,
                        "code": "520381000000",
                        "label": "赤水市",
                        "children": null
                    },
                    {
                        "value": 1518,
                        "code": "520382000000",
                        "label": "仁怀市",
                        "children": null
                    }
                ]
            },
            {
                "value": 201,
                "code": "520400000000",
                "label": "安顺市",
                "children": [
                    {
                        "value": 422,
                        "code": "520402000000",
                        "label": "西秀区",
                        "children": null
                    },
                    {
                        "value": 423,
                        "code": "520421000000",
                        "label": "平坝县",
                        "children": null
                    },
                    {
                        "value": 424,
                        "code": "520422000000",
                        "label": "普定县",
                        "children": null
                    },
                    {
                        "value": 425,
                        "code": "520423000000",
                        "label": "镇宁布依族苗族自治县",
                        "children": null
                    },
                    {
                        "value": 426,
                        "code": "520424000000",
                        "label": "关岭布依族苗族自治县",
                        "children": null
                    },
                    {
                        "value": 427,
                        "code": "520425000000",
                        "label": "紫云苗族布依族自治县",
                        "children": null
                    }
                ]
            },
            {
                "value": 202,
                "code": "520500000000",
                "label": "毕节市",
                "children": [
                    {
                        "value": 1679,
                        "code": "520502000000",
                        "label": "七星关区",
                        "children": null
                    },
                    {
                        "value": 1680,
                        "code": "520521000000",
                        "label": "大方县",
                        "children": null
                    },
                    {
                        "value": 1681,
                        "code": "520522000000",
                        "label": "黔西县",
                        "children": null
                    },
                    {
                        "value": 1682,
                        "code": "520523000000",
                        "label": "金沙县",
                        "children": null
                    },
                    {
                        "value": 1683,
                        "code": "520524000000",
                        "label": "织金县",
                        "children": null
                    },
                    {
                        "value": 1684,
                        "code": "520525000000",
                        "label": "纳雍县",
                        "children": null
                    },
                    {
                        "value": 1685,
                        "code": "520526000000",
                        "label": "威宁彝族回族苗族自治县",
                        "children": null
                    },
                    {
                        "value": 1686,
                        "code": "520527000000",
                        "label": "赫章县",
                        "children": null
                    }
                ]
            },
            {
                "value": 203,
                "code": "520600000000",
                "label": "铜仁市",
                "children": [
                    {
                        "value": 3111,
                        "code": "520602000000",
                        "label": "碧江区",
                        "children": null
                    },
                    {
                        "value": 3112,
                        "code": "520603000000",
                        "label": "万山区",
                        "children": null
                    },
                    {
                        "value": 3113,
                        "code": "520621000000",
                        "label": "江口县",
                        "children": null
                    },
                    {
                        "value": 3114,
                        "code": "520622000000",
                        "label": "玉屏侗族自治县",
                        "children": null
                    },
                    {
                        "value": 3115,
                        "code": "520623000000",
                        "label": "石阡县",
                        "children": null
                    },
                    {
                        "value": 3116,
                        "code": "520624000000",
                        "label": "思南县",
                        "children": null
                    },
                    {
                        "value": 3117,
                        "code": "520625000000",
                        "label": "印江土家族苗族自治县",
                        "children": null
                    },
                    {
                        "value": 3118,
                        "code": "520626000000",
                        "label": "德江县",
                        "children": null
                    },
                    {
                        "value": 3119,
                        "code": "520627000000",
                        "label": "沿河土家族自治县",
                        "children": null
                    },
                    {
                        "value": 3120,
                        "code": "520628000000",
                        "label": "松桃苗族自治县",
                        "children": null
                    }
                ]
            },
            {
                "value": 204,
                "code": "522300000000",
                "label": "黔西南布依族苗族自治州",
                "children": [
                    {
                        "value": 2223,
                        "code": "522301000000",
                        "label": "兴义市",
                        "children": null
                    },
                    {
                        "value": 2224,
                        "code": "522322000000",
                        "label": "兴仁县",
                        "children": null
                    },
                    {
                        "value": 2225,
                        "code": "522323000000",
                        "label": "普安县",
                        "children": null
                    },
                    {
                        "value": 2226,
                        "code": "522324000000",
                        "label": "晴隆县",
                        "children": null
                    },
                    {
                        "value": 2227,
                        "code": "522325000000",
                        "label": "贞丰县",
                        "children": null
                    },
                    {
                        "value": 2228,
                        "code": "522326000000",
                        "label": "望谟县",
                        "children": null
                    },
                    {
                        "value": 2229,
                        "code": "522327000000",
                        "label": "册亨县",
                        "children": null
                    },
                    {
                        "value": 2230,
                        "code": "522328000000",
                        "label": "安龙县",
                        "children": null
                    }
                ]
            },
            {
                "value": 205,
                "code": "522600000000",
                "label": "黔东南苗族侗族自治州",
                "children": [
                    {
                        "value": 1951,
                        "code": "522601000000",
                        "label": "凯里市",
                        "children": null
                    },
                    {
                        "value": 1952,
                        "code": "522622000000",
                        "label": "黄平县",
                        "children": null
                    },
                    {
                        "value": 1953,
                        "code": "522623000000",
                        "label": "施秉县",
                        "children": null
                    },
                    {
                        "value": 1954,
                        "code": "522624000000",
                        "label": "三穗县",
                        "children": null
                    },
                    {
                        "value": 1955,
                        "code": "522625000000",
                        "label": "镇远县",
                        "children": null
                    },
                    {
                        "value": 1956,
                        "code": "522626000000",
                        "label": "岑巩县",
                        "children": null
                    },
                    {
                        "value": 1957,
                        "code": "522627000000",
                        "label": "天柱县",
                        "children": null
                    },
                    {
                        "value": 1958,
                        "code": "522628000000",
                        "label": "锦屏县",
                        "children": null
                    },
                    {
                        "value": 1959,
                        "code": "522629000000",
                        "label": "剑河县",
                        "children": null
                    },
                    {
                        "value": 1960,
                        "code": "522630000000",
                        "label": "台江县",
                        "children": null
                    },
                    {
                        "value": 1961,
                        "code": "522631000000",
                        "label": "黎平县",
                        "children": null
                    },
                    {
                        "value": 1962,
                        "code": "522632000000",
                        "label": "榕江县",
                        "children": null
                    },
                    {
                        "value": 1963,
                        "code": "522633000000",
                        "label": "从江县",
                        "children": null
                    },
                    {
                        "value": 1964,
                        "code": "522634000000",
                        "label": "雷山县",
                        "children": null
                    },
                    {
                        "value": 1965,
                        "code": "522635000000",
                        "label": "麻江县",
                        "children": null
                    },
                    {
                        "value": 1966,
                        "code": "522636000000",
                        "label": "丹寨县",
                        "children": null
                    }
                ]
            },
            {
                "value": 206,
                "code": "522700000000",
                "label": "黔南布依族苗族自治州",
                "children": [
                    {
                        "value": 863,
                        "code": "522701000000",
                        "label": "都匀市",
                        "children": null
                    },
                    {
                        "value": 864,
                        "code": "522702000000",
                        "label": "福泉市",
                        "children": null
                    },
                    {
                        "value": 865,
                        "code": "522722000000",
                        "label": "荔波县",
                        "children": null
                    },
                    {
                        "value": 866,
                        "code": "522723000000",
                        "label": "贵定县",
                        "children": null
                    },
                    {
                        "value": 867,
                        "code": "522725000000",
                        "label": "瓮安县",
                        "children": null
                    },
                    {
                        "value": 868,
                        "code": "522726000000",
                        "label": "独山县",
                        "children": null
                    },
                    {
                        "value": 869,
                        "code": "522727000000",
                        "label": "平塘县",
                        "children": null
                    },
                    {
                        "value": 870,
                        "code": "522728000000",
                        "label": "罗甸县",
                        "children": null
                    },
                    {
                        "value": 871,
                        "code": "522729000000",
                        "label": "长顺县",
                        "children": null
                    },
                    {
                        "value": 872,
                        "code": "522730000000",
                        "label": "龙里县",
                        "children": null
                    },
                    {
                        "value": 873,
                        "code": "522731000000",
                        "label": "惠水县",
                        "children": null
                    },
                    {
                        "value": 874,
                        "code": "522732000000",
                        "label": "三都水族自治县",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "value": 26,
        "code": "530000000000",
        "label": "云南",
        "children": [
            {
                "value": 130,
                "code": "530100000000",
                "label": "昆明市",
                "children": [
                    {
                        "value": 1626,
                        "code": "530102000000",
                        "label": "五华区",
                        "children": null
                    },
                    {
                        "value": 1627,
                        "code": "530103000000",
                        "label": "盘龙区",
                        "children": null
                    },
                    {
                        "value": 1628,
                        "code": "530111000000",
                        "label": "官渡区",
                        "children": null
                    },
                    {
                        "value": 1629,
                        "code": "530112000000",
                        "label": "西山区",
                        "children": null
                    },
                    {
                        "value": 1630,
                        "code": "530113000000",
                        "label": "东川区",
                        "children": null
                    },
                    {
                        "value": 1631,
                        "code": "530114000000",
                        "label": "呈贡区",
                        "children": null
                    },
                    {
                        "value": 1632,
                        "code": "530122000000",
                        "label": "晋宁县",
                        "children": null
                    },
                    {
                        "value": 1633,
                        "code": "530124000000",
                        "label": "富民县",
                        "children": null
                    },
                    {
                        "value": 1634,
                        "code": "530125000000",
                        "label": "宜良县",
                        "children": null
                    },
                    {
                        "value": 1635,
                        "code": "530126000000",
                        "label": "石林彝族自治县",
                        "children": null
                    },
                    {
                        "value": 1636,
                        "code": "530127000000",
                        "label": "嵩明县",
                        "children": null
                    },
                    {
                        "value": 1637,
                        "code": "530128000000",
                        "label": "禄劝彝族苗族自治县",
                        "children": null
                    },
                    {
                        "value": 1638,
                        "code": "530129000000",
                        "label": "寻甸回族彝族自治县",
                        "children": null
                    },
                    {
                        "value": 1639,
                        "code": "530181000000",
                        "label": "安宁市",
                        "children": null
                    }
                ]
            },
            {
                "value": 131,
                "code": "530300000000",
                "label": "曲靖市",
                "children": [
                    {
                        "value": 1404,
                        "code": "530302000000",
                        "label": "麒麟区",
                        "children": null
                    },
                    {
                        "value": 1405,
                        "code": "530321000000",
                        "label": "马龙县",
                        "children": null
                    },
                    {
                        "value": 1406,
                        "code": "530322000000",
                        "label": "陆良县",
                        "children": null
                    },
                    {
                        "value": 1407,
                        "code": "530323000000",
                        "label": "师宗县",
                        "children": null
                    },
                    {
                        "value": 1408,
                        "code": "530324000000",
                        "label": "罗平县",
                        "children": null
                    },
                    {
                        "value": 1409,
                        "code": "530325000000",
                        "label": "富源县",
                        "children": null
                    },
                    {
                        "value": 1410,
                        "code": "530326000000",
                        "label": "会泽县",
                        "children": null
                    },
                    {
                        "value": 1411,
                        "code": "530328000000",
                        "label": "沾益县",
                        "children": null
                    },
                    {
                        "value": 1412,
                        "code": "530381000000",
                        "label": "宣威市",
                        "children": null
                    }
                ]
            },
            {
                "value": 132,
                "code": "530400000000",
                "label": "玉溪市",
                "children": [
                    {
                        "value": 1315,
                        "code": "530402000000",
                        "label": "红塔区",
                        "children": null
                    },
                    {
                        "value": 1316,
                        "code": "530421000000",
                        "label": "江川县",
                        "children": null
                    },
                    {
                        "value": 1317,
                        "code": "530422000000",
                        "label": "澄江县",
                        "children": null
                    },
                    {
                        "value": 1318,
                        "code": "530423000000",
                        "label": "通海县",
                        "children": null
                    },
                    {
                        "value": 1319,
                        "code": "530424000000",
                        "label": "华宁县",
                        "children": null
                    },
                    {
                        "value": 1320,
                        "code": "530425000000",
                        "label": "易门县",
                        "children": null
                    },
                    {
                        "value": 1321,
                        "code": "530426000000",
                        "label": "峨山彝族自治县",
                        "children": null
                    },
                    {
                        "value": 1322,
                        "code": "530427000000",
                        "label": "新平彝族傣族自治县",
                        "children": null
                    },
                    {
                        "value": 1323,
                        "code": "530428000000",
                        "label": "元江哈尼族彝族傣族自治县",
                        "children": null
                    }
                ]
            },
            {
                "value": 133,
                "code": "530500000000",
                "label": "保山市",
                "children": [
                    {
                        "value": 2321,
                        "code": "530502000000",
                        "label": "隆阳区",
                        "children": null
                    },
                    {
                        "value": 2322,
                        "code": "530521000000",
                        "label": "施甸县",
                        "children": null
                    },
                    {
                        "value": 2323,
                        "code": "530522000000",
                        "label": "腾冲县",
                        "children": null
                    },
                    {
                        "value": 2324,
                        "code": "530523000000",
                        "label": "龙陵县",
                        "children": null
                    },
                    {
                        "value": 2325,
                        "code": "530524000000",
                        "label": "昌宁县",
                        "children": null
                    }
                ]
            },
            {
                "value": 134,
                "code": "530600000000",
                "label": "昭通市",
                "children": [
                    {
                        "value": 1096,
                        "code": "530602000000",
                        "label": "昭阳区",
                        "children": null
                    },
                    {
                        "value": 1097,
                        "code": "530621000000",
                        "label": "鲁甸县",
                        "children": null
                    },
                    {
                        "value": 1098,
                        "code": "530622000000",
                        "label": "巧家县",
                        "children": null
                    },
                    {
                        "value": 1099,
                        "code": "530623000000",
                        "label": "盐津县",
                        "children": null
                    },
                    {
                        "value": 1100,
                        "code": "530624000000",
                        "label": "大关县",
                        "children": null
                    },
                    {
                        "value": 1101,
                        "code": "530625000000",
                        "label": "永善县",
                        "children": null
                    },
                    {
                        "value": 1102,
                        "code": "530626000000",
                        "label": "绥江县",
                        "children": null
                    },
                    {
                        "value": 1103,
                        "code": "530627000000",
                        "label": "镇雄县",
                        "children": null
                    },
                    {
                        "value": 1104,
                        "code": "530628000000",
                        "label": "彝良县",
                        "children": null
                    },
                    {
                        "value": 1105,
                        "code": "530629000000",
                        "label": "威信县",
                        "children": null
                    },
                    {
                        "value": 1106,
                        "code": "530630000000",
                        "label": "水富县",
                        "children": null
                    }
                ]
            },
            {
                "value": 135,
                "code": "530700000000",
                "label": "丽江市",
                "children": [
                    {
                        "value": 882,
                        "code": "530702000000",
                        "label": "古城区",
                        "children": null
                    },
                    {
                        "value": 883,
                        "code": "530721000000",
                        "label": "玉龙纳西族自治县",
                        "children": null
                    },
                    {
                        "value": 884,
                        "code": "530722000000",
                        "label": "永胜县",
                        "children": null
                    },
                    {
                        "value": 885,
                        "code": "530723000000",
                        "label": "华坪县",
                        "children": null
                    },
                    {
                        "value": 886,
                        "code": "530724000000",
                        "label": "宁蒗彝族自治县",
                        "children": null
                    }
                ]
            },
            {
                "value": 136,
                "code": "530800000000",
                "label": "普洱市",
                "children": [
                    {
                        "value": 474,
                        "code": "530802000000",
                        "label": "思茅区",
                        "children": null
                    },
                    {
                        "value": 475,
                        "code": "530821000000",
                        "label": "宁洱哈尼族彝族自治县",
                        "children": null
                    },
                    {
                        "value": 476,
                        "code": "530822000000",
                        "label": "墨江哈尼族自治县",
                        "children": null
                    },
                    {
                        "value": 477,
                        "code": "530823000000",
                        "label": "景东彝族自治县",
                        "children": null
                    },
                    {
                        "value": 478,
                        "code": "530824000000",
                        "label": "景谷傣族彝族自治县",
                        "children": null
                    },
                    {
                        "value": 479,
                        "code": "530825000000",
                        "label": "镇沅彝族哈尼族拉祜族自治县",
                        "children": null
                    },
                    {
                        "value": 480,
                        "code": "530826000000",
                        "label": "江城哈尼族彝族自治县",
                        "children": null
                    },
                    {
                        "value": 481,
                        "code": "530827000000",
                        "label": "孟连傣族拉祜族佤族自治县",
                        "children": null
                    },
                    {
                        "value": 482,
                        "code": "530828000000",
                        "label": "澜沧拉祜族自治县",
                        "children": null
                    },
                    {
                        "value": 483,
                        "code": "530829000000",
                        "label": "西盟佤族自治县",
                        "children": null
                    }
                ]
            },
            {
                "value": 137,
                "code": "530900000000",
                "label": "临沧市",
                "children": [
                    {
                        "value": 383,
                        "code": "530902000000",
                        "label": "临翔区",
                        "children": null
                    },
                    {
                        "value": 384,
                        "code": "530921000000",
                        "label": "凤庆县",
                        "children": null
                    },
                    {
                        "value": 385,
                        "code": "530922000000",
                        "label": "云县",
                        "children": null
                    },
                    {
                        "value": 386,
                        "code": "530923000000",
                        "label": "永德县",
                        "children": null
                    },
                    {
                        "value": 387,
                        "code": "530924000000",
                        "label": "镇康县",
                        "children": null
                    },
                    {
                        "value": 388,
                        "code": "530925000000",
                        "label": "双江拉祜族佤族布朗族傣族自治县",
                        "children": null
                    },
                    {
                        "value": 389,
                        "code": "530926000000",
                        "label": "耿马傣族佤族自治县",
                        "children": null
                    },
                    {
                        "value": 390,
                        "code": "530927000000",
                        "label": "沧源佤族自治县",
                        "children": null
                    }
                ]
            },
            {
                "value": 138,
                "code": "532300000000",
                "label": "楚雄彝族自治州",
                "children": [
                    {
                        "value": 3128,
                        "code": "532301000000",
                        "label": "楚雄市",
                        "children": null
                    },
                    {
                        "value": 3129,
                        "code": "532322000000",
                        "label": "双柏县",
                        "children": null
                    },
                    {
                        "value": 3130,
                        "code": "532323000000",
                        "label": "牟定县",
                        "children": null
                    },
                    {
                        "value": 3131,
                        "code": "532324000000",
                        "label": "南华县",
                        "children": null
                    },
                    {
                        "value": 3132,
                        "code": "532325000000",
                        "label": "姚安县",
                        "children": null
                    },
                    {
                        "value": 3133,
                        "code": "532326000000",
                        "label": "大姚县",
                        "children": null
                    },
                    {
                        "value": 3134,
                        "code": "532327000000",
                        "label": "永仁县",
                        "children": null
                    },
                    {
                        "value": 3135,
                        "code": "532328000000",
                        "label": "元谋县",
                        "children": null
                    },
                    {
                        "value": 3136,
                        "code": "532329000000",
                        "label": "武定县",
                        "children": null
                    },
                    {
                        "value": 3137,
                        "code": "532331000000",
                        "label": "禄丰县",
                        "children": null
                    }
                ]
            },
            {
                "value": 139,
                "code": "532500000000",
                "label": "红河哈尼族彝族自治州",
                "children": [
                    {
                        "value": 2970,
                        "code": "532501000000",
                        "label": "个旧市",
                        "children": null
                    },
                    {
                        "value": 2971,
                        "code": "532502000000",
                        "label": "开远市",
                        "children": null
                    },
                    {
                        "value": 2972,
                        "code": "532503000000",
                        "label": "蒙自市",
                        "children": null
                    },
                    {
                        "value": 2973,
                        "code": "532523000000",
                        "label": "屏边苗族自治县",
                        "children": null
                    },
                    {
                        "value": 2974,
                        "code": "532524000000",
                        "label": "建水县",
                        "children": null
                    },
                    {
                        "value": 2975,
                        "code": "532525000000",
                        "label": "石屏县",
                        "children": null
                    },
                    {
                        "value": 2976,
                        "code": "532526000000",
                        "label": "弥勒县",
                        "children": null
                    },
                    {
                        "value": 2977,
                        "code": "532527000000",
                        "label": "泸西县",
                        "children": null
                    },
                    {
                        "value": 2978,
                        "code": "532528000000",
                        "label": "元阳县",
                        "children": null
                    },
                    {
                        "value": 2979,
                        "code": "532529000000",
                        "label": "红河县",
                        "children": null
                    },
                    {
                        "value": 2980,
                        "code": "532530000000",
                        "label": "金平苗族瑶族傣族自治县",
                        "children": null
                    },
                    {
                        "value": 2981,
                        "code": "532531000000",
                        "label": "绿春县",
                        "children": null
                    },
                    {
                        "value": 2982,
                        "code": "532532000000",
                        "label": "河口瑶族自治县",
                        "children": null
                    }
                ]
            },
            {
                "value": 140,
                "code": "532600000000",
                "label": "文山壮族苗族自治州",
                "children": [
                    {
                        "value": 2889,
                        "code": "532601000000",
                        "label": "文山市",
                        "children": null
                    },
                    {
                        "value": 2890,
                        "code": "532622000000",
                        "label": "砚山县",
                        "children": null
                    },
                    {
                        "value": 2891,
                        "code": "532623000000",
                        "label": "西畴县",
                        "children": null
                    },
                    {
                        "value": 2892,
                        "code": "532624000000",
                        "label": "麻栗坡县",
                        "children": null
                    },
                    {
                        "value": 2893,
                        "code": "532625000000",
                        "label": "马关县",
                        "children": null
                    },
                    {
                        "value": 2894,
                        "code": "532626000000",
                        "label": "丘北县",
                        "children": null
                    },
                    {
                        "value": 2895,
                        "code": "532627000000",
                        "label": "广南县",
                        "children": null
                    },
                    {
                        "value": 2896,
                        "code": "532628000000",
                        "label": "富宁县",
                        "children": null
                    }
                ]
            },
            {
                "value": 141,
                "code": "532800000000",
                "label": "西双版纳傣族自治州",
                "children": [
                    {
                        "value": 2155,
                        "code": "532801000000",
                        "label": "景洪市",
                        "children": null
                    },
                    {
                        "value": 2156,
                        "code": "532822000000",
                        "label": "勐海县",
                        "children": null
                    },
                    {
                        "value": 2157,
                        "code": "532823000000",
                        "label": "勐腊县",
                        "children": null
                    }
                ]
            },
            {
                "value": 142,
                "code": "532900000000",
                "label": "大理白族自治州",
                "children": [
                    {
                        "value": 2026,
                        "code": "532901000000",
                        "label": "大理市",
                        "children": null
                    },
                    {
                        "value": 2027,
                        "code": "532922000000",
                        "label": "漾濞彝族自治县",
                        "children": null
                    },
                    {
                        "value": 2028,
                        "code": "532923000000",
                        "label": "祥云县",
                        "children": null
                    },
                    {
                        "value": 2029,
                        "code": "532924000000",
                        "label": "宾川县",
                        "children": null
                    },
                    {
                        "value": 2030,
                        "code": "532925000000",
                        "label": "弥渡县",
                        "children": null
                    },
                    {
                        "value": 2031,
                        "code": "532926000000",
                        "label": "南涧彝族自治县",
                        "children": null
                    },
                    {
                        "value": 2032,
                        "code": "532927000000",
                        "label": "巍山彝族回族自治县",
                        "children": null
                    },
                    {
                        "value": 2033,
                        "code": "532928000000",
                        "label": "永平县",
                        "children": null
                    },
                    {
                        "value": 2034,
                        "code": "532929000000",
                        "label": "云龙县",
                        "children": null
                    },
                    {
                        "value": 2035,
                        "code": "532930000000",
                        "label": "洱源县",
                        "children": null
                    },
                    {
                        "value": 2036,
                        "code": "532931000000",
                        "label": "剑川县",
                        "children": null
                    },
                    {
                        "value": 2037,
                        "code": "532932000000",
                        "label": "鹤庆县",
                        "children": null
                    }
                ]
            },
            {
                "value": 143,
                "code": "533100000000",
                "label": "德宏傣族景颇族自治州",
                "children": [
                    {
                        "value": 764,
                        "code": "533102000000",
                        "label": "瑞丽市",
                        "children": null
                    },
                    {
                        "value": 765,
                        "code": "533103000000",
                        "label": "芒市",
                        "children": null
                    },
                    {
                        "value": 766,
                        "code": "533122000000",
                        "label": "梁河县",
                        "children": null
                    },
                    {
                        "value": 767,
                        "code": "533123000000",
                        "label": "盈江县",
                        "children": null
                    },
                    {
                        "value": 768,
                        "code": "533124000000",
                        "label": "陇川县",
                        "children": null
                    }
                ]
            },
            {
                "value": 144,
                "code": "533300000000",
                "label": "怒江傈僳族自治州",
                "children": [
                    {
                        "value": 620,
                        "code": "533321000000",
                        "label": "泸水县",
                        "children": null
                    },
                    {
                        "value": 621,
                        "code": "533323000000",
                        "label": "福贡县",
                        "children": null
                    },
                    {
                        "value": 622,
                        "code": "533324000000",
                        "label": "贡山独龙族怒族自治县",
                        "children": null
                    },
                    {
                        "value": 623,
                        "code": "533325000000",
                        "label": "兰坪白族普米族自治县",
                        "children": null
                    }
                ]
            },
            {
                "value": 145,
                "code": "533400000000",
                "label": "迪庆藏族自治州",
                "children": [
                    {
                        "value": 566,
                        "code": "533421000000",
                        "label": "香格里拉县",
                        "children": null
                    },
                    {
                        "value": 567,
                        "code": "533422000000",
                        "label": "德钦县",
                        "children": null
                    },
                    {
                        "value": 568,
                        "code": "533423000000",
                        "label": "维西傈僳族自治县",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "value": 27,
        "code": "540000000000",
        "label": "西藏",
        "children": [
            {
                "value": 223,
                "code": "540100000000",
                "label": "拉萨市",
                "children": [
                    {
                        "value": 2548,
                        "code": "540102000000",
                        "label": "城关区",
                        "children": null
                    },
                    {
                        "value": 2549,
                        "code": "540121000000",
                        "label": "林周县",
                        "children": null
                    },
                    {
                        "value": 2550,
                        "code": "540122000000",
                        "label": "当雄县",
                        "children": null
                    },
                    {
                        "value": 2551,
                        "code": "540123000000",
                        "label": "尼木县",
                        "children": null
                    },
                    {
                        "value": 2552,
                        "code": "540124000000",
                        "label": "曲水县",
                        "children": null
                    },
                    {
                        "value": 2553,
                        "code": "540125000000",
                        "label": "堆龙德庆县",
                        "children": null
                    },
                    {
                        "value": 2554,
                        "code": "540126000000",
                        "label": "达孜县",
                        "children": null
                    },
                    {
                        "value": 2555,
                        "code": "540127000000",
                        "label": "墨竹工卡县",
                        "children": null
                    }
                ]
            },
            {
                "value": 224,
                "code": "542100000000",
                "label": "昌都地区",
                "children": [
                    {
                        "value": 1324,
                        "code": "542121000000",
                        "label": "昌都县",
                        "children": null
                    },
                    {
                        "value": 1325,
                        "code": "542122000000",
                        "label": "江达县",
                        "children": null
                    },
                    {
                        "value": 1326,
                        "code": "542123000000",
                        "label": "贡觉县",
                        "children": null
                    },
                    {
                        "value": 1327,
                        "code": "542124000000",
                        "label": "类乌齐县",
                        "children": null
                    },
                    {
                        "value": 1328,
                        "code": "542125000000",
                        "label": "丁青县",
                        "children": null
                    },
                    {
                        "value": 1329,
                        "code": "542126000000",
                        "label": "察雅县",
                        "children": null
                    },
                    {
                        "value": 1330,
                        "code": "542127000000",
                        "label": "八宿县",
                        "children": null
                    },
                    {
                        "value": 1331,
                        "code": "542128000000",
                        "label": "左贡县",
                        "children": null
                    },
                    {
                        "value": 1332,
                        "code": "542129000000",
                        "label": "芒康县",
                        "children": null
                    },
                    {
                        "value": 1333,
                        "code": "542132000000",
                        "label": "洛隆县",
                        "children": null
                    },
                    {
                        "value": 1334,
                        "code": "542133000000",
                        "label": "边坝县",
                        "children": null
                    }
                ]
            },
            {
                "value": 225,
                "code": "542200000000",
                "label": "山南地区",
                "children": [
                    {
                        "value": 1222,
                        "code": "542221000000",
                        "label": "乃东县",
                        "children": null
                    },
                    {
                        "value": 1223,
                        "code": "542222000000",
                        "label": "扎囊县",
                        "children": null
                    },
                    {
                        "value": 1224,
                        "code": "542223000000",
                        "label": "贡嘎县",
                        "children": null
                    },
                    {
                        "value": 1225,
                        "code": "542224000000",
                        "label": "桑日县",
                        "children": null
                    },
                    {
                        "value": 1226,
                        "code": "542225000000",
                        "label": "琼结县",
                        "children": null
                    },
                    {
                        "value": 1227,
                        "code": "542226000000",
                        "label": "曲松县",
                        "children": null
                    },
                    {
                        "value": 1228,
                        "code": "542227000000",
                        "label": "措美县",
                        "children": null
                    },
                    {
                        "value": 1229,
                        "code": "542228000000",
                        "label": "洛扎县",
                        "children": null
                    },
                    {
                        "value": 1230,
                        "code": "542229000000",
                        "label": "加查县",
                        "children": null
                    },
                    {
                        "value": 1231,
                        "code": "542231000000",
                        "label": "隆子县",
                        "children": null
                    },
                    {
                        "value": 1232,
                        "code": "542232000000",
                        "label": "错那县",
                        "children": null
                    },
                    {
                        "value": 1233,
                        "code": "542233000000",
                        "label": "浪卡子县",
                        "children": null
                    }
                ]
            },
            {
                "value": 226,
                "code": "542300000000",
                "label": "日喀则地区",
                "children": [
                    {
                        "value": 1107,
                        "code": "542301000000",
                        "label": "日喀则市",
                        "children": null
                    },
                    {
                        "value": 1108,
                        "code": "542322000000",
                        "label": "南木林县",
                        "children": null
                    },
                    {
                        "value": 1109,
                        "code": "542323000000",
                        "label": "江孜县",
                        "children": null
                    },
                    {
                        "value": 1110,
                        "code": "542324000000",
                        "label": "定日县",
                        "children": null
                    },
                    {
                        "value": 1111,
                        "code": "542325000000",
                        "label": "萨迦县",
                        "children": null
                    },
                    {
                        "value": 1112,
                        "code": "542326000000",
                        "label": "拉孜县",
                        "children": null
                    },
                    {
                        "value": 1113,
                        "code": "542327000000",
                        "label": "昂仁县",
                        "children": null
                    },
                    {
                        "value": 1114,
                        "code": "542328000000",
                        "label": "谢通门县",
                        "children": null
                    },
                    {
                        "value": 1115,
                        "code": "542329000000",
                        "label": "白朗县",
                        "children": null
                    },
                    {
                        "value": 1116,
                        "code": "542330000000",
                        "label": "仁布县",
                        "children": null
                    },
                    {
                        "value": 1117,
                        "code": "542331000000",
                        "label": "康马县",
                        "children": null
                    },
                    {
                        "value": 1118,
                        "code": "542332000000",
                        "label": "定结县",
                        "children": null
                    },
                    {
                        "value": 1119,
                        "code": "542333000000",
                        "label": "仲巴县",
                        "children": null
                    },
                    {
                        "value": 1120,
                        "code": "542334000000",
                        "label": "亚东县",
                        "children": null
                    },
                    {
                        "value": 1121,
                        "code": "542335000000",
                        "label": "吉隆县",
                        "children": null
                    },
                    {
                        "value": 1122,
                        "code": "542336000000",
                        "label": "聂拉木县",
                        "children": null
                    },
                    {
                        "value": 1123,
                        "code": "542337000000",
                        "label": "萨嘎县",
                        "children": null
                    },
                    {
                        "value": 1124,
                        "code": "542338000000",
                        "label": "岗巴县",
                        "children": null
                    }
                ]
            },
            {
                "value": 227,
                "code": "542400000000",
                "label": "那曲地区",
                "children": [
                    {
                        "value": 979,
                        "code": "542421000000",
                        "label": "那曲县",
                        "children": null
                    },
                    {
                        "value": 980,
                        "code": "542422000000",
                        "label": "嘉黎县",
                        "children": null
                    },
                    {
                        "value": 981,
                        "code": "542423000000",
                        "label": "比如县",
                        "children": null
                    },
                    {
                        "value": 982,
                        "code": "542424000000",
                        "label": "聂荣县",
                        "children": null
                    },
                    {
                        "value": 983,
                        "code": "542425000000",
                        "label": "安多县",
                        "children": null
                    },
                    {
                        "value": 984,
                        "code": "542426000000",
                        "label": "申扎县",
                        "children": null
                    },
                    {
                        "value": 985,
                        "code": "542427000000",
                        "label": "索县",
                        "children": null
                    },
                    {
                        "value": 986,
                        "code": "542428000000",
                        "label": "班戈县",
                        "children": null
                    },
                    {
                        "value": 987,
                        "code": "542429000000",
                        "label": "巴青县",
                        "children": null
                    },
                    {
                        "value": 988,
                        "code": "542430000000",
                        "label": "尼玛县",
                        "children": null
                    }
                ]
            },
            {
                "value": 228,
                "code": "542500000000",
                "label": "阿里地区",
                "children": [
                    {
                        "value": 875,
                        "code": "542521000000",
                        "label": "普兰县",
                        "children": null
                    },
                    {
                        "value": 876,
                        "code": "542522000000",
                        "label": "札达县",
                        "children": null
                    },
                    {
                        "value": 877,
                        "code": "542523000000",
                        "label": "噶尔县",
                        "children": null
                    },
                    {
                        "value": 878,
                        "code": "542524000000",
                        "label": "日土县",
                        "children": null
                    },
                    {
                        "value": 879,
                        "code": "542525000000",
                        "label": "革吉县",
                        "children": null
                    },
                    {
                        "value": 880,
                        "code": "542526000000",
                        "label": "改则县",
                        "children": null
                    },
                    {
                        "value": 881,
                        "code": "542527000000",
                        "label": "措勤县",
                        "children": null
                    }
                ]
            },
            {
                "value": 229,
                "code": "542600000000",
                "label": "林芝地区",
                "children": [
                    {
                        "value": 787,
                        "code": "542621000000",
                        "label": "林芝县",
                        "children": null
                    },
                    {
                        "value": 788,
                        "code": "542622000000",
                        "label": "工布江达县",
                        "children": null
                    },
                    {
                        "value": 789,
                        "code": "542623000000",
                        "label": "米林县",
                        "children": null
                    },
                    {
                        "value": 790,
                        "code": "542624000000",
                        "label": "墨脱县",
                        "children": null
                    },
                    {
                        "value": 791,
                        "code": "542625000000",
                        "label": "波密县",
                        "children": null
                    },
                    {
                        "value": 792,
                        "code": "542626000000",
                        "label": "察隅县",
                        "children": null
                    },
                    {
                        "value": 793,
                        "code": "542627000000",
                        "label": "朗县",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "value": 28,
        "code": "610000000000",
        "label": "陕西",
        "children": [
            {
                "value": 47,
                "code": "610100000000",
                "label": "西安市",
                "children": [
                    {
                        "value": 2754,
                        "code": "610102000000",
                        "label": "新城区",
                        "children": null
                    },
                    {
                        "value": 2755,
                        "code": "610103000000",
                        "label": "碑林区",
                        "children": null
                    },
                    {
                        "value": 2756,
                        "code": "610104000000",
                        "label": "莲湖区",
                        "children": null
                    },
                    {
                        "value": 2757,
                        "code": "610111000000",
                        "label": "灞桥区",
                        "children": null
                    },
                    {
                        "value": 2758,
                        "code": "610112000000",
                        "label": "未央区",
                        "children": null
                    },
                    {
                        "value": 2759,
                        "code": "610113000000",
                        "label": "雁塔区",
                        "children": null
                    },
                    {
                        "value": 2760,
                        "code": "610114000000",
                        "label": "阎良区",
                        "children": null
                    },
                    {
                        "value": 2761,
                        "code": "610115000000",
                        "label": "临潼区",
                        "children": null
                    },
                    {
                        "value": 2762,
                        "code": "610116000000",
                        "label": "长安区",
                        "children": null
                    },
                    {
                        "value": 2763,
                        "code": "610122000000",
                        "label": "蓝田县",
                        "children": null
                    },
                    {
                        "value": 2764,
                        "code": "610124000000",
                        "label": "周至县",
                        "children": null
                    },
                    {
                        "value": 2765,
                        "code": "610125000000",
                        "label": "户县",
                        "children": null
                    },
                    {
                        "value": 2766,
                        "code": "610126000000",
                        "label": "高陵县",
                        "children": null
                    }
                ]
            },
            {
                "value": 48,
                "code": "610200000000",
                "label": "铜川市",
                "children": [
                    {
                        "value": 2623,
                        "code": "610202000000",
                        "label": "王益区",
                        "children": null
                    },
                    {
                        "value": 2624,
                        "code": "610203000000",
                        "label": "印台区",
                        "children": null
                    },
                    {
                        "value": 2625,
                        "code": "610204000000",
                        "label": "耀州区",
                        "children": null
                    },
                    {
                        "value": 2626,
                        "code": "610222000000",
                        "label": "宜君县",
                        "children": null
                    }
                ]
            },
            {
                "value": 49,
                "code": "610300000000",
                "label": "宝鸡市",
                "children": [
                    {
                        "value": 2333,
                        "code": "610302000000",
                        "label": "渭滨区",
                        "children": null
                    },
                    {
                        "value": 2334,
                        "code": "610303000000",
                        "label": "金台区",
                        "children": null
                    },
                    {
                        "value": 2335,
                        "code": "610304000000",
                        "label": "陈仓区",
                        "children": null
                    },
                    {
                        "value": 2336,
                        "code": "610322000000",
                        "label": "凤翔县",
                        "children": null
                    },
                    {
                        "value": 2337,
                        "code": "610323000000",
                        "label": "岐山县",
                        "children": null
                    },
                    {
                        "value": 2338,
                        "code": "610324000000",
                        "label": "扶风县",
                        "children": null
                    },
                    {
                        "value": 2339,
                        "code": "610326000000",
                        "label": "眉县",
                        "children": null
                    },
                    {
                        "value": 2340,
                        "code": "610327000000",
                        "label": "陇县",
                        "children": null
                    },
                    {
                        "value": 2341,
                        "code": "610328000000",
                        "label": "千阳县",
                        "children": null
                    },
                    {
                        "value": 2342,
                        "code": "610329000000",
                        "label": "麟游县",
                        "children": null
                    },
                    {
                        "value": 2343,
                        "code": "610330000000",
                        "label": "凤县",
                        "children": null
                    },
                    {
                        "value": 2344,
                        "code": "610331000000",
                        "label": "太白县",
                        "children": null
                    }
                ]
            },
            {
                "value": 50,
                "code": "610400000000",
                "label": "咸阳市",
                "children": [
                    {
                        "value": 2435,
                        "code": "610402000000",
                        "label": "秦都区",
                        "children": null
                    },
                    {
                        "value": 2436,
                        "code": "610403000000",
                        "label": "杨陵区",
                        "children": null
                    },
                    {
                        "value": 2437,
                        "code": "610404000000",
                        "label": "渭城区",
                        "children": null
                    },
                    {
                        "value": 2438,
                        "code": "610422000000",
                        "label": "三原县",
                        "children": null
                    },
                    {
                        "value": 2439,
                        "code": "610423000000",
                        "label": "泾阳县",
                        "children": null
                    },
                    {
                        "value": 2440,
                        "code": "610424000000",
                        "label": "乾县",
                        "children": null
                    },
                    {
                        "value": 2441,
                        "code": "610425000000",
                        "label": "礼泉县",
                        "children": null
                    },
                    {
                        "value": 2442,
                        "code": "610426000000",
                        "label": "永寿县",
                        "children": null
                    },
                    {
                        "value": 2443,
                        "code": "610427000000",
                        "label": "彬县",
                        "children": null
                    },
                    {
                        "value": 2444,
                        "code": "610428000000",
                        "label": "长武县",
                        "children": null
                    },
                    {
                        "value": 2445,
                        "code": "610429000000",
                        "label": "旬邑县",
                        "children": null
                    },
                    {
                        "value": 2446,
                        "code": "610430000000",
                        "label": "淳化县",
                        "children": null
                    },
                    {
                        "value": 2447,
                        "code": "610431000000",
                        "label": "武功县",
                        "children": null
                    },
                    {
                        "value": 2448,
                        "code": "610481000000",
                        "label": "兴平市",
                        "children": null
                    }
                ]
            },
            {
                "value": 51,
                "code": "610500000000",
                "label": "渭南市",
                "children": [
                    {
                        "value": 2995,
                        "code": "610502000000",
                        "label": "临渭区",
                        "children": null
                    },
                    {
                        "value": 2996,
                        "code": "610521000000",
                        "label": "华县",
                        "children": null
                    },
                    {
                        "value": 2997,
                        "code": "610522000000",
                        "label": "潼关县",
                        "children": null
                    },
                    {
                        "value": 2998,
                        "code": "610523000000",
                        "label": "大荔县",
                        "children": null
                    },
                    {
                        "value": 2999,
                        "code": "610524000000",
                        "label": "合阳县",
                        "children": null
                    },
                    {
                        "value": 3000,
                        "code": "610525000000",
                        "label": "澄城县",
                        "children": null
                    },
                    {
                        "value": 3001,
                        "code": "610526000000",
                        "label": "蒲城县",
                        "children": null
                    },
                    {
                        "value": 3002,
                        "code": "610527000000",
                        "label": "白水县",
                        "children": null
                    },
                    {
                        "value": 3003,
                        "code": "610528000000",
                        "label": "富平县",
                        "children": null
                    },
                    {
                        "value": 3004,
                        "code": "610581000000",
                        "label": "韩城市",
                        "children": null
                    },
                    {
                        "value": 3005,
                        "code": "610582000000",
                        "label": "华阴市",
                        "children": null
                    }
                ]
            },
            {
                "value": 52,
                "code": "610600000000",
                "label": "延安市",
                "children": [
                    {
                        "value": 2193,
                        "code": "610602000000",
                        "label": "宝塔区",
                        "children": null
                    },
                    {
                        "value": 2194,
                        "code": "610621000000",
                        "label": "延长县",
                        "children": null
                    },
                    {
                        "value": 2195,
                        "code": "610622000000",
                        "label": "延川县",
                        "children": null
                    },
                    {
                        "value": 2196,
                        "code": "610623000000",
                        "label": "子长县",
                        "children": null
                    },
                    {
                        "value": 2197,
                        "code": "610624000000",
                        "label": "安塞县",
                        "children": null
                    },
                    {
                        "value": 2198,
                        "code": "610625000000",
                        "label": "志丹县",
                        "children": null
                    },
                    {
                        "value": 2199,
                        "code": "610626000000",
                        "label": "吴起县",
                        "children": null
                    },
                    {
                        "value": 2200,
                        "code": "610627000000",
                        "label": "甘泉县",
                        "children": null
                    },
                    {
                        "value": 2201,
                        "code": "610628000000",
                        "label": "富县",
                        "children": null
                    },
                    {
                        "value": 2202,
                        "code": "610629000000",
                        "label": "洛川县",
                        "children": null
                    },
                    {
                        "value": 2203,
                        "code": "610630000000",
                        "label": "宜川县",
                        "children": null
                    },
                    {
                        "value": 2204,
                        "code": "610631000000",
                        "label": "黄龙县",
                        "children": null
                    },
                    {
                        "value": 2205,
                        "code": "610632000000",
                        "label": "黄陵县",
                        "children": null
                    }
                ]
            },
            {
                "value": 53,
                "code": "610700000000",
                "label": "汉中市",
                "children": [
                    {
                        "value": 2088,
                        "code": "610702000000",
                        "label": "汉台区",
                        "children": null
                    },
                    {
                        "value": 2089,
                        "code": "610721000000",
                        "label": "南郑县",
                        "children": null
                    },
                    {
                        "value": 2090,
                        "code": "610722000000",
                        "label": "城固县",
                        "children": null
                    },
                    {
                        "value": 2091,
                        "code": "610723000000",
                        "label": "洋县",
                        "children": null
                    },
                    {
                        "value": 2092,
                        "code": "610724000000",
                        "label": "西乡县",
                        "children": null
                    },
                    {
                        "value": 2093,
                        "code": "610725000000",
                        "label": "勉县",
                        "children": null
                    },
                    {
                        "value": 2094,
                        "code": "610726000000",
                        "label": "宁强县",
                        "children": null
                    },
                    {
                        "value": 2095,
                        "code": "610727000000",
                        "label": "略阳县",
                        "children": null
                    },
                    {
                        "value": 2096,
                        "code": "610728000000",
                        "label": "镇巴县",
                        "children": null
                    },
                    {
                        "value": 2097,
                        "code": "610729000000",
                        "label": "留坝县",
                        "children": null
                    },
                    {
                        "value": 2098,
                        "code": "610730000000",
                        "label": "佛坪县",
                        "children": null
                    }
                ]
            },
            {
                "value": 54,
                "code": "610800000000",
                "label": "榆林市",
                "children": [
                    {
                        "value": 1542,
                        "code": "610802000000",
                        "label": "榆阳区",
                        "children": null
                    },
                    {
                        "value": 1543,
                        "code": "610821000000",
                        "label": "神木县",
                        "children": null
                    },
                    {
                        "value": 1544,
                        "code": "610822000000",
                        "label": "府谷县",
                        "children": null
                    },
                    {
                        "value": 1545,
                        "code": "610823000000",
                        "label": "横山县",
                        "children": null
                    },
                    {
                        "value": 1546,
                        "code": "610824000000",
                        "label": "靖边县",
                        "children": null
                    },
                    {
                        "value": 1547,
                        "code": "610825000000",
                        "label": "定边县",
                        "children": null
                    },
                    {
                        "value": 1548,
                        "code": "610826000000",
                        "label": "绥德县",
                        "children": null
                    },
                    {
                        "value": 1549,
                        "code": "610827000000",
                        "label": "米脂县",
                        "children": null
                    },
                    {
                        "value": 1550,
                        "code": "610828000000",
                        "label": "佳县",
                        "children": null
                    },
                    {
                        "value": 1551,
                        "code": "610829000000",
                        "label": "吴堡县",
                        "children": null
                    },
                    {
                        "value": 1552,
                        "code": "610830000000",
                        "label": "清涧县",
                        "children": null
                    },
                    {
                        "value": 1553,
                        "code": "610831000000",
                        "label": "子洲县",
                        "children": null
                    }
                ]
            },
            {
                "value": 55,
                "code": "610900000000",
                "label": "安康市",
                "children": [
                    {
                        "value": 1435,
                        "code": "610902000000",
                        "label": "汉滨区",
                        "children": null
                    },
                    {
                        "value": 1436,
                        "code": "610921000000",
                        "label": "汉阴县",
                        "children": null
                    },
                    {
                        "value": 1437,
                        "code": "610922000000",
                        "label": "石泉县",
                        "children": null
                    },
                    {
                        "value": 1438,
                        "code": "610923000000",
                        "label": "宁陕县",
                        "children": null
                    },
                    {
                        "value": 1439,
                        "code": "610924000000",
                        "label": "紫阳县",
                        "children": null
                    },
                    {
                        "value": 1440,
                        "code": "610925000000",
                        "label": "岚皋县",
                        "children": null
                    },
                    {
                        "value": 1441,
                        "code": "610926000000",
                        "label": "平利县",
                        "children": null
                    },
                    {
                        "value": 1442,
                        "code": "610927000000",
                        "label": "镇坪县",
                        "children": null
                    },
                    {
                        "value": 1443,
                        "code": "610928000000",
                        "label": "旬阳县",
                        "children": null
                    },
                    {
                        "value": 1444,
                        "code": "610929000000",
                        "label": "白河县",
                        "children": null
                    }
                ]
            },
            {
                "value": 56,
                "code": "611000000000",
                "label": "商洛市",
                "children": [
                    {
                        "value": 1166,
                        "code": "611002000000",
                        "label": "商州区",
                        "children": null
                    },
                    {
                        "value": 1167,
                        "code": "611021000000",
                        "label": "洛南县",
                        "children": null
                    },
                    {
                        "value": 1168,
                        "code": "611022000000",
                        "label": "丹凤县",
                        "children": null
                    },
                    {
                        "value": 1169,
                        "code": "611023000000",
                        "label": "商南县",
                        "children": null
                    },
                    {
                        "value": 1170,
                        "code": "611024000000",
                        "label": "山阳县",
                        "children": null
                    },
                    {
                        "value": 1171,
                        "code": "611025000000",
                        "label": "镇安县",
                        "children": null
                    },
                    {
                        "value": 1172,
                        "code": "611026000000",
                        "label": "柞水县",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "value": 29,
        "code": "620000000000",
        "label": "甘肃",
        "children": [
            {
                "value": 162,
                "code": "620100000000",
                "label": "兰州市",
                "children": [
                    {
                        "value": 708,
                        "code": "620102000000",
                        "label": "城关区",
                        "children": null
                    },
                    {
                        "value": 709,
                        "code": "620103000000",
                        "label": "七里河区",
                        "children": null
                    },
                    {
                        "value": 710,
                        "code": "620104000000",
                        "label": "西固区",
                        "children": null
                    },
                    {
                        "value": 711,
                        "code": "620105000000",
                        "label": "安宁区",
                        "children": null
                    },
                    {
                        "value": 712,
                        "code": "620111000000",
                        "label": "红古区",
                        "children": null
                    },
                    {
                        "value": 713,
                        "code": "620121000000",
                        "label": "永登县",
                        "children": null
                    },
                    {
                        "value": 714,
                        "code": "620122000000",
                        "label": "皋兰县",
                        "children": null
                    },
                    {
                        "value": 715,
                        "code": "620123000000",
                        "label": "榆中县",
                        "children": null
                    }
                ]
            },
            {
                "value": 163,
                "code": "620200000000",
                "label": "嘉峪关市",
                "children": null
            },
            {
                "value": 164,
                "code": "620300000000",
                "label": "金昌市",
                "children": [
                    {
                        "value": 923,
                        "code": "620302000000",
                        "label": "金川区",
                        "children": null
                    },
                    {
                        "value": 924,
                        "code": "620321000000",
                        "label": "永昌县",
                        "children": null
                    }
                ]
            },
            {
                "value": 165,
                "code": "620400000000",
                "label": "白银市",
                "children": [
                    {
                        "value": 428,
                        "code": "620402000000",
                        "label": "白银区",
                        "children": null
                    },
                    {
                        "value": 429,
                        "code": "620403000000",
                        "label": "平川区",
                        "children": null
                    },
                    {
                        "value": 430,
                        "code": "620421000000",
                        "label": "靖远县",
                        "children": null
                    },
                    {
                        "value": 431,
                        "code": "620422000000",
                        "label": "会宁县",
                        "children": null
                    },
                    {
                        "value": 432,
                        "code": "620423000000",
                        "label": "景泰县",
                        "children": null
                    }
                ]
            },
            {
                "value": 166,
                "code": "620500000000",
                "label": "天水市",
                "children": [
                    {
                        "value": 1687,
                        "code": "620502000000",
                        "label": "秦州区",
                        "children": null
                    },
                    {
                        "value": 1688,
                        "code": "620503000000",
                        "label": "麦积区",
                        "children": null
                    },
                    {
                        "value": 1689,
                        "code": "620521000000",
                        "label": "清水县",
                        "children": null
                    },
                    {
                        "value": 1690,
                        "code": "620522000000",
                        "label": "秦安县",
                        "children": null
                    },
                    {
                        "value": 1691,
                        "code": "620523000000",
                        "label": "甘谷县",
                        "children": null
                    },
                    {
                        "value": 1692,
                        "code": "620524000000",
                        "label": "武山县",
                        "children": null
                    },
                    {
                        "value": 1693,
                        "code": "620525000000",
                        "label": "张家川回族自治县",
                        "children": null
                    }
                ]
            },
            {
                "value": 167,
                "code": "620600000000",
                "label": "武威市",
                "children": [
                    {
                        "value": 545,
                        "code": "620602000000",
                        "label": "凉州区",
                        "children": null
                    },
                    {
                        "value": 546,
                        "code": "620621000000",
                        "label": "民勤县",
                        "children": null
                    },
                    {
                        "value": 547,
                        "code": "620622000000",
                        "label": "古浪县",
                        "children": null
                    },
                    {
                        "value": 548,
                        "code": "620623000000",
                        "label": "天祝藏族自治县",
                        "children": null
                    }
                ]
            },
            {
                "value": 168,
                "code": "620700000000",
                "label": "张掖市",
                "children": [
                    {
                        "value": 2267,
                        "code": "620702000000",
                        "label": "甘州区",
                        "children": null
                    },
                    {
                        "value": 2268,
                        "code": "620721000000",
                        "label": "肃南裕固族自治县",
                        "children": null
                    },
                    {
                        "value": 2269,
                        "code": "620722000000",
                        "label": "民乐县",
                        "children": null
                    },
                    {
                        "value": 2270,
                        "code": "620723000000",
                        "label": "临泽县",
                        "children": null
                    },
                    {
                        "value": 2271,
                        "code": "620724000000",
                        "label": "高台县",
                        "children": null
                    },
                    {
                        "value": 2272,
                        "code": "620725000000",
                        "label": "山丹县",
                        "children": null
                    }
                ]
            },
            {
                "value": 169,
                "code": "620800000000",
                "label": "平凉市",
                "children": [
                    {
                        "value": 2491,
                        "code": "620802000000",
                        "label": "崆峒区",
                        "children": null
                    },
                    {
                        "value": 2492,
                        "code": "620821000000",
                        "label": "泾川县",
                        "children": null
                    },
                    {
                        "value": 2493,
                        "code": "620822000000",
                        "label": "灵台县",
                        "children": null
                    },
                    {
                        "value": 2494,
                        "code": "620823000000",
                        "label": "崇信县",
                        "children": null
                    },
                    {
                        "value": 2495,
                        "code": "620824000000",
                        "label": "华亭县",
                        "children": null
                    },
                    {
                        "value": 2496,
                        "code": "620825000000",
                        "label": "庄浪县",
                        "children": null
                    },
                    {
                        "value": 2497,
                        "code": "620826000000",
                        "label": "静宁县",
                        "children": null
                    }
                ]
            },
            {
                "value": 170,
                "code": "620900000000",
                "label": "酒泉市",
                "children": [
                    {
                        "value": 2377,
                        "code": "620902000000",
                        "label": "肃州区",
                        "children": null
                    },
                    {
                        "value": 2378,
                        "code": "620921000000",
                        "label": "金塔县",
                        "children": null
                    },
                    {
                        "value": 2379,
                        "code": "620922000000",
                        "label": "瓜州县",
                        "children": null
                    },
                    {
                        "value": 2380,
                        "code": "620923000000",
                        "label": "肃北蒙古族自治县",
                        "children": null
                    },
                    {
                        "value": 2381,
                        "code": "620924000000",
                        "label": "阿克塞哈萨克族自治县",
                        "children": null
                    },
                    {
                        "value": 2382,
                        "code": "620981000000",
                        "label": "玉门市",
                        "children": null
                    },
                    {
                        "value": 2383,
                        "code": "620982000000",
                        "label": "敦煌市",
                        "children": null
                    }
                ]
            },
            {
                "value": 171,
                "code": "621000000000",
                "label": "庆阳市",
                "children": [
                    {
                        "value": 2052,
                        "code": "621002000000",
                        "label": "西峰区",
                        "children": null
                    },
                    {
                        "value": 2053,
                        "code": "621021000000",
                        "label": "庆城县",
                        "children": null
                    },
                    {
                        "value": 2054,
                        "code": "621022000000",
                        "label": "环县",
                        "children": null
                    },
                    {
                        "value": 2055,
                        "code": "621023000000",
                        "label": "华池县",
                        "children": null
                    },
                    {
                        "value": 2056,
                        "code": "621024000000",
                        "label": "合水县",
                        "children": null
                    },
                    {
                        "value": 2057,
                        "code": "621025000000",
                        "label": "正宁县",
                        "children": null
                    },
                    {
                        "value": 2058,
                        "code": "621026000000",
                        "label": "宁县",
                        "children": null
                    },
                    {
                        "value": 2059,
                        "code": "621027000000",
                        "label": "镇原县",
                        "children": null
                    }
                ]
            },
            {
                "value": 172,
                "code": "621100000000",
                "label": "定西市",
                "children": [
                    {
                        "value": 1991,
                        "code": "621102000000",
                        "label": "安定区",
                        "children": null
                    },
                    {
                        "value": 1992,
                        "code": "621121000000",
                        "label": "通渭县",
                        "children": null
                    },
                    {
                        "value": 1993,
                        "code": "621122000000",
                        "label": "陇西县",
                        "children": null
                    },
                    {
                        "value": 1994,
                        "code": "621123000000",
                        "label": "渭源县",
                        "children": null
                    },
                    {
                        "value": 1995,
                        "code": "621124000000",
                        "label": "临洮县",
                        "children": null
                    },
                    {
                        "value": 1996,
                        "code": "621125000000",
                        "label": "漳县",
                        "children": null
                    },
                    {
                        "value": 1997,
                        "code": "621126000000",
                        "label": "岷县",
                        "children": null
                    }
                ]
            },
            {
                "value": 173,
                "code": "621200000000",
                "label": "陇南市",
                "children": [
                    {
                        "value": 2583,
                        "code": "621202000000",
                        "label": "武都区",
                        "children": null
                    },
                    {
                        "value": 2584,
                        "code": "621221000000",
                        "label": "成县",
                        "children": null
                    },
                    {
                        "value": 2585,
                        "code": "621222000000",
                        "label": "文县",
                        "children": null
                    },
                    {
                        "value": 2586,
                        "code": "621223000000",
                        "label": "宕昌县",
                        "children": null
                    },
                    {
                        "value": 2587,
                        "code": "621224000000",
                        "label": "康县",
                        "children": null
                    },
                    {
                        "value": 2588,
                        "code": "621225000000",
                        "label": "西和县",
                        "children": null
                    },
                    {
                        "value": 2589,
                        "code": "621226000000",
                        "label": "礼县",
                        "children": null
                    },
                    {
                        "value": 2590,
                        "code": "621227000000",
                        "label": "徽县",
                        "children": null
                    },
                    {
                        "value": 2591,
                        "code": "621228000000",
                        "label": "两当县",
                        "children": null
                    }
                ]
            },
            {
                "value": 174,
                "code": "622900000000",
                "label": "临夏回族自治州",
                "children": [
                    {
                        "value": 1147,
                        "code": "622901000000",
                        "label": "临夏市",
                        "children": null
                    },
                    {
                        "value": 1148,
                        "code": "622921000000",
                        "label": "临夏县",
                        "children": null
                    },
                    {
                        "value": 1149,
                        "code": "622922000000",
                        "label": "康乐县",
                        "children": null
                    },
                    {
                        "value": 1150,
                        "code": "622923000000",
                        "label": "永靖县",
                        "children": null
                    },
                    {
                        "value": 1151,
                        "code": "622924000000",
                        "label": "广河县",
                        "children": null
                    },
                    {
                        "value": 1152,
                        "code": "622925000000",
                        "label": "和政县",
                        "children": null
                    },
                    {
                        "value": 1153,
                        "code": "622926000000",
                        "label": "东乡族自治县",
                        "children": null
                    },
                    {
                        "value": 1154,
                        "code": "622927000000",
                        "label": "积石山保安族东乡族撒拉族自治县",
                        "children": null
                    }
                ]
            },
            {
                "value": 175,
                "code": "623000000000",
                "label": "甘南藏族自治州",
                "children": [
                    {
                        "value": 1811,
                        "code": "623001000000",
                        "label": "合作市",
                        "children": null
                    },
                    {
                        "value": 1812,
                        "code": "623021000000",
                        "label": "临潭县",
                        "children": null
                    },
                    {
                        "value": 1813,
                        "code": "623022000000",
                        "label": "卓尼县",
                        "children": null
                    },
                    {
                        "value": 1814,
                        "code": "623023000000",
                        "label": "舟曲县",
                        "children": null
                    },
                    {
                        "value": 1815,
                        "code": "623024000000",
                        "label": "迭部县",
                        "children": null
                    },
                    {
                        "value": 1816,
                        "code": "623025000000",
                        "label": "玛曲县",
                        "children": null
                    },
                    {
                        "value": 1817,
                        "code": "623026000000",
                        "label": "碌曲县",
                        "children": null
                    },
                    {
                        "value": 1818,
                        "code": "623027000000",
                        "label": "夏河县",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "value": 30,
        "code": "630000000000",
        "label": "青海",
        "children": [
            {
                "value": 103,
                "code": "630100000000",
                "label": "西宁市",
                "children": [
                    {
                        "value": 1640,
                        "code": "630102000000",
                        "label": "城东区",
                        "children": null
                    },
                    {
                        "value": 1641,
                        "code": "630103000000",
                        "label": "城中区",
                        "children": null
                    },
                    {
                        "value": 1642,
                        "code": "630104000000",
                        "label": "城西区",
                        "children": null
                    },
                    {
                        "value": 1643,
                        "code": "630105000000",
                        "label": "城北区",
                        "children": null
                    },
                    {
                        "value": 1644,
                        "code": "630121000000",
                        "label": "大通回族土族自治县",
                        "children": null
                    },
                    {
                        "value": 1645,
                        "code": "630122000000",
                        "label": "湟中县",
                        "children": null
                    },
                    {
                        "value": 1646,
                        "code": "630123000000",
                        "label": "湟源县",
                        "children": null
                    }
                ]
            },
            {
                "value": 104,
                "code": "632100000000",
                "label": "海东地区",
                "children": [
                    {
                        "value": 437,
                        "code": "632121000000",
                        "label": "平安县",
                        "children": null
                    },
                    {
                        "value": 438,
                        "code": "632122000000",
                        "label": "民和回族土族自治县",
                        "children": null
                    },
                    {
                        "value": 439,
                        "code": "632123000000",
                        "label": "乐都县",
                        "children": null
                    },
                    {
                        "value": 440,
                        "code": "632126000000",
                        "label": "互助土族自治县",
                        "children": null
                    },
                    {
                        "value": 441,
                        "code": "632127000000",
                        "label": "化隆回族自治县",
                        "children": null
                    },
                    {
                        "value": 442,
                        "code": "632128000000",
                        "label": "循化撒拉族自治县",
                        "children": null
                    }
                ]
            },
            {
                "value": 105,
                "code": "632200000000",
                "label": "海北藏族自治州",
                "children": [
                    {
                        "value": 3210,
                        "code": "632221000000",
                        "label": "门源回族自治县",
                        "children": null
                    },
                    {
                        "value": 3211,
                        "code": "632222000000",
                        "label": "祁连县",
                        "children": null
                    },
                    {
                        "value": 3212,
                        "code": "632223000000",
                        "label": "海晏县",
                        "children": null
                    },
                    {
                        "value": 3213,
                        "code": "632224000000",
                        "label": "刚察县",
                        "children": null
                    }
                ]
            },
            {
                "value": 106,
                "code": "632300000000",
                "label": "黄南藏族自治州",
                "children": [
                    {
                        "value": 3138,
                        "code": "632321000000",
                        "label": "同仁县",
                        "children": null
                    },
                    {
                        "value": 3139,
                        "code": "632322000000",
                        "label": "尖扎县",
                        "children": null
                    },
                    {
                        "value": 3140,
                        "code": "632323000000",
                        "label": "泽库县",
                        "children": null
                    },
                    {
                        "value": 3141,
                        "code": "632324000000",
                        "label": "河南蒙古族自治县",
                        "children": null
                    }
                ]
            },
            {
                "value": 107,
                "code": "632500000000",
                "label": "海南藏族自治州",
                "children": [
                    {
                        "value": 2983,
                        "code": "632521000000",
                        "label": "共和县",
                        "children": null
                    },
                    {
                        "value": 2984,
                        "code": "632522000000",
                        "label": "同德县",
                        "children": null
                    },
                    {
                        "value": 2985,
                        "code": "632523000000",
                        "label": "贵德县",
                        "children": null
                    },
                    {
                        "value": 2986,
                        "code": "632524000000",
                        "label": "兴海县",
                        "children": null
                    },
                    {
                        "value": 2987,
                        "code": "632525000000",
                        "label": "贵南县",
                        "children": null
                    }
                ]
            },
            {
                "value": 108,
                "code": "632600000000",
                "label": "果洛藏族自治州",
                "children": [
                    {
                        "value": 2897,
                        "code": "632621000000",
                        "label": "玛沁县",
                        "children": null
                    },
                    {
                        "value": 2898,
                        "code": "632622000000",
                        "label": "班玛县",
                        "children": null
                    },
                    {
                        "value": 2899,
                        "code": "632623000000",
                        "label": "甘德县",
                        "children": null
                    },
                    {
                        "value": 2900,
                        "code": "632624000000",
                        "label": "达日县",
                        "children": null
                    },
                    {
                        "value": 2901,
                        "code": "632625000000",
                        "label": "久治县",
                        "children": null
                    },
                    {
                        "value": 2902,
                        "code": "632626000000",
                        "label": "玛多县",
                        "children": null
                    }
                ]
            },
            {
                "value": 109,
                "code": "632700000000",
                "label": "玉树藏族自治州",
                "children": [
                    {
                        "value": 1876,
                        "code": "632721000000",
                        "label": "玉树县",
                        "children": null
                    },
                    {
                        "value": 1877,
                        "code": "632722000000",
                        "label": "杂多县",
                        "children": null
                    },
                    {
                        "value": 1878,
                        "code": "632723000000",
                        "label": "称多县",
                        "children": null
                    },
                    {
                        "value": 1879,
                        "code": "632724000000",
                        "label": "治多县",
                        "children": null
                    },
                    {
                        "value": 1880,
                        "code": "632725000000",
                        "label": "囊谦县",
                        "children": null
                    },
                    {
                        "value": 1881,
                        "code": "632726000000",
                        "label": "曲麻莱县",
                        "children": null
                    }
                ]
            },
            {
                "value": 110,
                "code": "632800000000",
                "label": "海西蒙古族藏族自治州",
                "children": [
                    {
                        "value": 2158,
                        "code": "632801000000",
                        "label": "格尔木市",
                        "children": null
                    },
                    {
                        "value": 2159,
                        "code": "632802000000",
                        "label": "德令哈市",
                        "children": null
                    },
                    {
                        "value": 2160,
                        "code": "632821000000",
                        "label": "乌兰县",
                        "children": null
                    },
                    {
                        "value": 2161,
                        "code": "632822000000",
                        "label": "都兰县",
                        "children": null
                    },
                    {
                        "value": 2162,
                        "code": "632823000000",
                        "label": "天峻县",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "value": 31,
        "code": "640000000000",
        "label": "宁夏",
        "children": [
            {
                "value": 218,
                "code": "640100000000",
                "label": "银川市",
                "children": [
                    {
                        "value": 2556,
                        "code": "640104000000",
                        "label": "兴庆区",
                        "children": null
                    },
                    {
                        "value": 2557,
                        "code": "640105000000",
                        "label": "西夏区",
                        "children": null
                    },
                    {
                        "value": 2558,
                        "code": "640106000000",
                        "label": "金凤区",
                        "children": null
                    },
                    {
                        "value": 2559,
                        "code": "640121000000",
                        "label": "永宁县",
                        "children": null
                    },
                    {
                        "value": 2560,
                        "code": "640122000000",
                        "label": "贺兰县",
                        "children": null
                    },
                    {
                        "value": 2561,
                        "code": "640181000000",
                        "label": "灵武市",
                        "children": null
                    }
                ]
            },
            {
                "value": 219,
                "code": "640200000000",
                "label": "石嘴山市",
                "children": [
                    {
                        "value": 2449,
                        "code": "640202000000",
                        "label": "大武口区",
                        "children": null
                    },
                    {
                        "value": 2450,
                        "code": "640205000000",
                        "label": "惠农区",
                        "children": null
                    },
                    {
                        "value": 2451,
                        "code": "640221000000",
                        "label": "平罗县",
                        "children": null
                    }
                ]
            },
            {
                "value": 220,
                "code": "640300000000",
                "label": "吴忠市",
                "children": [
                    {
                        "value": 2316,
                        "code": "640302000000",
                        "label": "利通区",
                        "children": null
                    },
                    {
                        "value": 2317,
                        "code": "640303000000",
                        "label": "红寺堡区",
                        "children": null
                    },
                    {
                        "value": 2318,
                        "code": "640323000000",
                        "label": "盐池县",
                        "children": null
                    },
                    {
                        "value": 2319,
                        "code": "640324000000",
                        "label": "同心县",
                        "children": null
                    },
                    {
                        "value": 2320,
                        "code": "640381000000",
                        "label": "青铜峡市",
                        "children": null
                    }
                ]
            },
            {
                "value": 221,
                "code": "640400000000",
                "label": "固原市",
                "children": [
                    {
                        "value": 2218,
                        "code": "640402000000",
                        "label": "原州区",
                        "children": null
                    },
                    {
                        "value": 2219,
                        "code": "640422000000",
                        "label": "西吉县",
                        "children": null
                    },
                    {
                        "value": 2220,
                        "code": "640423000000",
                        "label": "隆德县",
                        "children": null
                    },
                    {
                        "value": 2221,
                        "code": "640424000000",
                        "label": "泾源县",
                        "children": null
                    },
                    {
                        "value": 2222,
                        "code": "640425000000",
                        "label": "彭阳县",
                        "children": null
                    }
                ]
            },
            {
                "value": 222,
                "code": "640500000000",
                "label": "中卫市",
                "children": [
                    {
                        "value": 2107,
                        "code": "640502000000",
                        "label": "沙坡头区",
                        "children": null
                    },
                    {
                        "value": 2108,
                        "code": "640521000000",
                        "label": "中宁县",
                        "children": null
                    },
                    {
                        "value": 2109,
                        "code": "640522000000",
                        "label": "海原县",
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "value": 32,
        "code": "650000000000",
        "label": "新疆",
        "children": [
            {
                "value": 241,
                "code": "650100000000",
                "label": "乌鲁木齐市",
                "children": [
                    {
                        "value": 537,
                        "code": "650102000000",
                        "label": "天山区",
                        "children": null
                    },
                    {
                        "value": 538,
                        "code": "650103000000",
                        "label": "沙依巴克区",
                        "children": null
                    },
                    {
                        "value": 539,
                        "code": "650104000000",
                        "label": "新市区",
                        "children": null
                    },
                    {
                        "value": 540,
                        "code": "650105000000",
                        "label": "水磨沟区",
                        "children": null
                    },
                    {
                        "value": 541,
                        "code": "650106000000",
                        "label": "头屯河区",
                        "children": null
                    },
                    {
                        "value": 542,
                        "code": "650107000000",
                        "label": "达坂城区",
                        "children": null
                    },
                    {
                        "value": 543,
                        "code": "650109000000",
                        "label": "米东区",
                        "children": null
                    },
                    {
                        "value": 544,
                        "code": "650121000000",
                        "label": "乌鲁木齐县",
                        "children": null
                    }
                ]
            },
            {
                "value": 242,
                "code": "650200000000",
                "label": "克拉玛依市",
                "children": [
                    {
                        "value": 433,
                        "code": "650202000000",
                        "label": "独山子区",
                        "children": null
                    },
                    {
                        "value": 434,
                        "code": "650203000000",
                        "label": "克拉玛依区",
                        "children": null
                    },
                    {
                        "value": 435,
                        "code": "650204000000",
                        "label": "白碱滩区",
                        "children": null
                    },
                    {
                        "value": 436,
                        "code": "650205000000",
                        "label": "乌尔禾区",
                        "children": null
                    }
                ]
            },
            {
                "value": 243,
                "code": "652100000000",
                "label": "吐鲁番地区",
                "children": [
                    {
                        "value": 2231,
                        "code": "652101000000",
                        "label": "吐鲁番市",
                        "children": null
                    },
                    {
                        "value": 2232,
                        "code": "652122000000",
                        "label": "鄯善县",
                        "children": null
                    },
                    {
                        "value": 2233,
                        "code": "652123000000",
                        "label": "托克逊县",
                        "children": null
                    }
                ]
            },
            {
                "value": 244,
                "code": "652200000000",
                "label": "哈密地区",
                "children": [
                    {
                        "value": 2117,
                        "code": "652201000000",
                        "label": "哈密市",
                        "children": null
                    },
                    {
                        "value": 2118,
                        "code": "652222000000",
                        "label": "巴里坤哈萨克自治县",
                        "children": null
                    },
                    {
                        "value": 2119,
                        "code": "652223000000",
                        "label": "伊吾县",
                        "children": null
                    }
                ]
            },
            {
                "value": 245,
                "code": "652300000000",
                "label": "昌吉回族自治州",
                "children": [
                    {
                        "value": 2019,
                        "code": "652301000000",
                        "label": "昌吉市",
                        "children": null
                    },
                    {
                        "value": 2020,
                        "code": "652302000000",
                        "label": "阜康市",
                        "children": null
                    },
                    {
                        "value": 2021,
                        "code": "652323000000",
                        "label": "呼图壁县",
                        "children": null
                    },
                    {
                        "value": 2022,
                        "code": "652324000000",
                        "label": "玛纳斯县",
                        "children": null
                    },
                    {
                        "value": 2023,
                        "code": "652325000000",
                        "label": "奇台县",
                        "children": null
                    },
                    {
                        "value": 2024,
                        "code": "652327000000",
                        "label": "吉木萨尔县",
                        "children": null
                    },
                    {
                        "value": 2025,
                        "code": "652328000000",
                        "label": "木垒哈萨克自治县",
                        "children": null
                    }
                ]
            },
            {
                "value": 246,
                "code": "652700000000",
                "label": "博尔塔拉蒙古自治州",
                "children": [
                    {
                        "value": 737,
                        "code": "652701000000",
                        "label": "博乐市",
                        "children": null
                    },
                    {
                        "value": 738,
                        "code": "652722000000",
                        "label": "精河县",
                        "children": null
                    },
                    {
                        "value": 739,
                        "code": "652723000000",
                        "label": "温泉县",
                        "children": null
                    }
                ]
            },
            {
                "value": 247,
                "code": "652800000000",
                "label": "巴音郭楞蒙古自治州",
                "children": [
                    {
                        "value": 1554,
                        "code": "652801000000",
                        "label": "库尔勒市",
                        "children": null
                    },
                    {
                        "value": 1555,
                        "code": "652822000000",
                        "label": "轮台县",
                        "children": null
                    },
                    {
                        "value": 1556,
                        "code": "652823000000",
                        "label": "尉犁县",
                        "children": null
                    },
                    {
                        "value": 1557,
                        "code": "652824000000",
                        "label": "若羌县",
                        "children": null
                    },
                    {
                        "value": 1558,
                        "code": "652825000000",
                        "label": "且末县",
                        "children": null
                    },
                    {
                        "value": 1559,
                        "code": "652826000000",
                        "label": "焉耆回族自治县",
                        "children": null
                    },
                    {
                        "value": 1560,
                        "code": "652827000000",
                        "label": "和静县",
                        "children": null
                    },
                    {
                        "value": 1561,
                        "code": "652828000000",
                        "label": "和硕县",
                        "children": null
                    },
                    {
                        "value": 1562,
                        "code": "652829000000",
                        "label": "博湖县",
                        "children": null
                    }
                ]
            },
            {
                "value": 248,
                "code": "652900000000",
                "label": "阿克苏地区",
                "children": [
                    {
                        "value": 914,
                        "code": "652901000000",
                        "label": "阿克苏市",
                        "children": null
                    },
                    {
                        "value": 915,
                        "code": "652922000000",
                        "label": "温宿县",
                        "children": null
                    },
                    {
                        "value": 916,
                        "code": "652923000000",
                        "label": "库车县",
                        "children": null
                    },
                    {
                        "value": 917,
                        "code": "652924000000",
                        "label": "沙雅县",
                        "children": null
                    },
                    {
                        "value": 918,
                        "code": "652925000000",
                        "label": "新和县",
                        "children": null
                    },
                    {
                        "value": 919,
                        "code": "652926000000",
                        "label": "拜城县",
                        "children": null
                    },
                    {
                        "value": 920,
                        "code": "652927000000",
                        "label": "乌什县",
                        "children": null
                    },
                    {
                        "value": 921,
                        "code": "652928000000",
                        "label": "阿瓦提县",
                        "children": null
                    },
                    {
                        "value": 922,
                        "code": "652929000000",
                        "label": "柯坪县",
                        "children": null
                    }
                ]
            },
            {
                "value": 249,
                "code": "653000000000",
                "label": "克孜勒苏柯尔克孜自治州",
                "children": [
                    {
                        "value": 2804,
                        "code": "653001000000",
                        "label": "阿图什市",
                        "children": null
                    },
                    {
                        "value": 2805,
                        "code": "653022000000",
                        "label": "阿克陶县",
                        "children": null
                    },
                    {
                        "value": 2806,
                        "code": "653023000000",
                        "label": "阿合奇县",
                        "children": null
                    },
                    {
                        "value": 2807,
                        "code": "653024000000",
                        "label": "乌恰县",
                        "children": null
                    }
                ]
            },
            {
                "value": 250,
                "code": "653100000000",
                "label": "喀什地区",
                "children": [
                    {
                        "value": 2668,
                        "code": "653101000000",
                        "label": "喀什市",
                        "children": null
                    },
                    {
                        "value": 2669,
                        "code": "653121000000",
                        "label": "疏附县",
                        "children": null
                    },
                    {
                        "value": 2670,
                        "code": "653122000000",
                        "label": "疏勒县",
                        "children": null
                    },
                    {
                        "value": 2671,
                        "code": "653123000000",
                        "label": "英吉沙县",
                        "children": null
                    },
                    {
                        "value": 2672,
                        "code": "653124000000",
                        "label": "泽普县",
                        "children": null
                    },
                    {
                        "value": 2673,
                        "code": "653125000000",
                        "label": "莎车县",
                        "children": null
                    },
                    {
                        "value": 2674,
                        "code": "653126000000",
                        "label": "叶城县",
                        "children": null
                    },
                    {
                        "value": 2675,
                        "code": "653127000000",
                        "label": "麦盖提县",
                        "children": null
                    },
                    {
                        "value": 2676,
                        "code": "653128000000",
                        "label": "岳普湖县",
                        "children": null
                    },
                    {
                        "value": 2677,
                        "code": "653129000000",
                        "label": "伽师县",
                        "children": null
                    },
                    {
                        "value": 2678,
                        "code": "653130000000",
                        "label": "巴楚县",
                        "children": null
                    },
                    {
                        "value": 2679,
                        "code": "653131000000",
                        "label": "塔什库尔干塔吉克自治县",
                        "children": null
                    }
                ]
            },
            {
                "value": 251,
                "code": "653200000000",
                "label": "和田地区",
                "children": [
                    {
                        "value": 2592,
                        "code": "653201000000",
                        "label": "和田市",
                        "children": null
                    },
                    {
                        "value": 2593,
                        "code": "653221000000",
                        "label": "和田县",
                        "children": null
                    },
                    {
                        "value": 2594,
                        "code": "653222000000",
                        "label": "墨玉县",
                        "children": null
                    },
                    {
                        "value": 2595,
                        "code": "653223000000",
                        "label": "皮山县",
                        "children": null
                    },
                    {
                        "value": 2596,
                        "code": "653224000000",
                        "label": "洛浦县",
                        "children": null
                    },
                    {
                        "value": 2597,
                        "code": "653225000000",
                        "label": "策勒县",
                        "children": null
                    },
                    {
                        "value": 2598,
                        "code": "653226000000",
                        "label": "于田县",
                        "children": null
                    },
                    {
                        "value": 2599,
                        "code": "653227000000",
                        "label": "民丰县",
                        "children": null
                    }
                ]
            },
            {
                "value": 252,
                "code": "654000000000",
                "label": "伊犁哈萨克自治州",
                "children": [
                    {
                        "value": 1125,
                        "code": "654002000000",
                        "label": "伊宁市",
                        "children": null
                    },
                    {
                        "value": 1126,
                        "code": "654003000000",
                        "label": "奎屯市",
                        "children": null
                    },
                    {
                        "value": 1127,
                        "code": "654021000000",
                        "label": "伊宁县",
                        "children": null
                    },
                    {
                        "value": 1128,
                        "code": "654022000000",
                        "label": "察布查尔锡伯自治县",
                        "children": null
                    },
                    {
                        "value": 1129,
                        "code": "654023000000",
                        "label": "霍城县",
                        "children": null
                    },
                    {
                        "value": 1130,
                        "code": "654024000000",
                        "label": "巩留县",
                        "children": null
                    },
                    {
                        "value": 1131,
                        "code": "654025000000",
                        "label": "新源县",
                        "children": null
                    },
                    {
                        "value": 1132,
                        "code": "654026000000",
                        "label": "昭苏县",
                        "children": null
                    },
                    {
                        "value": 1133,
                        "code": "654027000000",
                        "label": "特克斯县",
                        "children": null
                    },
                    {
                        "value": 1134,
                        "code": "654028000000",
                        "label": "尼勒克县",
                        "children": null
                    }
                ]
            },
            {
                "value": 253,
                "code": "654200000000",
                "label": "塔城地区",
                "children": [
                    {
                        "value": 2988,
                        "code": "654201000000",
                        "label": "塔城市",
                        "children": null
                    },
                    {
                        "value": 2989,
                        "code": "654202000000",
                        "label": "乌苏市",
                        "children": null
                    },
                    {
                        "value": 2990,
                        "code": "654221000000",
                        "label": "额敏县",
                        "children": null
                    },
                    {
                        "value": 2991,
                        "code": "654223000000",
                        "label": "沙湾县",
                        "children": null
                    },
                    {
                        "value": 2992,
                        "code": "654224000000",
                        "label": "托里县",
                        "children": null
                    },
                    {
                        "value": 2993,
                        "code": "654225000000",
                        "label": "裕民县",
                        "children": null
                    },
                    {
                        "value": 2994,
                        "code": "654226000000",
                        "label": "和布克赛尔蒙古自治县",
                        "children": null
                    }
                ]
            },
            {
                "value": 254,
                "code": "654300000000",
                "label": "阿勒泰地区",
                "children": [
                    {
                        "value": 2903,
                        "code": "654301000000",
                        "label": "阿勒泰市",
                        "children": null
                    },
                    {
                        "value": 2904,
                        "code": "654321000000",
                        "label": "布尔津县",
                        "children": null
                    },
                    {
                        "value": 2905,
                        "code": "654322000000",
                        "label": "富蕴县",
                        "children": null
                    },
                    {
                        "value": 2906,
                        "code": "654323000000",
                        "label": "福海县",
                        "children": null
                    },
                    {
                        "value": 2907,
                        "code": "654324000000",
                        "label": "哈巴河县",
                        "children": null
                    },
                    {
                        "value": 2908,
                        "code": "654325000000",
                        "label": "青河县",
                        "children": null
                    },
                    {
                        "value": 2909,
                        "code": "654326000000",
                        "label": "吉木乃县",
                        "children": null
                    }
                ]
            },
            {
                "value": 255,
                "code": "659000000000",
                "label": "自治区直辖县级行政区划",
                "children": [
                    {
                        "value": 3200,
                        "code": "659001000000",
                        "label": "石河子市",
                        "children": null
                    },
                    {
                        "value": 3201,
                        "code": "659002000000",
                        "label": "阿拉尔市",
                        "children": null
                    },
                    {
                        "value": 3202,
                        "code": "659003000000",
                        "label": "图木舒克市",
                        "children": null
                    },
                    {
                        "value": 3203,
                        "code": "659004000000",
                        "label": "五家渠市",
                        "children": null
                    }
                ]
            }
        ]
    },







    {
      "value": 4000,
      "code": "110000000000",
      "label": "台湾",
      "children": [
          {
            "value": 4100,
             "code": "110100000000",
             "label": "台湾市",
             "children": [
                  {
                      "value": 4101,
                      "code": "110101000000",
                      "label": "金门",
                      "children": null
                  },
                  {
                      "value": 4102,
                      "code": "110102000000",
                      "label": "连江",
                      "children": null
                  },
                  {
                      "value": 4103,
                      "code": "110105000000",
                      "label": "苗栗",
                      "children": null
                  },
                  {
                      "value": 4104,
                      "code": "110106000000",
                      "label": "南投",
                      "children": null
                  },
                  {
                      "value": 4105,
                      "code": "110107000000",
                      "label": "澎湖",
                      "children": null
                  },
                  {
                      "value": 4106,
                      "code": "110108000000",
                      "label": "屏东",
                      "children": null
                  },
                  {
                      "value": 4107,
                      "code": "110109000000",
                      "label": "台东",
                      "children": null
                  },
                  {
                      "value": 4108,
                      "code": "110111000000",
                      "label": "台中",
                      "children": null
                  },
                  {
                      "value": 4109,
                      "code": "110112000000",
                      "label": "台南",
                      "children": null
                  },
                  {
                     "value": 4110,
                     "code": "110113000000",
                     "label": "台北",
                     "children": null
                 },
                 {
                     "value": 4111,
                     "code": "110114000000",
                     "label": "桃园",
                     "children": null
                 },
                 {
                     "value": 4112,
                     "code": "110115000000",
                     "label": "云林",
                     "children": null
                 },
                 {
                     "value": 4113,
                     "code": "110116000000",
                     "label": "新北",
                     "children": null
                 },
                 {
                     "value": 4114,
                     "code": "110117000000",
                     "label": "彰化",
                     "children": null
                 },
                 {
                     "value": 4115,
                     "code": "110116000000",
                     "label": "嘉义",
                     "children": null
                 },
                 {
                     "value": 4116,
                     "code": "110116000000",
                     "label": "新竹",
                     "children": null
                 },
                 {
                      "value": 4117,
                      "code": "110116000000",
                      "label": "花莲",
                      "children": null
                  },
                  {
                      "value": 4118,
                      "code": "110116000000",
                      "label": "宜兰",
                      "children": null
                  },
                  {
                      "value": 4119,
                      "code": "110116000000",
                      "label": "高雄",
                      "children": null
                  },
                  {
                      "value": 4120,
                      "code": "110116000000",
                      "label": "基隆",
                      "children": null
                  },
              ]
          },
        ]
    },
    {
        "value": 5000,
        "code": "110116000000",
        "label": "香港",
        "children": [
           {
              "value": 5100,
              "code": "110116000000",
              "label": "香港特别行政区",
              "children": [
                {
                    "value": 5101,
                    "code": "110116000000",
                    "label": "中西区",
                    "children": null
                },
                {
                    "value": 5102,
                    "code": "110116000000",
                    "label": "东区",
                    "children": null
                },
                {
                    "value": 5103,
                    "code": "110116000000",
                    "label": "九龙城区",
                    "children": null
                },
                {
                    "value": 5104,
                    "code": "110116000000",
                    "label": "观塘区",
                    "children": null
                },
                {
                    "value": 5105,
                    "code": "110116000000",
                    "label": "深水埗区",
                    "children": null
                },
                {
                    "value": 5106,
                    "code": "110116000000",
                    "label": "湾仔区",
                    "children": null
                },
                {
                    "value": 5107,
                    "code": "110116000000",
                    "label": "黄大仙区",
                    "children": null
                },
                {
                    "value": 5108,
                    "code": "110113000000",
                    "label": "油尖旺区",
                    "children": null
                },
                {
                    "value": 5109,
                    "code": "110114000000",
                    "label": "离岛区",
                    "children": null
                },
                {
                    "value": 5110,
                    "code": "110115000000",
                    "label": "葵青区",
                    "children": null
                },
                {
                    "value": 5111,
                    "code": "110116000000",
                    "label": "北区",
                    "children": null
                },
                {
                    "value": 5112,
                    "code": "110117000000",
                    "label": "西贡区",
                    "children": null
                },
                {
                    "value": 5113,
                    "code": "110116000000",
                    "label": "沙田区",
                    "children": null
                },
                {
                    "value": 5114,
                    "code": "110116000000",
                    "label": "屯门区",
                    "children": null
                },
                {
                    "value": 5115,
                    "code": "110116000000",
                    "label": "大埔区",
                    "children": null
                },
                {
                    "value": 5116,
                    "code": "110116000000",
                    "label": "荃湾区",
                    "children": null
                },
                {
                    "value": 5117,
                    "code": "110116000000",
                    "label": "元朗区",
                    "children": null
                },
                {
                    "value": 5118,
                    "code": "110116000000",
                    "label": "九龙",
                    "children": null
                },
                {
                    "value": 5119,
                    "code": "110116000000",
                    "label": "新界",
                    "children": null
                },
                ]
          },
        ]
    },
    {
        "value": 6000,
        "code": "110116000000",
        "label": "澳门",
        "children": [
          {
              "value": 6100,
              "code": "110116000000",
              "label": "澳门特别行政区",
              "children": [
                {
                    "value": 6101,
                    "code": "110116000000",
                    "label": "澳门半岛",
                    "children": null
                },
                {
                    "value": 6102,
                    "code": "110116000000",
                    "label": "氹仔",
                    "children": null
                },
                {
                    "value": 6103,
                    "code": "110116000000",
                    "label": "路氹",
                    "children": null
                },
                {
                    "value": 6104,
                    "code": "110116000000",
                    "label": "路环",
                    "children": null
                },
              ]
          },

        ]
    },

];
export default Constants;
