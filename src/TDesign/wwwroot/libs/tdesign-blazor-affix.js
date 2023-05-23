import { util } from './tdesign-blazor-util.js';

/** TAffix ��� */

let affix = {
    /**
     * �����ʼ�����������ڸ�ָ����Ԫ�ذ�onscroll�¼���
     * @function affix.init
     * @param {String} container HTMLԪ��id�����Ϊ����ʹ��document.body 
     * @param {DotNetObjectReference<TAffix>} dotnetRef
     */
    init: function (containerId, dotnetRef) {
        let el = containerId? document.getElementById(containerId) : document.body;
        let scroll = function () {
            let boundingClientRect = el.getBoundingClientRect()
            let containerScrollTop = el.scrollTop;
            let containerY = boundingClientRect.y;
            let containerHeight = el.clientHeight;

            console.log("Top:" + containerScrollTop);
            dotnetRef.invokeMethodAsync("Invoke", containerScrollTop, containerY, containerHeight)
        }
        util.setEvent(el, "onscroll", scroll);
    },
    /**
     * ��ȡ�����ǰλ�þ��봰�ڶ��˵ĸ߶�ֵ��offsetTop
     * @param {String} �����Ԫ��id
     * @return {Number} offsetTop
     * */
    positionY: function (containerId) {
        let el = containerId ? document.getElementById(containerId) : document.body;
        return el.getBoundingClientRect().y;
    },
}

export { affix };