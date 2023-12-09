"use client";
import React, { useState } from 'react'

const addBlog = () => {
    const [content, setContent] = useState();

    const toggleClass = (id) => {
      var element = document.getElementById(id);

      if (element.classList.contains("hidden")) {
        // Remove the class if it exists
        element.classList.remove("hidden");
      } else {
        // Add the class if it doesn't exist
        element.classList.add("hidden");
      }
    }

    const handleAddHead = () => {
        const textarea = document.getElementById('input-text').value;
        const newText = <h1 className='font-extrabold text-4xl'>{textarea}</h1>;
        setContent([content,newText]);
        document.getElementById('input-text').value = "";
    }
    const handleAddSubhead = () => {
        const textarea = document.getElementById('input-text').value;
        const newText = <h1 className='font-bold text-2xl'>{textarea}</h1>;
        setContent([content,newText]);
        document.getElementById('input-text').value = "";
    }
    const handleAddPara = () => {
        const textarea = document.getElementById('input-text').value;
        const newText = <p className='font-light'>{textarea}</p>;
        setContent([content,newText]);
        document.getElementById('input-text').value = "";
    }
  return (
    <section className='pt-24 px-2'>
        <h1 className='font-extrabold text-4xl'>Create a new blog</h1>
        <div className="tools flex flex-row gap-4">
            <div className="add-header bg-slate-300 px-4 py-2 rounded-md">
                <button onClick={() => {toggleClass("textbox")}}>Add Text</button>
            </div>

            <div className="add-subheader bg-slate-300 px-4 py-2 rounded-md">
                <button onClick={() => {toggleClass("img-input")}}>Add Image</button>
            </div>
        </div>
        <div className="bg-slate-300 w-fit p-3 my-2 hidden rounded-md flex-col" id='textbox'>
            <textarea name="" id ='input-text'cols="30" rows="10" className='Header border-2 border-black h-20 w-96 pt-0 rounded-md' placeholder='text'></textarea>
            <button className='bg-slate-600 px-4 py-2 rounded-md mb-2 ml-2' onClick={() => {document.getElementById('input-text').value = ""}}>Clear</button>
            <div className="btns flex flex-row gap-4">
                <button className='bg-slate-600 px-4 py-2 rounded-md' onClick={() => {handleAddHead()}}>Add as Heading</button>
                <button className='bg-slate-600 px-4 py-2 rounded-md' onClick={() => {handleAddSubhead()}}>Add as Subheading</button>
                <button className='bg-slate-600 px-4 py-2 rounded-md' onClick={() => {handleAddPara()}}>Add as Paragraph</button>
            </div>
        </div>
        <div className="bg-slate-300 w-fit hidden" id='img-input'>
            <input type="image" placeholder="Upload an image" className='Header border-2 border-black p-2' id='input-img'/>
        </div>
        
        
        <div id='canvas' className="canvas flex flex-col items-center px-16">{content}</div>
    </section>
  )
}

export default addBlog