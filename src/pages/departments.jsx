import "./departaments.css";
import React, { useState, useEffect } from "react";
function departments() {
  return (
    <div>
      <div className="abcont">
        <div>
          <h1 className="wordabout">DEPARTMENTS</h1> <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <a className="wordhome" href="./Home.jsx">
            HOME
          </a>
          <span className="wordab">Departments</span>
        </div>
      </div>
      <div className="departpage">
        <div>
          <h1 className="clinic">Clinical Laboratory</h1>
          <p className="wore">
            Sed rutrum, mi sit amet fringilla feugiat, nunc magna ullamcorper
          </p>
          <p className="wore"> lectusn ac congue nisi est ac orci.</p>
          <br />
          <p className="wore">
            Curabitur ultrices, nunc eu maximus tristique, purus ex ullamcorper
            lacus,
          </p>
          <p className="wore">
            vel scelerisque lectus libero sit amet odio. Duis vel enim in erat
            vulputate
          </p>
          <p className="wore">
            tincidunt eu sed nisi. Aenean vehicula, dui at convallis laoreet.
          </p>
          <br />
          <br />
          <button className="dbt" onClick={() => handleButtonClick("Magazine")}>
            LEARN MORE
          </button>
        </div>
        <div>
          <img className="departimage" src="/public/depart1.jpg" alt="" />
        </div>
      </div>
      <div className="departpage2">
        <div>
          <img className="departimage2" src="/public/depart2.jpg" alt="" />
        </div>
        <div>
          <h1 className="clinic2">Best Equipment</h1>
          <p className="wore2">
            Aenean ut felis risus. Suspendisse sed eros urna. Cras euismod vel
          </p>
          <p className="wore2">
            pretium. Phasellus tincidunt sit amet tellus eu gravida. Cras
            tempor, justo
          </p>
          <p className="wore2">
            non lacinia laoreet, lorem orci facilisis sem, ac tristique eros
            metus sit
          </p>
          <p className="wore2">
            vel scelerisque lectus libero sit amet odio. Duis vel enim in erat
            vulputate
          </p>
          <p className="wore2">
            amet nulla. Praesent ultricies nunc neque, quis fermentum velit
            hendrerit id.
          </p>
          <br />
          <br />
          <button
            className="dbt2"
            onClick={() => handleButtonClick("Magazine")}
          >
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="departpage">
        <div>
          <h1 className="clinic">Nuclear Medicine &Radiology</h1>
          <p className="wore">
            Sed rutrum, mi sit amet fringilla feugiat, nunc magna ullamcorper
            lectus,
          </p>
          <p className="wore"> lectusn ac congue nisi est ac orci.</p>
          <br />
          <p className="wore">
            ac congue nisi est ac orci. Integer posuere scelerisque efficitur.
            Curabitur
          </p>
          <p className="wore">
            vel scelerisque lectus libero sit amet odio. Duis vel enim in erat
            vulputate
          </p>
          <p className="wore">ultrices, nunc eu maximus tristique.</p>
          <br />
          <br />
          <button className="dbt" onClick={() => handleButtonClick("Magazine")}>
            LEARN MORE
          </button>
        </div>
        <div>
          <img className="departimage" src="/public/depart3.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default departments;
