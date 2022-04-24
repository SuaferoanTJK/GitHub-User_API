import React from "react";
import { Icons } from "./Icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Card = () => {
  const user = useSelector((state) => state.user);
  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day, mnth, date.getFullYear()].join("-");
  }
  return (
    <main className="profile">
      <div className="profile_mainData">
        <img src={user.avatar_url} alt="Github Avatar" />
        <ul>
          <li className="profile_username">{user.name}</li>
          <li className="profile_nickname">@{user.login}</li>
          <li className="profile_date">Joined {convert(user.created_at)}</li>
        </ul>
      </div>
      <p className="profile_description">
        {user.bio !== null ? user.bio : "Bio not found for this user"}
      </p>
      <div className="profile_stadistics">
        <ul>
          <li>Repos</li>
          <li>{user.public_repos}</li>
        </ul>
        <ul>
          <li>Followers</li>
          <li>{user.followers}</li>
        </ul>
        <ul>
          <li>Following</li>
          <li>{user.following}</li>
        </ul>
      </div>
      <div className="profile_links">
        <ul>
          <li>
            <img
              className="profile_links_icons"
              src={Icons.Location}
              alt="Location Icon"
            />
            {user.location !== null ? user.location : "Not Available"}
          </li>
          <li>
            <img
              className="profile_links_icons"
              src={Icons.Website}
              alt="Website Icon"
            />
            <a href={user.blog}>
              {user.blog !== null ? user.blog : "Not Available"}
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <img
              className="profile_links_icons"
              src={Icons.Twitter}
              alt="Twitter Icon"
            />
            <a href={user.twitter_username}>
              {user.twitter_username !== null
                ? user.twitter_username
                : "Not Available"}
            </a>
          </li>
          <li className="last-icon">
            <img
              className="profile_links_icons"
              src={Icons.Company}
              alt="Company Icon"
            />
            {user.company !== null ? user.company : "Not Available"}
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Card;
