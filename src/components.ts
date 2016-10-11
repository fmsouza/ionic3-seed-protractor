import {HomePage} from './pages/home/page';
import strings from './strings';

export interface MenuItem {
    title: string;
    icon: string;
    component?: any;
    link?: string;
    action?: Function;
    home?: boolean;
}

export const DEFAULT_PAGE: any = HomePage;

export const Components: any = [
    HomePage
];

export const DrawerLinks: MenuItem[] = [
    { title: strings.MENU_OPTION_HOME, icon: 'home', component: HomePage, home: true },
];