// @ts-ignore
global.requestAnimationFrame = function (callback: Function) {
    setTimeout(callback, 0);
};
