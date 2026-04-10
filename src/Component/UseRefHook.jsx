import React, { useRef, useState, useEffect } from "react";

export default function UseRefHook() {
  // eg1
  const inputref = useRef();
  const focusinput = () => {
    inputref.current.focus();
  };
  //   eg2
  const [sec, setSec] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSec((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);
  //eg3
  const [newProduct, setNewProduct] = useState(true);
  const [imageURL, setImageURL] = useState("");

  const imgRef = useRef(0);

  const handleImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setImageURL(preview);
      setNewProduct(false);
    }
  };

  return (
    <div>
      {/* eg1 */}
      <nav>
        <input type="text" placeholder="Enter a data" ref={inputref} />
        <button onClick={focusinput}>To focus an input</button>
      </nav>
      {/* eg2 */}
      <nav>
        <h3>timer:{sec}</h3>
        <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
      </nav>
      {/* eg3 */}
      <nav>
        <input type="file" ref={imgRef} hidden onChange={handleImg} />
        {newProduct ? (
          <div
            onClick={() => imgRef.current.click()}
            className="image-cointainer"
          >
            upload image
          </div>
        ) : (
          <img
            onClick={() => imgRef.current.click()}
            src={imageURL}
            className="org-img"
          />
        )}
      </nav>
    </div>
  );
}
