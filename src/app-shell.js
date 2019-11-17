(function(_window, _document, _location) {
    const $ = function(cssSelector) {
        return $.cache[cssSelector] = $.cache[cssSelector]
            || _document.querySelector(cssSelector);
    };
    $.cache = {};

    const push = function(hostNodeCssSelector) {
        const hostNode = $(hostNodeCssSelector);

        for (let i=1; i<arguments.length; ++i) {
            const child = arguments[i];
            hostNode.appendChild(typeof child === 'string' ? $(child) : child);
        }
    };

    const html = function(hostNodeCssSelector, newHtmlContent) {
        $(hostNodeCssSelector).innerHTML = newHtmlContent;
    };

    const dup = function(nodeCssSelector) {
        return $(nodeCssSelector).cloneNode(true);
    };

    const on = function(cssSelector, eventNames, callback) {
        eventNames.split(' ').forEach(eventName => {
            $(cssSelector).addEventListener(eventName, callback);
        });
    };

    const show = function(cssSelector) {
        $(cssSelector).style.display = 'block';
    };

    const hide = function(cssSelector) {
        $(cssSelector).style.display = 'none';
    };

    const CONSTRUCTOR = '_';
    const DESTRUCTOR = '__';

    const CSS_CLASS__CACHE = '.cache';

    const CSS_CLASS__PAGE_LOGIN = '.page-login';
    const CSS_CLASS__PAGE_HOME = '.page-home';

    const CSS_CLASS__SINGLE_LINE_INPUT = '.single-line-input';
    const CSS_CLASS__SINGLE_LINE_INPUT_PLACEHOLDER = '.single-line-input-placeholder';

    const CSS_CLASS__ICON__TELEGRAM_LOGO = '.icon__telegram-logo';
    const CSS_CLASS__ICON__CHECKBOX_ON = '.icon__checkbox-on';
    const CSS_CLASS__ICON__CHECKBOX_OFF = '.icon__checkbox-off';
    const CSS_CLASS__ICON__DOWN = '.icon__down';

    const VALUES = {
        PAGE_LOGIN: {
            TITLE: {
                DEFAULT: 'Sign in to Telegram',
                ENTER_NAME: 'Your Name',
                ENTER_PASSWORD: 'Enter a Password',
            },
            SUBTITLE: {
                DEFAULT: 'Please confirm your country and<br>enter your phone number.',
                SMS_SENT: 'We have sent you an SMS<br>with the code.',
            },
            COUNTRY_PLACEHOLDER: {
                DEFAULT: 'Country',
            },
            PHONE_PLACEHOLDER: {
                DEFAULT: 'Phone Number',
            },
            KEEP_SIGNED: 'Keep me signed in',
            NEXT: 'Next',
        },
    };

    const COUNTRIES = [
        '7 840', 'Abkhazia',
        '7 940', 'Abkhazia',
        '995 44', 'Abkhazia',
        '93', 'Afghanistan',
        '358 18', 'Åland Islands',
        '355', 'Albania',
        '213', 'Algeria',
        '1 684', 'American Samoa',
        '376', 'Andorra',
        '244', 'Angola',
        '1 264', 'Anguilla',
        '1 268', 'Antigua & Barbuda',
        '54', 'Argentina',
        '374', 'Armenia',
        '297', 'Aruba',
        '247', 'Ascension',
        '61', 'Australia',
        '672', 'Australian External Territories',
        '43', 'Austria',
        '994', 'Azerbaijan',
        '1 242', 'Bahamas',
        '973', 'Bahrain',
        '880', 'Bangladesh',
        '1 246', 'Barbados',
        '1 268', 'Barbuda',
        '375', 'Belarus',
        '32', 'Belgium',
        '501', 'Belize',
        '229', 'Benin',
        '1 441', 'Bermuda',
        '975', 'Bhutan',
        '591', 'Bolivia',
        '387', 'Bosnia & Herzegovina',
        '267', 'Botswana',
        '55', 'Brazil',
        '246', 'British Indian Ocean Territory',
        '1 284', 'British Virgin Islands',
        '673', 'Brunei',
        '359', 'Bulgaria',
        '226', 'Burkina Faso',
        '257', 'Burundi',
        '855', 'Cambodia',
        '237', 'Cameroon',
        '1', 'Canada',
        '238', 'Cape Verde',
        '599 7', 'Caribbean Netherlands',
        '1 345', 'Cayman Islands',
        '236', 'Central African Republic',
        '235', 'Chad',
        '56', 'Chile',
        '86', 'China',
        '61', 'Christmas Island',
        '61', 'Cocos (Keeling) Islands',
        '57', 'Colombia',
        '269', 'Comoros',
        '242', 'Congo - Brazzaville',
        '243', 'Congo - Kinshasa',
        '682', 'Cook Islands',
        '506', 'Costa Rica',
        '225', 'Côte d’Ivoire',
        '385', 'Croatia',
        '53', 'Cuba',
        '599 9', 'Curaçao',
        '357', 'Cyprus',
        '420', 'Czech Republic',
        '45', 'Denmark',
        '246', 'Diego Garcia',
        '253', 'Djibouti',
        '1 767', 'Dominica',
        '1 809', 'Dominican Republic',
        '1 829', 'Dominican Republic',
        '1 849', 'Dominican Republic',
        '593', 'Ecuador',
        '20', 'Egypt',
        '503', 'El Salvador',
        '240', 'Equatorial Guinea',
        '291', 'Eritrea',
        '372', 'Estonia',
        '251', 'Ethiopia',
        '500', 'Falkland Islands',
        '298', 'Faroe Islands',
        '679', 'Fiji',
        '358', 'Finland',
        '33', 'France',
        '594', 'French Guiana',
        '689', 'French Polynesia',
        '241', 'Gabon',
        '220', 'Gambia',
        '995', 'Georgia',
        '49', 'Germany',
        '233', 'Ghana',
        '350', 'Gibraltar',
        '30', 'Greece',
        '299', 'Greenland',
        '1 473', 'Grenada',
        '590', 'Guadeloupe',
        '1 671', 'Guam',
        '502', 'Guatemala',
        '44', 'Guernsey',
        '224', 'Guinea',
        '245', 'Guinea-Bissau',
        '592', 'Guyana',
        '509', 'Haiti',
        '504', 'Honduras',
        '852', 'Hong Kong SAR China',
        '36', 'Hungary',
        '354', 'Iceland',
        '91', 'India',
        '62', 'Indonesia',
        '98', 'Iran',
        '964', 'Iraq',
        '353', 'Ireland',
        '972', 'Israel',
        '39', 'Italy',
        '1 876', 'Jamaica',
        '81', 'Japan',
        '44', 'Jersey',
        '962', 'Jordan',
        '7 6', 'Kazakhstan',
        '7 7', 'Kazakhstan',
        '254', 'Kenya',
        '686', 'Kiribati',
        '965', 'Kuwait',
        '996', 'Kyrgyzstan',
        '856', 'Laos',
        '371', 'Latvia',
        '961', 'Lebanon',
        '266', 'Lesotho',
        '231', 'Liberia',
        '218', 'Libya',
        '423', 'Liechtenstein',
        '370', 'Lithuania',
        '352', 'Luxembourg',
        '853', 'Macau SAR China',
        '389', 'Macedonia',
        '261', 'Madagascar',
        '265', 'Malawi',
        '60', 'Malaysia',
        '960', 'Maldives',
        '223', 'Mali',
        '356', 'Malta',
        '692', 'Marshall Islands',
        '596', 'Martinique',
        '222', 'Mauritania',
        '230', 'Mauritius',
        '262', 'Mayotte',
        '52', 'Mexico',
        '691', 'Micronesia',
        '373', 'Moldova',
        '377', 'Monaco',
        '976', 'Mongolia',
        '382', 'Montenegro',
        '1 664', 'Montserrat',
        '212', 'Morocco',
        '258', 'Mozambique',
        '95', 'Myanmar (Burma)',
        '264', 'Namibia',
        '674', 'Nauru',
        '977', 'Nepal',
        '31', 'Netherlands',
        '687', 'New Caledonia',
        '64', 'New Zealand',
        '505', 'Nicaragua',
        '227', 'Niger',
        '234', 'Nigeria',
        '683', 'Niue',
        '672', 'Norfolk Island',
        '850', 'North Korea',
        '1 670', 'Northern Mariana Islands',
        '47', 'Norway',
        '968', 'Oman',
        '92', 'Pakistan',
        '680', 'Palau',
        '970', 'Palestinian Territories',
        '507', 'Panama',
        '675', 'Papua New Guinea',
        '595', 'Paraguay',
        '51', 'Peru',
        '63', 'Philippines',
        '64', 'Pitcairn Islands',
        '48', 'Poland',
        '351', 'Portugal',
        '1 787', 'Puerto Rico',
        '1 939', 'Puerto Rico',
        '974', 'Qatar',
        '262', 'Réunion',
        '40', 'Romania',
        '7', 'Russia',
        '250', 'Rwanda',
        '685', 'Samoa',
        '378', 'San Marino',
        '239', 'São Tomé & Príncipe',
        '966', 'Saudi Arabia',
        '221', 'Senegal',
        '381', 'Serbia',
        '248', 'Seychelles',
        '232', 'Sierra Leone',
        '65', 'Singapore',
        '599 3', 'Sint Eustatius',
        '1 721', 'Sint Maarten',
        '421', 'Slovakia',
        '386', 'Slovenia',
        '677', 'Solomon Islands',
        '252', 'Somalia',
        '27', 'South Africa',
        '500', 'South Georgia & South Sandwich Islands',
        '82', 'South Korea',
        '995 34', 'South Ossetia',
        '211', 'South Sudan',
        '34', 'Spain',
        '94', 'Sri Lanka',
        '590', 'St. Barthélemy',
        '290', 'St. Helena',
        '1 869', 'St. Kitts & Nevis',
        '1 758', 'St. Lucia',
        '590', 'St. Martin (France)',
        '508', 'St. Pierre and Miquelon',
        '1 784', 'St. Vincent and the Grenadines',
        '249', 'Sudan',
        '597', 'Suriname',
        '47 79', 'Svalbard',
        '47 79', 'Svalbard & Jan Mayen',
        '268', 'Swaziland',
        '46', 'Sweden',
        '41', 'Switzerland',
        '963', 'Syria',
        '886', 'Taiwan',
        '992', 'Tajikistan',
        '255', 'Tanzania',
        '66', 'Thailand',
        '670', 'Timor-Leste',
        '228', 'Togo',
        '690', 'Tokelau',
        '676', 'Tonga',
        '1 868', 'Trinidad & Tobago',
        '216', 'Tunisia',
        '90', 'Turkey',
        '993', 'Turkmenistan',
        '1 649', 'Turks & Caicos Islands',
        '688', 'Tuvalu',
        '1 340', 'U.S. Virgin Islands',
        '256', 'Uganda',
        '380', 'Ukraine',
        '971', 'United Arab Emirates',
        '44', 'United Kingdom',
        '1', 'United States',
        '598', 'Uruguay',
        '998', 'Uzbekistan',
        '678', 'Vanuatu',
        '39 06 698', 'Vatican City',
        '379', 'Vatican City',
        '58', 'Venezuela',
        '84', 'Vietnam',
        '681', 'Wallis & Futuna',
        '967', 'Yemen',
        '260', 'Zambia',
        '255', 'Zanzibar',
        '263', 'Zimbabwe',
    ];

    const user = (function() {
        const user = {};

        const LOCATION_HASH__HOME = '#h';

        user.isGuest = function() {
            return _location.hash.indexOf(LOCATION_HASH__HOME) < 0;
        };

        return user;
    })();

    const router = (function() {
        const router = {
            pages: {},
        };

        const CSS_CLASS__CURRENT_PAGE_CONTAINER = '.current-page-container';

        router.goto = function(pageId) {
            if (router.currentPageId) {
                push(CSS_CLASS__CACHE, router.currentPageId);

                const pageDestructor = router.pages[router.currentPageId][DESTRUCTOR];
                pageDestructor && pageDestructor();
            }

            router.currentPageId = pageId;
            push(CSS_CLASS__CURRENT_PAGE_CONTAINER, pageId);

            const pageConstructor = router.pages[pageId][CONSTRUCTOR];
            pageConstructor && pageConstructor();
        };

        return router;
    })();

    router.pages[CSS_CLASS__PAGE_LOGIN] = (function(VALUES) {
        const page = {};

        const CSS_CLASS__PAGE_LOGIN__LOGO = '.page-login__logo';
        const CSS_CLASS__PAGE_LOGIN__TITLE = '.page-login__title';
        const CSS_CLASS__PAGE_LOGIN__SUBTITLE = '.page-login__subtitle';
        const CSS_CLASS__PAGE_LOGIN__FORM = '.page-login__form';
        const CSS_CLASS__PAGE_LOGIN__FORM__COUNTRY = '.page-login__form__country';
        const CSS_CLASS__PAGE_LOGIN__FORM__COUNTRY_ACTIVE = '.page-login__form__country-active';
        const CSS_CLASS__PAGE_LOGIN__FORM__COUNTRY__INPUT = CSS_CLASS__PAGE_LOGIN__FORM__COUNTRY + ' ' + CSS_CLASS__SINGLE_LINE_INPUT;
        const CSS_CLASS__PAGE_LOGIN__FORM__COUNTRY__INPUT_PLACEHOLDER = CSS_CLASS__PAGE_LOGIN__FORM__COUNTRY + ' ' + CSS_CLASS__SINGLE_LINE_INPUT_PLACEHOLDER;
        const CSS_CLASS__PAGE_LOGIN__FORM__COUNTRY_SELECT = '.page-login__form__country-select';
        const CSS_CLASS__PAGE_LOGIN__FORM__COUNTRY_SELECT__ROW = '.page-login__form__country-select__row';
        const CSS_CLASS__PAGE_LOGIN__FORM__COUNTRY_SELECT__ROW__TITLE = '.page-login__form__country-select__row__title';
        const CSS_CLASS__PAGE_LOGIN__FORM__COUNTRY_SELECT__ROW__PHONE_CODE = '.page-login__form__country-select__row__phone-code';
        const CSS_CLASS__PAGE_LOGIN__FORM__PHONE = '.page-login__form__phone';
        const CSS_CLASS__PAGE_LOGIN__FORM__PHONE__INPUT = CSS_CLASS__PAGE_LOGIN__FORM__PHONE + ' ' + CSS_CLASS__SINGLE_LINE_INPUT;
        const CSS_CLASS__PAGE_LOGIN__FORM__PHONE__INPUT_PLACEHOLDER = CSS_CLASS__PAGE_LOGIN__FORM__PHONE + ' ' + CSS_CLASS__SINGLE_LINE_INPUT_PLACEHOLDER;
        const CSS_CLASS__PAGE_LOGIN__FORM__KEEP_SIGNED = '.page-login__form__keep-signed';
        const CSS_CLASS__PAGE_LOGIN__FORM__KEEP_SIGNED__TEXT = '.page-login__form__keep-signed__text';
        const CSS_CLASS__PAGE_LOGIN__FORM__PHONE_SUBMIT = '.page-login__form__phone-submit';
        const CSS_CLASS__PAGE_LOGIN__FORM__PHONE_SUBMIT__BUTTON = CSS_CLASS__PAGE_LOGIN__FORM__PHONE_SUBMIT + ' button';

        const STATE_ENTER_PHONE = 1;

        page[CONSTRUCTOR] = function() {
            if (!page.currentState) {
                page.currentState = STATE_ENTER_PHONE;

                const stateConstructor = page.states[STATE_ENTER_PHONE][CONSTRUCTOR];
                stateConstructor && stateConstructor();
            }
        };

        page.states = {
            [STATE_ENTER_PHONE]: {
                [CONSTRUCTOR]: function() {
                    push(CSS_CLASS__PAGE_LOGIN__LOGO, CSS_CLASS__ICON__TELEGRAM_LOGO);
                    html(CSS_CLASS__PAGE_LOGIN__TITLE, VALUES.PAGE_LOGIN.TITLE.DEFAULT);
                    html(CSS_CLASS__PAGE_LOGIN__SUBTITLE, VALUES.PAGE_LOGIN.SUBTITLE.DEFAULT);
                    push(CSS_CLASS__PAGE_LOGIN__FORM,
                        CSS_CLASS__PAGE_LOGIN__FORM__COUNTRY,
                        CSS_CLASS__PAGE_LOGIN__FORM__PHONE,
                        CSS_CLASS__PAGE_LOGIN__FORM__KEEP_SIGNED,
                        CSS_CLASS__PAGE_LOGIN__FORM__PHONE_SUBMIT);
                    $(CSS_CLASS__PAGE_LOGIN__FORM__COUNTRY__INPUT).placeholder
                        = $(CSS_CLASS__PAGE_LOGIN__FORM__COUNTRY__INPUT_PLACEHOLDER).innerText
                        = VALUES.PAGE_LOGIN.COUNTRY_PLACEHOLDER.DEFAULT;
                    $(CSS_CLASS__PAGE_LOGIN__FORM__PHONE__INPUT).placeholder
                        = $(CSS_CLASS__PAGE_LOGIN__FORM__PHONE__INPUT_PLACEHOLDER).innerText
                        = VALUES.PAGE_LOGIN.PHONE_PLACEHOLDER.DEFAULT;
                    $(CSS_CLASS__PAGE_LOGIN__FORM__PHONE_SUBMIT__BUTTON).innerText = VALUES.PAGE_LOGIN.NEXT;
                    html(CSS_CLASS__PAGE_LOGIN__FORM__KEEP_SIGNED__TEXT, VALUES.PAGE_LOGIN.KEEP_SIGNED);
                    push(CSS_CLASS__PAGE_LOGIN__FORM__KEEP_SIGNED, dup(CSS_CLASS__ICON__CHECKBOX_ON));
                    push(CSS_CLASS__PAGE_LOGIN__FORM__KEEP_SIGNED, dup(CSS_CLASS__ICON__CHECKBOX_OFF));
                    push(CSS_CLASS__PAGE_LOGIN__FORM__COUNTRY, dup(CSS_CLASS__ICON__DOWN));

                    for (let i=0; i<COUNTRIES.length; i+=2) {
                        const countryRow = dup(CSS_CLASS__PAGE_LOGIN__FORM__COUNTRY_SELECT__ROW);
                        countryRow.querySelector(CSS_CLASS__PAGE_LOGIN__FORM__COUNTRY_SELECT__ROW__TITLE).innerText = COUNTRIES[i+1];
                        countryRow.querySelector(CSS_CLASS__PAGE_LOGIN__FORM__COUNTRY_SELECT__ROW__PHONE_CODE).innerText = '+' + COUNTRIES[i];
                        push(CSS_CLASS__PAGE_LOGIN__FORM__COUNTRY_SELECT, countryRow);
                    }

                    on(CSS_CLASS__PAGE_LOGIN__FORM__COUNTRY__INPUT, 'focus', function() {
                        $(CSS_CLASS__PAGE_LOGIN__FORM__COUNTRY).classList.add(CSS_CLASS__PAGE_LOGIN__FORM__COUNTRY_ACTIVE.substr(1));
                    });

                    let lastSelectedCountryCode = null;

                    on('body', 'mousedown', function(event) {
                        if (!$(CSS_CLASS__PAGE_LOGIN__FORM__COUNTRY).contains(event.target)) {
                            return $(CSS_CLASS__PAGE_LOGIN__FORM__COUNTRY).classList.remove(CSS_CLASS__PAGE_LOGIN__FORM__COUNTRY_ACTIVE.substr(1));
                        }

                        const row = event.target.closest(CSS_CLASS__PAGE_LOGIN__FORM__COUNTRY_SELECT__ROW);

                        if (row) {
                            const countryName = row.querySelector(CSS_CLASS__PAGE_LOGIN__FORM__COUNTRY_SELECT__ROW__TITLE).innerText;
                            const phoneCode = row.querySelector(CSS_CLASS__PAGE_LOGIN__FORM__COUNTRY_SELECT__ROW__PHONE_CODE).innerText;

                            const currentInputValue = $(CSS_CLASS__PAGE_LOGIN__FORM__PHONE__INPUT).value;

                            const backupedUserInput = lastSelectedCountryCode
                                && currentInputValue.indexOf(lastSelectedCountryCode) === 0
                                && currentInputValue.substr(lastSelectedCountryCode.length + 1);

                            $(CSS_CLASS__PAGE_LOGIN__FORM__COUNTRY__INPUT).value = countryName;
                            $(CSS_CLASS__PAGE_LOGIN__FORM__PHONE__INPUT).value = phoneCode + ' ' + (backupedUserInput || '');

                            lastSelectedCountryCode = phoneCode;

                            $(CSS_CLASS__PAGE_LOGIN__FORM__COUNTRY).classList.remove(CSS_CLASS__PAGE_LOGIN__FORM__COUNTRY_ACTIVE.substr(1));

                            setTimeout(() => {
                                $(CSS_CLASS__PAGE_LOGIN__FORM__PHONE__INPUT).focus();
                            }, 0);
                        }
                    });

                    on(CSS_CLASS__PAGE_LOGIN__FORM__PHONE__INPUT, 'keyup keydown keypress', function(event) {
                        if (event.altKey || event.ctrlKey || event.metaKey
                            || event.keyCode === 8 // backspace
                            || event.keyCode === 46 // delete
                            || (!event.target.value && event.key === '+')
                        ) return;

                        if (!event.key.match(/[0-9 ]/)) {
                            event.preventDefault();
                        }
                    });

                    on(CSS_CLASS__PAGE_LOGIN__FORM__PHONE__INPUT, 'change blur keyup', function(event) {
                        const phone = event.target.value;

                        let phoneValidated = phone
                            .replace(/[^0-9 ]/g, '')
                            .replace(/ {2,}/g, ' ');

                        phoneValidated = '+' + phoneValidated.replace(/^ +/, '');

                        if (phoneValidated !== phone && phone.length) {
                            event.target.value = phoneValidated;
                        }
                    });
                },
                [DESTRUCTOR]: function() {
                    push(CSS_CLASS__CACHE, CSS_CLASS__ICON__TELEGRAM_LOGO);
                },
            },
        };

        return page;
    })(VALUES);

    _window.addEventListener('DOMContentLoaded', function() {
        router.goto(user.isGuest()
            ? CSS_CLASS__PAGE_LOGIN
            : CSS_CLASS__PAGE_HOME);
    });
})(window, document, location);
