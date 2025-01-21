# **Bridge App**

**Bridge** is a personal assistant app designed to help introverts, socially anxious individuals, and anyone who struggles with maintaining connections without feeling overwhelmed. Bridge acts as a "buffer" between you and your social interactions, offering gentle reminders, social energy tracking, and tools to stay connected in a low-pressure, manageable way.

---

## **Features**

### **1. Gentle Reminders**
- Reminds you to respond to archived or unread messages.
- Suggests simple, non-overwhelming replies to re-engage.

### **2. Social Energy Tracker**
- Lets you track your "social battery" and suggests the best times to socialize based on your mood and availability.

### **3. Scheduled Connection Nudges**
- Helps you schedule friendly reminders to check in with people you care about without feeling forced.

### **4. Draft + Delay Feature**
- Allows you to compose replies at your pace and sends them later automatically.

### **5. Social Detox Mode**
- Encourages healthy breaks by muting notifications but helps you catch up without guilt once you’re ready.

### **6. Private Journaling**
- Offers a space to process your emotions after tough conversations or interactions.

---

## **Tech Stack**

### **Frontend**
- **React Native**
- **Expo**
- **TypeScript**

### **Backend**
- **Firebase**
  - **Firestore**
  - **Authentication**
  - **Cloud Functions**

### **State Management**
- **React Context API**

### **Navigation**
- **React Navigation**

### **Styling**
- **React Native Stylesheet**
- **Custom Fonts**

---

## **Project Structure**

```
Bridge/
├── assets/
├── src/
│   ├── components/
│   ├── screens/
│   ├── context/
│   ├── firebase/
│   ├── hooks/
│   ├── navigation/
│   ├── utils/
│   ├── types/
│   └── App.tsx
├── app.json
├── babel.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## **Getting Started**

### **Prerequisites**
- **Node.js**: Install the latest LTS version from [nodejs.org](https://nodejs.org/).
- **Expo CLI**: Install globally using `npm install -g expo-cli`.
- **Firebase Account**: Create a Firebase project and enable Firestore and Authentication.

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/BenedictaUche/bridge.git
   cd bridge-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Firebase:
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Enable **Firestore** and **Authentication**.
   - Add your Firebase config to `src/firebase/config.ts`.

4. Run the app:
   ```bash
   npx expo start
   ```

5. Scan the QR code with the **Expo Go** app (iOS/Android) or run on an emulator.

---

## **Firebase Database Structure**

### **Collections**
1. **Users**:
   - `uid` (string): Firebase Authentication user ID.
   - `displayName` (string): User’s full name.
   - `email` (string): User’s email.
   - `createdAt` (timestamp): When the user signed up.

2. **SocialBattery**:
   - `uid` (string): Firebase Authentication user ID.
   - `energyLevel` (number): Current social energy level (e.g., 0 to 100).
   - `timestamp` (timestamp): When the energy level was logged.

3. **Reminders**:
   - `uid` (string): Firebase Authentication user ID.
   - `message` (string): The message to respond to.
   - `timestamp` (timestamp): When the reminder was created.
   - `status` (string): Status of the reminder (e.g., "pending", "completed").

4. **Nudges**:
   - `uid` (string): Firebase Authentication user ID.
   - `contactName` (string): The name of the contact.
   - `suggestedMessage` (string): A suggested message to send.
   - `timestamp` (timestamp): When the nudge was created.

5. **JournalEntries**:
   - `uid` (string): Firebase Authentication user ID.
   - `entry` (string): The journal entry text.
   - `timestamp` (timestamp): When the entry was created.

---

## **Screens**

### **1. Splash Screen**
- Displays the app logo and name briefly before transitioning to the Welcome Screen.

### **2. Welcome Screen**
- Provides options to "Get Started" (for new users) or "Login" (for existing users).

### **3. Onboarding Screens**
- A series of screens explaining the app’s features (e.g., gentle reminders, social energy tracking).

### **4. Sign-Up Screen**
- Allows new users to create an account using email/password or Google Sign-In.

### **5. Login Screen**
- Allows existing users to log in using email/password or Google Sign-In.

### **6. Home Screen**
- The main screen with:
  - Social battery tracker.
  - Quick actions (e.g., check reminders, compose messages).
  - Bottom navigation (Home, Journal, Settings).

### **7. Journal Screen**
- A private space for users to write and review journal entries.

### **8. Settings Screen**
- Allows users to customize app settings.

---

## **Contributing**

Contributions are welcome! If you’d like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.

---

## **Contact**

For questions or feedback, feel free to reach out:

- **Email**: benedictaonyebuchi.uche@gmail.com

---

Thank you for using **Bridge**
