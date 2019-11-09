(function(_window, _document, _location) {
    const on = _window.addEventListener.bind(_window);
    const $ = _document.querySelector.bind(_document);

    const CONSTRUCTOR = '_';
    const DESTRUCTOR = '__';

    const CSS_CLASS__CACHE = '.cache';
    const CSS_CLASS__PAGE_LOGIN = '.page-login';
    const CSS_CLASS__PAGE_HOME = '.page-home';

    //

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
        }
    };

    //

    const user = (function() {
        const user = {};

        const LOCATION_HASH__HOME = '#h';

        user.isGuest = function() {
            return _location.hash.indexOf(LOCATION_HASH__HOME) < 0;
        };

        return user;
    })();

    //

    const router = (function() {
        const router = {
            pages: {},
        };

        const CSS_CLASS__CURRENT_PAGE_CONTAINER = '.current-page-container';

        router.init = function() {
            router.currentPageContainerNode = $(CSS_CLASS__CURRENT_PAGE_CONTAINER);

            router.pageNodeById = {
                [CSS_CLASS__PAGE_LOGIN]: $(CSS_CLASS__PAGE_LOGIN),
                [CSS_CLASS__PAGE_HOME]: $(CSS_CLASS__PAGE_HOME),
            };
        };

        /**
         * pageId acts like page_css_selector (ex. CSS_CLASS__PAGE_LOGIN)
         */
        router.goto = function(pageId) {
            if (router.currentPageId) {
                $(CSS_CLASS__CACHE).appendChild(router.pageNodeById[router.currentPageId]);

                const pageDestructor = router.pages[router.currentPageId][DESTRUCTOR];
                pageDestructor && pageDestructor();
            }

            router.currentPageId = pageId;
            router.currentPageContainerNode.appendChild(router.pageNodeById[pageId]);

            const pageConstructor = router.pages[pageId][CONSTRUCTOR];
            pageConstructor && pageConstructor();
        };

        return router;
    })();

    //

    router.pages[CSS_CLASS__PAGE_LOGIN] = (function(VALUES) {
        const page = {};

        const CSS_CLASS__PAGE_LOGIN__LOGO = '.page-login__logo';
        const CSS_CLASS__PAGE_LOGIN__TITLE = '.page-login__title';
        const CSS_CLASS__PAGE_LOGIN__SUBTITLE = '.page-login__subtitle';
        // const CSS_CLASS__PAGE_LOGIN__FORM = '.page-login__form';

        const CSS_CLASS__ICON__TELEGRAM_LOGO = '.icon__telegram-logo';

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
                    $(CSS_CLASS__PAGE_LOGIN__LOGO).appendChild($(CSS_CLASS__ICON__TELEGRAM_LOGO));
                    $(CSS_CLASS__PAGE_LOGIN__TITLE).innerHTML = VALUES.PAGE_LOGIN.TITLE.DEFAULT;
                    $(CSS_CLASS__PAGE_LOGIN__SUBTITLE).innerHTML = VALUES.PAGE_LOGIN.SUBTITLE.DEFAULT;
                },
                [DESTRUCTOR]: function() {
                    $(CSS_CLASS__CACHE).appendChild($(CSS_CLASS__ICON__TELEGRAM_LOGO));
                },
            },
        };

        return page;
    })(VALUES);

    //

    on('DOMContentLoaded', function() {
        router.init();

        router.goto(user.isGuest()
            ? CSS_CLASS__PAGE_LOGIN
            : CSS_CLASS__PAGE_HOME);
    });
})(window, document, location);
