# Web Telegram Client

by @marsgpl

    npm ci
    npm run build

    npm run build && cd release && rm web.zip && zip web.zip ./* && rsync -rv ./* root@eki.one:/var/www/html/eki.one/tg && cd ..

    npx tiny-server src
