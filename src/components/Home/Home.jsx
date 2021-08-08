import React from 'react';

const Home = () => {
    return (
        <div>
            <h5 class="title-main">
            Practica tus conocimientos en la categoria que prefieras
        </h5>
        <section class="categories">
            <div class="section-0" href="ask1.html">
                <div class="lang">
                    <div class="progress-bar-circle">
                        <a href="ask1.html">
                            <img src="../assets/icon-html.png" alt="ask HTMl" />
                        </a>
                    </div>
                    <span>html</span>
                </div>
            </div>
            <div class="section-1">
                <div class="lang">
                    <div class="progress-bar-circle">
                        <a href="ask1.html">
                            <img src="../assets/icon-CSS.png" alt="ask CSS" />
                        </a>
                    </div>
                    <span>css</span>
                </div>

                <div class="lang">
                    <div class="progress-bar-circle">
                        <a href="ask1.html">
                            <img src="../assets/icon-JS.png" alt="ask JS" />
                        </a>
                    </div>
                    <span>js</span>
                </div>
            </div>

            <div class="section-2">
                <div class="lang">
                    <div class="progress-bar-circle">
                        <a href="ask1.html">
                            <img src="../assets/icon-figma.png" alt="ask Figma" />
                        </a>
                    </div>
                    <span>figma</span>
                </div>
                
                <div class="lang">
                
                    <div class="progress-bar-circle">
                        <a href="ask1.html">
                            <img src="../assets/icon-UX.png" alt="ask UX" />
                        </a>
                    </div>
                    <span>ux</span>
                </div>
        </section>
            
        </div>
    )
}

export default Home;