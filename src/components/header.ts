import { PUIComponent } from './componentType';

export const HeaderComponent: PUIComponent = {
    template: `
    <div>
        <h1>\${myText}</h1>
    </div>
    `,
    model: {
        myText: 'My Test Header',
    },
};
