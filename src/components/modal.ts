import { PUIComponent } from './component';

class cModalComponent extends PUIComponent {
    template = `
    <div>
        <div \${ === isVisible}>
            <div class="outermodaldiv"></div>
            <div class="innermodaldiv">
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                <button \${click @=> closeModal} class="modalButton">Close</button>
            </div>
        </div>
    </div>`;
    model = {
        isVisible: false,
        closeModal: (_ev, model, element) => {
            console.log(`model: `, model);
            model.isVisible = false;
        },
    };

    onLoad = () => {};
}
export const ModalComponent = new cModalComponent();
