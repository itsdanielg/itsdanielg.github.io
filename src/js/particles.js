import React from 'react';
import Particles from 'react-particles-js';
import '../css/particles.css';

function ParticlesBG() {

    return (
        <Particles className="particles-bg"
            params={
                {
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }
            }
        />
    );

}

export default ParticlesBG;