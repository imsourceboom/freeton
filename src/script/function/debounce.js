export default (f, interval = 30) => {
    let now = null;

    return (...param) => {
        if (now) clearTimeout(now);

        now = setTimeout(() => {
            f(...param);
        }, interval);
    };
};
