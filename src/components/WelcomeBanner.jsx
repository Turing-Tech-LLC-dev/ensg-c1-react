// WelcomeBanner component with inline styling

function WelcomeBanner() {
    const styles = {
        backgroundColor: "blue",
        color: "white",
        width: "fit-content",
        padding: "2rem 1rem",
        borderRadius: "20px"
    }

    return (
        <div style={styles}>
            <h2>Welcome to Littleshop</h2>

            <p style={{color: "gold", fontWeight: "800"}}>
                Free delivery on orders over $30.
            </p>
        </div>
    )
}

export default WelcomeBanner;