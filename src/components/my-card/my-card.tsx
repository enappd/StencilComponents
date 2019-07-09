import { Component, Prop, h, Method, State } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true
})
export class MyCard {
  /**
   * The first name
   */
  @Prop() title: string;

  /**
   * The middle name
   */
  @Prop() content: string;
  @State() openModalState: boolean = false;


  @Method()
  openModal() {
    this.openModalState = true;
  }

  closeModal() {
    this.openModalState = false;
  }

  render() {
    return (
      <div class="card-css">

        <div class="modal-div">
          <h4> {this.title}</h4>
          <h4>{this.content}</h4>
        </div>
      </div>
    );
  }
}
