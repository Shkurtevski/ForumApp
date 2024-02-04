import React from "react";
import Channel from "./Channel";

const Channels = () => {
  return (
    <React.Fragment>
      <div className="channel-card-container">
        <Channel
          image="https://picsum.photos/id/42/200/300"
          title="connect"
          description="Find like minded people in your channels and nearby"
        />
        <Channel
          image="https://picsum.photos/id/42/200/300"
          title="rooms"
          description="Exclusive chats, updates, and events."
        />
        <Channel
          image="https://picsum.photos/id/25/200/300"
          title="content"
          description="Exclusive UGC from community members."
        />
        <Channel
          image="https://picsum.photos/id/113/200/300"
          title="leaderboards"
          description="See who is leading the pack. Get involved!"
        />
        <Channel
          image="https://picsum.photos/id/77/200/300"
          title="vote"
          description="Let your voice be heard. Create together."
        />
      </div>
    </React.Fragment>
  );
};

export default Channels;
