//To implement this solution we have to make another folder and add various types of files in it like png, jpg, pdf, zip, jpeg, doc, ppt etc

import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basepath = "C:\\Users\\raiur\\OneDrive\\Documents\\MERN_Notes> ";
let files = await fs.readdir(basepath);

for (const item of files) {
  let ext = item.split(".").pop();
  console.log(ext);
  //Move file to this directory if its not a folder or js or json file 
  if (item.split(".").length > 1 && ext != "js" && ext != "json") 
    {
    if (fsn.existsSync(path.join(basepath, ext))) 
    {
      
      fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
    } 
    else 
    {
      fs.mkdir(ext);
    }
  }
}
