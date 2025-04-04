import chef from '../assets/pngimg.com - chef_PNG130.png'

export default function Header() {
    return (
        <header className="header">
            <img src={chef} alt="Chef logo" />
            <h1>Chef Claude</h1>
        </header>
    )
}