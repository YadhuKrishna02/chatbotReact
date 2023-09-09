class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        const lowercase = message.toLowerCase();
        if (lowercase.length < 1) {
            this.actionProvider.warningMessage()
        }


    }
}

export default MessageParser;
