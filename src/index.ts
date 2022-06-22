import { UI } from 'peasy-ui';
import './style.css';
console.log(`Hello World`);
import { ButtonComponent } from './components/buttons';
import { ContentComponent } from './components/content';
import { HeaderComponent } from './components/header';
import { PUIComponent } from './components/componentType';

let myComponents: PUIComponent[] = [HeaderComponent, ButtonComponent, ContentComponent];

const loadComponents = (): void => {
    myComponents.forEach(component => {
        console.log(`component string`, component.template);
        console.log('component model', component.model);
        UI.create(document.body, component.template, component.model);
    });
};
loadComponents();
