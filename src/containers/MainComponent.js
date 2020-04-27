import React, {Component} from 'react'
import HeaderComponent from './HeaderComponent';
import SignupComponent from './SignupComponent';
import FooterComponent from '../functional/FooterComponent';

class MainComponent extends Component{
    render() {
        return (
            <div>     
                {/* <HeaderComponent id="header" title={this.props.name}></HeaderComponent> */}
                {/* <SignupComponent id="login"></SignupComponent>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <FooterComponent id="footer"></FooterComponent> */}
            </div>
        );
    }
}

export default MainComponent;
    