import { UI } from 'peasy-ui';
import './style.css';

//Load Components
import { HeaderComponent } from './components/header';
import { ButtonComponent } from './components/buttons';
import { ModalComponent } from './components/modal';
import { ContentComponent } from './components/content';

let body = document.body;

const uiStringTemplate = `
    <div>
        ${HeaderComponent.template}
        ${ButtonComponent.template}
        ${ModalComponent.template}
        ${ContentComponent.template}
    </div>
`;

let model = {};
model = {
    [HeaderComponent.componentName]: HeaderComponent.model,
    [ButtonComponent.componentName]: ButtonComponent.model,
    [ModalComponent.componentName]: ModalComponent.model,
    [ContentComponent.componentName]: ContentComponent.model,
};
ButtonComponent.onload(ModalComponent.model, HeaderComponent.model);
UI.create(body, uiStringTemplate, model);

setInterval(() => {
    UI.update();
}, 50);
