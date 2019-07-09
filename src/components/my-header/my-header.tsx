import { Component, Prop, h, State } from '@stencil/core';

@Component({
    tag: 'my-header',
    styleUrl: 'my-header.css',
    shadow: true
})
export class MyHeader {

    @Prop() haederTitle: string = 'Header';
    @State() openModalState: boolean = false;



    render() {
        return (
            <div class="my-header">
                {this.haederTitle}
            </div>
        );
    }
}
