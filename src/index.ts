
type LogLevel = 'log' | 'info' | 'warn' | 'error';

interface TagConfig {
  color?: string;
  isBold?: boolean;
  hasTime?: boolean;
  enabled?: boolean;
}

export interface cleanlogifyConfig {
  enabledAll?: boolean;
  tags?: Record<string, TagConfig>;
}

const cleanlogify = (() => {
  let enabledAll = true;
  let tagConfigs: Record<string, TagConfig> = {};

  const config = ({
    enabledAll: ea = true,
    tags = {},
  }: cleanlogifyConfig = {}) => {
    enabledAll = ea;
    tagConfigs = tags;
  };

  const log = (messages: any[], tag: string = 'default', level: LogLevel = 'log') => {
    const tagConfig = tagConfigs[tag] || {};
    const {
      enabled = true,
      color = '#03a9f4',
      isBold = true,
      hasTime = false,
    } = tagConfig;

    if (!enabledAll || !enabled) return;

    const time = hasTime ? new Date().toISOString() + ' ' : '';
    const prefix = time + `[${tag.toUpperCase()}]`;
    const style = `color: ${color}; font-weight: ${isBold ? 'bold' : 'normal'}`;
    console[level](`%c${prefix}`, style, ...messages);
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
