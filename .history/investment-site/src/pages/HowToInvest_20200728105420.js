import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import 

class HowToInvest extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Menu />
                <div className="container">
                    <h3>How To Ivest</h3>
                    <ul>
                        <li>Copy the websiteis bitcoin address.</li>
                        <li>Make an off-app deposit to the address.</li>
                        <li>For bank transfer, use ...</li>
                        <li>Click on the investment you chose and upload proof of payment.</li>
                    </ul>
                    <div className="btnBox">
                        
                    </div>
                </div>  
            </>
        )
    }
}

export default HowToInvest
