import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const RichTextEditor = ({ input = { description: "" }, setInput }) => {
  const editorRef = useRef(null);

 
  useEffect(() => {
    if (editorRef.current && input.description) {
      editorRef.current.innerHTML = input.description;
    }
  }, []);

  const handleCommand = (command) => {
    document.execCommand(command, false, null);
    setInput({
      ...input,
      description: editorRef.current.innerHTML,
    });
  };

  const handleChange = () => {
    setInput({
      ...input,
      description: editorRef.current.innerHTML,
    });
  };

  return (
    <Card className="w-full max-w-5xl mx-auto p-4">
  
      <div className="flex flex-wrap gap-2 mb-4">
        <Button variant="outline" size="sm" onClick={() => handleCommand("bold")}>
          Bold
        </Button>
        <Button variant="outline" size="sm" onClick={() => handleCommand("italic")}>
          Italic
        </Button>
        <Button variant="outline" size="sm" onClick={() => handleCommand("underline")}>
          Underline
        </Button>
        <Button variant="outline" size="sm" onClick={() => handleCommand("justifyLeft")}>
          Left
        </Button>
        <Button variant="outline" size="sm" onClick={() => handleCommand("justifyCenter")}>
          Center
        </Button>
        <Button variant="outline" size="sm" onClick={() => handleCommand("justifyRight")}>
          Right
        </Button>
      </div>

     
      <div
        ref={editorRef}
        id="editor"
        contentEditable
        onInput={handleChange}
        className="rounded-md min-h-[150px] p-3 bg-white dark:bg-black focus:outline-none"
      ></div>
    </Card>
  );
};

export default RichTextEditor;
