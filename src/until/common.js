import Vue from 'vue'
  // 页面路由跳转
//   Vue.prototype.jumpForName=(name,query)=>{
//     return function(type){
//         return Vue.$router.push({name,})
//     }
// }

export default {
    // 设置cookie
    // 默认存在30天
    setCookie: (name, value, time = 30) => {
        let exp = new Date()
        exp.setTime(exp.getTime() + 60 * 1000 * time * 60 * 24)
        exp = exp.toGMTString()
        value = escape(value)
        document.cookie = `${name}=${value};expires="${exp}`
    },
    // 获取cookie
    getCookie: name => {
        let str = document.cookie.split('; ')
        str = str.filter(item => !item.indexOf(name))[0]
        if (!str)
            return
        return str.split('=')[1]

    },
    // 删除cookie
    delCookie: name => {
        let exp = new Date();
        exp.setTime(exp.getTime() - 1);
        exp = exp.toGMTString()
        let cval = getCookie(name);
        if (cval != null)
            document.cookie = `${name}=${cval};expires=${exp}`;
    },
}

