export interface TelegramCommonProps {
    chatId?: string;
}

export interface SendMessageProps extends TelegramCommonProps {
    text: string;
}

export interface TelegramBotApiInit extends TelegramCommonProps {
    botToken: string;
}
