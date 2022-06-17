import React, { Component } from 'react';

/**
 *🏆
 * The goal of this exercise is to get you aquainted with composing
 * different components in React. Here we will create a simple Card
 * component with Header, Body and Footer section. Nothing fancy - each
 * section has different background-color and each section should be 
 * agnostic to what it's displaying. The user of the card
 * should pass "render props" so that the Card can render contents
 * to different section without knowing what they are displaying
 */
class Card extends Component {
    render() {
        return (
            <div className={'card'}>
                <div style={{ backgroundColor: '#99b7c3'}} className={'cardHeader'}>
                    {this.props.renderHeader()}
                </div>
                <div style={{ backgroundColor: '#9676b3'}} >
                    {this.props.renderBody()}
                </div>
                <div style={{ backgroundColor: '#d4ce83'}} >
                    {this.props.renderFooter()}
                </div>
            </div>
        )
    }
}

class CardUser extends Component {
    render() {
        /**
         * ✏️ 
         * We need to pass renderHeader, renderBody and renderFooter props
         * to the Card with what we wanted to display inside that component
         * 🧭  Render props are functions when executed return something to render
         * 🧭  For simplicity with each render props function you can return a div
         *     with the text saying which section it is.
         *     For ex renderHeader can return a <div>Header</div>:
         *          renderHeader={() => <div>Header</div>}
         */
        return (
            <Card 
                renderHeader={() => <div>Header</div> }
                renderBody={() => <div>Body</div> }
                renderFooter={() => <div>Footer</div> }
            />
        )
    }
}


/**
 * 🚨 🚨 DO NOT DELETE OR CHANGE THIS.🚨 🚨
 * This is how you would use your above component 
 * The output of this code is displayed on the browser on the left hand side
 */
const Usage = (props) => {
    return <CardUser />
}

export default Usage;
