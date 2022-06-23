import { UI } from 'peasy-ui';
import './style.css';

//Load Components
import { ButtonComponent } from './components/buttons';
import { ContentComponent } from './components/content';
import { HeaderComponent } from './components/header';
import { ModalComponent } from './components/modal';

let myComponents = [HeaderComponent, ButtonComponent, ContentComponent, ModalComponent];

const loadComponents = (): void => {
    myComponents.forEach(component => UI.create(document.body, component.template, component.model));
    ButtonComponent.onLoad(ModalComponent.model, HeaderComponent.model);
};
loadComponents();

setInterval(() => {
    UI.update();
}, 50);
