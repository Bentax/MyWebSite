export default function Home() {
    return (
        <>
            <h1>Homepage</h1>
            <button
                className="button"
                data-sellix-product="6489b48da784f"
                type="submit"
                alt="Buy Now with sellix.io">💳Daily Subscribe</button>
            <ul className="productBox">
                <li>
                    <a href="/product/143" className="productLink"><img className="productImage" src={require('../assets/images/good-day-to-code.jpg')} alt="It's a good day to code"/></a>
                    <br /><a href="/product/143" className="productLink">It's a good day to code</a>
                </li>
                <li>
                    <a href="/product/486" className="productLink"><img className="productImage" src={require('../assets/images/eat-sleep-code-repeat.jpg')} alt="Eat. Sleep. Code. Repeat."/></a>
                    <br /><a href="/product/486" className="productLink">Eat. Sleep. Code. Repeat.</a>
                </li>
            </ul>
            <button
                className="button"
                data-sellix-product="64884b1838400"
                type="submit"
                alt="Buy Now with sellix.io">💳Monthly Subscribe</button>
        </>
    )
}