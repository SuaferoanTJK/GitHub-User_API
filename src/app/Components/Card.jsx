import React from "react";
import { Icons } from "./Icons";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <main className="profile">
      <div className="profile_mainData">
        <img src={Icons.Company} alt="Github Avatar" />
        <ul>
          <li className="profile_username">The Octocat</li>
          <li className="profile_nickname">@octocat</li>
          <li className="profile_date">Joined 25 Jan 2011</li>
        </ul>
      </div>
      <p className="profile_description">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>
      <div className="profile_stadistics">
        <ul>
          <li>Repos</li>
          <li>8</li>
        </ul>
        <ul>
          <li>Followers</li>
          <li>3938</li>
        </ul>
        <ul>
          <li>Following</li>
          <li>9</li>
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
            San Francisco
          </li>
          <li>
            <img
              className="profile_links_icons"
              src={Icons.Website}
              alt="Website Icon"
            />
            <Link to="https://github.blog">https://github.blog</Link>
          </li>
        </ul>
        <ul>
          <li>
            <img
              className="profile_links_icons"
              src={Icons.Twitter}
              alt="Twitter Icon"
            />
            <Link to="/">Not Available</Link>
          </li>
          <li className="last-icon">
            <img
              className="profile_links_icons"
              src={Icons.Company}
              alt="Company Icon"
            />
            @github
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Card;
