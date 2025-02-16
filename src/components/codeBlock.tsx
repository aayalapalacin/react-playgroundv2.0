import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ code, language = "javascript" }) => (
  <SyntaxHighlighter language={language} style={tomorrowNight}>
    {code}
  </SyntaxHighlighter>
);

export default CodeBlock;
