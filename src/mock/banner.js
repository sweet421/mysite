import Mock from "mockjs";

Mock.mock("/api/banner","get",{
    code:0,
    msg:"错误",
    data:[
        {
          id: "1",
          midImg: "https://i.loli.net/2021/05/10/r4CeOYG7sPmEcqu.png",
          bigImg: "https://i.loli.net/2021/05/10/r4CeOYG7sPmEcqu.png",
          title: "WilliamChan",
          description: "Good",
        },
        {
          id: "2",
          midImg: "https://i.loli.net/2021/05/10/JW3jLsMQPSyHx9d.png",
          bigImg: "https://i.loli.net/2021/05/10/JW3jLsMQPSyHx9d.png",
          title: "kun",
          description: "good",
        },
        {
          id: "3",
          midImg: "https://i.loli.net/2021/05/10/MbYfc6iJXrmSNVw.png",
          bigImg: "https://i.loli.net/2021/05/10/MbYfc6iJXrmSNVw.png",
          title: "kun",
          description: "study",
        },
      ]
})