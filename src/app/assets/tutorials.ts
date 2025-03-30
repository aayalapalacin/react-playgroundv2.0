import TestComponent  from "@/components/testComponent";
import Chat from "@/components/chatbot";
import { Tutorial } from "./types";

export const tutorialsArray: Tutorial[] = [
  // Authentication
  {
    id:1,
    category: "Authentication",
    name: "Google Sign-In: Let the API Handle the Hassle",
    tutorialComponent: TestComponent,
    icon: "🔑",
    steps: [
      {
        title:
          "Step 1: Create a Google Developer Account (Because Google Owns Us)",
        description:
          "Go to the Google Developer Console and make a new project. Click buttons like a pro.",
        codeSample: `
  // In the console:
  gcloud projects create my-awesome-project
  // Or, if you prefer the UI, just click around until something works.
  `,
        icon: "🧀",
      },
      {
        title: "Step 2: Enable Google Sign-In (Because OAuth is a Pain)",
        description:
          "Enable the 'Google Sign-In' API and grab your client ID like it's a free sample.",
        codeSample: `
  // In your .env file:
  REACT_APP_GOOGLE_CLIENT_ID=your-client-id-here
  `,
        icon: "🥬",
      },
      {
        title: "Step 3: Implement It in React (Copy-Paste and Pray)",
        description:
          "Use the Google OAuth package because writing your own auth system is a nightmare.",
        codeSample: `
  import { GoogleLogin } from 'react-google-login';
  
  const onSuccess = (response) => console.log('Logged in:', response);
  const onFailure = (error) => console.log('Failed:', error);
  
  <GoogleLogin 
    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
    buttonText="Login with Google"
    onSuccess={onSuccess}
    onFailure={onFailure}
  />
  `,
        icon: "🍅",
      },
      {
        title: "Step 4: Create a Google Developer Account (Because Google Owns Us)",
        description: "Go to the Google Developer Console and make a new project. Click buttons like a pro.",
        codeSample: `
  // In the console:
  gcloud projects create my-awesome-project
  // Or, if you prefer the UI, just click around until something works.
  `,
        icon: "🧀",
      },
      {
        title: "Step 5: Enable Google Sign-In (Because OAuth is a Pain)",
        description: "Enable the 'Google Sign-In' API and grab your client ID like it's a free sample.",
        codeSample: `
  // In your .env file:
  REACT_APP_GOOGLE_CLIENT_ID=your-client-id-here
  `,
        icon: "🥬",
      },
      {
        title: "Step 6: Implement It in React (Copy-Paste and Pray)",
        description: "Use the Google OAuth package because writing your own auth system is a nightmare.",
        codeSample: `
  import { GoogleLogin } from 'react-google-login';
  
  const onSuccess = (response) => console.log('Logged in:', response);
  const onFailure = (error) => console.log('Failed:', error);
  
  <GoogleLogin 
    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
    buttonText="Login with Google"
    onSuccess={onSuccess}
    onFailure={onFailure}
  />
  `,
        icon: "🍅",
      },
    ],
  },
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
