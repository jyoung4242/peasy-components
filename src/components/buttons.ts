let ModalRef;
let HeaderRef;
let toggle = false;

class cButtonComponent {
    componentName: 'myButtons';
    template = `
    <div>
        <button \${click @=> onclick1}>click 1</button>
        <button \${click @=> onclick2}>click 2</button>
    </div>
    `;
    model: object = {};
}
export const ButtonComponent = new cButtonComponent();
