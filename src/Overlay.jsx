import React from 'react'

export const Overlay = () => {
    return (
        <Intro />
    )
}

function Intro() {
    return (
        <div className='container'>
            <header>
                <h1>React Three Fiber</h1>
                <p>
                    A React renderer for Three.js
                </p>
                <Customizer />
            </header>
        </div>
    )
}

function Customizer() {
    const colors = ['#ccc', '#EFBD4E', '#80c670', "#726de8", '#EF674E', '#353934']
    return (
        <section key={"custom"}>
            <div className="customizer">
                <div className="color-options">
                    {colors.map((color) => (
                        <div key={color} className='circle' style={{ backgroundColor: color }}></div>
                    ))}
                </div>
            </div>
        </section>
    )
}
