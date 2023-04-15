import './facts.css';

const Facts = () => {

    return (
        <div>
            <p className="feature-title">Did You Know?</p>
            <div class="container-cards">
                <div class="card">
                    <h3 class="title">Fact 1</h3>
                    <div class="bar">
                        <div class="emptybar"></div>
                        <div class="filledbar"></div>
                    </div>

                </div>
                <div class="card">
                    <h3 class="title">Fact 2</h3>
                    <div class="bar">
                        <div class="emptybar"></div>
                        <div class="filledbar"></div>
                    </div>

                </div>
                <div class="card">
                    <h3 class="title">Fact 3</h3>
                    <div class="bar">
                        <div class="emptybar"></div>
                        <div class="filledbar"></div>
                    </div>
                </div>

                <div class="card">
                    <h3 class="title">Fact 4</h3>
                    <div class="bar">
                        <div class="emptybar"></div>
                        <div class="filledbar"></div>
                    </div>

                </div>

            </div>
        </div>

    );

};

export default Facts;
