# Snap AR Web SDK POC

This POC is meant to render a SnapAR Lens, interact with, record and take a snapshot in a web page.

## Work Breakdown

- [x] Render a Lens using the official Web SDK
- [x] Record and download a video
- [x] Snapshot the camera
- [ ] Embed the page in a shopify page
- [x] Broadcast camera content to OBS or external sources

---

## 🎥 How to Stream Video from Our Website Using OBS Studio

You can use OBS Studio to stream an augmented reality video from our website into video conferencing apps like **Zoom**, **Google Meet**, **Microsoft Teams**, or **Slack**.

Follow these steps:

---

### ✅ Prerequisites

- Install the latest version of **OBS Studio**: [https://obsproject.com/](https://obsproject.com/)
- Make sure **Virtual Camera** is enabled during installation.
- Close any open browsers before you begin.

---

## 🖥️ Step-by-Step Instructions

### 1. **Open OBS with a Special Flag**

You must launch OBS using a special flag that allows media stream access without a permission prompt.

#### On **Windows**:

1. Close OBS if it’s already open.
2. Press `Windows + R`, type `cmd`, and press **Enter**.
3. In the command prompt, run:

   ```bash
   "C:\Program Files\obs-studio\bin\64bit\obs64.exe" --use-fake-ui-for-media-stream
   ```

   _(Update the path if OBS is installed elsewhere)_

#### On **Mac**:

1. Open the **Terminal** (`Applications > Utilities > Terminal`).
2. Run:

   ```bash
   /Applications/OBS.app/Contents/MacOS/OBS --use-fake-ui-for-media-stream
   ```

---

### 2. **Add a Browser Source**

Once OBS opens:

1. Click the **"+"** under the **Sources** panel and choose **Browser**.
2. Name it (e.g., “AR Stream”) and click **OK**.
3. In the **URL** field, enter:
   `https://pedrointercap.github.io/snap-ar-web/`
4. Set the **Width** and **Height** (e.g., 1280x720 or 1920x1080).
5. ✅ Check the box **"Control audio via OBS"**.
6. Click **OK**.

---

### 3. **Start the Virtual Camera**

- Click the **Start Virtual Camera** button on the right side of OBS.

---

### 4. **Open Your Video Calling App**

- Launch **Zoom**, **Google Meet**, **Microsoft Teams**, **Slack**, or any other app you use for video calls.

---

### 5. **Change the Camera Source**

In your video app settings:

- Go to **Camera Settings**.
- Select **"OBS Virtual Camera"** as your camera source.

You should now see the AR video feed from our website inside your video call! 🎉

---

## 🛠 Tips

- If you don’t see the camera feed, make sure OBS is still running and the virtual camera is active.
- You can mute or adjust the browser source audio in OBS if needed.
- If the website doesn't access the webcam automatically, try refreshing the source (right-click > **Refresh** in OBS).
