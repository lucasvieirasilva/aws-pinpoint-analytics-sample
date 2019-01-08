import Amplify, {
    Analytics
} from 'aws-amplify';

Amplify.configure({
    Auth: {
        region: process.env.REACT_APP_AWS_REGION,
        identityPoolId: process.env.REACT_APP_AWS_IDENTITY_POOL_ID,
        userPoolId: process.env.REACT_APP_AWS_USER_POOL_ID,
        userPoolWebClientId: process.env.REACT_APP_AWS_USER_POOL_CLIENT_ID,
    },
    Analytics: {
        AWSPinpoint: {
            region: process.env.REACT_APP_AWS_REGION,
            appId: process.env.REACT_APP_AWS_PINPOINT_APP_ID,
            mandatorySignIn: false
        }
    }
});

Amplify.Logger.LOG_LEVEL = 'DEBUG'

Analytics.autoTrack('pageView', {
    enable: true,
    eventName: 'pageView',
    type: 'SPA',
    provider: 'AWSPinpoint',
    getUrl: () => {
        return window.location.origin + window.location.pathname;
    }
});