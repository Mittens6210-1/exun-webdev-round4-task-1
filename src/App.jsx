import { useState } from 'react';
import './styles.css'

export default function Toggler() {
    const [color, setColor] = useState('White')

    function handleChange(event) {
        setColor(event.target.value)
    }

    return (
        <>
            <section className={color}>

                <div>Toggle Background Color</div>
                <select value={color} onChange={handleChange} >
                    {['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Teal', 'Cyan', 'Orange', 'Purple', 'Pink'].map((Color) => (
                        <option key={Color} value={Color}>
                            {Color}
                        </option>
                    ))}

                </select>

            </section>
        </>
    )
}