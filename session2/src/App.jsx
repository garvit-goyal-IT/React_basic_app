import Contact from "./components/Contact"

export default function App(){
    return (
        <div className="card-container">
        <Contact
            img="../src/images/cat.jpeg"
            name="Mr Whiskerson"
            contact="(120) - 1234 555"
            email="mr@mewo.com"
        />
        <Contact/>
        <Contact/>
        <Contact/>
        </div>
    )
}