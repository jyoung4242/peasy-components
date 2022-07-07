class cModalComponent {
    componentName: 'myModal';
    template = `
    <div>
        <div \${ === isVisible}>
            <div class="outermodaldiv"></div>
            <div class="innermodaldiv">
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                <button \${click @=> closeModal} class="modalButton">Close</button>
            </div>
        </div>
    </div>`;
    model = {
        isVisible: false,
        closeModal: (_ev, model) => {
            console.log(`model: `, model);
            model.isVisible = false;
        },
    };

    onLoad = () => {};
}
export const ModalComponent = new cModalComponent();
