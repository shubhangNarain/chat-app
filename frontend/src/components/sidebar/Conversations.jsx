import useGetConversations from "../../hooks/useGetConversations.js";
import Conversation from "./Conversation";

import { getRandomEmoji } from "../../utils/emoji.js";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log("No of conversations: ", conversations.length);
  console.log("Conversations: ", conversations);
  return (
    <div className="py-2 flex flex-col overflow-hidden">
      {conversations.map((conversation, idx) => {
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversation.length - 1}
        />
      })}
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversations;
