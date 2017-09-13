(function () {
  'use strict';

  angular
    .module('favorites')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Favorites',
      state: 'favorites',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'favorites', {
      title: 'List Favorites',
      state: 'favorites.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'favorites', {
      title: 'Create Favorite',
      state: 'favorites.create',
      roles: ['user']
    });
  }
}());
