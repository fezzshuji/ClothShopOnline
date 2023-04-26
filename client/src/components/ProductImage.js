// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import IMG from "./IMG.js";
// import "../componentsCSS/productimage.css";

// const ProductImage = () => {
//   const [images, setImages] = useState([]);
//   let [currentImage, setCurrentImage] = useState(2);

//   const rotateMainImageRight = () => {
//     if (currentImage == images.length - 1) {
//       setCurrentImage(1);
//     } else {
//       setCurrentImage(currentImage + 1);
//     }
//   };

//   const rotateMainImageLeft = () => {
//     if (currentImage == 1) {
//       setCurrentImage(images.length - 1);
//     } else {
//       setCurrentImage(currentImage - 1);
//     }
//   };

//   const rotateMainImageThis = (num) => {
//     setCurrentImage(num);
//   };

//   useEffect(() => {
//     setImages([
//       "../images/product-image/Video-Btn.png",
//       "../images/product-image/White-side.jpg",
//       "../images/product-image/White-front.jpg",
//       "../images/product-image/White-back.jpg",
//       "../images/product-image/Gildan-18500.jpg",
//     ]);
//     setCurrentImage(2);
//   }, []);

//   return (
//     <div className="productImage-all">
//       <div className="productImage-top">
//         <IMG imageLink={images[currentImage]} />
//         <div className="productImage-top-left">
//           <img
//             src="../images/arrow-left.png"
//             onClick={rotateMainImageLeft}
//             height={"32px"}
//             width={"32px"}
//           />
//         </div>
//         <div className="productImage-top-right">
//           <img
//             src="../images/arrow-right.png"
//             onClick={rotateMainImageRight}
//             height={"32px"}
//             width={"32px"}
//           />
//         </div>
//       </div>

//       <div className="productImage-middle">
//         <img
//           className="productImage-thumbnail"
//           src={images[0]}
//           onClick={() => {
//             rotateMainImageThis(0);
//           }}
//         />
//         <img
//           className="productImage-thumbnail"
//           src={images[1]}
//           onClick={() => {
//             rotateMainImageThis(1);
//           }}
//         />
//         <img
//           className="productImage-thumbnail"
//           src={images[2]}
//           onClick={() => {
//             rotateMainImageThis(2);
//           }}
//         />
//         <img
//           className="productImage-thumbnail"
//           src={images[3]}
//           onClick={() => {
//             rotateMainImageThis(3);
//           }}
//         />
//         <img
//           className="productImage-thumbnail"
//           src={images[4]}
//           onClick={() => {
//             rotateMainImageThis(4);
//           }}
//         />
//       </div>
//       <div className="productImage-bottom">
//         <div className="productImage-bottom-large">Free 100 Day Returns</div>
//         <div className="productImage-bottom-small">
//           Not quite right? You have 100 days to return your items, 100% free!
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductImage;


import React, { useState, useEffect } from "react";
import { InView } from "react-intersection-observer";
import IMG from "./IMG.js";
import "../componentsCSS/productimage.css";

//This is the lazy image loader component that will be used to preload the images
const LazyImage = ({ src, alt, ...props }) => {
  const [loadedSrc, setLoadedSrc] = useState(null);

  return (
    <InView
      as="div"
      triggerOnce
      onChange={(inView) => {
        if (inView && !loadedSrc) {
          setLoadedSrc(src);
        }
      }}
    >
      <img src={loadedSrc} alt={alt} {...props} />
    </InView>
  );
};

const ProductImage = () => {
  const [images, setImages] = useState([]);
  let [currentImage, setCurrentImage] = useState(2);

  const rotateMainImageRight = () => {
    if (currentImage == images.length - 1) {
      setCurrentImage(1);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  const rotateMainImageLeft = () => {
    if (currentImage == 1) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  const rotateMainImageThis = (num) => {
    setCurrentImage(num);
  };

  useEffect(() => {
    setImages([
      "../images/product-image/Video-Btn.webp",
      "../images/product-image/White-side.webp",
      "../images/product-image/White-front.webp",
      "../images/product-image/White-back.webp",
      "../images/product-image/Gildan-18500.webp",
    ]);
    setCurrentImage(2);
  }, []);

  return (
    <div className="productImage-all">
      <div className="productImage-top">
        <IMG imageLink={images[currentImage]} />
        <div className="productImage-top-left">
          <img
            src="../images/arrow-left.png"
            onClick={rotateMainImageLeft}
            height={"32px"}
            width={"32px"}
          />
        </div>
        <div className="productImage-top-right">
          <img
            src="../images/arrow-right.png"
            onClick={rotateMainImageRight}
            height={"32px"}
            width={"32px"}
          />
        </div>
      </div>

      <div className="productImage-middle">
        <LazyImage
          className="productImage-thumbnail"
          src={images[0]}
          onClick={() => {
            rotateMainImageThis(0);
          }}
        />
        <LazyImage
          className="productImage-thumbnail"
          src={images[1]}
          onClick={() => {
            rotateMainImageThis(1);
         
          }}
          />
          <LazyImage
            className="productImage-thumbnail"
            src={images[2]}
            onClick={() => {
              rotateMainImageThis(2);
            }}
          />
          <LazyImage
            className="productImage-thumbnail"
            src={images[3]}
            onClick={() => {
              rotateMainImageThis(3);
            }}
          />
          <LazyImage
            className="productImage-thumbnail"
            src={images[4]}
            onClick={() => {
              rotateMainImageThis(4);
            }}
          />
        </div>
        <div className="productImage-bottom">
          <div className="productImage-bottom-large">Free 100 Day Returns</div>
          <div className="productImage-bottom-small">
            Not quite right? You have 100 days to return your items, 100% free!
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductImage;
  