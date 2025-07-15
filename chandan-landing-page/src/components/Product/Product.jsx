import React, { useState } from 'react';
import './Product.css';
import { ChevronRight, Codepen, Database, Briefcase, RefreshCw, Play } from 'react-feather';

function Product() {
  const [stage, setStage] = useState(0);

  const handlePlayClick = () => {
    if (stage < 4) {
      setStage(stage + 1);
    } else {
      setStage(0);
    }
  };

  return (
    <div className="product-section">
      <div className="top-row">
        <div className="product-card">
          <div className="icon-wrapper"><ChevronRight className="icon" /></div>
          <h3 className="card-heading">Ready to Go Algos</h3>
          <p className="card-description">
            We have ready accelerators embedded with learnings from hundreds of past projects, generating actionable results.
          </p>
        </div>
        <div className="product-card">
          <div className="icon-wrapper"><Codepen className="icon" /></div>
          <h3 className="card-heading">Internal capability building</h3>
          <p className="card-description">
            We productize all our work, enhance them with the latest AI technology, and train your internal teams to leverage them.
          </p>
        </div>
      </div>

      <div className={`horizontal-section stage-${stage}`}>
        <div className="video-icon" onClick={handlePlayClick}>
          <Play className="play-icon" />
        </div>
        <div className="bubble-group">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
      </div>

      <div className="bottom-row">
        <div className="product-card">
          <div className="icon-wrapper"><Database className="icon" /></div>
          <h3 className="card-heading">Multi-source data</h3>
          <p className="card-description">
            Our solutions work with old, new, or incomplete datasets, in different formats, and from varied sources.
          </p>
        </div>
        <div className="product-card">
          <div className="icon-wrapper"><Briefcase className="icon" /></div>
          <h3 className="card-heading">Stakeholder alignment</h3>
          <p className="card-description">
            No black boxes. Stakeholders understand the “how”, “so what” and “now what”, leading to clear decision-making trade offs.
          </p>
        </div>
        <div className="product-card">
          <div className="icon-wrapper"><RefreshCw className="icon" /></div>
          <h3 className="card-heading">Continuous engagement</h3>
          <p className="card-description">
            We engage in the long-term to enhance, course-correct, and adopt new models to continuously refine your work.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
