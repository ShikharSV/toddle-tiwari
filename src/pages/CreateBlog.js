import React, { useEffect, useState } from "react";
import styles from "./createBlog.module.css";
import Header from "../components/Header";

//title body tags images
const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [body, setBody] = useState("");
  const [images, setImages] = useState([]);

  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    event.preventDefault();
    hiddenFileInput.current.click();
  };

  const handleCreation = (e) => {
    e.preventDefault();
    console.log("hi");
    let newPost = {
      title: title,
      body: body,
      tags: tags,
      images: images,
    };
    console.log(newPost);
  };

  const imageUploadHandler = (e) => {
    const uploadedFiles = e.target.files;
    console.log("files ");
    console.log(uploadedFiles);
    const uploadedFilesArray = Array.from(uploadedFiles);
    const imagesArray = uploadedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setImages(imagesArray);
  };

  return (
    <>
      <Header></Header>
      <form
        action=""
        method="post"
        autoComplete="off"
        noValidate
        onSubmit={handleCreation}
      >
        <div className={styles.container}>
          <div className={styles.details}>
            <h2>Title</h2>
            <div>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="post title"
              />
            </div>

            <h2>Body</h2>
            <div>
              <textarea
                placeholder="Your body"
                name="message"
                value={body}
                required
                onChange={(e) => setBody(e.target.value)}
              />
            </div>

            <div>
              <h2>tags</h2>
              <div>
                <input
                  type="text"
                  name="tags"
                  placeholder="saperate your tags by commas"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className={styles.imagesArea}>
            <div className={styles.buttons}>
              <button onClick={handleClick}>click me</button>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={imageUploadHandler}
                ref={hiddenFileInput}
              />
            </div>
            <div className={styles.images}>
              {images &&
                images.map((imageSrc) => (
                  <div className={styles.uploads} key={imageSrc}>
                    <img src={imageSrc} alt="not fount" width={"250px"} />
                    <button
                      onClick={() => {
                        setImages(images.filter((e) => e !== imageSrc));
                      }}
                    >
                      remove
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className={styles.formSubmitButton}>
          <button type="submit" onClick={handleCreation}>
            create
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateBlog;
