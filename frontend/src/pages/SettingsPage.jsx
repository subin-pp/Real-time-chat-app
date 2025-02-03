import { useThemeStore } from "../store/useThemeStore.js";

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="h-screen container mx-auto px-4 pt-20 max-w-5xl">
      <div className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold">Notification Settings</h2>
          <p className="text-sm text-base-content/70">Manage your notification preferences</p>
        </div>

        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-3">
            <input type="checkbox" className="toggle toggle-primary" />
            <span className="text-sm">Enable Push Notifications</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="toggle toggle-primary" />
            <span className="text-sm">Email Notifications</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="toggle toggle-primary" />
            <span className="text-sm">Message Alerts</span>
          </label>
        </div>

        {/* Theme Settings Section */}
        <div className="flex flex-col gap-3 mt-8">
          <h3 className="text-lg font-semibold">Theme Settings</h3>
          <p className="text-sm text-base-content/70">Choose your theme</p>
          <div className="flex gap-4">
            <button
              className={`btn ${theme === 'light' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setTheme('light')}
            >
              Light Mode
            </button>
            <button
              className={`btn ${theme === 'dark' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setTheme('dark')}
            >
              Dark Mode
            </button>
          </div>
        </div>

        {/* Security Settings Section */}
        <div className="flex flex-col gap-3 mt-8">
          <h3 className="text-lg font-semibold">Security Settings</h3>
          <p className="text-sm text-base-content/70">Manage your account security</p>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="toggle toggle-primary" />
            <span className="text-sm">Enable Two-Factor Authentication</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="toggle toggle-primary" />
            <span className="text-sm">Change Password</span>
          </label>
        </div>
        {/* App Version Section */}
        <div className="flex flex-col gap-3 mt-8 pb-5">
          <h3 className="text-lg font-semibold">App Version</h3>
          <p className="text-sm text-base-content/70">Current Version: 1.0.0</p>
          <button className="btn btn-outline w-full">Check for Updates</button>
        </div>      
      </div>
    </div>
  );
};

export default SettingsPage;
