import { useContext, useEffect, useState } from "react";
import service from "../../services/file-image-upload.service";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export default function ImageList() {
  // const { images, setimages, getimages } =
  //   useContext(imageContext);
  const { user } = useContext(UserContext);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await service.getImages(user);
        const filteredData = data.filter((e) => {
          if (e.owner === user._id) {
            return e;
          }
        });
        console.log(filteredData);
        console.log(data);
        setImages(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [user]);

  return (
    <div className="flex justify-center mx-6">
      <div className="flex-col items-center">
        <h2 className="text-2xl transform -rotate-90 pt-28 mr-16 pr-12">Images</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images &&
          images.map((image) => {
            return (
              <div key={image._id} className="w-full max-w-sm rounded-lg">
                <Link to={`/image/${image._id}`}>
                  <img
                    src={image.imageUrl}
                    alt={image.name}
                    className="w-full h-72 object-cover rounded-lg  hover:scale-105 active:scale-65 hover:brightness-75"
                  />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
