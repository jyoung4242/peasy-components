class cHeaderComponent {
    componentName: string = 'myHeader';
    template: string = `
    <div>
        <h1>\${myHeader.myText}</h1>
    </div>
    `;
    model: object = {
        myText: 'My Test Header',
    };
}
export const HeaderComponent = new cHeaderComponent();
