class ActionProvider {
    constructor(createChatBotMessage,
        setStateFunc,
        createClientMessage,
        stateRef,
        createCustomMessage,
        ...rest) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
        this.stateRef = stateRef;
        this.createCustomMessage = createCustomMessage;

    }

    handleGotItButtonClick = (text) => {
        const message = this.createClientMessage(text);
        this.addMessageToState(message);
        this.pickSlot()

    };

    handleTimeSlot = (text) => {
        const message = this.createClientMessage(text);
        this.addMessageToState(message);
        this.askName()
    }

    handleNameField = (text) => {
        const message = this.createClientMessage(text);
        this.addMessageToState(message);
        this.askAge()
    }

    handleAgeInput = (age) => {
        const message = this.createClientMessage(age);
        this.addMessageToState(message);


    }
    thankyouMessage = () => {
        const thankMessage = this.createChatBotMessage(`Thank you...`, {
            widget: 'countDown'
        })
        this.addMessageToState(thankMessage);
    }

    addMessageToState = (message) => {
        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    };

    warningMessage = () => {
        const message = this.createChatBotMessage("I did'nt understand you");
        this.addMessageToState(message)
        // return
    }

    pickSlot = () => {
        const message = this.createChatBotMessage(`Pick a slot!`, {
            widget: "calendar"
        });
        this.addMessageToState(message)
        // this.askAge()
    }

    askName = () => {
        const message = this.createChatBotMessage(`Enter your name`, {
            widget: "enterName"
        })
        this.addMessageToState(message)
    }

    askAge = () => {
        const message = this.createChatBotMessage(`Enter your age`, {
            widget: "ageDropdown"
        })
        this.addMessageToState(message)
    }


}

export default ActionProvider;
