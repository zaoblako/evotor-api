Эвотор партнерский API
===

Во вкладке "Интеграция":

В "Авторизация пользователя" и "Регистрация пользователя" добавить текстовое поле 'email' и поле c паролем 'password'

Добавляем в базу данных приложение:

`mongo > db.application.insert({name: "Название приложения", token: "Токен приложения со страницы Интеграция", productId: "UUID приложения (можно посмотреть на https://dev.evotor.ru/#/user/apps/UUID_Приложения здесь)"})`


Для старта сервера запускаем

`DB=mongo://localhost:27017/evotor NODE_ENV=production npm start`

Отладочные логи находятся в `./server/logs/debug.log`