const radicalToKanjiMap = new Map([
  // CJK部首
  ["⺃", "乚"], // 2e83 : 4e5a
  ["⺅", "亻"], // 2e85 : 4ebb
  ["⺉", "刂"], // 2e89 : 5202
  ["⺎", "兀"], // 2e8e : 5140
  ["⺏", "尣"], // 2e8f : 5c23
  ["⺐", "尢"], // 2e90 : 5c22
  ["⺒", "巳"], // 2e92 : 5df3
  ["⺓", "幺"], // 2e93 : 5e7a
  ["⺔", "彑"], // 2e94 : 5f51
  ["⺖", "忄"], // 2e96 : 5fc4
  ["⺗", "㣺"], // 2e97 : 38fa
  ["⺘", "扌"], // 2e98 : 624c
  ["⺙", "攵"], // 2e99 : 6535
  ["⺛", "旡"], // 2e9b : 65e1
  ["⺞", "歺"], // 2e9e : 6b7a
  ["⺟", "母"], // 2e9f : 6bcd
  ["⺠", "民"], // 2ea0 : 6c11
  ["⺡", "氵"], // 2ea1 : 6c35
  ["⺣", "灬"], // 2ea3 : 706c
  ["⺤", "爫"], // 2ea4 : fa49
  ["⺦", "丬"], // 2ea6 : 4e2c
  ["⺨", "犭"], // 2ea8 : 72ad
  ["⺫", "罒"], // 2eab : 7f52
  ["⺭", "礻"], // 2ead : 793b
  ["⺱", "罓"], // 2eb1 : 7f53
  ["⺹", "耂"], // 2eb9 : 8002
  ["⺾", "艹"], // 2ebe : 8279
  ["⺿", "艹"], // 2ebf : fa5e
  ["⻀", "艹"], // 2ec0 : fa5d
  ["⻁", "虎"], // 2ec1 : 864e
  ["⻂", "衤"], // 2ec2 : 8864
  ["⻃", "覀"], // 2ec3 : 8980
  ["⻄", "西"], // 2ec4 : 897f
  ["⻌", "辶"], // 2ecc : fa66
  ["⻏", "阝"], // 2ecf : 961d
  ["⻑", "長"], // 2ed1 : 9577
  ["⻒", "镸"], // 2ed2 : 9578
  ["⻘", "青"], // 2ed8 : 9752
  ["⻝", "食"], // 2edd : 98df
  ["⻟", "飠"], // 2edf : 98e0
  ["⻣", "骨"], // 2ee3 : 9aa8
  ["⻤", "鬼"], // 2ee4 : 9b3c
  ["⻨", "麦"], // 2ee8 : 9ea6
  ["⻩", "黄"], // 2ee9 : 9ec4
  ["⻫", "斉"], // 2eeb : 6589
  ["⻭", "歯"], // 2eed : 6b6f
  ["⻯", "竜"], // 2eef : 7adc
  ["⻲", "亀"], // 2ef2 : 4e80

  // 康煕部首
  ["⼀", "一"], // 2f00 : 4e00
  ["⼁", "丨"], // 2f01 : 4e28
  ["⼂", "丶"], // 2f02 : 4e36
  ["⼃", "ノ"], // 2f03 : 30ce
  ["⼄", "乙"], // 2f04 : 4e59
  ["⼅", "亅"], // 2f05 : 4e85
  ["⼆", "二"], // 2f06 : 4e8c
  ["⼇", "亠"], // 2f07 : 4ea0
  ["⼈", "人"], // 2f08 : 4eba
  ["⼉", "儿"], // 2f09 : 513f
  ["⼊", "入"], // 2f0a : 5165
  ["⼋", "八"], // 2f0b : 516b
  ["⼌", "冂"], // 2f0c : 5182
  ["⼍", "冖"], // 2f0d : 5196
  ["⼎", "冫"], // 2f0e : 51ab
  ["⼏", "几"], // 2f0f : 51e0
  ["⼐", "凵"], // 2f10 : 51f5
  ["⼑", "刀"], // 2f11 : 5200
  ["⼒", "力"], // 2f12 : 529b
  ["⼓", "勹"], // 2f13 : 52f9
  ["⼔", "匕"], // 2f14 : 5315
  ["⼕", "匚"], // 2f15 : 531a
  ["⼖", "匸"], // 2f16 : 5338
  ["⼗", "十"], // 2f17 : 5341
  ["⼘", "卜"], // 2f18 : 535c
  ["⼙", "卩"], // 2f19 : 5369
  ["⼚", "厂"], // 2f1a : 5382
  ["⼛", "厶"], // 2f1b : 53b6
  ["⼜", "又"], // 2f1c : 53c8
  ["⼝", "口"], // 2f1d : 53e3
  ["⼞", "口"], // 2f1e : 53e3
  ["⼟", "土"], // 2f1f : 571f
  ["⼠", "士"], // 2f20 : 58eb
  ["⼡", "夂"], // 2f21 : 5902
  ["⼢", "夊"], // 2f22 : 590a
  ["⼣", "夕"], // 2f23 : 5915
  ["⼤", "大"], // 2f24 : 5927
  ["⼥", "女"], // 2f25 : 5973
  ["⼦", "子"], // 2f26 : 5b50
  ["⼧", "宀"], // 2f27 : 5b80
  ["⼨", "寸"], // 2f28 : 5bf8
  ["⼩", "小"], // 2f29 : 5c0f
  ["⼪", "尢"], // 2f2a : 5c22
  ["⼫", "尸"], // 2f2b : 5c38
  ["⼬", "屮"], // 2f2c : 5c6e
  ["⼭", "山"], // 2f2d : 5c71
  ["⼮", "巛"], // 2f2e : 5ddb
  ["⼯", "工"], // 2f2f : 5de5
  ["⼰", "己"], // 2f30 : 5df1
  ["⼱", "巾"], // 2f31 : 5dfe
  ["⼲", "干"], // 2f32 : 5e72
  ["⼳", "幺"], // 2f33 : 5e7a
  ["⼴", "广"], // 2f34 : 5e7f
  ["⼵", "廴"], // 2f35 : 5ef4
  ["⼶", "廾"], // 2f36 : 5efe
  ["⼷", "弋"], // 2f37 : 5f0b
  ["⼸", "弓"], // 2f38 : 5f13
  ["⼹", "彐"], // 2f39 : 5f50
  ["⼺", "彡"], // 2f3a : 5f61
  ["⼻", "彳"], // 2f3b : 5f73
  ["⼼", "心"], // 2f3c : 5fc3
  ["⼽", "戈"], // 2f3d : 6208
  ["⼾", "戸"], // 2f3e : 6238
  ["⼿", "手"], // 2f3f : 624b
  ["⽀", "支"], // 2f40 : 652f
  ["⽁", "攴"], // 2f41 : 6534
  ["⽂", "文"], // 2f42 : 6587
  ["⽃", "斗"], // 2f43 : 6597
  ["⽄", "斤"], // 2f44 : 65a4
  ["⽅", "方"], // 2f45 : 65b9
  ["⽆", "无"], // 2f46 : 65e0
  ["⽇", "日"], // 2f47 : 65e5
  ["⽈", "曰"], // 2f48 : 66f0
  ["⽉", "月"], // 2f49 : 6708
  ["⽊", "木"], // 2f4a : 6728
  ["⽋", "欠"], // 2f4b : 6b20
  ["⽌", "止"], // 2f4c : 6b62
  ["⽍", "歹"], // 2f4d : 6b79
  ["⽎", "殳"], // 2f4e : 6bb3
  ["⽏", "母"], // 2f4f : 6bcd
  ["⽐", "比"], // 2f50 : 6bd4
  ["⽑", "毛"], // 2f51 : 6bdb
  ["⽒", "氏"], // 2f52 : 6c0f
  ["⽓", "气"], // 2f53 : 6c14
  ["⽔", "水"], // 2f54 : 6c34
  ["⽕", "火"], // 2f55 : 706b
  ["⽖", "爪"], // 2f56 : 722a
  ["⽗", "父"], // 2f57 : 7236
  ["⽘", "爻"], // 2f58 : 723b
  ["⽙", "爿"], // 2f59 : 723f
  ["⽚", "片"], // 2f5a : 7247
  ["⽛", "牙"], // 2f5b : 7259
  ["⽜", "牛"], // 2f5c : 725b
  ["⽝", "犬"], // 2f5d : 72ac
  ["⽞", "玄"], // 2f5e : 7384
  ["⽟", "玉"], // 2f5f : 7389
  ["⽠", "瓜"], // 2f60 : 74dc
  ["⽡", "瓦"], // 2f61 : 74e6
  ["⽢", "甘"], // 2f62 : 7518
  ["⽣", "生"], // 2f63 : 751f
  ["⽤", "用"], // 2f64 : 7528
  ["⽥", "田"], // 2f65 : 7530
  ["⽦", "疋"], // 2f66 : 758b
  ["⽧", "疒"], // 2f67 : 7592
  ["⽨", "癶"], // 2f68 : 7676
  ["⽩", "白"], // 2f69 : 767d
  ["⽪", "皮"], // 2f6a : 76ae
  ["⽫", "皿"], // 2f6b : 76bf
  ["⽬", "目"], // 2f6c : 76ee
  ["⽭", "矛"], // 2f6d : 77db
  ["⽮", "矢"], // 2f6e : 77e2
  ["⽯", "石"], // 2f6f : 77f3
  ["⽰", "示"], // 2f70 : 793a
  ["⽱", "禸"], // 2f71 : 79b8
  ["⽲", "禾"], // 2f72 : 79be
  ["⽳", "穴"], // 2f73 : 7a74
  ["⽴", "立"], // 2f74 : 7acb
  ["⽵", "竹"], // 2f75 : 7af9
  ["⽶", "米"], // 2f76 : 7c73
  ["⽷", "糸"], // 2f77 : 7cf8
  ["⽸", "缶"], // 2f78 : 7f36
  ["⽹", "网"], // 2f79 : 7f51
  ["⽺", "羊"], // 2f7a : 7f8a
  ["⽻", "羽"], // 2f7b : 7fbd
  ["⽼", "老"], // 2f7c : 8001
  ["⽽", "而"], // 2f7d : 800c
  ["⽾", "耒"], // 2f7e : 8012
  ["⽿", "耳"], // 2f7f : 8033
  ["⾀", "聿"], // 2f80 : 807f
  ["⾁", "肉"], // 2f81 : 8089
  ["⾂", "臣"], // 2f82 : 81e3
  ["⾃", "自"], // 2f83 : 81ea
  ["⾄", "至"], // 2f84 : 81f3
  ["⾅", "臼"], // 2f85 : 81fc
  ["⾆", "舌"], // 2f86 : 820c
  ["⾇", "舛"], // 2f87 : 821b
  ["⾈", "舟"], // 2f88 : 821f
  ["⾉", "艮"], // 2f89 : 826e
  ["⾊", "色"], // 2f8a : 8272
  ["⾋", "艸"], // 2f8b : 8278
  ["⾌", "虍"], // 2f8c : 864d
  ["⾍", "虫"], // 2f8d : 866b
  ["⾎", "血"], // 2f8e : 8840
  ["⾏", "行"], // 2f8f : 884c
  ["⾐", "衣"], // 2f90 : 8863
  ["⾑", "襾"], // 2f91 : 897e
  ["⾒", "見"], // 2f92 : 898b
  ["⾓", "角"], // 2f93 : 89d2
  ["⾔", "言"], // 2f94 : 8a00
  ["⾕", "谷"], // 2f95 : 8c37
  ["⾖", "豆"], // 2f96 : 8c46
  ["⾗", "豕"], // 2f97 : 8c55
  ["⾘", "豸"], // 2f98 : 8c78
  ["⾙", "貝"], // 2f99 : 8c9d
  ["⾚", "赤"], // 2f9a : 8d64
  ["⾛", "走"], // 2f9b : 8d70
  ["⾜", "足"], // 2f9c : 8db3
  ["⾝", "身"], // 2f9d : 8eab
  ["⾞", "車"], // 2f9e : 8eca
  ["⾟", "辛"], // 2f9f : 8f9b
  ["⾠", "辰"], // 2fa0 : 8fb0
  ["⾡", "辵"], // 2fa1 : 8fb5
  ["⾢", "邑"], // 2fa2 : 9091
  ["⾣", "酉"], // 2fa3 : 9149
  ["⾤", "釆"], // 2fa4 : 91c6
  ["⾥", "里"], // 2fa5 : 91cc
  ["⾦", "金"], // 2fa6 : 91d1
  ["⾧", "長"], // 2fa7 : 9577
  ["⾨", "門"], // 2fa8 : 9580
  ["⾩", "阜"], // 2fa9 : 961c
  ["⾪", "隶"], // 2faa : 96b6
  ["⾫", "隹"], // 2fab : 96b9
  ["⾬", "雨"], // 2fac : 96e8
  ["⾭", "靑"], // 2fad : 9751
  ["⾮", "非"], // 2fae : 975e
  ["⾯", "面"], // 2faf : 9762
  ["⾰", "革"], // 2fb0 : 9769
  ["⾱", "韋"], // 2fb1 : 97cb
  ["⾲", "韭"], // 2fb2 : 97ed
  ["⾳", "音"], // 2fb3 : 97f3
  ["⾴", "頁"], // 2fb4 : 9801
  ["⾵", "風"], // 2fb5 : 98a8
  ["⾶", "飛"], // 2fb6 : 98db
  ["⾷", "食"], // 2fb7 : 98df
  ["⾸", "首"], // 2fb8 : 9996
  ["⾹", "香"], // 2fb9 : 9999
  ["⾺", "馬"], // 2fba : 99ac
  ["⾻", "骨"], // 2fbb : 9aa8
  ["⾼", "高"], // 2fbc : 9ad8
  ["⾽", "髟"], // 2fbd : 9adf
  ["⾾", "鬥"], // 2fbe : 9b25
  ["⾿", "鬯"], // 2fbf : 9b2f
  ["⿀", "鬲"], // 2fc0 : 9b32
  ["⿁", "鬼"], // 2fc1 : 9b3c
  ["⿂", "魚"], // 2fc2 : 9b5a
  ["⿃", "鳥"], // 2fc3 : 9ce5
  ["⿄", "鹵"], // 2fc4 : 9e75
  ["⿅", "鹿"], // 2fc5 : 9e7f
  ["⿆", "麥"], // 2fc6 : 9ea5
  ["⿇", "麻"], // 2fc7 : 9ebb
  ["⿈", "黄"], // 2fc8 : 9ec4
  ["⿉", "黍"], // 2fc9 : 9ecd
  ["⿊", "黒"], // 2fca : 9ed2
  ["⿋", "黹"], // 2fcb : 9ef9
  ["⿌", "黽"], // 2fcc : 9efd
  ["⿍", "鼎"], // 2fcd : 9f0e
  ["⿎", "鼓"], // 2fce : 9f13
  ["⿏", "鼠"], // 2fcf : 9f20
  ["⿐", "鼻"], // 2fd0 : 9f3b
  ["⿑", "齊"], // 2fd1 : 9f4a
  ["⿒", "齒"], // 2fd2 : 9f52
  ["⿓", "龍"], // 2fd3 : 9f8d
  ["⿔", "龜"], // 2fd4 : 9f9c
  ["⿕", "龠"], // 2fd5 : 9fa0
]);

export default radicalToKanjiMap;
