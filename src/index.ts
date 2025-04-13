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

    const log = (messages: any[], tag: string = 'default', level: LogLevel = 'log') => {
        if (!enabled) return;
        if (allowedTags.size > 0 && !allowedTags.has(tag)) return;

        const prefix = `[${tag.toUpperCase()}]`;
        const color = tagColors.get(tag) || '#03a9f4';
        console[level](`%c${prefix}`, `color: ${color}; font-weight: bold`, ...messages);
    };

    const extractArgs = (args: any[]): { tag: string; messages: any[] } => {
        if (args.length === 0) return { tag: 'default', messages: [] };
        const maybeTag = args[args.length - 1];
        if (typeof maybeTag === 'string') {
            return {
                tag: maybeTag,
                messages: args.slice(0, -1),
            };
        }
        return {
            tag: 'default',
            messages: args,
        };
    };

    return {
        config,
        log: (...args: any[]) => {
            const { tag, messages } = extractArgs(args);
            log(messages, tag, 'log');
        },
        info: (...args: any[]) => {
            const { tag, messages } = extractArgs(args);
            log(messages, tag, 'info');
        },
        warn: (...args: any[]) => {
            const { tag, messages } = extractArgs(args);
            log(messages, tag, 'warn');
        },
        error: (...args: any[]) => {
            const { tag, messages } = extractArgs(args);
            log(messages, tag, 'error');
        },
    };
})();

export default cleanlogify;