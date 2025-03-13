import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/pages/home-page/home-page.component').then(
        (m) => m.HomePageComponent,
      ),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./features/search/search.routes').then((m) => m.SearchModule),
  },
  {
    path: 'library',
    loadComponent: () =>
      import(
        './features/library/pages/library-page/library-page.component'
      ).then((m) => m.LibraryPageComponent),
  },
  { path: '**', redirectTo: '' },
];
