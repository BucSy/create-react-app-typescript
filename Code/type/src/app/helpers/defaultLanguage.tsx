import { Platform, NativeModules } from 'react-native';

let locale = checkLang();

function checkLang() {
    if (Platform.OS === 'ios') {
        switch(NativeModules.SettingsManager.settings.AppleLocale) {
            case 'hu_US':
                return 'hu';
            default:
                return 'en';
        }
    } else if(Platform.OS === 'android') {
        switch(NativeModules.I18nManager.localeIdentifier) {
            case 'hu_HU':
                return 'hu';
            default:
                return 'en';
        }
    }
}

export default locale;