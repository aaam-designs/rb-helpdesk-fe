import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FBInit } from "../../components";
import "./styles.css";
import { getPages } from "../../services/messenger";

const FbPages = () => {
  const [pages, setPages] = useState();
  const token = localStorage.getItem("token");
  console.log("sssstoken: sknjknjknj: ", token);

  async function getFbPages() {
    const token = localStorage.getItem("token");
    const fbPages = await getPages(token);
    console.log("fbbbbbbb", fbPages);
    setPages(fbPages);
  }

  useEffect(() => {
    getFbPages();
  }, []);

  if (pages) {
    return (
      <div className="login-container">
        <div className="form-container">
          <h4>Select a page</h4>
          <br />
          {/* {pages &&
            pages.lenth > 0 &&
            pages.map((page) => {
              return ( */}
          <Link
            style={{
              textDecoration: "none",
              color: "#fff",
              background: "#183b70",
              padding: "10px",
              borderRadius: "5px",
              margin: "10px",
            }}
            to={`/messenger?page=${pages.id}`}
          >
            {pages.name}
          </Link>
          {/* );
            })} */}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default FbPages;
