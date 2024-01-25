import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function WebDesignCardDetails() {
  const { webDesignId } = useParams();
  const [webDesignDetail, setWebDesignDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [webdesign, setWebdesign] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5005/web-design");
      setWebDesignDetail(response.data);
    } catch (error) {
      console.error("Error fetching webDesignDetail data:", error);
    }
  };

  const handleChangeShared = async (item) => {
    const newWebdesign = {
      name: item.name,
      imageUrl: item.imageUrl,
      description: item.description,
      owner: item.owner,
      shared: !item.shared,
    };

    try {
      const response = await axios.put(
        "http://localhost:5005/web-design/shared/" + item._id,
        newWebdesign
      );
      console.log(response);
      fetchData();
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchWebDesign = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5005/web-design/${webDesignId}`
        );
        setWebDesignDetail(response.data.data); // Update state with the fetched data as an array
        setLoading(false);
        console.log(webDesignDetail);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWebDesign();
  }, [webDesignId]);

  //   useEffect(() => {
  //     if (webDesigns) {
  //       const webDesignData = webDesign.find((element) => {
  //         if (element.id == webDesignId) {
  //           return true;
  //         }
  //       });
  //       console.log(webDesignData);
  //       setWebDesignDetail(webDesignData);
  //     }
  //   }, [webDesignId]);
  if (loading) {
    return <p>Loading...</p>;
  }

  const handleDelete = async (id) => {
    try {
      //make an axios call to the back to delete the todo as well
      const { data } = await axios.delete(
        `http://localhost:5005/web-design/${id}`
      );
      console.log("design was deleted ", data);
      navigate(-1);
    } catch (err) {
      console.log("there was an error deleting", err);
    }
  };

  return (
    <div className="card" key={webDesignDetail._id}>
      <h3>{webDesignDetail.name}</h3>
      <h6>{webDesignDetail.description}</h6>
      <img src={webDesignDetail.imageUrl} />
      {/* If the function onDelete was sent, then show the button else (:) show nothing */}
      <button onClick={() => handleChangeShared(webDesignDetail)}>
        {webDesignDetail.shared ? "It is Shared" : "Share"}
      </button>
      <br />
      <button
        onClick={() => {
          handleDelete(webDesignDetail._id);
        }}
        className="py-4"
      >
        Delete
      </button>
      {/* <Link to={`/character/edit/${webDesign._id}`}>
        <button>Edit Character</button>
      </Link> */}
      <br />
      <button>
        <a href="/profile">Back to profile</a>
      </button>
    </div>
  );
}