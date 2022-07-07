let ModalRef;
let HeaderRef;
let toggle = false;

class cButtonComponent {
    componentName: string = 'myButtons';
    template = `
    <div>
        <button \${click @=> onclick1}>Toggle Modal</button>
        <button \${click @=> onclick2}>Toggle Header</button>
    </div>
    `;
    model: object = {
        onclick1: model => {
            if (toggle) toggle = false;
            else toggle = true;
            ModalRef.isVisible = toggle;
        },
        onclick2: model => {
            if (HeaderRef.myText === 'My Test Header') HeaderRef.myText = 'Changed!!!';
            else HeaderRef.myText = 'My Test Header';
        },
    };

    onload(p1: object, p2: object) {
        ModalRef = p1;
        HeaderRef = p2;
        console.log(`Modal: `, ModalRef);
        console.log(`Header`, HeaderRef);
        console.log(`Buttons: `, this.model);
    }
}
export const ButtonComponent = new cButtonComponent();
