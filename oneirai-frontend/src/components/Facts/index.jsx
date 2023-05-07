import './facts.css';

const Facts = () => {

    return (
        <div>
            <p className="feature-title">Did You Know?</p>
            <div class="container-cards">
                <div class="card">
                    <h3 class="title-facts">Animals</h3>
                    <div class="bar">
                        <div class="emptybar"></div>
                     <div className='fact'>Animals dream, although the exact nature of their dreams is uncertain.</div>
                        <div class="filledbar"></div>
                    </div>

                </div>
                <div class="card">
                    <h3 class="title-facts">Google Idea</h3>
                    <div class="bar">
                        <div class="emptybar"></div>
                        <div className='fact'>The idea of Google came to Larry Page in one of his dreams.</div>
                        <div class="filledbar"></div>
                    </div>

                </div>
                <div class="card">
                    <h3 class="title-facts">Shared Dreams</h3>
                    <div class="bar">
                        <div class="emptybar"></div>
                        <div className='fact'>There have been many instances of individuals reporting shared dreams.</div>
                        <div class="filledbar"></div>
                    </div>
                </div>

                <div class="card">
                    <h3 class="title-facts">Gods</h3>
                    <div class="bar">
                        <div class="emptybar"></div>
                        <div className='fact'> Greeks and Romans believed that dreams were messages from the Gods.</div>
                        <div class="filledbar"></div>
                    </div>

                </div>

            </div>
        </div>

    );

};

export default Facts;
