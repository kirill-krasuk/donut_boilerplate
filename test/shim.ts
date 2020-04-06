// @ts-ignore
global.requestAnimationFrame = function (callback: any): void {
    setTimeout(callback, 0);
};
