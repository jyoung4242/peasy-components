import { UI } from 'peasy-ui';
import './style.css';

//Load Components
import { ButtonComponent } from './components/buttons';
import { ContentComponent } from './components/content';
import { HeaderComponent } from './components/header';
import { ModalComponent } from './components/modal';

let body = document.body;

const uiStringTemplate = `
    <div>
        \${HeaderComponent.template}
    </div>
`;

let model = {};
 model = {...model, HeaderComponent.model};

UI.create(body, uiStringTemplate, model);

setInterval(() => {
    UI.update();
}, 50);
