import { Injectable } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeGerman from '@angular/common/locales/de';
import localeEnglish from '@angular/common/locales/en';
import localeArabic from '@angular/common/locales/ar';
import { TranslateService } from '@ngx-translate/core';
import { FlagService } from './flag.service';

@Injectable({
    providedIn: 'root',
})
export class I18nService {
    public static activeLocaleKey: string;

    constructor(private translate: TranslateService, private flagService: FlagService) {}

    /**
     * Init service
     */
    public init(): void {
        this.registerLocales();

        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang('en-US');
        // this.translate.setDefaultLang('de-DE');

        this.flagService.appLanguage$.subscribe((languageKey) => {
            I18nService.activeLocaleKey = languageKey;

            // the language to use
            this.translate.use(I18nService.activeLocaleKey);

            // right-to-left direction
            if (languageKey === 'ar-SA') {
                document.querySelector('body').classList.add('rtl');
            } else {
                document.querySelector('body').classList.remove('rtl');
            }
        });
    }

    /**
     * Import Angular language formats
     */
    private registerLocales(): void {
        registerLocaleData(localeGerman);
        registerLocaleData(localeEnglish);
        registerLocaleData(localeArabic);
    }
}
