import React from "react";
import "./ChatPage.css";
import { api } from "../../api/api";

const FileDiv = ({ file,isOwner }) => {
  
  console.log(file, "thisis isfile");
  const handleDownload = async (e) => {
    e.preventDefault();
    try {
      
      const res = await fetch(api.GET_CONTENT + file.content.id);
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", file.content.filename);
      
      // Append the anchor element to the document body, trigger the download, and then remove the element
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Cleanup the Blob URL to prevent memory leaks
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log(error);
    }

  };
  return (
    <div className={`filediv ${isOwner?"owner":""}`}>
      <span>
        {file?.content?.filename}{" "}
        {/* <button > */}
          <i onClick={handleDownload} class="pointer fa-solid fa-circle-arrow-down"></i>
        {/* </button> */}
      </span>
    </div>
  );
};

export default FileDiv;
