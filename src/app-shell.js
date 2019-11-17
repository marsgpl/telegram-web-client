(function(_window, _document, _location) {
    const $ = function(cssSelector) {
        return (typeof cssSelector === 'object') ? cssSelector
            : $.cache[cssSelector] = $.cache[cssSelector]
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

    const un = function(cssSelector, eventNames, callback) {
        eventNames.split(' ').forEach(eventName => {
            $(cssSelector).removeEventListener(eventName, callback);
        });
    };

    const show = function(cssSelector, displayValue) {
        $(cssSelector).style.display = displayValue || 'block';
    };

    const hide = function(cssSelector) {
        $(cssSelector).style.display = 'none';
    };

    const normalizeStr = function(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    };

    const prefetchImg = function(url) {
        (new Image).src = url;
    }

    const setVisibility = function(cssSelector, isVisible) {
        $(cssSelector).style.visibility = isVisible ? 'visible' : 'hidden';
    }

    const CONSTRUCTOR_ONCE = '_';
    const CONSTRUCTOR_ONCE_CALLED = '__';
    const CONSTRUCTOR = '____';
    const DESTRUCTOR = '___';

    const CLASS__CACHE = '.cache';
    const CLASS__PAGE_PHONE = '.page-phone';
    const CLASS__PAGE_CODE = '.page-code';
    const CLASS__PAGE_PASS = '.page-pass';
    const CLASS__PAGE_NAME = '.page-name';
    const CLASS__PAGE_HOME = '.page-home';
    const CLASS__SINGLE_LINE_INPUT = '.single-line-input';
    const CLASS__SINGLE_LINE_INPUT__ERROR = '.single-line-input__error';
    const CLASS__SINGLE_LINE_INPUT_PLACEHOLDER = '.single-line-input-placeholder';
    const CLASS__BUTTON = '.button';
    const CLASS__BUTTON_BUSY = '.button-busy';
    const CLASS__ICON__TELEGRAM_LOGO = '.icon__telegram-logo';
    const CLASS__ICON__CHECKBOX_ON = '.icon__checkbox-on';
    const CLASS__ICON__CHECKBOX_OFF = '.icon__checkbox-off';
    const CLASS__ICON__DOWN = '.icon__down';
    const CLASS__ICON__WAIT = '.icon__wait';
    const CLASS__ICON__PENCIL = '.icon__pencil';
    const CLASS__ICON__EYE_ON = '.icon__eye-on';
    const CLASS__ICON__EYE_OFF = '.icon__eye-off';
    const CLASS__ICON__CAMERA_ADD = '.icon__camera-add';

    const MONKEY_PLAIN = 'm1.svg';
    const MONKEY_PEEP = 'm2.svg';
    const MONKEY_CLOSED = 'm3.svg';
    const MONKEY_SIDE_LOOK = 'm4.svg';

    const ROUTE_PHONE = 'phone';
    const ROUTE_CODE = 'code';
    const ROUTE_PASS = 'pwd';
    const ROUTE_NAME = 'name';
    const ROUTE_HOME = 'home';

    const ROUTE_TO_PAGE_CLASS = {
        [ROUTE_PHONE]: CLASS__PAGE_PHONE,
        [ROUTE_CODE]: CLASS__PAGE_CODE,
        [ROUTE_PASS]: CLASS__PAGE_PASS,
        [ROUTE_NAME]: CLASS__PAGE_NAME,
        [ROUTE_HOME]: CLASS__PAGE_HOME,
    };

    const KEY_CODE_ENTER = 13;
    const CONTROL_KEY_CODES = [
        8, // backspace
        9, // tab
        46, // delete
        35, // win end
        36, // win home
        37, // left arrow
        38, // up arrow
        39, // right arrow
        40, // down arrow
    ];

    const VALUES = {
        PAGE_PHONE: {
            TITLE: 'Sign in to Telegram',
            SUBTITLE: 'Please confirm your country and<br>enter your phone number',
            COUNTRY_PLACEHOLDER: 'Country',
            PHONE_PLACEHOLDER: 'Phone Number',
            KEEP_SIGNED: 'Keep me signed in',
            NEXT: 'Next',
            WAIT: 'Please wait...',
        },
        PAGE_CODE: {
            SUBTITLE: 'We have sent you an SMS<br>with the code',
            PLACEHOLDER: 'Code (12345)',
            PLACEHOLDER_INVALID: 'Invalid Code',
        },
        PAGE_PASS: {
            TITLE: 'Enter a Password',
            SUBTITLE: 'Your account is protected with<br>an additional password',
            PLACEHOLDER: 'Password (123)',
            PLACEHOLDER_INVALID: 'Invalid Password',
            NEXT: 'Next',
            WAIT: 'Please wait...',
        },
        PAGE_NAME: {
            TITLE: 'Your Name',
            SUBTITLE: 'Enter your name and add<br>a profile picture',
            PLACEHOLDER_FIRST_NAME: 'Name',
            PLACEHOLDER_LAST_NAME: 'Last Name (optional)',
            SUBMIT: 'Start messaging',
        }
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
        const user = {
            phone: '',
        };

        user.isGuest = function() {
            return true;
        };

        return user;
    })();

    const router = (function() {
        const router = {
            pages: {},
        };

        const CLASS__CURRENT_PAGE_CONTAINER = '.current-page-container';

        router.onHash = function() {
            const route = _location.hash.substr(1);
            const pageId = ROUTE_TO_PAGE_CLASS[route];

            if (router.currentPageId) {
                push(CLASS__CACHE, router.currentPageId);

                const pageDestructor = router.pages[router.currentPageId][DESTRUCTOR];
                pageDestructor && pageDestructor();
            }

            router.currentPageId = pageId;
            push(CLASS__CURRENT_PAGE_CONTAINER, pageId);

            const pageConstructorOnce = router.pages[pageId][CONSTRUCTOR_ONCE];
            if (pageConstructorOnce && !router.pages[pageId][CONSTRUCTOR_ONCE_CALLED]) {
                pageConstructorOnce();
                router.pages[pageId][CONSTRUCTOR_ONCE_CALLED] = true;
            }

            const pageConstructor = router.pages[pageId][CONSTRUCTOR];
            pageConstructor && pageConstructor();
        };

        router.goto = function(route) {
            if (_location.hash.substr(1) === route) {
                router.onHash();
            } else {
                _location.hash = route;
            }
        };

        return router;
    })();

    router.pages[CLASS__PAGE_HOME] = (function() {
        const page = {};

        return page;
    })();

    router.pages[CLASS__PAGE_NAME] = (function() {
        const CLASS__PAGE_NAME__LOGO = '.page-name__logo';
        const CLASS__PAGE_NAME__TITLE = '.page-name__title';
        const CLASS__PAGE_NAME__SUBTITLE = '.page-name__subtitle';
        const CLASS__PAGE_NAME__FORM = '.page-name__form';
        const CLASS__PAGE_NAME__FORM__FIRST_NAME = '.page-name__form__first-name';
        const CLASS__PAGE_NAME__FORM__FIRST_NAME__INPUT = CLASS__PAGE_NAME__FORM__FIRST_NAME + ' ' + CLASS__SINGLE_LINE_INPUT;
        const CLASS__PAGE_NAME__FORM__FIRST_NAME__INPUT_PLACEHOLDER = CLASS__PAGE_NAME__FORM__FIRST_NAME + ' ' + CLASS__SINGLE_LINE_INPUT_PLACEHOLDER;
        const CLASS__PAGE_NAME__FORM__LAST_NAME = '.page-name__form__last-name';
        const CLASS__PAGE_NAME__FORM__LAST_NAME__INPUT = CLASS__PAGE_NAME__FORM__LAST_NAME + ' ' + CLASS__SINGLE_LINE_INPUT;
        const CLASS__PAGE_NAME__FORM__LAST_NAME__INPUT_PLACEHOLDER = CLASS__PAGE_NAME__FORM__LAST_NAME + ' ' + CLASS__SINGLE_LINE_INPUT_PLACEHOLDER;
        const CLASS__PAGE_NAME__FORM__SUBMIT = '.page-name__form__submit';
        const CLASS__PAGE_NAME__FORM__SUBMIT__BUTTON = CLASS__PAGE_NAME__FORM__SUBMIT + ' ' + CLASS__BUTTON;
        const CLASS__PAGE_NAME__FORM__SUBMIT__BUTTON__TEXT = '.page-name__form__submit__text';

        const page = {
            submitting: false,
        };

        page.onSubmit = function(event) {
            const firstName = $(CLASS__PAGE_NAME__FORM__FIRST_NAME__INPUT).value.trim();
            const lastName = $(CLASS__PAGE_NAME__FORM__LAST_NAME__INPUT).value.trim();

            if (!firstName.length) return;

            event.preventDefault();
            event.stopPropagation();

            if (page.submitting) return;
            page.submitting = true;


            router.goto(ROUTE_HOME);
        };

        page[CONSTRUCTOR_ONCE] = function() {
            push(CLASS__PAGE_NAME__LOGO, dup(CLASS__ICON__CAMERA_ADD));
            on(CLASS__PAGE_NAME__FORM, 'submit', page.onSubmit);
            on(CLASS__PAGE_NAME__FORM__SUBMIT__BUTTON, 'click', page.onSubmit);
            on(CLASS__PAGE_NAME__LOGO, 'click', function(event) { alert('TODO'); });
        };

        page[CONSTRUCTOR] = function() {
            html(CLASS__PAGE_NAME__TITLE, VALUES.PAGE_NAME.TITLE);
            html(CLASS__PAGE_NAME__SUBTITLE, VALUES.PAGE_NAME.SUBTITLE);
            $(CLASS__PAGE_NAME__FORM__FIRST_NAME__INPUT).placeholder
                = $(CLASS__PAGE_NAME__FORM__FIRST_NAME__INPUT_PLACEHOLDER).innerText
                = VALUES.PAGE_NAME.PLACEHOLDER_FIRST_NAME;
            $(CLASS__PAGE_NAME__FORM__LAST_NAME__INPUT).placeholder
                = $(CLASS__PAGE_NAME__FORM__LAST_NAME__INPUT_PLACEHOLDER).innerText
                = VALUES.PAGE_NAME.PLACEHOLDER_LAST_NAME;
            $(CLASS__PAGE_NAME__FORM__FIRST_NAME__INPUT).value = '';
            $(CLASS__PAGE_NAME__FORM__LAST_NAME__INPUT).value = '';
            $(CLASS__PAGE_NAME__FORM__FIRST_NAME__INPUT).focus();
            $(CLASS__PAGE_NAME__FORM__SUBMIT__BUTTON__TEXT).innerText = VALUES.PAGE_NAME.SUBMIT;
            page.submitting = false;
        };

        return page;
    })();

    router.pages[CLASS__PAGE_PASS] = (function() {
        const CLASS__PAGE_PASS__LOGO = '.page-pass__logo';
        const CLASS__PAGE_PASS__LOGO_PEEP = '.page-pass__logo_peep';
        const CLASS__PAGE_PASS__TITLE = '.page-pass__title';
        const CLASS__PAGE_PASS__SUBTITLE = '.page-pass__subtitle';
        const CLASS__PAGE_PASS__FORM = '.page-pass__form';
        const CLASS__PAGE_PASS__FORM__PASS = '.page-pass__form__pass';
        const CLASS__PAGE_PASS__FORM__PASS__INPUT = CLASS__PAGE_PASS__FORM__PASS + ' ' + CLASS__SINGLE_LINE_INPUT;
        const CLASS__PAGE_PASS__FORM__PASS__INPUT_PLACEHOLDER = CLASS__PAGE_PASS__FORM__PASS + ' ' + CLASS__SINGLE_LINE_INPUT_PLACEHOLDER;
        const CLASS__PAGE_PASS__FORM__SUBMIT = '.page-pass__form__submit';
        const CLASS__PAGE_PASS__FORM__SUBMIT__BUTTON = CLASS__PAGE_PASS__FORM__SUBMIT + ' ' + CLASS__BUTTON;
        const CLASS__PAGE_PASS__FORM__SUBMIT__BUTTON__TEXT = '.page-pass__form__submit__text';

        const page = {
            submitting: false,
            failedPass: false,
        };

        page.onSubmit = function(event) {
            event.preventDefault();
            event.stopPropagation();

            if (page.submitting) return;
            page.submitting = true;

            const pass = $(CLASS__PAGE_PASS__FORM__PASS__INPUT).value;

            if (pass !== '123') {
                page.failedPass = pass;
                page.submitErrored();
                $(CLASS__PAGE_PASS__FORM__PASS__INPUT).focus();
            } else {
                router.goto(ROUTE_NAME);
            }
        };

        page.submitErrored = function() {
            $(CLASS__PAGE_PASS__FORM__PASS__INPUT).classList.add(CLASS__SINGLE_LINE_INPUT__ERROR.substr(1));
            $(CLASS__PAGE_PASS__FORM__PASS__INPUT_PLACEHOLDER).innerText = VALUES.PAGE_PASS.PLACEHOLDER_INVALID;
            page.submitting = false;
        };

        page.onInput = function(event) {
            const pass = event.target.value;

            if (page.failedPass && pass !== page.failedPass) {
                page.resetError();
            }
        };

        page.resetError = function() {
            $(CLASS__PAGE_PASS__FORM__PASS__INPUT).classList.remove(CLASS__SINGLE_LINE_INPUT__ERROR.substr(1));
            $(CLASS__PAGE_PASS__FORM__PASS__INPUT_PLACEHOLDER).innerText = VALUES.PAGE_PASS.PLACEHOLDER;
            page.failedPass = false;
        };

        page.showPass = function() {
            hide(page.eyeOn);
            show(page.eyeOff);
            $(CLASS__PAGE_PASS__LOGO).classList.add(CLASS__PAGE_PASS__LOGO_PEEP.substr(1));
            $(CLASS__PAGE_PASS__FORM__PASS__INPUT).type = 'text';
        };

        page.hidePass = function() {
            show(page.eyeOn);
            hide(page.eyeOff);
            $(CLASS__PAGE_PASS__LOGO).classList.remove(CLASS__PAGE_PASS__LOGO_PEEP.substr(1));
            $(CLASS__PAGE_PASS__FORM__PASS__INPUT).type = 'password';
        };

        page[CONSTRUCTOR_ONCE] = function() {
            prefetchImg(MONKEY_PEEP);

            on(CLASS__PAGE_PASS__FORM__PASS__INPUT, 'keyup keydown keypress change', page.onInput);
            on(CLASS__PAGE_PASS__FORM, 'submit', page.onSubmit);
            push(CLASS__PAGE_PASS__FORM__PASS, dup(CLASS__ICON__EYE_ON));
            push(CLASS__PAGE_PASS__FORM__PASS, dup(CLASS__ICON__EYE_OFF));

            page.eyeOn = $(CLASS__PAGE_PASS__FORM__PASS).querySelector(CLASS__ICON__EYE_ON);
            page.eyeOff = $(CLASS__PAGE_PASS__FORM__PASS).querySelector(CLASS__ICON__EYE_OFF);

            on(page.eyeOn, 'click', page.showPass);
            on(page.eyeOff, 'click', page.hidePass);
        };

        page[CONSTRUCTOR] = function() {
            html(CLASS__PAGE_PASS__TITLE, VALUES.PAGE_PASS.TITLE);
            html(CLASS__PAGE_PASS__SUBTITLE, VALUES.PAGE_PASS.SUBTITLE);
            $(CLASS__PAGE_PASS__FORM__PASS__INPUT).placeholder
                = $(CLASS__PAGE_PASS__FORM__PASS__INPUT_PLACEHOLDER).innerText
                = VALUES.PAGE_PASS.PLACEHOLDER;
            $(CLASS__PAGE_PASS__FORM__PASS__INPUT).value = '';
            $(CLASS__PAGE_PASS__FORM__PASS__INPUT).focus();
            $(CLASS__PAGE_PASS__FORM__SUBMIT__BUTTON__TEXT).innerText = VALUES.PAGE_PASS.NEXT;
            page.resetError();
            page.submitting = false;
            page.hidePass();
        };

        return page;
    })();

    router.pages[CLASS__PAGE_CODE] = (function() {
        const CLASS__PAGE_CODE__LOGO = '.page-code__logo';
        const CLASS__PAGE_CODE__LOGO_ERROR = '.page-code__logo_error';
        const CLASS__PAGE_CODE__TITLE = '.page-code__title';
        const CLASS__PAGE_CODE__SUBTITLE = '.page-code__subtitle';
        const CLASS__PAGE_CODE__FORM = '.page-code__form';
        const CLASS__PAGE_CODE__FORM__CODE = '.page-code__form__code';
        const CLASS__PAGE_CODE__FORM__CODE__INPUT = CLASS__PAGE_CODE__FORM__CODE + ' ' + CLASS__SINGLE_LINE_INPUT;
        const CLASS__PAGE_CODE__FORM__CODE__INPUT_PLACEHOLDER = CLASS__PAGE_CODE__FORM__CODE + ' ' + CLASS__SINGLE_LINE_INPUT_PLACEHOLDER;

        const page = {
            code: null,
            submitting: false,
        };
        const code = {};

        code.onInput = function(event) {
            if (event.keyCode === KEY_CODE_ENTER) return;
            if (CONTROL_KEY_CODES.includes(event.keyCode)) return;
            if (event.altKey || event.ctrlKey || event.metaKey) return;
            if (!event.key.match(/[0-9]/)) { // block all other non-num
                event.preventDefault();
            }
        };

        code.onInputCheck = function(event) {
            const codeRaw = event.target.value;
            const codeValidated = codeRaw.replace(/[^0-9]/g, '');

            if (codeValidated !== codeRaw && codeRaw.length) {
                event.target.value = codeValidated;
            }

            if (codeValidated.length >= 5) {
                code.submit(codeValidated);
            } else {
                code.submitReset();
            }
        };

        code.submit = function(inputCode) {
            if (page.submitting) return;
            page.submitting = true;

            page.code = parseInt(inputCode);

            if (page.code !== 12345) {
                code.submitErrored();
            } else {
                router.goto(ROUTE_PASS);
            }
        };

        code.submitErrored = function() {
            $(CLASS__PAGE_CODE__FORM__CODE__INPUT).classList.add(CLASS__SINGLE_LINE_INPUT__ERROR.substr(1));
            $(CLASS__PAGE_CODE__FORM__CODE__INPUT_PLACEHOLDER).innerText = VALUES.PAGE_CODE.PLACEHOLDER_INVALID;
            $(CLASS__PAGE_CODE__LOGO).classList.add(CLASS__PAGE_CODE__LOGO_ERROR.substr(1));
            page.submitting = false;
        };

        code.submitReset = function() {
            $(CLASS__PAGE_CODE__FORM__CODE__INPUT).classList.remove(CLASS__SINGLE_LINE_INPUT__ERROR.substr(1));
            $(CLASS__PAGE_CODE__FORM__CODE__INPUT_PLACEHOLDER).innerText = VALUES.PAGE_CODE.PLACEHOLDER;
            $(CLASS__PAGE_CODE__LOGO).classList.remove(CLASS__PAGE_CODE__LOGO_ERROR.substr(1));
            page.submitting = false;
        };

        page[CONSTRUCTOR_ONCE] = function() {
            on(CLASS__PAGE_CODE__TITLE, 'click', () => {
                router.goto(ROUTE_PHONE);
            });

            prefetchImg(MONKEY_SIDE_LOOK);
            prefetchImg(MONKEY_CLOSED);

            on(CLASS__PAGE_CODE__FORM__CODE__INPUT, 'keyup keydown keypress',  code.onInput);
            on(CLASS__PAGE_CODE__FORM__CODE__INPUT, 'keyup change blur', code.onInputCheck);
            on(CLASS__PAGE_CODE__FORM, 'submit', function(event) {
                event.preventDefault();
                event.stopPropagation();
            });
        };

        page[CONSTRUCTOR] = function() {
            html(CLASS__PAGE_CODE__TITLE, user.phone);
            push(CLASS__PAGE_CODE__TITLE, dup(CLASS__ICON__PENCIL));
            html(CLASS__PAGE_CODE__SUBTITLE, VALUES.PAGE_CODE.SUBTITLE);
            $(CLASS__PAGE_CODE__FORM__CODE__INPUT).placeholder
                = $(CLASS__PAGE_CODE__FORM__CODE__INPUT_PLACEHOLDER).innerText
                = VALUES.PAGE_CODE.PLACEHOLDER;

            code.submitReset();

            $(CLASS__PAGE_CODE__FORM__CODE__INPUT).value = '';
            $(CLASS__PAGE_CODE__FORM__CODE__INPUT).focus();
        };

        return page;
    })();

    router.pages[CLASS__PAGE_PHONE] = (function() {
        const CLASS__PAGE_PHONE__LOGO = '.page-phone__logo';
        const CLASS__PAGE_PHONE__TITLE = '.page-phone__title';
        const CLASS__PAGE_PHONE__SUBTITLE = '.page-phone__subtitle';
        const CLASS__PAGE_PHONE__FORM = '.page-phone__form';
        const CLASS__PAGE_PHONE__FORM__COUNTRY = '.page-phone__form__country';
        const CLASS__PAGE_PHONE__FORM__COUNTRY_ACTIVE = '.page-phone__form__country-active';
        const CLASS__PAGE_PHONE__FORM__COUNTRY__INPUT = CLASS__PAGE_PHONE__FORM__COUNTRY + ' ' + CLASS__SINGLE_LINE_INPUT;
        const CLASS__PAGE_PHONE__FORM__COUNTRY__INPUT_PLACEHOLDER = CLASS__PAGE_PHONE__FORM__COUNTRY + ' ' + CLASS__SINGLE_LINE_INPUT_PLACEHOLDER;
        const CLASS__PAGE_PHONE__FORM__COUNTRY_SELECT = '.page-phone__form__country-select';
        const CLASS__PAGE_PHONE__FORM__COUNTRY_SELECT__ROW = '.page-phone__form__country-select__row';
        const CLASS__PAGE_PHONE__FORM__COUNTRY_SELECT__ROW__TITLE = '.page-phone__form__country-select__row__title';
        const CLASS__PAGE_PHONE__FORM__COUNTRY_SELECT__ROW__PHONE_CODE = '.page-phone__form__country-select__row__phone-code';
        const CLASS__PAGE_PHONE__FORM__PHONE = '.page-phone__form__phone';
        const CLASS__PAGE_PHONE__FORM__PHONE__INPUT = CLASS__PAGE_PHONE__FORM__PHONE + ' ' + CLASS__SINGLE_LINE_INPUT;
        const CLASS__PAGE_PHONE__FORM__PHONE__INPUT_PLACEHOLDER = CLASS__PAGE_PHONE__FORM__PHONE + ' ' + CLASS__SINGLE_LINE_INPUT_PLACEHOLDER;
        const CLASS__PAGE_PHONE__FORM__KEEP_SIGNED = '.page-phone__form__keep-signed';
        const CLASS__PAGE_PHONE__FORM__KEEP_SIGNED__TEXT = '.page-phone__form__keep-signed__text';
        const CLASS__PAGE_PHONE__FORM__SUBMIT = '.page-phone__form__submit';
        const CLASS__PAGE_PHONE__FORM__SUBMIT__BUTTON = CLASS__PAGE_PHONE__FORM__SUBMIT + ' ' + CLASS__BUTTON;
        const CLASS__PAGE_PHONE__FORM__SUBMIT__BUTTON__TEXT = '.page-phone__form__submit__text';

        const page = {
            submitting: false,
            phoneValid: false,
        };
        const phone = {};
        const countries = {
            rows: [],
            rowsVisible: 0,
            shown: false,
            selectedCode: null,
        };

        phone.onInput = function(event) {
            if (event.keyCode === KEY_CODE_ENTER) return page.onSubmit(event);
            if (CONTROL_KEY_CODES.includes(event.keyCode)) return;
            if (event.altKey || event.ctrlKey || event.metaKey) return;
            if (!event.target.value && event.key === '+') return; // allow first plus
            if (!event.key.match(/[0-9 ]/)) { // block all other non-num
                event.preventDefault();
            }
        };

        phone.onInputCheck = function(event) {
            const phone = event.target.value;

            let phoneValidated = phone
                .replace(/[^0-9 ]/g, '')
                .replace(/ {2,}/g, ' ');

            phoneValidated = '+' + phoneValidated.replace(/^ +/, '');

            if (phoneValidated !== phone && phone.length) {
                event.target.value = phoneValidated;
            }

            if (phoneValidated.length > 1 && phoneValidated.trim() !== countries.selectedCode) {
                setVisibility(CLASS__PAGE_PHONE__FORM__SUBMIT, true);
                page.phoneValid = true;
            } else {
                setVisibility(CLASS__PAGE_PHONE__FORM__SUBMIT, false);
                page.phoneValid = false;
            }
        };

        countries.show = function() {
            if (!countries.rowsVisible) return;

            $(CLASS__PAGE_PHONE__FORM__COUNTRY).classList.add(CLASS__PAGE_PHONE__FORM__COUNTRY_ACTIVE.substr(1));
            show(CLASS__PAGE_PHONE__FORM__COUNTRY_SELECT);
            return countries.shown = true;
        };

        countries.hide = function() {
            $(CLASS__PAGE_PHONE__FORM__COUNTRY).classList.remove(CLASS__PAGE_PHONE__FORM__COUNTRY_ACTIVE.substr(1));
            hide(CLASS__PAGE_PHONE__FORM__COUNTRY_SELECT);
            return countries.shown = false;
        };

        countries.init = function() {
            for (let i=0; i<COUNTRIES.length; i+=2) {
                const countryRow = dup(CLASS__PAGE_PHONE__FORM__COUNTRY_SELECT__ROW);
                countryRow.querySelector(CLASS__PAGE_PHONE__FORM__COUNTRY_SELECT__ROW__TITLE).innerText = COUNTRIES[i+1];
                countryRow.querySelector(CLASS__PAGE_PHONE__FORM__COUNTRY_SELECT__ROW__PHONE_CODE).innerText = '+' + COUNTRIES[i];
                push(CLASS__PAGE_PHONE__FORM__COUNTRY_SELECT, countryRow);
                countryRow.dataset.title = normalizeStr(COUNTRIES[i+1]);
                countries.rows.push(countryRow);
            }

            countries.rowsVisible = countries.rows.length;
        };

        countries.onInput = function(event) {
            const inputValue = normalizeStr(event.target.value).trim();
            let lastRow = null;

            countries.rowsVisible = 0;

            countries.rows.forEach(countryRow => {
                if (!inputValue.length || countryRow.dataset.title.indexOf(inputValue) === 0) {
                    show(countryRow, 'flex');
                    countries.rowsVisible++;
                    lastRow = countryRow;
                } else {
                    hide(countryRow);
                }
            });

            countries.rowsVisible && countries.show() || countries.hide();

            if (event.keyCode === KEY_CODE_ENTER && countries.rowsVisible === 1) {
                countries.activateRow(lastRow);
            }
        };

        countries.onClick = function(event) {
            if (!$(CLASS__PAGE_PHONE__FORM__COUNTRY).contains(event.target)) {
                return countries.hide();
            }

            const row = event.target.closest(CLASS__PAGE_PHONE__FORM__COUNTRY_SELECT__ROW);

            row && countries.activateRow(row);
        };

        countries.activateRow = function(row) {
            const countryName = row.querySelector(CLASS__PAGE_PHONE__FORM__COUNTRY_SELECT__ROW__TITLE).innerText;
            const phoneCode = row.querySelector(CLASS__PAGE_PHONE__FORM__COUNTRY_SELECT__ROW__PHONE_CODE).innerText;

            const currentInputValue = $(CLASS__PAGE_PHONE__FORM__PHONE__INPUT).value;

            const backupedUserInput = countries.selectedCode
                && currentInputValue.indexOf(countries.selectedCode) === 0
                && currentInputValue.substr(countries.selectedCode.length + 1);

            $(CLASS__PAGE_PHONE__FORM__COUNTRY__INPUT).value = countryName;
            $(CLASS__PAGE_PHONE__FORM__PHONE__INPUT).value = phoneCode + ' ' + (backupedUserInput || '');

            countries.selectedCode = phoneCode;
            countries.hide();

            setTimeout(() => {
                $(CLASS__PAGE_PHONE__FORM__PHONE__INPUT).focus();
            }, 0);
        };

        page.onSubmit = function(event) {
            user.phone = $(CLASS__PAGE_PHONE__FORM__PHONE__INPUT).value.trim();

            if (!user.phone.length) return;

            event.preventDefault();
            event.stopPropagation();

            if (!page.phoneValid) return;
            if (page.submitting) return;
            page.submitting = true;

            $(CLASS__PAGE_PHONE__FORM__SUBMIT__BUTTON).classList.add(CLASS__BUTTON_BUSY.substr(1));
            $(CLASS__PAGE_PHONE__FORM__SUBMIT__BUTTON__TEXT).innerText = VALUES.PAGE_PHONE.WAIT;

            prefetchImg(MONKEY_PLAIN);

            setTimeout(() => {
                router.goto(ROUTE_CODE);
            }, 1000);
        };

        page.submitEnd = function() {
            page.submitting = false;
            $(CLASS__PAGE_PHONE__FORM__SUBMIT__BUTTON).classList.remove(CLASS__BUTTON_BUSY.substr(1));
            $(CLASS__PAGE_PHONE__FORM__SUBMIT__BUTTON__TEXT).innerText = VALUES.PAGE_PHONE.NEXT;
        };

        page[CONSTRUCTOR_ONCE] = function() {
            push(CLASS__PAGE_PHONE__LOGO, dup(CLASS__ICON__TELEGRAM_LOGO));
            push(CLASS__PAGE_PHONE__FORM__KEEP_SIGNED, dup(CLASS__ICON__CHECKBOX_ON));
            push(CLASS__PAGE_PHONE__FORM__KEEP_SIGNED, dup(CLASS__ICON__CHECKBOX_OFF));
            push(CLASS__PAGE_PHONE__FORM__COUNTRY, dup(CLASS__ICON__DOWN));
            push(CLASS__PAGE_PHONE__FORM__SUBMIT__BUTTON, dup(CLASS__ICON__WAIT));

            countries.init();

            on(CLASS__PAGE_PHONE__FORM__COUNTRY__INPUT, 'focus', countries.show);
            on(CLASS__PAGE_PHONE__FORM__COUNTRY__INPUT, 'keyup keypress focus', countries.onInput);
            on(CLASS__PAGE_PHONE__FORM__PHONE__INPUT, 'keyup keydown keypress', phone.onInput);
            on(CLASS__PAGE_PHONE__FORM__PHONE__INPUT, 'keyup change blur', phone.onInputCheck);
            on(CLASS__PAGE_PHONE__FORM, 'submit', page.onSubmit);
            on(CLASS__PAGE_PHONE__FORM__SUBMIT__BUTTON, 'click', page.onSubmit);
        };

        page[CONSTRUCTOR] = function() {
            html(CLASS__PAGE_PHONE__TITLE, VALUES.PAGE_PHONE.TITLE);
            html(CLASS__PAGE_PHONE__SUBTITLE, VALUES.PAGE_PHONE.SUBTITLE);
            $(CLASS__PAGE_PHONE__FORM__COUNTRY__INPUT).placeholder
                = $(CLASS__PAGE_PHONE__FORM__COUNTRY__INPUT_PLACEHOLDER).innerText
                = VALUES.PAGE_PHONE.COUNTRY_PLACEHOLDER;
            $(CLASS__PAGE_PHONE__FORM__PHONE__INPUT).placeholder
                = $(CLASS__PAGE_PHONE__FORM__PHONE__INPUT_PLACEHOLDER).innerText
                = VALUES.PAGE_PHONE.PHONE_PLACEHOLDER;
            html(CLASS__PAGE_PHONE__FORM__KEEP_SIGNED__TEXT, VALUES.PAGE_PHONE.KEEP_SIGNED);

            countries.hide();
            page.submitEnd();

            $(CLASS__PAGE_PHONE__FORM__PHONE__INPUT).focus();

            on('body', 'mousedown', countries.onClick);
        };

        page[DESTRUCTOR] = function() {
            un('body', 'mousedown', countries.onClick);
        };

        return page;
    })();

    on(_window, 'hashchange', router.onHash);

    on(_window, 'DOMContentLoaded', function() {
       router.goto(user.isGuest() ? ROUTE_PHONE : ROUTE_HOME);
    });
})(window, document, location);
