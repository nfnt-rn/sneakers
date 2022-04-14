import ImageProduce1 from "../images/image-product-1-thumbnail.jpg";
import ImageProduce2 from "../images/image-product-2-thumbnail.jpg";
import ImageProduce3 from "../images/image-product-3-thumbnail.jpg";
import ImageProduce4 from "../images/image-product-4-thumbnail.jpg";

export default function Thumbnails({ setCurrent }) {
  let images = [ImageProduce1, ImageProduce2, ImageProduce3, ImageProduce4];

  return (
    <div className="thumbnail-container">
      {images.map((a, i) => (
        <img
          key={a}
          onClick={(e) => {
            setCurrent(i);
          }}
          src={a}
          alt={"imagepro" + i}
        />
      ))}
    </div>
  );
}
