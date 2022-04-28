var request = require("request");
request.post(
  "https://studio.thingjs.com/studio-resource/ci/getAllbyDirId",
  {
    form: {
      ci_type: 2,
      user_id: 510,
      ci_query: { page_num: 1, page_size: 15, keyword: "", id: 2000015 },
    },
    headers: {
      "content-type": "application/json;charset=UTF-8",
      "sso-token":
        "w6hvg3tqOM0pY5kWuvgN3UmKb84FtlEw5msCK57r4dYGC1Em3WFkoCIWEummrCoS",
      cookie:
        "ARK_ID=JS964052d827bbae3b00c25255f9d84b5d9640; UM_distinctid=17e017534e96d9-0deed47ad32f2c-36647401-13c680-17e017534eaa30; Hm_lvt_dab1236647c9b1f561fd1de291931348=1640701966; Hm_lpvt_dab1236647c9b1f561fd1de291931348=1640702290; ARK_STARTUP=eyJTVEFSVFVQIjp0cnVlLCJTVEFSVFVQVElNRSI6IjIwMjItMDQtMjcgMTY6NTk6NDUuMTY4In0%3D; Hm_lvt_7ae946d8772f24e770be9d3c78be2b80=1651049986; Hm_lpvt_7ae946d8772f24e770be9d3c78be2b80=1651134518; FZ_STROAGE.thingjs.com=eyJTRUVTSU9OSUQiOiJkZDIxNTNhNTQyMTdjNjEzIiwiU0VFU0lPTkRBVEUiOjE2NTExMzQ1MTgxODAsIkFOU0FQUElEIjoiMzZhMmQwNmU4MGYyZGY2NiIsIkFOUyRERUJVRyI6MCwiQU5TVVBMT0FEVVJMIjoiaHR0cHM6Ly93d3cudGhpbmdqcy5jb20vYXJnby8iLCJGUklTVERBWSI6IjIwMjEwNTEwIiwiRlJJU1RJTUUiOmZhbHNlLCJBUktfSUQiOiJKUzk2NDA1MmQ4MjdiYmFlM2IwMGMyNTI1NWY5ZDg0YjVkOTY0MCIsIkFSS0ZSSVNUUFJPRklMRSI6IjIwMjEtMDUtMTAgMTQ6NTQ6MTIuODI2IiwiQU5TU0VSVkVSVElNRSI6LTM3MywiQVJLX0xPR0lOSUQiOiIxOTc5NjkgIn0%3D",
    },
  },
  function (err, res, body) {
    console.log(body);
  }
);
