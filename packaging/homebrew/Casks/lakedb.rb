cask "lakedb" do
  version "1.0.0-beta.5.0"
  sha256 "084a0f4cd78cb0ce8e64fb57565de36c96f08c8909b78bd8bddcad0e52b63b09"

  url "https://github.com/DavLagoHern/LakeDB/releases/download/v#{version}/LakeDB-#{version}-mac-arm64.dmg",
      verified: "github.com/DavLagoHern/LakeDB/"
  name "LakeDB"
  desc "Focused MySQL and MariaDB desktop client"
  homepage "https://github.com/DavLagoHern/LakeDB"

  livecheck do
    url :url
    strategy :github_latest
  end

  depends_on arch: :arm64
  depends_on macos: :monterey

  app "LakeDB.app"

  zap trash: [
    "~/Library/Application Support/LakeDB",
    "~/Library/Preferences/com.davidlago.lakedb.plist",
    "~/Library/Saved Application State/com.davidlago.lakedb.savedState",
  ]
end
