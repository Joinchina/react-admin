import React, { Component } from 'react'
import Sider from './components/sidebar/sidebar'


export default class App extends Component {
    render() {
        return (
            <div style={{
                width:'100%',
                overflow:'hidden'
            }}>
                <header style={{
                    height:'60px',
                    width:'100%',
                    backgroundColor:'#999'
                }}>

                </header>
                <div style={{
                    display:'flex',
                    flexDirection:'row',
                }}>
                <Sider/>
                <div style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                        flex:1
                    }}>
                        Content
                </div>
                </div>
            </div>
        )
    }
}
