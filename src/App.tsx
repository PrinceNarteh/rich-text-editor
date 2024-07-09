import RichTextEditor from "./RichTextEditor";

export default function App() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-3xl">Rich Text Editor Using Lexical</h1>;
      <RichTextEditor />
    </div>
  );
}
