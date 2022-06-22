import { PUIComponent } from './componentType';

let ModalRef;
let HeaderRef;
let toggle = false;

export const ButtonComponent: PUIComponent = {
    template: `
    <div>
        <button \${click @=> onclick1}>click 1</button>
        <button \${click @=> onclick2}>click 2</button>
    </div>
    `,
    model: {
        onclick1: (_ev, model, element) => {
            if (toggle) {
                HeaderRef.myText = HeaderRef.myText + ' -> I clicked button 1';
                toggle = false;
            } else {
                HeaderRef.myText = 'My Test Header';
                toggle = true;
            }
        },
        onclick2: (_ev, model, element) => {
            ModalRef.isVisible = true;
        },
    },
    onMount: (param1: any, param2: any) => {
        HeaderRef = param2;
        ModalRef = param1;
    },
};
