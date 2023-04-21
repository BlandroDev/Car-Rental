import { Helmet } from "react-helmet"
import { Link } from "wouter"

export const Error = ({error})=> {
    return (
        <section className="error">
            <Helmet>
                <title>Car Rental | Error</title>
            </Helmet>
            <main className="error__main">
            <h1 className="error__h1">{error}</h1>
            <Link href="/" className="error__a">Volver al inicio</Link>
            </main>
        </section>
    )
}