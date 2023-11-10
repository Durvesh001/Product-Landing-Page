const Hero = () => {
    return (
        <main className="hero">
        <div className="hero-content">
            <h1>Your Feet Deserves Better</h1>
            <p>You the Best. Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. 
                Molestiae consequuntur numquam nisi 
                quid</p>
        
        <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
            <p>Also available on</p>
            <div className="brand-icons">
                <img src="/images/amazon.png" alt="Amazon logo" />
                <img src="/images/flipkart.png" alt="Amazon logo" />
            </div>
        </div>

        </div>

        <div className="hero-image">
        <img src="/images/shoe_image.png" alt="shoes image" />
        </div>
    </main>
    );
        
};

export default Hero;