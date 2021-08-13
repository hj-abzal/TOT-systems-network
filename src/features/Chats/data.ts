import { AppStateType, store } from '../../App/store'

// const whoIsUser = (state: AppStateType) => {
//     let id = state.login.loggedId
//     let user = state.registration.registeredUsers[id]
//     return user
//   }
//   let user =
//     whoIsUser(store.getState()).firstName +
//     ' ' +
//     whoIsUser(store.getState()).lastName
export const workChatData = [
  {
    id: 0,
    text: 'Всем доброго дня! Дорогие коллеги, теперь у нас есть свой месенджер для общения и ведения работы совместно.',
    time: '10:15',
    name: 'Василий Иванович',
    url: 'http://www.metalinfo.ru/ru/news/113017_big.jpg',
  },
  {
    id: 1,
    text: 'Спасибо! Таск №125562 выполнена.',
    time: '10:22',
    name: 'Варвара Щербакова',
    url: 'https://robohash.org/3caa555327de23dd0c01e093a1fa5e36?set=set4&bgset=&size=400x400',
  },
  {
    id: 2,
    text: 'Дорогие коллеги! Объявление! С переходом на этот месенджер удаляем все остальные рабочие чаты из дригих приложении и пользуемся только тут. Все услышали?',
    time: '11:00',
    name: 'Александр Сергеев',
    url: 'https://robohash.org/4a615395b3224db9cb222e47f9eec93c?set=set4&bgset=&size=400x400',
  },
  {
    id: 3,
    text: 'Команда 1, вас понял.',
    time: '11:50',
    name: 'Савелий Назаров',
    url: 'https://robohash.org/af3a18b116b7e6235c34874c63ef2a99?set=set4&bgset=&size=400x400',
  },
  {
    id: 4,
    text: 'Команда 2, вас понял',
    time: '11:51',
    name: 'Иван Тихонов',
    url: 'https://robohash.org/bce72c1b89f2d2ec4f679d9eeb2c9b3b?set=set4&bgset=&size=400x400',
  },
  {
    id: 5,
    text: 'Команда 3, вас понял',
    time: '11:52',
    name: 'Юлия Соколова',
    url: 'https://avatars.dicebear.com/v2/female/bce72c1b89f2d2ec4f679d9eeb2c9b3b.svg',
  },
  {
    id: 6,
    text: 'Команда 4, вас понял',
    time: '11:54',
    name: 'Михаил Баженов',
    url: 'https://gravatar.com/avatar/bce72c1b89f2d2ec4f679d9eeb2c9b3b?s=400&d=robohash&r=x',
  },
  {
    id: 7,
    text: 'Команда 5, вас понял',
    time: '11:55',
    name: 'Анна Ильина',
    url: 'https://robohash.org/c29ba1ceea46bef952dc8c38c50a3ee1?set=set4&bgset=&size=400x400',
  },
  {
    id: 8,
    text: 'Команда 6, вас понял',
    time: '11:56',
    name: 'Полина Горшкова',
    url: 'https://robohash.org/772ee4f7922e75ab70c4a5dc273b9187?set=set4&bgset=&size=400x400',
  },
  {
    id: 9,
    text: 'Команда 7, вас понял',
    time: '11:58',
    name: 'Елена Боброва',
    url: 'https://avatars.dicebear.com/v2/female/772ee4f7922e75ab70c4a5dc273b9187.svg',
  },
  {
    id: 10,
    text: 'Такс №15226 сделать макет официального сайта более удобыным для пользывателей и сделать загрузку сайта в два раза быстрее.',
    time: '12:00',
    name: 'Фёдор Раков',
    url: 'https://gravatar.com/avatar/ba35c0fbb904d84d2602e54faa316406?s=400&d=robohash&r=x',
  },
  {
    id: 11,
    text: 'Принято',
    time: '12:05',
    name: 'Александр Жуков',
    url: 'https://gravatar.com/avatar/9ca0fc4bce9569ab268225e1aa91d102?s=400&d=robohash&r=x',
  },
  {
    id: 12,
    text: 'Принято',
    time: '12:10',
    name: 'Константин Павловский',
    url: 'https://gravatar.com/avatar/315721415a8b6678644a0b7dc158d51b?s=400&d=robohash&r=x',
  },
  {
    id: 13,
    text: 'Следующяя зум встреча завтра вечеров в 7 часов.',
    time: '13:30',
    name: 'Марк Жуков',
    url: 'https://gravatar.com/avatar/cdb129cad8543ba85b7fd4a12dc960c8?s=400&d=robohash&r=x',
  },
  {
    id: 14,
    text: 'Провели встречу с потенциальными работниками на фрон енд, передаю его в тех отдел',
    time: '14:00',
    name: 'Лев Архипов',
    url: 'https://avatars.dicebear.com/v2/male/3e7a025019931a8dc28c175de9a0ad05.svg',
  },
  {
    id: 15,
    text: 'Принято. Буду собеседовать по азам JS и React.',
    time: '14:30',
    name: 'Алиса Зимина',
    url: 'https://avatars.dicebear.com/v2/gridy/3e7a025019931a8dc28c175de9a0ad05.svg',
  },
  {
    id: 16,
    text: 'Коллеги, у нас в таблице данные не совпадают. Нужно срочно всем проверить свои отправленные данные',
    time: '15:00',
    name: 'Ксения Морозова',
    url: '',
  },
  {
    id: 17,
    text: 'Таск №1578993 тестировка нового приложения завершена. Передаю для баг фиксинга.',
    time: '15:30',
    name: 'Ева Крылова',
    url: 'https://avatars.dicebear.com/v2/gridy/b1eba6cf7f3f505f82d798f760f352b1.svg',
  },
  {
    id: 17,
    text: 'Таск №45769 дизайн для нового продукта сделано.',
    time: '15:35',
    name: 'Ульяна Ткачева',
    url: 'https://avatars.dicebear.com/v2/gridy/f8acab1f91777e01376bcc42d5f9be97.svg',
  },
  {
    id: 19,
    text: 'Принято, сегодня решу все баги.',
    time: '15:50',
    name: 'Полина Зайцева',
    url: 'https://avatars.dicebear.com/v2/gridy/8059fead71d85be60bd69597a44f2a1e.svg',
  },
  {
    id: 20,
    text: 'Отпраляю запрос на продление сроков проверки нашего отдела.',
    time: '15:55',
    name: 'Дарья Сорокина',
    url: 'https://avatars.dicebear.com/v2/avataaars/af091457a6d71143f070f4c059740c10.svg',
  },
  {
    id: 21,
    text: 'Принято. У вас еще 5 дней тогда',
    time: '16:00',
    name: 'Алисия Морозова',
    url: 'https://avatars.dicebear.com/v2/avataaars/6e9a7a6f1126c69cbcf649a0ac44aa65.svg',
  },
  {
    id: 22,
    text: 'Маркетингые данные пришли, можно приступать к работе.',
    time: '16:30',
    name: 'Матвей Зиновьев',
    url: 'https://avatars.dicebear.com/v2/avataaars/0f0af78d43c2ab106bba0ec932426ae7.svg',
  },
  {
    id: 23,
    text: 'Бухгалтерия получила подтверждение и сегодня всем отправятся бонусы.',
    time: '17:00',
    name: 'Полина Нестерова',
    url: 'https://avatars.dicebear.com/v2/identicon/0f0af78d43c2ab106bba0ec932426ae7.svg',
  },
  {
    id: 24,
    text: 'Благодарю! ',
    time: '17:01',
    name: 'Фёдор Жуков',
    url: 'https://avatars.dicebear.com/v2/avataaars/5343a8b5c2dd753b8fee960c6dcd9ad8.svg',
  },
  {
    id: 15,
    text: 'Сегодня к нам присоединяется новый член команды. Добро пожаловать!',
    time: '17:05',
    name: 'Василий Иванович',
    url: 'http://www.metalinfo.ru/ru/news/113017_big.jpg',
  },
]
