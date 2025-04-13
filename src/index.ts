type LogLevel = 'log' | 'info' | 'warn' | 'error';

export interface cleanlogifyConfig {
    enabled?: boolean;
    tags?: string[];
    colors?: Record<string, string>;
}

const cleanlogify = (() => {
    let enabled = true;
    let allowedTags = new Set<string>();
    let tagColors = new Map<string, string>();

    const config = ({
        enabled: en = true,
        tags = [],
        colors = {},
    }: cleanlogifyConfig = {}) => {
        enabled = en;
        allowedTags = new Set(tags);
        tagColors = new Map(Object.entries(colors));
    };

    const log = (message: any, tag: string = 'default', level: LogLevel = 'log') => {
        if (!enabled) return;
        if (allowedTags.size > 0 && !allowedTags.has(tag)) return;

        const prefix = `[${tag.toUpperCase()}]`;
        const color = tagColors.get(tag) || '#03a9f4';
        console[level](`%c${prefix}`, `color: ${color}; font-weight: bold`, message);
    };

    return {
        config,
        log: (msg: any, tag?: string) => log(msg, tag, 'log'),
        info: (msg: any, tag?: string) => log(msg, tag, 'info'),
        warn: (msg: any, tag?: string) => log(msg, tag, 'warn'),
        error: (msg: any, tag?: string) => log(msg, tag, 'error'),
    };
})();

export default cleanlogify;