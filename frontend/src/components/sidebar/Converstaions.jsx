import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emoji.js";

const Converstaions = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="py-2 flex flex-col overflow-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-corner-rounded-full scrollbar-track-rounded-full">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation.id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIndex={idx === conversations.length - 1}
        />
      ))}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Converstaions;
