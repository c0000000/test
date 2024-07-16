import './HomePage.css';

export const HomePage = () => {
    return (
        <div className='hero'>

            <div className="hero-section-search">
                <h1 className='hero__title'>File <section className='hero__title-section'>Discovery</section> Engine</h1>
                <div className='hero__search'>
                    <input type="search" placeholder="Inserisci argomento" className='hero__search-input' required maxLength="100" />
                    <div className="hero__search-icon"></div>
                </div>
                <div className="hero__file-types">
                    <div className="hero__file-type">
                        <div className="hero__file-type-icon"></div>
                        <p className="hero__file-type-text">.pdf</p>
                    </div>
                    <div className="hero__file-type">
                        <div className="hero__file-type-icon"></div>
                        <p className="hero__file-type-text">.pdf</p>
                    </div>
                    <div className="hero__file-type">
                        <div className="hero__file-type-icon"></div>
                        <p className="hero__file-type-text">.pdf</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
