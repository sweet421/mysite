import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    tel:"18700370115",
    avatar: "https://i.loli.net/2021/05/09/mHEy6twufnSlIYX.png",
    siteTitle: "study site",
    github: "https://github.com/DuYi-Edu",
    qq: "282005931",
    qqQrCode:
      "https://i.loli.net/2021/05/09/vUW9x4LSEBpNMJA.png",
    weixin: "187003870115",
    weixinQrCode:
      "https://i.loli.net/2021/05/09/YwGNznyQgpRO2L5.png",
    mail: "282005931@qq.com",
    githubName: "DuYi-Edu",
    favicon: "https://www.easyicon.net/api/resizeApi.php?id=1277363&size=128",
  },
});