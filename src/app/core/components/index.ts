export * from './header-bar.component';
export * from './header-bar-brand.component';

import { HeaderBarBrandComponent } from './header-bar-brand.component';
import { HeaderBarLinksComponent } from './header-bar-links.component';
import { HeaderBarComponent } from './header-bar.component';
import { NavComponent } from './nav.component';

export const declarations = [
  NavComponent,
  HeaderBarComponent,
  HeaderBarBrandComponent,
  HeaderBarLinksComponent,
];
