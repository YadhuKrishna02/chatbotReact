class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        const trimmedMessage = message.trim();

        if (trimmedMessage.length === 0) {
            this.actionProvider.warningMessage();
        }


    }
}

export default MessageParser;
