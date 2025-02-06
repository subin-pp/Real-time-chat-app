import { useRef, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { Image, Send, X } from "lucide-react";
import toast from "react-hot-toast";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { sendMessage } = useChatStore();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;

    try {
      await sendMessage({
        text: text.trim(),
        image: imagePreview,
      });

      // Clear form
      setText("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className="p-4 bg-base-100 border-t border-base-300">
      {imagePreview && (
        <div className="mb-4">
          <div className="relative inline-block">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-xl border-2 border-primary/20"
            />
            <button
              onClick={removeImage}
              className="absolute -top-2 -right-2 size-6 rounded-full bg-base-300
              flex items-center justify-center hover:bg-base-content/20 transition-colors"
              type="button"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSendMessage} className="flex items-center gap-3">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleImageChange}
        />
        
        <button
          type="button"
          className={`btn btn-circle btn-sm ${imagePreview ? "btn-primary" : "btn-ghost"}`}
          onClick={() => fileInputRef.current?.click()}
        >
          <Image size={18} />
        </button>

        <input
          type="text"
          className="flex-1 input input-bordered rounded-full bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="Type your message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          type="submit"
          className="btn btn-circle btn-primary btn-sm"
          disabled={!text.trim() && !imagePreview}
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};
export default MessageInput;
