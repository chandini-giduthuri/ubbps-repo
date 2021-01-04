// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  menu: [{
    menuId: 'arrivalData',
    displayName: 'Arrival Data',
    displayOrder: 2,
    parentId: 'auction',
    navigationUrl: '/arrivaldata',
    isHidden: false,
    icon: 'home.svg',
    action: ['upload', 'add', 'delete']
},
{
  menuId: 'viewceiling',
  displayName: 'View Ceiling',
  displayOrder: 2,
  parentId: 'auction',
  navigationUrl: '/viewceiling',
  isHidden: false,
  icon: 'home.svg',
  action: ['upload', 'add', 'delete']
},

{
  menuId: 'auctionDashboard',
  displayName: 'Auction Dashboard',
  displayOrder: 2,
  parentId: 'auction',
  navigationUrl: '/auctiondashboard',
  isHidden: false,
  icon: 'home.svg',
  action: ['add', 'edit', 'delete']
},
{
  menuId: 'mandimaster',
  displayName: 'Mandi Master',
  displayOrder: 2,
  parentId: 'auction',
  navigationUrl: '/mandimaster',
  isHidden: false,
  icon: 'home.svg',
  action: ['add', 'edit', 'delete']
},
{
  menuId: 'roleMaster',
  displayName: 'Role Master',
  displayOrder: 2,
  parentId: 'auction',
  navigationUrl: '/rolemaster',
  isHidden: false,
  icon: 'home.svg',
  action: ['add', 'edit', 'delete']
}
]
};

