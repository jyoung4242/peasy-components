import { UI } from 'peasy-ui';
import './style.css';
console.log(`Hello World`);
import { ButtonComponent } from './components/buttons';
import { ContentComponent } from './components/content';
import { HeaderComponent } from './components/header';
import { ModalComponent } from './components/modal';
import { PUIComponent } from './components/componentType';

let myComponents: PUIComponent[] = [HeaderComponent, ButtonComponent, ContentComponent, ModalComponent];

const loadComponents = (): void => {
    myComponents.forEach(component => UI.create(document.body, component.template, component.model));
    ButtonComponent.onMount(ModalComponent.model, HeaderComponent.model);
};

loadComponents();

setInterval(() => {
    UI.update();
}, 100);
