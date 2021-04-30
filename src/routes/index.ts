export enum AuthRoutes {
  rooms = '/rooms',
  room = '/rooms/details/:id',
  players = '/players',
  player = '/players/details/:id',
}

export enum NonAuthRoutes {
  home = '/',
  login = '/login',
  register = '/register',
}
