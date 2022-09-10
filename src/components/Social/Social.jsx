import React from "react";
import "./social.scss";

function Card({ data }) {
  const string = data.story;
  return (
    <div className="card">
      <div className="card__image-box">
        <img src={data.image} alt="cover" className="card__image" />
      </div>
      <div className="card__footer">
        <h4 className="card__title">{data.title}</h4>
        <p className="card__story">
          {string < 100 ? string : string.substr(0, 100) + "..."}
        </p>
        <p className="card__url">{data.url}</p>
      </div>
    </div>
  );
}

const CommentButton = ({ data }) => (
  <span className="post__button post__button--comment">
    <i className="far fa-comment" />
    {data.comments}
  </span>
);

const RetweetButton = ({ data }) => (
  <span className="post__button post__button--retweet">
    <i className="fas fa-retweet" />
    {data.retweets}
  </span>
);

const HeartButton = ({ data }) => (
  <span className="post__button post__button--heart">
    <i className="fas fa-heart" />
    {data.hearts}
  </span>
);

const MessageButton = ({ data }) => (
  <span className="post__button post__button--message">
    <i className="far fa-envelope" />
    {data.messages}
  </span>
);

function Post({ data }) {
  return (
    <div className="post">
      <div className="post__left">
        <img src={data.avatar} alt="avatar" className="post__avatar" />
        <div className="post__header">
          <p className="post__name">{data.name}</p>
          <p className="post__quote">{data.quote}</p>
          <p className="post__handle">@{data.handle}</p>
        </div>
      </div>
      <div className="post__right">
        <Card data={data} />
        <div className="post__footer">
          <CommentButton data={data} />
          <RetweetButton data={data} />
          <HeartButton data={data} />
          <MessageButton data={data} />
        </div>
      </div>
    </div>
  );
}

function Social({ data }) {
  const feed = data.map((post) => <Post data={post} />);
  return (
    <div className="con">
      <div className="container">{feed}</div>
    </div>
  );
}

export default Social;
