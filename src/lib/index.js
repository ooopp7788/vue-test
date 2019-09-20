/* global require, module, window */
import XHR from './xhr';

/*!
    Mock - 模拟请求 & 模拟数据
    https://github.com/nuysoft/Mock
    墨智 mozhi.gyy@taobao.com nuysoft@gmail.com
*/
var Mock = {
    XHR: XHR,
    setup: function(settings) {
        return XHR.setup(settings)
    },
    _mocked: {},
    _sendWait: null
}

Mock.version = '1.0.1-beta3' // 修改后，只保留mock功能

// 避免循环依赖
if (XHR) XHR.Mock = Mock

/*
    * Mock.mock( template )
    * Mock.mock( function() )
    * Mock.mock( rurl, template )
    * Mock.mock( rurl, function(options) )
    * Mock.mock( rurl, rtype, template )
    * Mock.mock( rurl, rtype, function(options) )

    根据数据模板生成模拟数据。
*/
Mock.start = function() {
  // 拦截 XHR
  if (XHR && window.XMLHttpRequest !== XHR) window.XMLHttpRequest = XHR;
};

Mock.mock = function(rurl, rtype, template) {
    // Mock.mock(rurl, template)
    if (arguments.length === 2) {
        template = rtype
        rtype = undefined
    }
    Mock.start();
    Mock._mocked[rurl + (rtype || '')] = {
        rurl: rurl,
        rtype: rtype,
        template: template
    }
    return Mock
}

export default Mock