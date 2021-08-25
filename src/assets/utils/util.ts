const utils = {
    isPhone: (): boolean => !!(navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i)),
    throttle: (fn: any, self: any, time: number = 1000) => {
        let flag: boolean = true;
        return (...args: any[]) => {
            if (flag) {
                flag = false;
                setTimeout(() => {
                    flag = true;
                    fn.call(self, ...args);
                }, time);
            }
        };
    },
    debounce: (fn: any, self: any, time: number = 1000) => {
        let timeLock: any = null

        return function (...args: any[]) {
            clearTimeout(timeLock)
            timeLock = setTimeout(() => {
                fn.call(self, ...args)
            }, time)
        }
    },
};

export default utils;
