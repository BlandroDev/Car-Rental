import { Link } from "wouter"

export const Error = ({error})=> {
    return (
        <section className="error">
            <main className="error__main">
            <h1 className="error__h1">{error}</h1>
            <Link href="/" className="error__a">Volver al inicio</Link>
            </main>
        </section>
    )
}