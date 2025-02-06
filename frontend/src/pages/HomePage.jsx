import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-300">
      <div className="flex items-center justify-center pt-24 px-4 pb-6">
        <div className="bg-base-100 rounded-2xl shadow-xl w-full max-w-7xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-2xl overflow-hidden border border-base-300">
            <Sidebar />
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
