import { Users, Sparkles, Send, Image } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-200">
      <div className="max-w-md text-center space-y-8">
        {/* New Animated Display */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-primary/10 rounded-2xl transform hover:scale-105 transition-transform">
                <Users className="size-8 text-primary animate-pulse" />
              </div>
              <div className="p-4 bg-secondary/10 rounded-2xl transform hover:scale-105 transition-transform">
                <Send className="size-8 text-secondary animate-pulse" />
              </div>
              <div className="p-4 bg-accent/10 rounded-2xl transform hover:scale-105 transition-transform">
                <Image className="size-8 text-accent animate-pulse" />
              </div>
              <div className="p-4 bg-primary/10 rounded-2xl transform hover:scale-105 transition-transform">
                <Sparkles className="size-8 text-primary animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Content */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Welcome to ChatterBox!
          </h2>
          <p className="text-base-content/60 text-lg">
            Connect, chat, and share with your friends instantly
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-4 pt-4">
          <div className="p-6 rounded-2xl bg-base-100 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/10 rounded-xl">
                <Users className="size-5 text-primary" />
              </div>
              <div className="font-semibold text-primary">Start Chatting</div>
            </div>
            <p className="text-sm text-base-content/60">Select a contact from the sidebar to begin your conversation</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-base-100 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-secondary/10 rounded-xl">
                <Image className="size-5 text-secondary" />
              </div>
              <div className="font-semibold text-secondary">Share Media</div>
            </div>
            <p className="text-sm text-base-content/60">Send photos and files in real-time with your friends</p>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default NoChatSelected;
