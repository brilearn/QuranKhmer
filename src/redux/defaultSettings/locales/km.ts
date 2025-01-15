import DEFAULT_SETTINGS, { DefaultSettings } from '../defaultSettings';

import { QuranFont } from 'types/QuranReader';

const DEFAULT_TRANSLATION = 84; // Ma Jain

export default {
  ...DEFAULT_SETTINGS,
  quranReaderStyles: {
    ...DEFAULT_SETTINGS.quranReaderStyles,
    quranFont: QuranFont.khmer,
  },
  translations: { ...DEFAULT_SETTINGS.translations, selectedTranslations: [DEFAULT_TRANSLATION] },
} as DefaultSettings;
