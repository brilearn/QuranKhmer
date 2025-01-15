import DEFAULT_SETTINGS, { DefaultSettings } from '../defaultSettings';

const DEFAULT_TRANSLATION = 84; // Ma Jain

export default {
  ...DEFAULT_SETTINGS,
  translations: { ...DEFAULT_SETTINGS.translations, selectedTranslations: [DEFAULT_TRANSLATION] },
} as DefaultSettings;
