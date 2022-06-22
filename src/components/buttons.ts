import { PUIComponent } from './componentType';

export const ButtonComponent: PUIComponent = {
    template: `
    <div>
        <button \${click @=> onclick1}>click 1</button>
        <button \${click @=> onclick2}>click 2</button>
    </div>
    `,
    model: {
        onclick1: (_ev, model, element) => {
            console.log(`I clicked button 1`);
        },
        onclick2: (_ev, model, element) => {
            model.isVisible = true;
        },
    },
};
