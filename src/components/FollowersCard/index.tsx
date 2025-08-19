// Import the necessary SVG icons and the useState hook from React
import { dataFake } from "../../api/api";
import DownSvg from "../../assets/icon-down.svg?react";
import UpSvg from "../../assets/icon-up.svg?react";
import FacebookSvg from '../../assets/icon-facebook.svg?react';
import InstagramSvg from "../../assets/icon-instagram.svg?react";
import TwitterSvg from "../../assets/icon-twitter.svg?react";
import YoutubeSvg from "../../assets/icon-youtube.svg?react";
import { useState } from 'react'

// Import the styles for this component
import "./styles.scss";

// Define the shape of the props that this component accepts
type Props = {
  borderTheme?: string;
  data: dataFake;
  key:string
};

// This function takes a string representing a social media platform
// and returns the corresponding SVG icon for that platform
function iconSvg(type: string) {
  switch (type) {
    case "instagram":
      return <InstagramSvg />;
    case "facebook":
      return <FacebookSvg />;
    case "youtube":
      return <YoutubeSvg />;
    default:
      return <TwitterSvg />;
  }
}

// This function takes a fake data object and returns a new object with
// randomly generated numbers for the followers count, followers overview,
// and status (whether the count has gone up or down)
function calculateNumbers(numbers: dataFake) {
  const followers = Math.floor(Math.random() * 100000) + 1000;
  const followersOverview = Math.floor(Math.random() * 1000) + 1000;
  const status = Math.random() < 0.5;

  return {
    followers,
    followersOverview,
    status
  };
}

// This is the main component that renders the followers card
export function FollowersCard({ borderTheme, data, key }: Props) {
  // Initialize the state with a null value
  const [latestNumbers] = useState<dataFake | null>(null);

  // If no data is provided, return null
  if (!data) {
    return null;
  }

  // Calculate the random numbers to be displayed on the card
  const dashboardNumbers = calculateNumbers(latestNumbers || data);

  return (
    // Render the followers card using the provided data and generated numbers
    <div id="followers-card-container">
      <hr className={borderTheme} />
      <div id="followers-card-content" className="center">
        <div id="header-card-followers" className="center">
          {/* Render the SVG icon for the social media platform */}
          {iconSvg(data.type)}
          {/* Render the nickname of the platform */}
          <span>{data.nickname}</span>
        </div>

        <div id="center-card-followers" className="center">
          {/* Render the followers count */}
          <strong>
            {dashboardNumbers.followers}
          </strong>
          {/* Render "subscribers" if the platform is YouTube, "followers" otherwise */}
          <span>{data.type === "youtube" ? "subscribers" : "followers"}</span>
        </div>

        <div
          id="footer-card-followers"
          // Set the class of the card based on whether the count has gone up or down
          className={dashboardNumbers.status ? "green-status" : "red-status"}
        >
          {/* Render the up or down SVG icon depending on the status */}
          {dashboardNumbers.status ? <UpSvg /> : <DownSvg />}
          {/* Render the followers overview */}
          <span>{dashboardNumbers.followersOverview}</span>
          {/* Render the string "Today" */}
          <span>Today</span>
        </div>
      </div>
    </div>
  );
}
