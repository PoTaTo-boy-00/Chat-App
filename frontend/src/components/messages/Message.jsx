import { useAuthContext } from "../../context/authContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConverstaion";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderID === authUser.id;

  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat chat-end" : " chat chat-start";

  // console.log(chatClassName);
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  const shakeClass = message.shouldShake ? "shake" : "";

  // ${chatClassName}
  return (
    <div className={chatClassName}>
      <div className="chat-image avatar flex-nowrap">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div
        className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}  pb-2`}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-gray-900">
        {formattedTime}
      </div>
    </div>
  );
};
export default Message;
