import React from 'react';

function LandingPage() {
    return (
        <div className="landing-page" style={{ width: '100%', margin: 'auto' }}>
            <img
                src="https://github.com/hgundogdu53/myPortfolio-hg/blob/master/my%20icon.png?raw=true"
                alt="my-icon"
                className="my-icon"
            />

            <div className="banner-text">
                <h1 className="animated 1 fadeInLeft delay-2s">Huseyin Gundogdu</h1>
                <h2 className="animated 1 fadeInRight delay-2s">UI Developer</h2>
                <hr />
                <p>HTML/CSS | Bootstrap | JavaScript | React | JQuery | NodeJS | Express | PostgreSQL | AWS</p>
            </div>

            <div className="social-links">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/huseyin-developer/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Github */}
                <a href="https://github.com/hgundogdu53" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/* Twitter */}
                <a href="https://twitter.com/hgundogdu53" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
                {/* MovieX */}
                <a href="https://moviex.now.sh" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-film" aria-hidden="true" />
                </a>
            </div>

        </div>
    )
}

export default LandingPage