"use client";

import EditingArea from "@/components/blog-editor/EditingArea";
import Toolbar from "@/components/blog-editor/Toolbar";
import { ContentBlock } from "@/lib/froala-config";
import React from "react";

export default function NewBlogPage() {
  const [contentBlocks, setContentBlocks] = React.useState<ContentBlock[]>([]);

  const handleAddBlock = (block: string) => {
    const newBlock = {
      id: crypto.randomUUID(),
      type: block,
      content: "",
    };
    const newContentBlocks = [...contentBlocks, newBlock];
    setContentBlocks(newContentBlocks);
  };

  const handleRemoveBlock = (index: string) => {
    const newContentBlocks = contentBlocks.filter(
      (block) => block.id !== index
    );
    setContentBlocks(newContentBlocks);
  };

  const handleModelChange = (index: string, model: string) => {
    const newContentBlocks = contentBlocks.map((block) => {
      if (block.id === index) {
        return { ...block, content: model };
      }
      return block;
    });
    setContentBlocks(newContentBlocks);
  };

  const handleSave = () => {
    contentBlocks.forEach((block) => console.log(block.content))
  };

  const handleReset = () => {
    setContentBlocks([]);
  }; 

  return (
    <main className="bg-white min-h-screen text-black flex">
      <div className="flex-1 flex justify-center items-center bg-orange-200 p-4 flex-col">
        <EditingArea
          contentBlocks={contentBlocks}
          handleRemoveBlock={handleRemoveBlock}
          handleModelChange={handleModelChange}
        />
        <div className="border border-black w-[800px] mt-8 bg-white p-8 rounded-lg">
          <h1 className="text-center text-lg font-bold">SEO</h1>
          <div className="flex flex-col">
            <label htmlFor="title" className="font-bold">Title</label>
            <input placeholder="Title" className="border border-black rounded p-2"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="font-bold">Description</label>
            <textarea placeholder="description" className="border border-black rounded p-2"/>
          </div>
        </div>
      </div>
      <div className="w-[390px] bg-zinc-800">
        <Toolbar handleAddBlock={handleAddBlock} save={handleSave} reset={handleReset} />
      </div>
    </main>
  );
}
