class cHeaderComponent {
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
