import { Component, Prop, h, State } from '@stencil/core';

@Component({
    tag: 'my-buttons',
    styleUrl: 'my-buttons.css',
    shadow: true
})
export class MyButtons {

    @Prop() buttonTitle: string = 'Danger Button';
    @State() openModalState: boolean = false;



    render() {
        console.log(this.buttonTitle);
        return (
            <div class="button-css">
                {this.buttonTitle}
            </div>
        );
    }
}
