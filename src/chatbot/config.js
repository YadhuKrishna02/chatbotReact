import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import AgeDropdown from '../components/DropdownAge/DropdownAge';
import GotItButton from '../components/ButtonWidget/ButtonWidget';
import Calendar from '../components/Calendar/Calendar';
import NameInput from '../components/EnterName/NameField';
import Countdown from '../components/CountDown/CountDown';
const config = {
    botName: 'Genie',
    initialMessages: [
        createChatBotMessage('Hello, Welcome to student info system!', {
            widget: 'gotButton',
        }),
    ],
    widgets: [
        {
            widgetName: 'gotButton',
            widgetFunc: (props) => <GotItButton {...props} />,
        },
        {
            widgetName: 'ageDropdown',
            widgetFunc: (props) => <AgeDropdown {...props} />,
        },
        {
            widgetName: 'calendar',
            widgetFunc: (props) => <Calendar {...props} />,
        },
        {
            widgetName: 'enterName',
            widgetFunc: (props) => <NameInput {...props} />,
        },
        {
            widgetName: 'countDown',
            widgetFunc: (props) => <Countdown {...props} />
        }

    ],
};

export default config;
