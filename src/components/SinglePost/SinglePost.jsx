import React from "react";
import "./SinglePost.css";

const SinglePost = () => {
  return (
    <div>
      <div className="post-container">
        <di className="user-img">
          <img
            src="https://picsum.photos/id/1012/150"
            alt=""
            className="user-img"
          />
        </di>
        <div className="post-details">
          <div className="user-info">
            <div className="user-detail">
              <div className="loggedIn-details">
                <div className="user-name">manish kumar gupta</div>
                <div className="user-id">@manishgupta</div>
              </div>

              <div className="post-date">24 June 2023</div>
              <div className="sort-icon">
                <i class="fa-solid fa-list"></i>
              </div>
            </div>
          </div>
          <div className="post-content">
            <div>
              Went to this hangout place, Bob's in Marathalli yesterday. The
              ambience is real good and the mocktails are really fresh.
            </div>
          </div>
          <div className="post-img">
            <img
              className="post-img"
              src="https://res.cloudinary.com/dwebygldw/image/upload/v1652908952/frittr/zwpmppawiyxwthsmikyk.webp"
              alt=""
            />
          </div>
          <div className="task-btn">
            <button>
              <i class="fa-regular fa-thumbs-up fa-xl"></i>
            </button>
            <button>
              <i class="fa-regular fa-bookmark fa-xl"></i>
            </button>
            <button>
              <i class="fa-regular fa-comment fa-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
