import React from "react";
import "./RightPanel.css";

const RightPanel = () => {
  return (
    <>
      <div className="right-sidebar">
        <div className="buttons-rightside">
          <div className="flex-row-btn">
            <i class="fa-regular fa-fire"></i>
            <button>Trending</button>
          </div>
          <div className="flex-row-btn">
            <i class="fa-regular fa-eye"></i>
            <button>Latest</button>
          </div>
        </div>
        <h3>Suggestions for you</h3>
        <div className="user-profile">
          <div className="user-img"></div>
          <div className="user-details">
            <div className="user-name">Manish</div>
            <div className="userId">@manish</div>
          </div>
          <button className="btn-follow">Follow</button>
        </div>
        <div className="user-profile">
          <div className="user-img"></div>
          <div className="user-details">
            <div className="user-name">Manish</div>
            <div className="userId">@manish</div>
          </div>
          <button className="btn-follow">Follow</button>
        </div>
        <div className="user-profile">
          <div className="user-img"></div>
          <div className="user-details">
            <div className="user-name">Manish</div>
            <div className="userId">@manish</div>
          </div>

          <button className="btn-follow">Follow</button>
        </div>
        <hr />
      </div>
    </>
  );
};

export default RightPanel;
