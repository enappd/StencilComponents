import { Component, Prop, h, State } from '@stencil/core';

@Component({
    tag: 'my-footer',
    styleUrl: 'my-footer.css',
    shadow: true
})
export class MyFooter {

    @Prop() haederTitle: string = 'Footer';
    @State() openModalState: boolean = false;



    render() {
        return (
            <div class="my-footer">
                {this.haederTitle}
            </div>
        );
    }
}
