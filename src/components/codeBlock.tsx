import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
interface CodeBlockProps{
  code :string;
  language: string;
}

export const CodeBlock = ({ code, language  }: CodeBlockProps) => (
  <SyntaxHighlighter language={language} style={tomorrow}>
    {code}
  </SyntaxHighlighter>
);

