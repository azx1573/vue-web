export const validateTelPhone = function(rule, value, callback) {
    const reg = new RegExp(
        '^(0|86|17951)?(13[0-9]|15[012356789]|16[0-9]|17[0-8]|18[0-9]|14[5-9]|19[189]|16[6])[0-9]{8}$'
    )
    if (!value) {
        callback(new Error('请输入手机号码'))
    }
    if (!reg.test(value)) {
        callback(new Error('请输入正确的手机号码'))
    } else {
        callback()
    }
}

export const validatePwd = function(rule, value, callback) {
    const reg = new RegExp(
        '(?!.*\\s)(?!^[\u4e00-\u9fa5]+$)(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,18}$'
    )
    if (!value) {
        callback(new Error('请输入密码'))
    } else if (/[\u4E00-\u9FA5]/g.test(value)) {
        callback(new Error('密码不能输入汉字'))
    } else if (value.length < 6) {
        callback(new Error('密码长度为6-18位'))
    } else if (value.length > 18) {
        callback(new Error('密码长度为6-18位'))
    } else if (!reg.test(value)) {
        callback(new Error('密码为数字、字母或者字符中的至少两种'))
    } else {
        callback()
    }
}

export const toQueryString = function(param, key, encode) {
    if (param instanceof FormData) {
        return param
    }

    var paramStr = ''

    //当值为null时转为空字串
    if (param == null) {
        paramStr += '&' + key + '=' + ''
    }

    var t = typeof param
    if (t == 'string' || t == 'number' || t == 'boolean') {
        paramStr +=
            '&' +
            key +
            '=' +
            (encode == null || encode ? encodeURIComponent(param) : param)
    } else {
        for (var i in param) {
            var k =
                key == null
                    ? i
                    : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
            paramStr += toQueryString(param[i], k, encode)
        }
    }
    return paramStr
}
