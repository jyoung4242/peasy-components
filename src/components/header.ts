import { PUIComponent } from '../lib/component';

class cHeaderComponent extends PUIComponent {
    componentName: 'myHeader';
    template: string = `
    <div>
        <h1>\${myText}</h1>
    </div>
    `;
    model: object = {
        myText: 'My Test Header',
    };
}
export const HeaderComponent = new cHeaderComponent();
