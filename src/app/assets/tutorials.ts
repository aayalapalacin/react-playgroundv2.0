import TestComponent  from "@/components/testComponent";
import Chat from "@/components/chatbot";
import { GoogleSignIn } from "@/components/googleSignIn";
import { Tutorial } from "./types";

export const tutorialsArray: Tutorial[] = [
  // Authentication
  {
    id: 1,
    category: "Authentication",
    name: "Google Sign-In: Let the API Handle the Hassle",
    tutorialComponent: GoogleSignIn,
    icon: "🔑",
    steps: [
      {
        title: "Step 1: Set Up Google OAuth Credentials",
        description: `
  \`🔐 Before you write a single line of code, you’ll need to set up OAuth credentials in the Google Cloud Console.\`
  
  This lets your app securely connect to Google so users can log in with their accounts.
  
  **Here's what to do:**
  
  - Go to [https://console.cloud.google.com](https://console.cloud.google.com)
  - **Create a new project** or select an existing one.
  - Navigate to **"APIs & Services > OAuth consent screen"**:
    - Choose **"External"**
    - Fill in app details (name, support email, etc.)
    - Add required scopes: \`openid\`, \`profile\`, \`email\`
    - Under "Test users", add your Gmail
    - Set the **application homepage** to your app URL (e.g., \`http://localhost:3000\`)
  - Then go to **"Credentials"**:
    - Click **Create Credentials > OAuth Client ID**
    - App type: **Web**
    - Redirect URI: \`http://localhost:3000/api/auth/callback/google\`
  
  \`✅ Copy the Client ID and Client Secret into your .env file.\`
        `,
        codeSample: `
  // .env.local
  
  CLIENT_ID=your_google_client_id_here
  CLIENT_SECRET=your_google_client_secret_here
        `,
        icon: "🔧",
      },
      {
        title: "Step 2: Configure NextAuth.js",
        description: `
  \`🛠 This is where the magic happens.\`
  
  You're going to tell NextAuth how to use those Google credentials. This setup ensures Google handles the secure login for you.
  
  - Add the Google provider with your credentials
  - Set up a session strategy
  - Add a basic sign-in callback to verify users
  
  \`📍 Location: app/api/auth/[...nextauth]/route.ts\`
        `,
        codeSample: `
  // app/api/auth/[...nextauth]/route.ts
  
  import { NextAuthOptions } from "next-auth"
  import GoogleProvider from "next-auth/providers/google"
  
  export const authOption: NextAuthOptions = {
    session: { strategy: "jwt" },
    providers: [
      GoogleProvider({
        clientId: process.env.CLIENT_ID!,
        clientSecret: process.env.CLIENT_SECRET!,
      }),
    ],
    callbacks: {
      async signIn({ profile }) {
        if (!profile?.email) {
          console.error("❌ No email found in profile");
          throw new Error("No profile email");
        }
  
        return true;
      },
    },
  }
        `,
        icon: "⚙️",
      },
      {
        title: "Step 3: Export the Auth Handler",
        description: `
  \`🌐 NextAuth needs to respond to incoming login/logout requests.\`
  
  This step makes your API route respond properly to both \`GET\` and \`POST\` requests.
  
  \`📍 Location: Bottom of route.ts\`
        `,
        codeSample: `
  // app/api/auth/[...nextauth]/route.ts
  
  import NextAuth from "next-auth"
  const handler = NextAuth(authOption)
  
  export { handler as GET, handler as POST }
        `,
        icon: "🔁",
      },
      {
        title: "Step 4: Wrap Your App with SessionProvider",
        description: `
  \`🧠 Why do we need this?\`
  
  The \`useSession()\` hook won’t work unless your app is wrapped in a \`SessionProvider\`. This provider gives all components access to the session context — whether someone is logged in, who they are, etc.
  
  **To keep your layout clean**, use a separate \`SessionWrapper\` component:
  
  - It goes inside your layout (\`app/layout.tsx\` or \`app/root-layout.tsx\`)
  - It ensures your session state is available everywhere
  - It avoids hydration errors by keeping it on the client
  
        `,
        codeSample: `
  // components/SessionWrapper.tsx
  "use client";
  
  import { SessionProvider } from "next-auth/react";
  import { ReactNode } from "react";
  
  export default function SessionWrapper({ children }: { children: ReactNode }) {
    return <SessionProvider>{children}</SessionProvider>;
  }
  
  // app/layout.tsx or app/root-layout.tsx
  import type { Metadata } from "next";
  import "./styles/globals.css";
  import { Navigation } from "@/components/navigation";
  import SessionWrapper from "@/components/SessionWrapper"; // ✅ import this
  
  export const metadata: Metadata = {
    title: "React Playground",
    description: "Frontend tutorial library for development",
  };
  
  export default function RootLayout({
    children,
  }: Readonly<{ children: React.ReactNode }>) {
    return (
      <html lang="en">
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" 
          precedence="default"
        />
        <body className="bg-gray-100">
          <SessionWrapper> {/* ✅ wrap content in client-side session provider */}
            <header className="bg-slate-900 text-white p-2 text-center mb-[6rem]">
              <Navigation />
            </header>
            {children}
            <footer className="bg-slate-900 text-white p-4 text-center mt-[7rem]">
              Made with ❤️ by {"React Playground"}
            </footer>
          </SessionWrapper>
        </body>
      </html>
    );
  }
        `,
        icon: "🧠",
      },
      {
        title: "Step 5: Build the Frontend Login UI",
        description: `
  \`🎨 Time to bring it all to life.\`
  
  Create a component that shows a sign-in button, sign-out button, and user info once logged in. This uses \`useSession()\` from \`next-auth/react\`.
  
  **Things this UI handles:**
  
  - Detects if the session is loading or active
  - Shows the user's name if signed in
  - Renders Sign In / Sign Out buttons depending on session state
  
        `,
        codeSample: `
  'use client'
  
  import { useSession, signOut } from 'next-auth/react'
  import Link from 'next/link'
  
  export const GoogleSignIn = () => {
    const { data: session, status } = useSession()
  
    if (status === 'loading') return <p>Loading...</p>
  
    const user = session?.user
  
    return (
      <div className="w-full max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg space-y-6 text-center">
        <div>
          {user ? (
            <h1 className="text-2xl font-semibold">Hi, {user.name}</h1>
          ) : (
            <p>No user signed in</p>
          )}
        </div>
  
        <div className="flex justify-center gap-4">
          {!user ? (
            <Link
              href="/api/auth/signin"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              Sign In with Google
            </Link>
          ) : (
            <button
              onClick={() => signOut()}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
            >
              Sign Out
            </button>
          )}
        </div>
      </div>
    )
  }
        `,
        icon: "🎨",
      },
    ],
  }
  
  
  
  ,
  {
    id:2,
    category: "Authentication",
    name: "Facebook Login: The Other Login You Can't Escape",
    tutorialComponent: TestComponent,
    icon: "🔑",
    steps: [
      {
        title:
          "Step 1: Create a Facebook Developer Account (Another Account to Manage)",
        description:
          "Head to the Facebook Developers portal and create an app to get your app ID.",
        codeSample: `
  // In the console:
  fb create-app my-awesome-app
  // Or, click around the portal until your app is set up.
  `,
        icon: "🧀",
      },
      {
        title: "Step 2: Get Your Facebook App ID (Your New Best Friend)",
        description:
          "Grab your app ID from the Facebook developer console and store it safely.",
        codeSample: `
  // In your .env file:
  REACT_APP_FACEBOOK_APP_ID=your-facebook-app-id
  `,
        icon: "🥬",
      },
      {
        title:
          "Step 3: Add Facebook Login to React (Because Everyone is Doing It)",
        description: "Install the Facebook SDK and implement the login button.",
        codeSample: `
  import { FacebookLogin } from 'react-facebook-login';
  
  const onSuccess = (response) => console.log('Logged in:', response);
  const onFailure = (error) => console.log('Failed:', error);
  
  <FacebookLogin
    appId={process.env.REACT_APP_FACEBOOK_APP_ID}
    fields="name,email,picture"
    callback={onSuccess} 
    onFailure={onFailure}
  />
  `,
        icon: "🍅",
      },
    ],
  },

  // AI
  

  // Security
  {
    id:3,
    category: "Security",
    name: "Multi-Factor Authentication: Because Passwords Are Useless",
    tutorialComponent: TestComponent,
    icon: "🔐",
    steps: [
      {
        title: "Step 1: Choose Your Method (Pick Your Poison)",
        description:
          "Decide if you want SMS, Email, Authenticator App, or just trust that the user is who they say they are (not recommended).",
        codeSample: `
  // Options:
  const methods = ["SMS", "Email", "Authenticator App"];
  console.log("Which MFA method do you hate the least?", methods);
  `,
        icon: "🍅",
      },
      {
        title:
          "Step 2: Set Up a Verification Code System (Or Use Someone Else’s)",
        description:
          "Use a service like Twilio or Firebase to send verification codes. Don’t try to build one from scratch unless you enjoy suffering.",
        codeSample: `
  // Using Firebase:
  const auth = firebase.auth();
  auth.settings.appVerificationDisabledForTesting = true;
  
  auth.signInWithPhoneNumber("+1234567890", window.recaptchaVerifier)
    .then(confirmResult => console.log("Code sent!"))
    .catch(error => console.error(error));
  `,
        icon: "🥬",
      },
      {
        title:
          "Step 3: Make Users Enter the Code (And Hope They Do It Correctly)",
        description:
          "Display an input field, validate the code, and authenticate the user. Simple, right?",
        codeSample: `
  <input type="text" placeholder="Enter 6-digit code" onChange={handleCodeInput} />
  <button onClick={verifyCode}>Verify</button>
  `,
        icon: "🧀",
      },
    ],
  },
  {
    id:4,
    category: "Security",
    name: "JWT Authentication: Keep Your Secrets Secure",
    tutorialComponent: TestComponent,
    icon: "🔐",
    steps: [
      {
        title: "Step 1: Create Your JWT (The Secret Sauce)",
        description:
          "Use a library like jsonwebtoken to create a JWT with a secret key.",
        codeSample: `
  const jwt = require('jsonwebtoken');
  const payload = { userId: 1234 };
  const secret = 'your-secret-key';
  const token = jwt.sign(payload, secret);
  console.log("JWT:", token);
  `,
        icon: "🧀",
      },
      {
        title: "Step 2: Send the Token in Requests (Like a True Pro)",
        description: "Send the JWT as a Bearer token in your API requests.",
        codeSample: `
  fetch('/api/endpoint', {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
  `,
        icon: "🥬",
      },
      {
        title: "Step 3: Verify the Token (Don’t Trust the User)",
        description:
          "On the server, verify the token before granting access to sensitive data.",
        codeSample: `
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      console.error("Invalid token");
    } else {
      console.log("User authenticated:", decoded);
    }
  });
  `,
        icon: "🍅",
      },
    ],
  },

  // UI/UX
  {
    id:5,
    category: "UI/UX",
    name: "Dark Mode: Because Light Mode Burns Our Eyes",
    tutorialComponent: TestComponent,
    icon: "🌙",
    steps: [
      {
        title: "Step 1: Create a Toggle Button (Fancy Switch Optional)",
        description:
          "Use a button or a fancy slider to switch themes. You can even animate it if you're feeling spicy.",
        codeSample: `
  <button onClick={toggleDarkMode}>🌞 / 🌙</button>
  `,
        icon: "🍅",
      },
      {
        title: "Step 2: Apply Dark Mode Styles (Embrace the Darkness)",
        description:
          "Change the background, text color, and maybe add a spooky font for fun.",
        codeSample: `
  const darkModeStyles = {
    backgroundColor: "#121212",
    color: "#ffffff"
  };
  
  const lightModeStyles = {
    backgroundColor: "#ffffff",
    color: "#000000"
  };
  `,
        icon: "🥬",
      },
      {
        title:
          "Step 3: Save User Preference (So They Don’t Have to Keep Clicking)",
        description:
          "Use localStorage because users have better things to do than re-enable dark mode every time.",
        codeSample: `
  localStorage.setItem("theme", "dark");
  const theme = localStorage.getItem("theme") || "light";
  `,
        icon: "🧀",
      },
    ],
  },
  {
    id:6,
    category: "UI/UX",
    name: "Responsive Navbar: Because Screens Come in All Sizes",
    tutorialComponent: TestComponent,
    icon: "🌟",
    steps: [
      {
        title: "Step 1: Create the Navbar (Simple but Effective)",
        description: "Create a basic navbar with links and a logo.",
        codeSample: `
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
  `,
        icon: "🥬",
      },
      {
        title: "Step 2: Add Media Queries (Make It Mobile-Friendly)",
        description:
          "Use media queries to make the navbar responsive on smaller screens.",
        codeSample: `
  @media (max-width: 768px) {
    nav ul {
      display: flex;
      flex-direction: column;
    }
  }
  `,
        icon: "🍅",
      },
      {
        title: "Step 3: Add a Hamburger Menu (For Those Tight Spaces)",
        description: "Implement a hamburger menu for mobile views.",
        codeSample: `
  <button className="hamburger-menu">☰</button>
  <nav className="mobile-nav">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
  `,
        icon: "🧀",
      },
    ],
  },
  {
    id: 7,
    category: "AI/Development",
    name: "Building a Chatbot with Next.js and OpenAI",
    tutorialComponent: Chat,
    icon: "🤖",
    steps: [
      {
        title: "Step 1: Set up environment",
        description: `
        Install necessary dependencies, including
        UI components and OPEN AI key generated from account.`,
        codeSample: `
  npm install openai-sdk  @ai-sdk/react react-markdown remark-gfm
  // Store in your .env file
  OPENAI_API_KEY=your-api-key-here 
  `,
        icon: "🔧",
      },
      {
        title: "Step 2: Integrate OpenAI Model and Build Chatbot Component",
        description: `
        In this step, you will integrate the OpenAI API to enable the chatbot to respond, 
        and create a React component to manage the chat interactions. 
        You’ll use the \`useChat\` hook from \`@ai-sdk/react\` to manage the state of messages,
        the user input, and handle the submission. The \`useChat\` hook provides the following:
        
        - \`messages\`: The array of messages, where each message contains the user’s input or the AI’s response.
        - \`input\`: The current text that the user is typing in the input field.
        - \`handleInputChange\`: The function that updates the \`input\` state whenever the user types in the input field.
        - \`handleSubmit\`: The function to handle form submission and send the message to the API to get a response from the chatbot.
      
        In this code, we will also include the backend API call that streams the responses 
        from OpenAI based on the messages received from the chatbot.
      `,
      
        codeSample: `
      // Client-side: Create the Chatbot React component

      "use client";
      
      import { openai } from '@ai-sdk/openai';
      import { useChat } from '@ai-sdk/react';
      import { streamText } from 'ai';
      
    
      export default function Chat() {
        const { messages, input, handleInputChange, handleSubmit } = useChat();
      
        return (
         <div>
          Chatbot component!
          </div>
        );
      }
      
  // Server-side: Backend API route for handling AI responses
// Should be placed in app/api/chat/route.ts

      export async function POST(req: Request) {
        const { messages } = await req.json();
      
        // Integrating OpenAI's GPT-4 model to generate responses
        const result = streamText({
          model: openai('gpt-4o'),
          messages,
        });
      
        return result.toDataStreamResponse();
      }
        `,
        icon: "🧠",
      }
      ,
      {
        title: "Step 3: Build a Basic Chat Interface",
        description: `
        The messages in your chat interface are represented as objects, 
        where each message has a \`role\` property. The \`role\` can either be 
        "user" (indicating the person typing) or "assistant" (indicating the AI response).
        
        In this step, you will map through the messages and create a dynamic label 
        that conditionally renders "User" or "AI" based on the \`role\`. 
        
        You can customize this label to display whichever text fits your needs, 
        but the goal is to ensure the user knows who is sending the message.
        
        In this example, we will render a label above each message that shows 
        either "User" or "AI" based on the role of the message.

        The input and form submit can use built in hooks from useChat()
        `,
      codeSample: `
      "use client";
      
      import { useChat } from "@ai-sdk/react";
      
      export default function Chat() {
        const { messages, input, handleInputChange, handleSubmit } = useChat();
      
        return (
          <div className="w-full max-w-md p-4 mx-auto border bg-gray-100">
              <div className="max-h-64 overflow-y-auto p-2">
                {messages.map((m) => (
                  <div key={m.id} className="whitespace-pre-wrap">
                    <strong>{m.role === "user" ? "User: " : "AI: "}</strong>
                    <p>{m.content}</p>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="mt-4">
                <input
                  className="w-full p-2 border bg-white"
                  value={input}
                  placeholder="Say something..."
                  onChange={handleInputChange}
                />
              </form>
          </div>

        );
      }
        `,
        icon: "💬",
      }
      ,
      {
        title: "Step 4: Handle Markdown Responses",
        description: `
        The AI uses Markdown language to format responses. 
        For example, bold text would be shown as: # This is bold
        Or if they want to show code snippet it might be:
        '''javascript
        console.log("this is code!");
        '''
        
        In order for this to render as intentioned, 
        we will pass it to a ReactMarkdown component
        `
        ,
        codeSample: `
     "use client";
      
      import { useChat } from "@ai-sdk/react";
      import ReactMarkdown from "react-markdown";
      import remarkGfm from "remark-gfm";

      export default function Chat() {
        const { messages, input, handleInputChange, handleSubmit } = useChat();
      
        return (
          <div className="w-full max-w-md p-4 mx-auto border bg-gray-100">
            <div className="max-h-64 overflow-y-auto p-2">
              {messages.map((m) => (
                <div key={m.id} className="whitespace-pre-wrap">
                  <strong>{m.role === "user" ? "User: " : "AI: "}</strong>
                  // HERE ADDING MARKKDOWN COMPONENT
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {m.content}
                  </ReactMarkdown>
                </div>
              ))}
            </div>
      
           <form onSubmit={handleSubmit} className="mt-4">
                <input
                  className="w-full p-2 border bg-white"
                  value={input}
                  placeholder="Say something..."
                  onChange={handleInputChange}
                />
              </form>
          </div>
        );
      }
        `,
        icon: "📝",
      },
      {
        title: "Step 5: Display Code Snippets",
        description: `
        When the AI sends code, use the pre and code tags like:
        <pre>
          <code>some code here</code>
        </pre>
        Therefore we can customize the pre tag like it's the parent div
        and customize the styling of the code block like it's the children div
        You can think this in terms of parent div having background color
        and the chidren having text color, etc.
        `,
        codeSample: `
"use client";
      
      import { useChat } from "@ai-sdk/react";
      import ReactMarkdown from "react-markdown";
      import remarkGfm from "remark-gfm";
      
      export default function Chat() {
        const { messages, input, handleInputChange, handleSubmit } = useChat();
      
        return (
          <div className="w-full max-w-md p-4 mx-auto border bg-gray-100">
            <div className="max-h-64 overflow-y-auto p-2">
              {messages.map((m) => (
                <div key={m.id} className="whitespace-pre-wrap">
                  <strong>{m.role === "user" ? "User: " : "AI: "}</strong>
                  <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  // HERE ADDING CUSTOM STYLING TO PRE AND CODE TAGS
                  components={{
                    pre: ({ children }) => <pre className="bg-gray-800 p-2 overflow-x-auto">{children}</pre>,
                    code: ({ children }) => <code className=" text-green-300 p-1">{children}</code>,
                  }}
                  >
                    {m.content}
                  </ReactMarkdown>
                </div>
              ))}
            </div>
      
            <form onSubmit={handleSubmit} className="mt-4">
                <input
                  className="w-full p-2 border bg-white"
                  value={input}
                  placeholder="Say something..."
                  onChange={handleInputChange}
                />
              </form>
          </div>
        );
      }
        `,
        icon: "💻",
      },
      {
        title: "Step 6: Customize Chatbot Behavior (Basic System Instructions)",
        description: `
        Customize chatbot behavior with simple system instructions, 
        such as making the chatbot talk like Santa Claus.
        
        The system instructions is technically saved in the messages array
        with a role of "system". So we need to filter method
        to remove any messages that have a role of "system"
        so the system instructions doesn't render on webpage 
        `,
        codeSample: `
"use client";

import { useChat } from "@ai-sdk/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Chat() {
  const systemInstructions = \`
  You are a chatbot who talks like Santa Claus no matter what.
  \`;

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [{
      role: "system", content: systemInstructions,
      id: ""
    }],
  });

  return (
    <div className="w-full max-w-md p-4 mx-auto border bg-gray-100">
      <div className="max-h-64 overflow-y-auto p-2">
      // HERE WE ARE FILTERING OUT SYSTEM INSTRUCTIONS
        {messages.filter((m) => m.role !== "system").map((m) => (
          <div key={m.id} className="whitespace-pre-wrap">
            <strong>{m.role === "user" ? "User: " : "AI: "}</strong>
            //REST OF CODE ...
           
        `,
        icon: "🎅",
      },
    ],
}

  
];
