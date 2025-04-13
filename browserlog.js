const browserLogger = (() => {
    let enabled = true;
    let allowedTags = new Set();
    let tagColors = new Map();

    const config = ({
        enabled: en = true,
        tags = [],
        colors = {},

    } = {}) => {
        enabled = en;
        allowedTags = new Set(tags);
        tagColors = new Map(Object.entries(colors));
    };

    const log = (message, tag = 'default', level = 'log') => {

        if (allowedTags.size > 0 && !allowedTags.has(tag)) {
            return;
        }

        const prefix = `[${tag.toUpperCase()}]`;
        const color = tagColors.get(tag) || '#03a9f4';
        console[level](
            `%c${prefix}`,
            `color: ${color}; font-weight: bold`,
            message,
        );
    };

    return {
        config,
        log: (msg, tag) => log(msg, tag, 'log'),
        info: (msg, tag) => log(msg, tag, 'info'),
        warn: (msg, tag) => log(msg, tag, 'warn'),
        error: (msg, tag) => log(msg, tag, 'error'),
    };
})();

browserLogger.config({
    enabled: true,
    tags: ['c'],
    colors: {
        a: '#4caf50',
        b: '#ff9800',
        c: '#9c27b0',
    },
});

browserLogger.log('11111111111111111111111111111111', 'a');
browserLogger.log('22222222222222222222222222222222', 'a');
browserLogger.log('33333333333333333333333333333333', 'a');
browserLogger.log('44444444444444444444444444444444', 'a');
browserLogger.log('55555555555555555555555555555555', 'b');
browserLogger.log('66666666666666666666666666666666', 'b');
browserLogger.warn('77777777777777777777777777777777', 'c');
browserLogger.warn('88888888888888888888888888888888', 'c');


cleanlog